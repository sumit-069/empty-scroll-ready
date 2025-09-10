import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Stethoscope, 
  FileText, 
  BookOpen, 
  Calendar, 
  Newspaper,
  ArrowRight,
  Activity,
  Shield,
  Users
} from 'lucide-react';

export const QuickAccessSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Prognosis',
      description: 'Predict diseases from symptoms using advanced AI algorithms',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      iconColor: 'text-blue-600',
      href: '/prognosis',
    },
    {
      icon: Stethoscope,
      title: 'AI Diagnosis',
      description: 'Get treatment suggestions based on patient history and cases',
      gradient: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
      iconColor: 'text-emerald-600',
      href: '/diagnosis',
    },
    {
      icon: FileText,
      title: 'Patient Records',
      description: 'Securely manage and access comprehensive patient files',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      iconColor: 'text-purple-600',
      href: '/records',
    },
    {
      icon: BookOpen,
      title: 'Medical Tributes',
      description: 'Explore profiles of legendary medical professionals',
      gradient: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50 dark:bg-amber-950/20',
      iconColor: 'text-amber-600',
      href: '/tributes',
    },
    {
      icon: Calendar,
      title: 'Health Checkups',
      description: 'Age and gender-specific health screening recommendations',
      gradient: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50 dark:bg-rose-950/20',
      iconColor: 'text-rose-600',
      href: '/checkups',
    },
    {
      icon: Newspaper,
      title: 'Health Articles',
      description: 'Latest medical research and health awareness content',
      gradient: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/20',
      iconColor: 'text-indigo-600',
      href: '/articles',
    },
  ];

  return (
    <section className="py-32 bg-gradient-feature relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-accent rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-r from-primary/10 to-success/10 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-accent rounded-2xl text-sm font-semibold text-white shadow-glow mb-8 backdrop-blur-sm">
            <Activity className="h-5 w-5 mr-3" />
            Comprehensive Medical Suite
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
            Your Complete
            <span className="block bg-gradient-hero bg-clip-text text-transparent">Healthcare Toolkit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Streamline your entire medical workflow with our integrated AI-powered platform. 
            From diagnosis to patient management, everything you need is at your fingertips.
          </p>
        </div>

        {/* Redesigned Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-slide-up mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link key={feature.title} to={feature.href}>
                <Card 
                  className="group cursor-pointer border-border/30 hover:border-primary/30 bg-card/80 hover:bg-card backdrop-blur-sm hover:shadow-hero transition-all duration-500 hover:scale-[1.02] rounded-3xl animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader className="space-y-6 pb-6">
                    <div className="relative">
                      <div className={`inline-flex w-fit p-5 rounded-3xl ${feature.bgColor} group-hover:scale-110 transition-all duration-500 shadow-feature`}>
                        <Icon className={`h-8 w-8 ${feature.iconColor}`} />
                      </div>
                      <div className="absolute -inset-1 bg-gradient-accent rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {feature.description}
                    </p>
                    <div className="pt-2">
                      <Button 
                        variant="ghost" 
                        size="lg"
                        className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary font-semibold text-base rounded-2xl py-6"
                      >
                        Explore Feature
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <div className="text-center">
          <div className="relative bg-gradient-card rounded-[2rem] p-16 border border-border/30 shadow-hero backdrop-blur-sm overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-accent rounded-full opacity-10 blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-primary/20 to-success/20 rounded-full opacity-30 blur-3xl translate-y-32 -translate-x-32"></div>
            
            <div className="relative max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-black text-foreground">
                  Ready to Revolutionize Your Practice?
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join over 2,500 healthcare professionals who have transformed their practice with our AI platform. 
                  Experience the future of medicine today.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button asChild size="lg" className="bg-gradient-hero border-0 shadow-glow hover:shadow-hero text-lg px-12 py-8 rounded-2xl font-bold transition-all duration-500 hover:scale-105">
                  <Link to="/login">Start Free 30-Day Trial</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-lg px-12 py-8 rounded-2xl font-bold backdrop-blur-sm transition-all duration-300">
                  <Link to="/contact">Book Personal Demo</Link>
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-success" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-warning" />
                  <span>No Setup Required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};