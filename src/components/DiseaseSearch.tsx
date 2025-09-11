import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';

export const DiseaseSearch = () => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5" />
          Disease Search & Information
        </CardTitle>
        <CardDescription>
          Search for diseases, symptoms, and medical conditions to get detailed information.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <iframe
          src="https://lovable.dev/projects/8d68aafc-64b0-4a29-90d1-8532eb32b58d"
          className="w-full h-[600px] border-0 rounded-b-lg"
          title="Disease Search Tool"
          allow="fullscreen"
        />
      </CardContent>
    </Card>
  );
};