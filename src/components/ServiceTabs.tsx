import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FeedbackForm } from './FeedbackForm';
import { DiseaseSearch } from './DiseaseSearch';
import { MessageSquare, Search } from 'lucide-react';

export const ServiceTabs = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Healthcare Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access our comprehensive healthcare tools and share your feedback to help us serve you better.
          </p>
        </div>
        
        <Tabs defaultValue="search" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="search" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Disease Search
            </TabsTrigger>
            <TabsTrigger value="feedback" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Feedback
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="search" className="mt-0">
            <DiseaseSearch />
          </TabsContent>
          
          <TabsContent value="feedback" className="mt-0">
            <FeedbackForm />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};