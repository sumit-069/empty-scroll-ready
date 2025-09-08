import { ArrowLeft, AlertTriangle, Stethoscope, Brain, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-destructive/10 rounded-full mb-6">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Medical Disclaimer</h1>
            <p className="text-lg text-muted-foreground">
              Important information about AI-assisted medical decisions
            </p>
          </div>
        </div>

        <Alert className="mb-8 border-destructive/50 bg-destructive/5">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-base">
            <strong>नित्योत्कर्ष is a medical decision support tool and does NOT replace professional medical judgment.</strong>
            All AI-generated insights must be validated by qualified healthcare professionals.
          </AlertDescription>
        </Alert>

        <Card className="mb-8">
          <CardContent className="p-8 space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <Stethoscope className="h-5 w-5 text-primary mr-3" />
                <h2 className="text-2xl font-semibold text-foreground">Professional Use Only</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                नित्योत्कर्ष is designed exclusively for use by licensed healthcare professionals, including 
                doctors, nurses, and medical practitioners. It is not intended for direct patient use or self-diagnosis.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-5 w-5 text-primary mr-3" />
                <h2 className="text-2xl font-semibold text-foreground">AI Limitations</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• AI algorithms may produce false positives or miss critical conditions</li>
                <li>• Training data may not represent all patient populations or rare conditions</li>
                <li>• System performance may vary based on input quality and completeness</li>
                <li>• Regular model updates may affect consistency of recommendations</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Users className="h-5 w-5 text-primary mr-3" />
                <h2 className="text-2xl font-semibold text-foreground">Clinical Responsibility</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Healthcare professionals remain fully responsible for all clinical decisions, patient care, 
                and treatment outcomes. AI recommendations should be considered as supplementary information 
                alongside clinical expertise and established medical protocols.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <FileText className="h-5 w-5 text-primary mr-3" />
                <h2 className="text-2xl font-semibold text-foreground">Liability & Warranty</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                नित्योत्कर्ष is provided "as is" without any warranties. We disclaim all liability for 
                medical outcomes, diagnostic accuracy, or treatment decisions made using this platform. 
                Users assume full responsibility for clinical applications.
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
              <h3 className="text-lg font-semibold text-foreground mb-3">Emergency Situations</h3>
              <p className="text-muted-foreground">
                In medical emergencies, rely on immediate clinical assessment and established emergency protocols. 
                Do not delay critical interventions while waiting for AI analysis.
              </p>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-muted-foreground">
                By using नित्योत्कर्ष, you acknowledge understanding and acceptance of these limitations 
                and agree to use the platform responsibly within the scope of your professional practice.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          Last updated: January 2024
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;