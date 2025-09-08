import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Lock, 
  Mail, 
  Stethoscope, 
  Shield, 
  Eye, 
  EyeOff,
  ArrowRight,
  Building
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '', remember: false });
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    licenseNumber: '',
    specialty: '',
    hospital: '',
    agreedToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signIn(loginData.email, loginData.password);
    
    if (error) {
      toast({
        title: "Login Failed",
        description: error.message || "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Login Successful",
        description: "Welcome back to नित्योत्कर्ष!",
      });
      navigate('/dashboard');
    }
    
    setIsLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Please ensure both passwords match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (signupData.password.length < 6) {
      toast({
        title: "Password Too Short",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    const metadata = {
      first_name: signupData.firstName,
      last_name: signupData.lastName,
      license_number: signupData.licenseNumber,
      specialty: signupData.specialty,
      hospital: signupData.hospital,
    };

    const { error } = await signUp(signupData.email, signupData.password, metadata);
    
    if (error) {
      toast({
        title: "Signup Failed",
        description: error.message || "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Account Created Successfully!",
        description: "Please check your email to verify your account before signing in.",
      });
      // Reset form
      setSignupData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        licenseNumber: '',
        specialty: '',
        hospital: '',
        agreedToTerms: false
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-feature py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/f45589f9-0bc5-486a-872d-c401e52cd58b.png" 
              alt="नित्योत्कर्ष Logo" 
              className="h-16 w-auto"
            />
          </div>
        </div>

        <Card className="bg-gradient-card shadow-hero border-border/50">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Access Your Dashboard</CardTitle>
            <p className="text-muted-foreground">
              Secure login for verified medical professionals
            </p>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Register</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="doctor@hospital.com"
                        value={loginData.email}
                        onChange={(e) => setLoginData(prev => ({...prev, email: e.target.value}))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData(prev => ({...prev, password: e.target.value}))}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-1 top-1 h-8 w-8 p-0"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="remember"
                        checked={loginData.remember}
                        onCheckedChange={(checked) => setLoginData(prev => ({...prev, remember: !!checked}))}
                      />
                      <Label htmlFor="remember" className="text-sm">Remember me</Label>
                    </div>
                    <Button variant="link" size="sm" className="text-primary p-0">
                      Forgot password?
                    </Button>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-hero border-0 shadow-feature hover:shadow-hero"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Signing In...
                      </>
                    ) : (
                      <>
                        Sign In to Dashboard
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <div className="text-center pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      New to नित्योत्कर्ष?{' '}
                      <Button variant="link" size="sm" className="p-0 text-primary">
                        Request Access
                      </Button>
                    </p>
                  </div>
                </form>
              </TabsContent>

              {/* Signup Tab */}
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={signupData.firstName}
                        onChange={(e) => setSignupData(prev => ({...prev, firstName: e.target.value}))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={signupData.lastName}
                        onChange={(e) => setSignupData(prev => ({...prev, lastName: e.target.value}))}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="signupEmail">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signupEmail"
                        type="email"
                        placeholder="doctor@hospital.com"
                        value={signupData.email}
                        onChange={(e) => setSignupData(prev => ({...prev, email: e.target.value}))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="licenseNumber">Medical License Number</Label>
                    <div className="relative">
                      <Shield className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="licenseNumber"
                        placeholder="License #12345"
                        value={signupData.licenseNumber}
                        onChange={(e) => setSignupData(prev => ({...prev, licenseNumber: e.target.value}))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="specialty">Medical Specialty</Label>
                    <Input
                      id="specialty"
                      placeholder="e.g., Cardiology, Internal Medicine"
                      value={signupData.specialty}
                      onChange={(e) => setSignupData(prev => ({...prev, specialty: e.target.value}))}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="hospital">Hospital/Institution</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="hospital"
                        placeholder="Hospital name or private practice"
                        value={signupData.hospital}
                        onChange={(e) => setSignupData(prev => ({...prev, hospital: e.target.value}))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="signupPassword">Password</Label>
                      <Input
                        id="signupPassword"
                        type="password"
                        placeholder="Create password"
                        value={signupData.password}
                        onChange={(e) => setSignupData(prev => ({...prev, password: e.target.value}))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData(prev => ({...prev, confirmPassword: e.target.value}))}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="terms"
                      checked={signupData.agreedToTerms}
                      onCheckedChange={(checked) => setSignupData(prev => ({...prev, agreedToTerms: !!checked}))}
                      className="mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree to the{' '}
                      <Button variant="link" size="sm" className="p-0 h-auto text-primary">
                        Terms of Service
                      </Button>{' '}
                      and{' '}
                      <Button variant="link" size="sm" className="p-0 h-auto text-primary">
                        Privacy Policy
                      </Button>
                      . I confirm that I am a licensed medical professional.
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-hero border-0 shadow-feature hover:shadow-hero"
                    disabled={!signupData.agreedToTerms || isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Professional Account
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-8 p-4 bg-success/10 border border-success/20 rounded-xl">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-success mt-0.5" />
            <div>
              <h4 className="font-semibold text-success mb-1">Secure & HIPAA Compliant</h4>
              <p className="text-xs text-muted-foreground">
                Your data is encrypted and protected. Only verified medical professionals 
                can access this platform. All activities are logged for security compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}