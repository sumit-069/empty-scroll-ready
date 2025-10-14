import { Heart, Shield, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">नित्योत्कर्ष</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered medical assistant platform designed exclusively for healthcare professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Quick Access</h4>
            <div className="space-y-2">
              <Link to="/prognosis" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                AI Prognosis
              </Link>
              <Link to="/diagnosis" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                AI Diagnosis
              </Link>
              <Link to="/records" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Patient Records
              </Link>
              <Link to="/tributes" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Medical Legends
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Resources</h4>
            <div className="space-y-2">
              <Link to="/checkups" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Health Checkups
              </Link>
              <Link to="/articles" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Health Articles
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-smooth">
                <Shield className="h-3 w-3 mr-2" />
                Privacy Policy
              </Link>
              <Link to="/disclaimer" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-smooth">
                <FileText className="h-3 w-3 mr-2" />
                Medical Disclaimer
              </Link>
              <Link to="/contact" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="h-3 w-3 mr-2" />
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 नित्योत्कर्ष. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center space-x-1">
                <Shield className="h-3 w-3" />
                <span>AI is a support tool, not a replacement for clinical judgment</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};