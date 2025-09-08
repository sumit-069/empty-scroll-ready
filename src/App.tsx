import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Prognosis from "./pages/Prognosis";
import Diagnosis from "./pages/Diagnosis";
import PatientRecords from "./pages/PatientRecords";
import Tributes from "./pages/Tributes";
import Checkups from "./pages/Checkups";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/prognosis" element={<Prognosis />} />
            <Route path="/diagnosis" element={<Diagnosis />} />
            <Route path="/records" element={<PatientRecords />} />
            <Route path="/tributes" element={<Tributes />} />
            <Route path="/checkups" element={<Checkups />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/login" element={<Login />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
