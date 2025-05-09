
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import IdeaValidation from "./pages/IdeaValidation";
import IdeaFeedback from "./pages/IdeaFeedback";
import StartupDetails from "./pages/StartupDetails";
import WorkflowVisualization from "./pages/WorkflowVisualization";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import CoFounder from "./pages/CoFounder";
import Community from "./pages/Community";
import Funds from "./pages/Funds";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/idea-validation" element={<IdeaValidation />} />
          <Route path="/idea-feedback" element={<IdeaFeedback />} />
          <Route path="/startup-details" element={<StartupDetails />} />
          <Route path="/workflow-visualization" element={<WorkflowVisualization />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/co-founder" element={<DashboardLayout><CoFounder /></DashboardLayout>} />
          <Route path="/community" element={<DashboardLayout><Community /></DashboardLayout>} />
          <Route path="/funds" element={<DashboardLayout><Funds /></DashboardLayout>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
