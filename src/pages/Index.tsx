import { HeroSection } from '@/components/HeroSection';
import { QuickAccessSection } from '@/components/QuickAccessSection';
import { ServiceTabs } from '@/components/ServiceTabs';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuickAccessSection />
      <ServiceTabs />
    </div>
  );
};

export default Index;
