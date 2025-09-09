import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Stethoscope, FileText, History, Lightbulb, AlertTriangle, Activity, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export default function Diagnosis() {
  const [formData, setFormData] = useState({
    condition: '',
    patientHistory: '',
    currentSymptoms: '',
    previousTreatments: '',
  });
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-diagnosis', {
        body: {
          condition: formData.condition,
          patientHistory: formData.patientHistory,
          currentSymptoms: formData.currentSymptoms,
          previousTreatments: formData.previousTreatments,
        }
      });

      if (error) {
        throw error;
      }

      setResults(data);
      toast({
        title: "AI Diagnosis Complete",
        description: "Treatment recommendations generated successfully using Gemini AI.",
      });
    } catch (error) {
      console.error('Error getting AI diagnosis:', error);
      toast({
        title: "Analysis Failed",
        description: "Unable to complete AI diagnosis. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-feature py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Stethoscope className="h-4 w-4 mr-2" />
            AI-Powered Diagnosis
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Treatment Recommendations & Case Analysis
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get AI-generated treatment suggestions based on patient history, current condition, 
            and analysis of similar cases from medical literature.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="xl:col-span-1">
            <Card className="bg-gradient-card shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Patient Case Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="condition">Primary Condition/Diagnosis</Label>
                    <Input
                      id="condition"
                      placeholder="e.g., Hypertension, Type 2 Diabetes"
                      value={formData.condition}
                      onChange={(e) => setFormData(prev => ({...prev, condition: e.target.value}))}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="currentSymptoms">Current Symptoms</Label>
                    <Textarea
                      id="currentSymptoms"
                      placeholder="Patient's current presenting symptoms..."
                      value={formData.currentSymptoms}
                      onChange={(e) => setFormData(prev => ({...prev, currentSymptoms: e.target.value}))}
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="patientHistory">Medical History</Label>
                    <Textarea
                      id="patientHistory"
                      placeholder="Patient's medical history, comorbidities, allergies..."
                      value={formData.patientHistory}
                      onChange={(e) => setFormData(prev => ({...prev, patientHistory: e.target.value}))}
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="previousTreatments">Previous Treatments</Label>
                    <Textarea
                      id="previousTreatments"
                      placeholder="Medications tried, procedures, treatment responses..."
                      value={formData.previousTreatments}
                      onChange={(e) => setFormData(prev => ({...prev, previousTreatments: e.target.value}))}
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
                        Analyzing Case...
                      </>
                    ) : (
                      <>
                        <Stethoscope className="h-4 w-4 mr-2" />
                        Generate Treatment Plan
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="xl:col-span-2">
            {results ? (
              <Tabs defaultValue="treatment" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="treatment">Treatment</TabsTrigger>
                  <TabsTrigger value="medications">Medications</TabsTrigger>
                  <TabsTrigger value="followup">Follow-up</TabsTrigger>
                  <TabsTrigger value="cases">Similar Cases</TabsTrigger>
                </TabsList>

                <TabsContent value="treatment">
                  <div className="space-y-6">
                    <Card className="bg-gradient-card shadow-card border-border/50">
                      <CardHeader>
                        <CardTitle className="flex items-center text-success">
                          <Lightbulb className="h-5 w-5 mr-2" />
                          Primary Treatment Recommendations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {results.treatmentPlan.primary.map((treatment: string, index: number) => (
                            <div key={index} className="flex items-center p-3 bg-success/5 rounded-lg border border-success/20">
                              <Badge className="bg-success text-success-foreground mr-3">
                                {index + 1}
                              </Badge>
                              <span>{treatment}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-card shadow-card border-border/50">
                      <CardHeader>
                        <CardTitle className="flex items-center text-muted-foreground">
                          <History className="h-5 w-5 mr-2" />
                          Alternative Treatments
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {results.treatmentPlan.alternative.map((treatment: string, index: number) => (
                            <div key={index} className="flex items-center p-3 bg-muted/20 rounded-lg border border-border">
                              <Badge variant="outline" className="mr-3">
                                Alt {index + 1}
                              </Badge>
                              <span>{treatment}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="medications">
                  <Card className="bg-gradient-card shadow-card border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-primary" />
                        Medication Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {results.medications.map((med: any, index: number) => (
                          <div key={index} className="p-4 bg-muted/20 rounded-lg border border-border">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold">{med.name}</h4>
                              <Badge variant="outline">{med.dosage}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{med.notes}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="followup">
                  <Card className="bg-gradient-card shadow-card border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-warning" />
                        Follow-up Schedule
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {results.followUp.map((item: string, index: number) => (
                          <div key={index} className="flex items-center p-3 bg-warning/5 rounded-lg border border-warning/20">
                            <Clock className="h-4 w-4 mr-3 text-warning" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="cases">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Similar Case Studies</h3>
                    {results.similarCases.map((caseStudy: any) => (
                      <Card key={caseStudy.id} className="bg-gradient-card shadow-card border-border/50">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <span>Case #{caseStudy.id} - {caseStudy.patient}</span>
                            <Badge variant="outline">{caseStudy.duration}</Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <span className="font-medium">Condition: </span>
                              <span className="text-muted-foreground">{caseStudy.condition}</span>
                            </div>
                            <div>
                              <span className="font-medium">Treatment: </span>
                              <span className="text-muted-foreground">{caseStudy.treatment}</span>
                            </div>
                            <div>
                              <span className="font-medium">Outcome: </span>
                              <span className="text-success">{caseStudy.outcome}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            ) : (
              <Card className="bg-gradient-card shadow-card border-border/50">
                <CardContent className="pt-6">
                  <div className="text-center py-16">
                    <Stethoscope className="h-20 w-20 mx-auto text-muted-foreground/30 mb-6" />
                    <h3 className="text-xl font-semibold text-muted-foreground mb-3">
                      Ready for AI Diagnosis
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Enter patient case information to receive AI-powered treatment recommendations 
                      and analysis of similar cases.
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
              <h4 className="font-semibold text-warning mb-2">Clinical Decision Support Disclaimer</h4>
              <p className="text-sm text-muted-foreground">
                This AI diagnosis tool provides clinical decision support and should complement, not replace, 
                professional medical judgment. Always consider individual patient factors and current clinical guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}