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
  Activity
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
    <section className="py-20 bg-gradient-feature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Activity className="h-4 w-4 mr-2" />
            Quick Access Hub
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access all medical assistance tools, patient management features, and knowledge resources 
            through our intuitive interface designed for healthcare professionals.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link key={feature.title} to={feature.href}>
                <Card 
                  className="group cursor-pointer border-border/50 hover:border-primary/20 bg-gradient-card hover:shadow-feature transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="space-y-4">
                    <div className={`inline-flex w-fit p-4 rounded-2xl ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="w-full justify-between group-hover:bg-primary/5 group-hover:text-primary"
                    >
                      Access Feature
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-card rounded-3xl p-12 border border-border/50 shadow-card">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Ready to Transform Your Practice?
              </h3>
              <p className="text-muted-foreground">
                Join hundreds of doctors already using AI to enhance their clinical decision-making and improve patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-hero border-0 shadow-feature hover:shadow-hero">
                  <Link to="/login">Start Free Trial</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                  <Link to="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};