import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { symptoms, age, gender, lifestyle, comorbidities } = await req.json();
    
    console.log('AI Prognosis request:', { symptoms, age, gender, lifestyle, comorbidities });

    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    if (!geminiApiKey) {
      throw new Error('GEMINI_API_KEY not configured');
    }

    const prompt = `You are a medical prognosis assistant for doctors.
Patient details:
- Symptoms: ${symptoms}
- Age: ${age}
- Gender: ${gender}
- Lifestyle: ${lifestyle}
- Comorbidities: ${comorbidities}

Based on the patient information, provide a medical prognosis analysis. Return ONLY a valid JSON object with no additional text or formatting:
{
  "possibleDiseases": ["Disease 1", "Disease 2", "Disease 3"],
  "riskLevel": "High|Medium|Low",
  "recommendedTests": ["Test 1", "Test 2", "Test 3"]
}`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 1000,
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Gemini API response:', data);

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid response from Gemini API');
    }

    const generatedText = data.candidates[0].content.parts[0].text;
    console.log('Generated text:', generatedText);

    // Parse JSON from the response
    let analysisResult;
    try {
      // Extract JSON from the response (in case there's surrounding text)
      const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysisResult = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('No JSON found in response');
      }
    } catch (parseError) {
      console.error('Failed to parse JSON response:', parseError);
      // Fallback response
      analysisResult = {
        possibleDiseases: ["Analysis could not be completed", "Please consult a healthcare professional"],
        riskLevel: "Medium",
        recommendedTests: ["Complete blood count", "Basic metabolic panel", "Consultation with physician"]
      };
    }

    return new Response(JSON.stringify(analysisResult), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-prognosis function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        possibleDiseases: ["Error occurred during analysis"],
        riskLevel: "Medium",
        recommendedTests: ["Please try again or consult a healthcare professional"]
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});