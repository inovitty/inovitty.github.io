import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import SuccessStories from "./pages/SuccessStories";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import Resource1 from "./pages/Resource1";
import Resource2 from "./pages/Resource2";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/casos-de-sucesso" element={<SuccessStories />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/materiais" element={<Resources />} />
          <Route path="/blog/planos-de-aula-ia" element={<BlogPost1 />} />
          <Route path="/blog/etica-ia-escola" element={<BlogPost2 />} />
          <Route path="/blog/ferramentas-ia-professores" element={<BlogPost3 />} />
          <Route path="/materiais/10-maneiras-ia-sala-aula" element={<Resource1 />} />
          <Route path="/materiais/checklist-maturidade-digital" element={<Resource2 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
