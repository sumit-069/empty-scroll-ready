import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Shield, Users } from 'lucide-react';
import heroImage from '@/assets/medical-hero.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-surface">
      {/* Floating Medical Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-pulse" style={{ animationDelay: '0s' }}>
          <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Brain className="h-8 w-8 text-primary/30" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-success/5 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Shield className="h-6 w-6 text-success/30" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <div className="w-14 h-14 bg-warning/5 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Users className="h-7 w-7 text-warning/30" />
          </div>
        </div>
      </div>

      {/* Background Image with Advanced Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Medical professionals using AI technology"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-accent rounded-2xl text-sm font-semibold text-white shadow-glow backdrop-blur-sm border border-primary/20">
              <Brain className="h-5 w-5 mr-3" />
              AI-Powered Medical Excellence
            </div>

            {/* Redesigned Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                <span className="block text-foreground mb-2">The Future of</span>
                <span className="block bg-gradient-hero bg-clip-text text-transparent mb-2">
                  Medical AI
                </span>
                <span className="block text-foreground text-4xl lg:text-5xl font-bold">is Here Today</span>
              </h1>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-4">
              <p className="text-2xl text-foreground/80 leading-relaxed font-medium">
                Transform healthcare delivery with intelligent AI assistance
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Join thousands of healthcare professionals using our advanced AI platform for accurate prognosis, 
                intelligent diagnosis support, and seamless patient management.
              </p>
            </div>

            {/* Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button size="lg" className="bg-gradient-hero border-0 shadow-hero hover:shadow-glow text-lg px-10 py-7 rounded-2xl font-semibold transition-all duration-500 hover:scale-105">
                Experience AI Prognosis
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-7 rounded-2xl border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 font-semibold backdrop-blur-sm">
                Watch Demo
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center space-y-2 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-feature transition-all duration-300">
                <div className="text-3xl font-black text-primary">50K+</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Cases Analyzed</div>
              </div>
              <div className="text-center space-y-2 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-feature transition-all duration-300">
                <div className="text-3xl font-black text-success">99.2%</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Accuracy Rate</div>
              </div>
              <div className="text-center space-y-2 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-feature transition-all duration-300">
                <div className="text-3xl font-black text-warning">2.5K+</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Active Doctors</div>
              </div>
            </div>
          </div>

          {/* Redesigned Feature Cards */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="group bg-gradient-card rounded-3xl p-8 shadow-feature border border-border/50 hover:shadow-hero transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-gradient-accent rounded-2xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Advanced AI Prognosis</h3>
                  <p className="text-muted-foreground leading-relaxed">Revolutionary machine learning algorithms predict diseases with unprecedented accuracy using comprehensive symptom analysis</p>
                  <div className="flex items-center text-primary font-semibold text-sm">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-card rounded-3xl p-8 shadow-feature border border-border/50 hover:shadow-hero transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-gradient-to-br from-success to-success/80 rounded-2xl shadow-feature group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Enterprise Security</h3>
                  <p className="text-muted-foreground leading-relaxed">Military-grade encryption with HIPAA compliance ensures complete patient data protection and regulatory adherence</p>
                  <div className="flex items-center text-primary font-semibold text-sm">
                    <span>Security details</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-card rounded-3xl p-8 shadow-feature border border-border/50 hover:shadow-hero transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-gradient-to-br from-warning to-warning/80 rounded-2xl shadow-feature group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Seamless Collaboration</h3>
                  <p className="text-muted-foreground leading-relaxed">Real-time team coordination with instant case sharing, consultation tools, and integrated communication platforms</p>
                  <div className="flex items-center text-primary font-semibold text-sm">
                    <span>Explore features</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};