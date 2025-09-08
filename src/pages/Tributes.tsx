import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, Award, Heart, User, Calendar, MapPin, Book, Quote } from 'lucide-react';

export default function Tributes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const medicalLegends = [
    {
      id: 1,
      name: 'Alexander Fleming',
      specialty: 'Microbiology',
      country: 'Scotland',
      birth: '1881',
      death: '1955',
      image: '/api/placeholder/300/300',
      achievement: 'Discovery of Penicillin',
      biography: 'Scottish bacteriologist who discovered penicillin, revolutionizing modern medicine and saving millions of lives.',
      quote: 'One sometimes finds what one is not looking for.',
      awards: ['Nobel Prize in Physiology or Medicine (1945)', 'Knight Bachelor (1944)'],
      contributions: [
        'Discovered penicillin in 1928',
        'Pioneered antibiotic research',
        'Established foundation for modern antimicrobial therapy'
      ]
    },
    {
      id: 2,
      name: 'Marie Curie',
      specialty: 'Radiology',
      country: 'Poland/France',
      birth: '1867',
      death: '1934',
      image: '/api/placeholder/300/300',
      achievement: 'Pioneered Radioactivity Research',
      biography: 'Physicist and chemist who conducted pioneering research on radioactivity and won Nobel Prizes in both Physics and Chemistry.',
      quote: 'Science chose me.',
      awards: ['Nobel Prize in Physics (1903)', 'Nobel Prize in Chemistry (1911)'],
      contributions: [
        'First woman to win a Nobel Prize',
        'Discovered elements polonium and radium',
        'Founded the field of atomic physics'
      ]
    },
    {
      id: 3,
      name: 'Hippocrates',
      specialty: 'General Medicine',
      country: 'Greece',
      birth: '460 BC',
      death: '370 BC',
      image: '/api/placeholder/300/300',
      achievement: 'Father of Medicine',
      biography: 'Ancient Greek physician who established medicine as a profession and created the Hippocratic Oath.',
      quote: 'Healing is a matter of time, but it is sometimes also a matter of opportunity.',
      awards: ['Father of Western Medicine', 'Creator of the Hippocratic Oath'],
      contributions: [
        'Established ethical standards for physicians',
        'Separated medicine from superstition',
        'Founded the Hippocratic School of Medicine'
      ]
    },
    {
      id: 4,
      name: 'Florence Nightingale',
      specialty: 'Nursing',
      country: 'England',
      birth: '1820',
      death: '1910',
      image: '/api/placeholder/300/300',
      achievement: 'Modern Nursing Pioneer',
      biography: 'British social reformer and statistician who is considered the founder of modern nursing.',
      quote: 'I attribute my success to this: I never gave or took any excuse.',
      awards: ['Order of Merit (1907)', 'Honorary Freedom of the City of London (1908)'],
      contributions: [
        'Established modern nursing practices',
        'Improved sanitary conditions in hospitals',
        'Founded the first scientifically based nursing school'
      ]
    },
    {
      id: 5,
      name: 'Edward Jenner',
      specialty: 'Immunology',
      country: 'England',
      birth: '1749',
      death: '1823',
      image: '/api/placeholder/300/300',
      achievement: 'Father of Vaccination',
      biography: 'English physician who pioneered the concept of vaccines and created the first vaccine for smallpox.',
      quote: 'The deviation of man from the state in which he was originally placed by nature seems to have proved to him a prolific source of diseases.',
      awards: ['Fellow of the Royal Society', 'Royal Jennerian Society founder'],
      contributions: [
        'Developed the first vaccine (smallpox)',
        'Founded the science of immunology',
        'Led to the eradication of smallpox worldwide'
      ]
    },
    {
      id: 6,
      name: 'Louis Pasteur',
      specialty: 'Microbiology',
      country: 'France',
      birth: '1822',
      death: '1895',
      image: '/api/placeholder/300/300',
      achievement: 'Germ Theory Pioneer',
      biography: 'French chemist and microbiologist who proved the germ theory of disease and developed vaccines for rabies and anthrax.',
      quote: 'Fortune favors the prepared mind.',
      awards: ['Legion of Honour', 'Copley Medal', 'Albert Medal'],
      contributions: [
        'Proved the germ theory of disease',
        'Developed pasteurization process',
        'Created vaccines for rabies and anthrax'
      ]
    }
  ];

  const specialties = ['All', 'Microbiology', 'Radiology', 'General Medicine', 'Nursing', 'Immunology'];

  const filteredLegends = medicalLegends.filter(legend => {
    const matchesSearch = legend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         legend.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         legend.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || legend.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const legendOfTheMonth = medicalLegends[0]; // Alexander Fleming as featured

  return (
    <div className="min-h-screen bg-gradient-feature py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Award className="h-4 w-4 mr-2" />
            Medical Legends & Tributes
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Honoring Medical Pioneers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating the extraordinary contributions of medical professionals who transformed 
            healthcare and saved countless lives throughout history.
          </p>
        </div>

        {/* Legend of the Month */}
        <Card className="mb-12 bg-gradient-hero text-white border-0 shadow-hero">
          <CardContent className="p-8">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 mr-2" />
              <Badge className="bg-white/20 text-white border-white/30">Legend of the Month</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{legendOfTheMonth.name}</h2>
                <p className="text-xl opacity-90">{legendOfTheMonth.achievement}</p>
                <p className="opacity-80 leading-relaxed">{legendOfTheMonth.biography}</p>
                <div className="flex items-center space-x-4 text-sm opacity-80">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {legendOfTheMonth.country}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {legendOfTheMonth.birth} - {legendOfTheMonth.death}
                  </div>
                </div>
                <div className="pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary" size="lg">
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{legendOfTheMonth.name}</DialogTitle>
                      </DialogHeader>
                      <LegendDetailView legend={legendOfTheMonth} />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <User className="h-32 w-32 text-white/60" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <Card className="mb-8 bg-gradient-card shadow-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search medical legends by name, specialty, or country..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty) => (
                  <Button
                    key={specialty}
                    variant={selectedSpecialty === specialty ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={selectedSpecialty === specialty ? "bg-gradient-hero border-0" : ""}
                  >
                    {specialty}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legends Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLegends.map((legend, index) => (
            <Card 
              key={legend.id} 
              className="group cursor-pointer bg-gradient-card shadow-card border-border/50 hover:shadow-feature transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <User className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {legend.name}
                </CardTitle>
                <Badge variant="outline" className="w-fit mx-auto">
                  {legend.specialty}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {legend.biography}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-2" />
                    {legend.country}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-2" />
                    {legend.birth} - {legend.death}
                  </div>
                </div>

                <div className="pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="w-full group-hover:bg-primary/5 group-hover:text-primary">
                        <Book className="h-4 w-4 mr-2" />
                        Read Full Biography
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{legend.name}</DialogTitle>
                      </DialogHeader>
                      <LegendDetailView legend={legend} />
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLegends.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">
              No legends found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Legend Detail View Component
const LegendDetailView = ({ legend }: { legend: any }) => {
  return (
    <div className="space-y-6 max-h-[70vh] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
            <User className="h-24 w-24 text-muted-foreground" />
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Specialty:</span>
              <Badge variant="outline">{legend.specialty}</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Country:</span>
              <span>{legend.country}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Born:</span>
              <span>{legend.birth}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Died:</span>
              <span>{legend.death}</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Biography</h3>
            <p className="text-muted-foreground leading-relaxed">{legend.biography}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Quote className="h-4 w-4 mr-2" />
              Famous Quote
            </h3>
            <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
              "{legend.quote}"
            </blockquote>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Heart className="h-4 w-4 mr-2" />
              Major Contributions
            </h3>
            <ul className="space-y-2">
              {legend.contributions.map((contribution: string, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Award className="h-4 w-4 mr-2" />
              Awards & Honors
            </h3>
            <div className="space-y-2">
              {legend.awards.map((award: string, index: number) => (
                <Badge key={index} variant="outline" className="mr-2 mb-2">
                  {award}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};