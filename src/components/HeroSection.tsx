import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Shield, Users } from 'lucide-react';
import heroImage from '@/assets/medical-hero.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Medical professionals using AI technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
              <Brain className="h-4 w-4 mr-2" />
              AI-Powered Medical Assistant
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">AI Support for</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Smarter Healthcare
              </span>
              <br />
              <span className="text-foreground">Decisions</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Empowering doctors with AI-driven prognosis, diagnosis assistance, and comprehensive patient management. 
              Enhance your clinical decision-making with cutting-edge technology.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-hero border-0 shadow-hero hover:shadow-feature text-lg px-8 py-6">
                Start AI Prognosis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5">
                Login to Dashboard
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Cases Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98.5%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Active Doctors</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-feature transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">AI Prognosis</h3>
                  <p className="text-muted-foreground">Predict possible diseases from patient symptoms with high accuracy</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-feature transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-success/10 rounded-xl">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Secure Patient Data</h3>
                  <p className="text-muted-foreground">HIPAA-compliant storage with advanced encryption and access controls</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-feature transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-warning/10 rounded-xl">
                  <Users className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Collaborative Care</h3>
                  <p className="text-muted-foreground">Share insights and collaborate with medical teams seamlessly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};