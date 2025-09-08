import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Search, 
  Newspaper, 
  Calendar, 
  User, 
  Clock, 
  Heart, 
  Brain, 
  Activity,
  Shield,
  Eye,
  Pill
} from 'lucide-react';

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const articles = [
    {
      id: 1,
      title: 'Understanding Hypertension: The Silent Killer',
      category: 'Heart Disease',
      author: 'Dr. Sarah Martinez',
      date: '2024-01-20',
      readTime: '8 min',
      excerpt: 'High blood pressure affects millions worldwide. Learn about prevention, symptoms, and management strategies.',
      content: `Hypertension, commonly known as high blood pressure, is one of the most prevalent cardiovascular conditions affecting adults globally. Often called the "silent killer," it typically presents no obvious symptoms until serious complications arise.

## What is Hypertension?

Blood pressure is the force of blood against artery walls as the heart pumps. When this pressure remains consistently high, it can damage blood vessels and organs throughout the body.

### Normal vs. High Blood Pressure:
- Normal: Less than 120/80 mmHg
- Elevated: 120-129 systolic and less than 80 diastolic
- Stage 1 Hypertension: 130-139/80-89 mmHg
- Stage 2 Hypertension: 140/90 mmHg or higher

## Risk Factors

Several factors can increase your risk of developing hypertension:

**Modifiable Risk Factors:**
- Excessive sodium intake
- Lack of physical activity
- Obesity
- Excessive alcohol consumption
- Chronic stress
- Smoking

**Non-modifiable Risk Factors:**
- Age (risk increases with age)
- Family history
- Race/ethnicity
- Gender

## Prevention and Management

### Lifestyle Modifications:
1. **Diet**: Follow the DASH (Dietary Approaches to Stop Hypertension) diet
2. **Exercise**: Aim for at least 150 minutes of moderate aerobic activity weekly
3. **Weight Management**: Maintain a healthy BMI
4. **Limit Alcohol**: No more than 2 drinks per day for men, 1 for women
5. **Stress Management**: Practice relaxation techniques

### Medical Treatment:
When lifestyle changes aren't sufficient, medications may be prescribed:
- ACE inhibitors
- Angiotensin receptor blockers (ARBs)
- Diuretics
- Calcium channel blockers
- Beta-blockers

## Conclusion

Hypertension is a serious but manageable condition. Regular monitoring, lifestyle modifications, and appropriate medical care can effectively control blood pressure and reduce the risk of complications.`,
      featured: true
    },
    {
      id: 2,
      title: 'Type 2 Diabetes: Prevention and Early Management',
      category: 'Diabetes',
      author: 'Dr. Michael Chen',
      date: '2024-01-18',
      readTime: '10 min',
      excerpt: 'Comprehensive guide to understanding, preventing, and managing Type 2 diabetes through lifestyle and medical interventions.',
      content: 'Detailed article content about Type 2 diabetes...',
      featured: false
    },
    {
      id: 3,
      title: 'Mental Health in Healthcare Workers: Addressing Burnout',
      category: 'Mental Health',
      author: 'Dr. Lisa Johnson',
      date: '2024-01-15',
      readTime: '12 min',
      excerpt: 'Exploring the mental health challenges faced by healthcare professionals and strategies for building resilience.',
      content: 'Detailed article content about mental health...',
      featured: false
    },
    {
      id: 4,
      title: 'Cancer Screening Guidelines: What Every Doctor Should Know',
      category: 'Cancer',
      author: 'Dr. Robert Kim',
      date: '2024-01-12',
      readTime: '15 min',
      excerpt: 'Updated guidelines for cancer screening across different age groups and risk categories.',
      content: 'Detailed article content about cancer screening...',
      featured: false
    },
    {
      id: 5,
      title: 'Infectious Disease Prevention in Clinical Settings',
      category: 'Infectious Diseases',
      author: 'Dr. Amanda Rodriguez',
      date: '2024-01-10',
      readTime: '7 min',
      excerpt: 'Best practices for preventing healthcare-associated infections and protecting both patients and staff.',
      content: 'Detailed article content about infectious disease prevention...',
      featured: false
    },
    {
      id: 6,
      title: 'Advances in Minimally Invasive Surgery Techniques',
      category: 'Surgery',
      author: 'Dr. James Park',
      date: '2024-01-08',
      readTime: '11 min',
      excerpt: 'Latest developments in laparoscopic and robotic surgery technologies and their clinical applications.',
      content: 'Detailed article content about surgical advances...',
      featured: false
    }
  ];

  const categories = ['All', 'Heart Disease', 'Diabetes', 'Mental Health', 'Cancer', 'Infectious Diseases', 'Surgery'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find(article => article.featured);
  const recentArticles = articles.filter(article => !article.featured).slice(0, 5);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Heart Disease': return <Heart className="h-4 w-4" />;
      case 'Diabetes': return <Activity className="h-4 w-4" />;
      case 'Mental Health': return <Brain className="h-4 w-4" />;
      case 'Cancer': return <Shield className="h-4 w-4" />;
      case 'Infectious Diseases': return <Shield className="h-4 w-4" />;
      case 'Surgery': return <Pill className="h-4 w-4" />;
      default: return <Newspaper className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Heart Disease': return 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400';
      case 'Diabetes': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400';
      case 'Mental Health': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400';
      case 'Cancer': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400';
      case 'Infectious Diseases': return 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400';
      case 'Surgery': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-feature py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Newspaper className="h-4 w-4 mr-2" />
            Medical Knowledge Hub
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Health Articles & Research
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest medical research, health guidelines, and clinical insights 
            from leading healthcare professionals.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <Card className="mb-12 bg-gradient-hero text-white border-0 shadow-hero">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Badge className="bg-white/20 text-white border-white/30">Featured Article</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <Badge className={`${getCategoryColor(featuredArticle.category)} bg-white/20 text-white border-white/30`}>
                    {getCategoryIcon(featuredArticle.category)}
                    <span className="ml-2">{featuredArticle.category}</span>
                  </Badge>
                  <h2 className="text-3xl font-bold">{featuredArticle.title}</h2>
                  <p className="text-lg opacity-90 leading-relaxed">{featuredArticle.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm opacity-80">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredArticle.readTime} read
                    </div>
                  </div>
                  <div className="pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary" size="lg">
                          Read Full Article
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{featuredArticle.title}</DialogTitle>
                        </DialogHeader>
                        <ArticleContent article={featuredArticle} />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto bg-white/20 rounded-2xl flex items-center justify-center">
                    <Newspaper className="h-32 w-32 text-white/60" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search and Filter */}
        <Card className="mb-8 bg-gradient-card shadow-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles by title, author, or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-gradient-hero border-0" : ""}
                  >
                    {getCategoryIcon(category)}
                    <span className="ml-2">{category}</span>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.filter(article => !article.featured).map((article, index) => (
            <Card 
              key={article.id} 
              className="group cursor-pointer bg-gradient-card shadow-card border-border/50 hover:shadow-feature transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getCategoryColor(article.category)}>
                    {getCategoryIcon(article.category)}
                    <span className="ml-1">{article.category}</span>
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.date}
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full group-hover:bg-primary/5 group-hover:text-primary">
                      <Eye className="h-4 w-4 mr-2" />
                      Read Article
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{article.title}</DialogTitle>
                    </DialogHeader>
                    <ArticleContent article={article} />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">
              No articles found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filter criteria.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated with Medical Insights
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get weekly summaries of the latest medical research, clinical guidelines, 
                and health awareness articles delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email address" className="flex-1" />
                <Button className="bg-gradient-hero border-0 shadow-feature hover:shadow-hero">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Article Content Component
const ArticleContent = ({ article }: { article: any }) => {
  return (
    <div className="space-y-6 max-h-[60vh] overflow-y-auto">
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {article.author}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {article.date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {article.readTime} read
          </div>
        </div>
        <Badge className={getCategoryColor(article.category)}>
          {article.category}
        </Badge>
      </div>

      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ 
          __html: article.content.split('\n').map((line: string) => {
            if (line.startsWith('## ')) {
              return `<h2 class="text-xl font-semibold mt-6 mb-3">${line.substring(3)}</h2>`;
            } else if (line.startsWith('### ')) {
              return `<h3 class="text-lg font-medium mt-4 mb-2">${line.substring(4)}</h3>`;
            } else if (line.startsWith('**') && line.endsWith('**')) {
              return `<p class="font-semibold mb-2">${line.substring(2, line.length - 2)}</p>`;
            } else if (line.startsWith('- ')) {
              return `<li class="ml-4">${line.substring(2)}</li>`;
            } else if (line.trim() === '') {
              return '<br>';
            } else {
              return `<p class="mb-3">${line}</p>`;
            }
          }).join('')
        }} />
      </div>
    </div>
  );
};

// Helper function to get category color (duplicate for ArticleContent component)
const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Heart Disease': return 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400';
    case 'Diabetes': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400';
    case 'Mental Health': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400';
    case 'Cancer': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400';
    case 'Infectious Diseases': return 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400';
    case 'Surgery': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400';
    default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400';
  }
};