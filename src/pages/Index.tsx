import { Hero } from '@/components/sections/Hero';
import { ToolsSection } from '@/components/sections/ToolsSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Hero />
      <ToolsSection />
      <ServicesGrid />
      <ProcessSteps />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para transformar tu empresa con IA?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya han revolucionado sus procesos con nuestras 
            soluciones de Inteligencia Artificial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contacto">
                Solicitar consultoría gratuita
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/casos">Ver casos de éxito</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
