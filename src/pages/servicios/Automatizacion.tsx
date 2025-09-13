import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, CheckCircle, Users, BarChart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Automatizacion = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Automatización Inteligente
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Automatización IA
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transformamos tus procesos manuales en sistemas inteligentes que aprenden, 
              optimizan y ejecutan tareas de forma autónoma, reduciendo errores y 
              aumentando la productividad exponencialmente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contacto">
                  Solicitar análisis gratuito
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Beneficios Comprobados
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">94%</h3>
                <p className="text-muted-foreground">Reducción de errores humanos</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">67%</h3>
                <p className="text-muted-foreground">Ahorro de tiempo en procesos</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">185%</h3>
                <p className="text-muted-foreground">Retorno de inversión promedio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Capacidades de Automatización
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Procesamiento de Documentos</h3>
                    <p className="text-muted-foreground">
                      Extracción y clasificación automática de información de facturas, 
                      contratos y documentos complejos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Gestión de Inventario</h3>
                    <p className="text-muted-foreground">
                      Optimización automática de stock basada en patrones de demanda 
                      y predicciones de mercado.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Atención al Cliente</h3>
                    <p className="text-muted-foreground">
                      Respuestas automáticas inteligentes que escalan solo los casos 
                      que requieren intervención humana.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Análisis Financiero</h3>
                    <p className="text-muted-foreground">
                      Generación automática de reportes financieros y detección 
                      de anomalías en tiempo real.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Marketing Personalizado</h3>
                    <p className="text-muted-foreground">
                      Segmentación automática de audiencias y personalización 
                      de campañas en tiempo real.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Control de Calidad</h3>
                    <p className="text-muted-foreground">
                      Inspección visual automatizada y detección de defectos 
                      mediante visión artificial avanzada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para automatizar tu empresa?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nuestros expertos analizarán tus procesos y diseñarán una solución 
              de automatización personalizada para tu negocio.
            </p>
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contacto">
                Solicitar consultoría gratuita
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automatizacion;