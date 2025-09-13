import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Clock, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChatBots = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <MessageSquare className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Asistentes Conversacionales
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ChatBots Inteligentes
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Asistentes conversacionales que comprenden el contexto, mantienen conversaciones 
              naturales y resuelven consultas complejas con la precisión de un experto humano.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contacto">
                  Crear mi ChatBot
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
              Ventajas Competitivas
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Soporte 24/7</h3>
                <p className="text-muted-foreground">Atención ininterrumpida sin incremento de costos</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integración Omnicanal</h3>
                <p className="text-muted-foreground">Web, WhatsApp, Telegram, Messenger y más</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Aprendizaje Continuo</h3>
                <p className="text-muted-foreground">Mejora constante basada en interacciones</p>
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
              Funcionalidades Avanzadas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Comprensión Contextual</h3>
                    <p className="text-muted-foreground">
                      Entiende el contexto completo de la conversación y mantiene 
                      coherencia a lo largo de múltiples intercambios.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Integración con CRM</h3>
                    <p className="text-muted-foreground">
                      Acceso directo a información de clientes y historial de 
                      interacciones para respuestas personalizadas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Escalado Inteligente</h3>
                    <p className="text-muted-foreground">
                      Detecta automáticamente cuándo derivar una consulta a un 
                      agente humano especializado.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Análisis de Sentimientos</h3>
                    <p className="text-muted-foreground">
                      Detecta emociones del usuario y adapta el tono y enfoque 
                      de la respuesta en consecuencia.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Generación de Leads</h3>
                    <p className="text-muted-foreground">
                      Identifica y califica prospectos automáticamente durante 
                      las conversaciones naturales.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Reportes Detallados</h3>
                    <p className="text-muted-foreground">
                      Analytics completos sobre interacciones, satisfacción y 
                      oportunidades de mejora.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Casos de Uso Populares
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Atención al Cliente</h3>
                <p className="text-sm text-muted-foreground">
                  Resolución instantánea de consultas frecuentes, gestión de 
                  quejas y soporte técnico básico.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Ventas y Generación de Leads</h3>
                <p className="text-sm text-muted-foreground">
                  Calificación de prospectos, programación de citas y seguimiento 
                  automatizado de oportunidades.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Recursos Humanos</h3>
                <p className="text-sm text-muted-foreground">
                  Gestión de consultas de empleados, proceso de selección y 
                  onboarding automatizado.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">E-commerce</h3>
                <p className="text-sm text-muted-foreground">
                  Recomendaciones personalizadas, seguimiento de pedidos y 
                  gestión de devoluciones.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Educación</h3>
                <p className="text-sm text-muted-foreground">
                  Tutorías virtuales, resolución de dudas académicas y 
                  seguimiento del progreso estudiantil.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Sector Financiero</h3>
                <p className="text-sm text-muted-foreground">
                  Consultas sobre productos financieros, gestión de cuentas y 
                  asesoramiento automatizado.
                </p>
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
              Tu asistente virtual está listo
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Implementamos tu ChatBot en menos de 30 días con integración completa 
              en tus sistemas existentes.
            </p>
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contacto">
                Comenzar ahora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatBots;