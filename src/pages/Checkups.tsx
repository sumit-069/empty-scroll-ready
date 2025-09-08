import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calendar, 
  User, 
  Heart, 
  Activity, 
  Eye, 
  Brain, 
  Stethoscope,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

export default function Checkups() {
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [recommendations, setRecommendations] = useState<any>(null);

  const generateRecommendations = () => {
    if (!selectedAge || !selectedGender) return;

    const ageNum = parseInt(selectedAge);
    let recs: any = {
      routine: [],
      screenings: [],
      vaccinations: [],
      lifestyle: [],
      frequency: 'annually'
    };

    // Base recommendations for all adults
    recs.routine = [
      'Blood Pressure Check',
      'Cholesterol Screening',
      'BMI and Weight Assessment',
      'Blood Glucose Test',
      'Complete Blood Count (CBC)'
    ];

    recs.lifestyle = [
      'Maintain healthy diet with fruits and vegetables',
      'Regular physical activity (150 min/week)',
      'Adequate sleep (7-9 hours)',
      'Limit alcohol consumption',
      'No smoking/tobacco use'
    ];

    // Age-specific recommendations
    if (ageNum >= 18 && ageNum < 30) {
      recs.screenings.push('Skin cancer screening');
      recs.vaccinations.push('HPV vaccine (if not previously completed)', 'Annual flu shot');
      if (selectedGender === 'female') {
        recs.screenings.push('Pap smear (every 3 years)');
      }
    } else if (ageNum >= 30 && ageNum < 40) {
      recs.screenings.push('Thyroid function test', 'Skin cancer screening');
      recs.vaccinations.push('Tdap booster (every 10 years)', 'Annual flu shot');
      if (selectedGender === 'female') {
        recs.screenings.push('Pap smear (every 3 years)', 'Breast self-examination');
      }
    } else if (ageNum >= 40 && ageNum < 50) {
      recs.screenings.push('Eye exam', 'Thyroid function', 'Baseline ECG');
      recs.vaccinations.push('Annual flu shot', 'Tdap booster');
      if (selectedGender === 'female') {
        recs.screenings.push('Mammogram (annually)', 'Pap smear (every 3 years)');
      }
      if (selectedGender === 'male') {
        recs.screenings.push('Prostate screening discussion');
      }
    } else if (ageNum >= 50 && ageNum < 65) {
      recs.screenings.push('Colonoscopy (every 10 years)', 'Mammogram (annual)', 'Bone density scan');
      recs.vaccinations.push('Annual flu shot', 'Shingles vaccine');
      if (selectedGender === 'male') {
        recs.screenings.push('Prostate-specific antigen (PSA) test');
      }
    } else if (ageNum >= 65) {
      recs.screenings.push('Colonoscopy', 'Bone density scan', 'Hearing test', 'Vision screening');
      recs.vaccinations.push('Pneumococcal vaccine', 'Annual flu shot', 'COVID-19 booster');
      recs.frequency = 'every 6 months';
    }

    setRecommendations(recs);
  };

  const ageRanges = [
    '18-25', '26-30', '31-35', '36-40', '41-45', '46-50', 
    '51-55', '56-60', '61-65', '66-70', '71-75', '76+'
  ];

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case 'annually': return 'text-primary';
      case 'every 6 months': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-feature py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Calendar className="h-4 w-4 mr-2" />
            Personalized Health Checkups
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Recommended Health Screenings
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized health checkup recommendations based on age, gender, and current medical guidelines 
            for preventive care and early disease detection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card shadow-card border-border/50 sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-primary" />
                  Patient Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Age Range</label>
                  <Select onValueChange={setSelectedAge}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      {ageRanges.map(range => (
                        <SelectItem key={range} value={range.split('-')[0]}>
                          {range} years
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Gender</label>
                  <Select onValueChange={setSelectedGender}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other/Non-binary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={generateRecommendations}
                  className="w-full bg-gradient-hero border-0 shadow-feature hover:shadow-hero"
                  disabled={!selectedAge || !selectedGender}
                >
                  <Activity className="h-4 w-4 mr-2" />
                  Generate Recommendations
                </Button>

                {recommendations && (
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Clock className={`h-4 w-4 ${getFrequencyColor(recommendations.frequency)}`} />
                      <span className="text-sm font-medium">
                        Checkup Frequency: <span className={getFrequencyColor(recommendations.frequency)}>
                          {recommendations.frequency}
                        </span>
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <div className="lg:col-span-2 space-y-6">
            {recommendations ? (
              <>
                {/* Routine Tests */}
                <Card className="bg-gradient-card shadow-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Stethoscope className="h-5 w-5 mr-2" />
                      Routine Health Tests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {recommendations.routine.map((test: string, index: number) => (
                        <div key={index} className="flex items-center p-3 bg-primary/5 rounded-lg border border-primary/20">
                          <CheckCircle className="h-4 w-4 mr-3 text-primary" />
                          <span className="text-sm">{test}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Screenings */}
                {recommendations.screenings.length > 0 && (
                  <Card className="bg-gradient-card shadow-card border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-success">
                        <Eye className="h-5 w-5 mr-2" />
                        Specialized Screenings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {recommendations.screenings.map((screening: string, index: number) => (
                          <div key={index} className="flex items-center p-3 bg-success/5 rounded-lg border border-success/20">
                            <Eye className="h-4 w-4 mr-3 text-success" />
                            <span className="text-sm">{screening}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Vaccinations */}
                {recommendations.vaccinations.length > 0 && (
                  <Card className="bg-gradient-card shadow-card border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-warning">
                        <Heart className="h-5 w-5 mr-2" />
                        Recommended Vaccinations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {recommendations.vaccinations.map((vaccination: string, index: number) => (
                          <div key={index} className="flex items-center p-3 bg-warning/5 rounded-lg border border-warning/20">
                            <Heart className="h-4 w-4 mr-3 text-warning" />
                            <span className="text-sm">{vaccination}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Lifestyle */}
                <Card className="bg-gradient-card shadow-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-muted-foreground">
                      <Brain className="h-5 w-5 mr-2" />
                      Lifestyle Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recommendations.lifestyle.map((lifestyle: string, index: number) => (
                        <div key={index} className="flex items-start p-3 bg-muted/10 rounded-lg border border-border">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{lifestyle}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Next Steps */}
                <Card className="bg-gradient-hero text-white border-0 shadow-hero">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Next Steps</h3>
                    <div className="space-y-2 text-sm opacity-90">
                      <p>• Schedule appointments with your healthcare provider</p>
                      <p>• Discuss any family history of medical conditions</p>
                      <p>• Keep track of your vaccination records</p>
                      <p>• Monitor any changes in your health status</p>
                    </div>
                    <Button variant="secondary" className="mt-4">
                      Schedule Appointment
                    </Button>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="bg-gradient-card shadow-card border-border/50">
                <CardContent className="pt-6">
                  <div className="text-center py-16">
                    <Calendar className="h-20 w-20 mx-auto text-muted-foreground/30 mb-6" />
                    <h3 className="text-xl font-semibold text-muted-foreground mb-3">
                      Personalized Health Recommendations
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Select your age range and gender to receive customized health checkup 
                      recommendations based on current medical guidelines.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Educational Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <CheckCircle className="h-5 w-5 mr-2" />
                Early Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Regular health screenings can detect diseases in their early stages when they're 
                most treatable and outcomes are generally better.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-success">
                <Heart className="h-5 w-5 mr-2" />
                Prevention Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Preventive care helps identify risk factors and implement lifestyle changes 
                before health problems develop.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-warning">
                <Brain className="h-5 w-5 mr-2" />
                Evidence-Based
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Recommendations are based on current medical guidelines from professional 
                organizations and evidence-based research.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-warning/10 border border-warning/20 rounded-xl">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
            <div>
              <h4 className="font-semibold text-warning mb-2">Medical Disclaimer</h4>
              <p className="text-sm text-muted-foreground">
                These recommendations are general guidelines and should not replace personalized medical advice. 
                Always consult with your healthcare provider to discuss your individual health needs and risk factors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}