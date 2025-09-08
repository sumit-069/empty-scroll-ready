import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  FileText, 
  Upload, 
  Search, 
  Plus, 
  User, 
  Calendar, 
  FileImage, 
  Download,
  Eye,
  Edit,
  Shield
} from 'lucide-react';

export default function PatientRecords() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  // Mock patient data
  const patients = [
    {
      id: 'P001',
      name: 'John Martinez',
      age: 45,
      gender: 'Male',
      lastVisit: '2024-01-15',
      condition: 'Hypertension',
      files: [
        { id: 1, name: 'Blood Test Results.pdf', type: 'pdf', date: '2024-01-15', size: '2.3 MB' },
        { id: 2, name: 'ECG Report.jpg', type: 'image', date: '2024-01-10', size: '1.8 MB' },
        { id: 3, name: 'Prescription History.pdf', type: 'pdf', date: '2024-01-05', size: '0.8 MB' },
      ],
      notes: [
        { date: '2024-01-15', note: 'Blood pressure improved with medication. Continue current treatment.' },
        { date: '2024-01-10', note: 'ECG shows normal sinus rhythm. No abnormalities detected.' },
      ]
    },
    {
      id: 'P002',
      name: 'Sarah Johnson',
      age: 38,
      gender: 'Female',
      lastVisit: '2024-01-18',
      condition: 'Type 2 Diabetes',
      files: [
        { id: 4, name: 'HbA1c Test.pdf', type: 'pdf', date: '2024-01-18', size: '1.2 MB' },
        { id: 5, name: 'Retinal Screening.jpg', type: 'image', date: '2024-01-12', size: '3.1 MB' },
      ],
      notes: [
        { date: '2024-01-18', note: 'HbA1c improved to 7.2%. Patient compliant with diet and medication.' },
      ]
    },
    {
      id: 'P003',
      name: 'Robert Chen',
      age: 62,
      gender: 'Male',
      lastVisit: '2024-01-20',
      condition: 'Coronary Artery Disease',
      files: [
        { id: 6, name: 'Cardiac Catheterization.pdf', type: 'pdf', date: '2024-01-20', size: '4.5 MB' },
        { id: 7, name: 'Stress Test Results.pdf', type: 'pdf', date: '2024-01-15', size: '2.1 MB' },
      ],
      notes: [
        { date: '2024-01-20', note: 'Catheterization shows 70% stenosis in LAD. Recommend PCI procedure.' },
      ]
    }
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-4 w-4 text-red-500" />;
      case 'image':
        return <FileImage className="h-4 w-4 text-blue-500" />;
      default:
        return <FileText className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-feature py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <FileText className="h-4 w-4 mr-2" />
            Patient Records Management
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Patient Records & Files
              </h1>
              <p className="text-xl text-muted-foreground">
                Securely manage patient information, medical files, and consultation notes.
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-hero border-0 shadow-feature hover:shadow-hero">
                  <Plus className="h-4 w-4 mr-2" />
                  New Patient
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Patient</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" placeholder="45" />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender</Label>
                      <Input id="gender" placeholder="Male/Female/Other" />
                    </div>
                  </div>
                  <Button className="w-full">Create Patient Record</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8 bg-gradient-card shadow-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search patients by name, ID, or condition..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Upload Files
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Patient List */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card shadow-card border-border/50">
              <CardHeader>
                <CardTitle>Patient List ({filteredPatients.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredPatients.map((patient) => (
                    <div
                      key={patient.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                        selectedPatient?.id === patient.id
                          ? 'bg-primary/10 border-primary/30'
                          : 'bg-muted/20 border-border hover:bg-muted/30'
                      }`}
                      onClick={() => setSelectedPatient(patient)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{patient.name}</span>
                        </div>
                        <Badge variant="outline">{patient.id}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {patient.age} years • {patient.gender}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {patient.condition}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground mt-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        Last visit: {patient.lastVisit}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Patient Details */}
          <div className="lg:col-span-2">
            {selectedPatient ? (
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="files">Files</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <Card className="bg-gradient-card shadow-card border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Patient Information</span>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Full Name</Label>
                          <p className="text-lg font-semibold">{selectedPatient.name}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Patient ID</Label>
                          <p className="text-lg font-semibold">{selectedPatient.id}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Age</Label>
                          <p className="text-lg font-semibold">{selectedPatient.age} years</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Gender</Label>
                          <p className="text-lg font-semibold">{selectedPatient.gender}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Primary Condition</Label>
                          <p className="text-lg font-semibold">{selectedPatient.condition}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Last Visit</Label>
                          <p className="text-lg font-semibold">{selectedPatient.lastVisit}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="files">
                  <Card className="bg-gradient-card shadow-card border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Medical Files ({selectedPatient.files.length})</span>
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload New
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {selectedPatient.files.map((file: any) => (
                          <div key={file.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border">
                            <div className="flex items-center space-x-3">
                              {getFileIcon(file.type)}
                              <div>
                                <p className="font-medium">{file.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {file.date} • {file.size}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notes">
                  <Card className="bg-gradient-card shadow-card border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Clinical Notes</span>
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Note
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {selectedPatient.notes.map((note: any, index: number) => (
                          <div key={index} className="p-4 bg-muted/20 rounded-lg border border-border">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline">{note.date}</Badge>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                            <p className="text-sm">{note.note}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            ) : (
              <Card className="bg-gradient-card shadow-card border-border/50">
                <CardContent className="pt-6">
                  <div className="text-center py-16">
                    <User className="h-20 w-20 mx-auto text-muted-foreground/30 mb-6" />
                    <h3 className="text-xl font-semibold text-muted-foreground mb-3">
                      Select a Patient
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Choose a patient from the list to view their medical records, files, and clinical notes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-12 p-6 bg-success/10 border border-success/20 rounded-xl">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-success mt-0.5" />
            <div>
              <h4 className="font-semibold text-success mb-2">HIPAA Compliant Security</h4>
              <p className="text-sm text-muted-foreground">
                All patient data is encrypted and stored securely with role-based access controls. 
                Only authorized healthcare providers can access patient information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}