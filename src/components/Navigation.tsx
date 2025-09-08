import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Stethoscope, 
  Menu, 
  X,
  Activity,
  Brain,
  FileText,
  Heart,
  Calendar,
  BookOpen,
  Trophy,
  User,
  LogOut
} from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Use a default state in case auth context is not available
  let user = null;
  let signOut = async () => {};
  
  try {
    const authData = useAuth();
    user = authData.user;
    signOut = authData.signOut;
  } catch (error) {
    // Context not available yet - use defaults
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsOpen(false);
    } catch (error) {
      console.log('Sign out error:', error);
    }
  };

  const navigation = [
    { name: 'AI Prognosis', href: '/prognosis', icon: Brain },
    { name: 'AI Diagnosis', href: '/diagnosis', icon: Activity },
    { name: 'Patient Records', href: '/records', icon: FileText },
    { name: 'Health Checkups', href: '/checkups', icon: Heart },
    { name: 'Medical Tributes', href: '/tributes', icon: Trophy },
    { name: 'Articles', href: '/articles', icon: BookOpen },
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
              नित्योत्कर्ष
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <Button asChild variant="outline" size="sm">
                  <Link to="/dashboard">
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Link>
                </Button>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link to="/login">Sign In</Link>
              </Button>
            )}
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
            <div className="flex flex-col space-y-2 px-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="px-4 py-3 border-t border-border">
              {user ? (
                <div className="space-y-2">
                  <Button asChild className="w-full" size="sm" variant="outline">
                    <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                      <User className="h-4 w-4 mr-2" />
                      Dashboard
                    </Link>
                  </Button>
                  <Button className="w-full" size="sm" onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button asChild className="w-full" size="sm">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    Sign In
                  </Link>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};