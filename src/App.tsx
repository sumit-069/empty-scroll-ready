import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Prognosis from "./pages/Prognosis";
import Diagnosis from "./pages/Diagnosis";
import PatientRecords from "./pages/PatientRecords";
import Tributes from "./pages/Tributes";
import Checkups from "./pages/Checkups";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import DiseaseSearchPage from "./pages/DiseaseSearch";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/prognosis" element={<ProtectedRoute><Prognosis /></ProtectedRoute>} />
              <Route path="/diagnosis" element={<ProtectedRoute><Diagnosis /></ProtectedRoute>} />
              <Route path="/disease-search" element={<ProtectedRoute><DiseaseSearchPage /></ProtectedRoute>} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/records" element={<PatientRecords />} />
              <Route path="/tributes" element={<Tributes />} />
              <Route path="/checkups" element={<Checkups />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
