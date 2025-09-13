import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Casos from "./pages/Casos";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Componentes from "./pages/Componentes";
import Plantilla from "./pages/Plantilla";
import NotFound from "./pages/NotFound";
import Privacidad from "./pages/Privacidad";
import AvisoLegal from "./pages/AvisoLegal";
import Cookies from "./pages/Cookies";
import Terminos from "./pages/Terminos";
import Automatizacion from "./pages/servicios/Automatizacion";
import ChatBots from "./pages/servicios/ChatBots";
import VoiceBots from "./pages/servicios/VoiceBots";
import Avatares from "./pages/servicios/Avatares";

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
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/casos" element={<Casos />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/admin/componentes" element={<Componentes />} />
            <Route path="/admin/plantilla" element={<Plantilla />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/servicios/automatizacion" element={<Automatizacion />} />
            <Route path="/servicios/chatbots" element={<ChatBots />} />
            <Route path="/servicios/voicebots" element={<VoiceBots />} />
            <Route path="/servicios/avatares" element={<Avatares />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
