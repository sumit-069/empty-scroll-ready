import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Prognosis', href: '/prognosis' },
    { name: 'Diagnosis', href: '/diagnosis' },
    { name: 'Patient Records', href: '/records' },
    { name: 'Tributes', href: '/tributes' },
    { name: 'Checkups', href: '/checkups' },
    { name: 'Articles', href: '/articles' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-hero rounded-xl shadow-feature group-hover:shadow-hero transition-all duration-300">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div className="font-bold text-xl text-foreground">
              MediAssist <span className="text-primary font-normal">AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-smooth"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-gradient-hero border-0 shadow-feature hover:shadow-hero">
              Dashboard
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-card/50 rounded-b-xl">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="justify-center">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="bg-gradient-hero border-0 justify-center">
                  Dashboard
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};