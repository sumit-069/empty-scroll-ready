import { DiseaseSearch } from '@/components/DiseaseSearch';

const DiseaseSearchPage = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Disease Search & Information</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Search for diseases, symptoms, and medical conditions to get comprehensive information and insights.
          </p>
        </div>
        <DiseaseSearch />
      </div>
    </div>
  );
};

export default DiseaseSearchPage;