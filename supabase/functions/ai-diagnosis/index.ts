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
    const { condition, patientHistory, currentSymptoms, previousTreatments } = await req.json();
    
    console.log('AI Diagnosis request:', { condition, patientHistory, currentSymptoms, previousTreatments });

    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    if (!geminiApiKey) {
      throw new Error('GEMINI_API_KEY not configured');
    }

    const prompt = `You are an AI medical assistant providing clinical decision support for healthcare professionals.

Patient Case Information:
- Primary Condition/Diagnosis: ${condition}
- Current Symptoms: ${currentSymptoms}
- Medical History: ${patientHistory}
- Previous Treatments: ${previousTreatments}

Based on the patient case information, provide comprehensive treatment recommendations. Return ONLY a valid JSON object with no additional text or formatting:

{
  "treatmentPlan": {
    "primary": ["First-line treatment 1", "First-line treatment 2", "First-line treatment 3"],
    "alternative": ["Alternative treatment 1", "Alternative treatment 2", "Alternative treatment 3"]
  },
  "medications": [
    {
      "name": "Medication name",
      "dosage": "Dosage information",
      "notes": "Important notes about monitoring or contraindications"
    }
  ],
  "followUp": [
    "Follow-up action 1",
    "Follow-up action 2",
    "Follow-up action 3"
  ],
  "similarCases": [
    {
      "id": 1,
      "patient": "Patient demographics",
      "condition": "Similar condition",
      "treatment": "Treatment used",
      "outcome": "Clinical outcome",
      "duration": "Treatment duration"
    }
  ]
}`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${geminiApiKey}`, {
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
          temperature: 0.2,
          maxOutputTokens: 2000,
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
        treatmentPlan: {
          primary: [
            "Comprehensive clinical evaluation required",
            "Standard evidence-based treatment protocols",
            "Patient-specific care planning"
          ],
          alternative: [
            "Alternative therapeutic approaches",
            "Multidisciplinary care consultation",
            "Clinical trial consideration if appropriate"
          ]
        },
        medications: [
          {
            name: "Clinical assessment needed",
            dosage: "Individualized dosing",
            notes: "Please consult current clinical guidelines and consider patient-specific factors"
          }
        ],
        followUp: [
          "Clinical reassessment in appropriate timeframe",
          "Laboratory monitoring as indicated",
          "Specialist consultation if needed"
        ],
        similarCases: [
          {
            id: 1,
            patient: "Similar case study",
            condition: "Comparable clinical presentation",
            treatment: "Evidence-based intervention",
            outcome: "Clinical improvement documented",
            duration: "Standard treatment period"
          }
        ]
      };
    }

    return new Response(JSON.stringify(analysisResult), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-diagnosis function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        treatmentPlan: {
          primary: ["Clinical evaluation required due to system error"],
          alternative: ["Please retry or consult clinical guidelines"]
        },
        medications: [
          {
            name: "System error",
            dosage: "N/A",
            notes: "Please retry the analysis or consult appropriate medical resources"
          }
        ],
        followUp: ["Retry AI analysis or proceed with standard clinical protocols"],
        similarCases: []
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});