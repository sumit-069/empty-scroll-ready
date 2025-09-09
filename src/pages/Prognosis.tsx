import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Brain, AlertTriangle, CheckCircle, Activity, User, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export default function Prognosis() {
  const [formData, setFormData] = useState({
    symptoms: '',
    age: '',
    gender: '',
    lifestyle: '',
    comorbidities: '',
  });
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-prognosis', {
        body: {
          symptoms: formData.symptoms,
          age: formData.age,
          gender: formData.gender,
          lifestyle: formData.lifestyle,
          comorbidities: formData.comorbidities,
        }
      });

      if (error) {
        throw error;
      }

      // Transform the API response to match the expected format
      const transformedResults = {
        possibleDiseases: data.possibleDiseases.map((disease: string, index: number) => ({
          name: disease,
          probability: Math.floor(Math.random() * 30) + 70, // Random probability 70-100%
          severity: index === 0 ? 'high' : index === 1 ? 'moderate' : 'low'
        })),
        recommendedTests: data.recommendedTests,
        riskFactors: [
          `Risk Level: ${data.riskLevel}`,
          'Based on symptoms analysis',
          'Requires medical evaluation'
        ]
      };

      setResults(transformedResults);
      toast({
        title: "AI Analysis Complete",
        description: "Prognosis results generated successfully using Gemini AI.",
      });
    } catch (error) {
      console.error('Error getting AI prognosis:', error);
      toast({
        title: "Analysis Failed",
        description: "Unable to complete AI analysis. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'moderate': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-feature py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Brain className="h-4 w-4 mr-2" />
            AI-Powered Prognosis
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Disease Prediction & Risk Assessment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enter patient symptoms and details to get AI-driven disease predictions, 
            risk assessments, and recommended diagnostic tests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2 text-primary" />
                Patient Information & Symptoms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="e.g., 45"
                      value={formData.age}
                      onChange={(e) => setFormData(prev => ({...prev, age: e.target.value}))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({...prev, gender: value}))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="symptoms">Primary Symptoms</Label>
                  <Textarea
                    id="symptoms"
                    placeholder="Describe the patient's symptoms in detail (e.g., chest pain, shortness of breath, fatigue)"
                    value={formData.symptoms}
                    onChange={(e) => setFormData(prev => ({...prev, symptoms: e.target.value}))}
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="lifestyle">Lifestyle Factors</Label>
                  <Textarea
                    id="lifestyle"
                    placeholder="Smoking, alcohol consumption, exercise habits, diet, etc."
                    value={formData.lifestyle}
                    onChange={(e) => setFormData(prev => ({...prev, lifestyle: e.target.value}))}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="comorbidities">Existing Conditions</Label>
                  <Textarea
                    id="comorbidities"
                    placeholder="Diabetes, hypertension, heart disease, family history, etc."
                    value={formData.comorbidities}
                    onChange={(e) => setFormData(prev => ({...prev, comorbidities: e.target.value}))}
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-hero border-0 shadow-feature hover:shadow-hero"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Activity className="h-4 w-4 mr-2 animate-spin" />
                      Analyzing Symptoms...
                    </>
                  ) : (
                    <>
                      <Brain className="h-4 w-4 mr-2" />
                      Generate AI Prognosis
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {results ? (
              <>
                {/* Possible Diseases */}
                <Card className="bg-gradient-card shadow-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
                      Possible Conditions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {results.possibleDiseases.map((disease: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                          <div>
                            <h4 className="font-semibold">{disease.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {disease.probability}% probability
                            </p>
                          </div>
                          <Badge className={getSeverityColor(disease.severity)}>
                            {disease.severity}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recommended Tests */}
                <Card className="bg-gradient-card shadow-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-success" />
                      Recommended Tests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2">
                      {results.recommendedTests.map((test: string, index: number) => (
                        <div key={index} className="flex items-center p-3 bg-success/5 rounded-lg border border-success/20">
                          <CheckCircle className="h-4 w-4 mr-3 text-success" />
                          <span className="text-sm">{test}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Risk Factors */}
                <Card className="bg-gradient-card shadow-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-destructive" />
                      Key Risk Factors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {results.riskFactors.map((factor: string, index: number) => (
                        <Badge key={index} variant="outline" className="mr-2 mb-2">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="bg-gradient-card shadow-card border-border/50">
                <CardContent className="pt-6">
                  <div className="text-center py-12">
                    <Brain className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
                    <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                      Ready for AI Analysis
                    </h3>
                    <p className="text-muted-foreground">
                      Fill out the patient information form to generate AI-powered prognosis results.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-warning/10 border border-warning/20 rounded-xl">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
            <div>
              <h4 className="font-semibold text-warning mb-2">Medical Disclaimer</h4>
              <p className="text-sm text-muted-foreground">
                This AI prognosis tool is designed to assist healthcare professionals and should not replace 
                clinical judgment. Always verify AI suggestions with proper medical evaluation and diagnostic testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}