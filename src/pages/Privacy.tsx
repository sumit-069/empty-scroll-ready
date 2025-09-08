import { ArrowLeft, Shield, Eye, Database, Bell, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Privacy = () => {
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
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Your privacy and data security are our top priorities
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8 space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <Database className="h-5 w-5 text-primary mr-3" />
                <h2 className="text-2xl font-semibold text-foreground">Data Collection</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We collect only the information necessary to provide our AI-powered medical assistance services. 
                This includes user account information, medical queries, and usage analytics to improve our services.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Eye className="h-5 w-5 text-primary mr-3" />
                <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Provide accurate AI-powered medical insights and diagnoses</li>
                <li>• Improve our machine learning algorithms and service quality</li>
                <li>• Maintain secure user accounts and authentication</li>
                <li>• Communicate important updates and security notifications</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-5 w-5 text-primary mr-3" />
                <h2 className="text-2xl font-semibold text-foreground">Data Protection</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                All medical data is encrypted at rest and in transit using industry-standard protocols. 
                We comply with HIPAA regulations and maintain strict access controls to protect patient information.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Bell className="h-5 w-5 text-primary mr-3" />
                <h2 className="text-2xl font-semibold text-foreground">Your Rights</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Access and review your personal data</li>
                <li>• Request correction of inaccurate information</li>
                <li>• Delete your account and associated data</li>
                <li>• Opt-out of non-essential communications</li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center mb-4">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
              </div>
              <p className="text-muted-foreground">
                For privacy-related questions or concerns, contact us at privacy@नित्योत्कर्ष.com
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

export default Privacy;