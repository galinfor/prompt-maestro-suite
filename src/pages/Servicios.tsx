import { Button } from '@/components/ui/button';
import { SectorsGrid } from '@/components/sections/SectorsGrid';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import aiBusinessImage from '@/assets/ai-business-team.jpg';

const Servicios = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={aiBusinessImage} 
            alt="Equipo empresarial utilizando herramientas de automatización con IA" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Soluciones Especializadas de IA
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Servicios de{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Inteligencia Artificial
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transformamos tu negocio con soluciones de IA personalizadas para cada sector. 
              Desde automatización inteligente hasta asistentes conversacionales avanzados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contacto">
                  Solicitar consultoría
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/casos">Ver implementaciones</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Sectors Grid */}
      <SectorsGrid />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Tu sector no aparece aquí?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tenemos experiencia implementando IA en más de 20 sectores diferentes. 
              Contacta con nosotros para una consultoría personalizada.
            </p>
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contacto">
                Consultoría personalizada
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicios;