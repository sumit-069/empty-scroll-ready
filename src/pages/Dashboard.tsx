import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Activity, 
  Users, 
  FileText, 
  BarChart3, 
  Calendar,
  Stethoscope,
  LogOut,
  User,
  Settings,
  Bell
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Dashboard() {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out.",
    });
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-feature flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const quickStats = [
    {
      title: "Total Patients",
      value: "248",
      icon: Users,
      change: "+12%",
      trend: "up"
    },
    {
      title: "Consultations Today",
      value: "18",
      icon: Activity,
      change: "+5%",
      trend: "up"
    },
    {
      title: "Reports Generated",
      value: "64",
      icon: FileText,
      change: "+8%",
      trend: "up"
    },
    {
      title: "Success Rate",
      value: "94.2%",
      icon: BarChart3,
      change: "+2.1%",
      trend: "up"
    }
  ];

  const recentActivities = [
    {
      patient: "Sarah Johnson",
      action: "AI Diagnosis completed",
      time: "10 minutes ago",
      type: "diagnosis"
    },
    {
      patient: "Michael Chen",
      action: "Medical report uploaded",
      time: "25 minutes ago",
      type: "upload"
    },
    {
      patient: "Emma Davis",
      action: "Prognosis analysis requested",
      time: "1 hour ago",
      type: "prognosis"
    },
    {
      patient: "David Wilson",
      action: "Consultation scheduled",
      time: "2 hours ago",
      type: "appointment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-feature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, Dr. {user.email?.split('@')[0]}
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your patients today.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-gradient-card shadow-card border-border/50 hover:shadow-feature transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className={`text-xs ${stat.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="h-5 w-5 mr-2 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                className="w-full justify-start bg-gradient-hero border-0 shadow-feature hover:shadow-hero"
                onClick={() => navigate('/diagnosis')}
              >
                <Activity className="h-4 w-4 mr-2" />
                New AI Diagnosis
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate('/prognosis')}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                AI Prognosis Analysis
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate('/records')}
              >
                <FileText className="h-4 w-4 mr-2" />
                Patient Records
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate('/checkups')}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Checkup
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2 bg-gradient-card shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                    <div className="p-2 rounded-full bg-primary/10">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {activity.patient}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.action}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Profile Section */}
        <Card className="mt-8 bg-gradient-card shadow-card border-border/50">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p className="text-foreground">{user.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">User ID</label>
                <p className="text-foreground font-mono text-sm">{user.id}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Account Created</label>
                <p className="text-foreground">
                  {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Last Sign In</label>
                <p className="text-foreground">
                  {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : 'Never'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}