import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { DataProvider } from "@/contexts/DataContext";

// Pages
import Landing from "./pages/Landing";
import WorkerLogin from "./pages/WorkerLogin";
import WorkerSignup from "./pages/WorkerSignup";
import AuthoriserLogin from "./pages/AuthoriserLogin";
import AuthoriserSignup from "./pages/AuthoriserSignup";
import WorkerDashboard from "./pages/WorkerDashboard";
import AuthoriserDashboard from "./pages/AuthoriserDashboard";
import PostJob from "./pages/PostJob";
import MyApplications from "./pages/MyApplications";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <DataProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/worker-login" element={<WorkerLogin />} />
              <Route path="/worker-signup" element={<WorkerSignup />} />
              <Route path="/authoriser-login" element={<AuthoriserLogin />} />
              <Route path="/authoriser-signup" element={<AuthoriserSignup />} />
              <Route path="/worker-dashboard" element={<WorkerDashboard />} />
              <Route path="/authoriser-dashboard" element={<AuthoriserDashboard />} />
              <Route path="/post-job" element={<PostJob />} />
              <Route path="/my-applications" element={<MyApplications />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </DataProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
