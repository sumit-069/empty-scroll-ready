import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Support</h1>
            <p className="text-lg text-muted-foreground">
              Get help from our medical AI specialists and technical support team
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email Support</p>
                      <p className="text-sm text-muted-foreground">support@नित्योत्कर्ष.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Office</p>
                      <p className="text-sm text-muted-foreground">
                        Medical AI District<br />
                        Healthcare Innovation Hub<br />
                        New Delhi, India
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Support Categories</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="font-medium text-foreground">Technical Issues</p>
                    <p className="text-muted-foreground">Login, bugs, performance</p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="font-medium text-foreground">Medical AI Queries</p>
                    <p className="text-muted-foreground">Algorithm questions, accuracy</p>
                  </div>
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="font-medium text-foreground">Account & Billing</p>
                    <p className="text-muted-foreground">Subscriptions, payments</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Dr. John Smith" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john.smith@hospital.com" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Medical Specialty</Label>
                      <Input id="specialty" placeholder="e.g., Cardiology, Oncology" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - General inquiry</SelectItem>
                          <SelectItem value="medium">Medium - Feature request</SelectItem>
                          <SelectItem value="high">High - Technical issue</SelectItem>
                          <SelectItem value="urgent">Urgent - System down</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief description of your inquiry" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide detailed information about your inquiry..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>Sending Message...</>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;