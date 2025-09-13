import { Button } from '@/components/ui/button';
import { ArrowRight, Mic, Phone, Languages, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const VoiceBots = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Mic className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Asistentes de Voz IA
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                VoiceBots
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Revoluciona tu atención telefónica con asistentes de voz que comprenden 
              lenguaje natural, gestionan llamadas complejas y brindan experiencias 
              conversacionales indistinguibles de un humano.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contacto">
                  Implementar VoiceBot
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
              Transformación de la Atención Telefónica
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reconocimiento Natural</h3>
                <p className="text-muted-foreground">Comprende acentos, jerga y lenguaje coloquial</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <Languages className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Múltiples Idiomas</h3>
                <p className="text-muted-foreground">Soporte para más de 40 idiomas y dialectos</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Análisis de Sentimientos</h3>
                <p className="text-muted-foreground">Detecta emociones y adapta la respuesta</p>
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
              Capacidades Avanzadas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Procesamiento en Tiempo Real</h3>
                    <p className="text-muted-foreground">
                      Respuestas instantáneas con latencia menor a 300ms, 
                      creando conversaciones naturales y fluidas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Integración Telefónica</h3>
                    <p className="text-muted-foreground">
                      Conexión directa con sistemas PBX existentes sin necesidad 
                      de cambiar infraestructura.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Transferencias Inteligentes</h3>
                    <p className="text-muted-foreground">
                      Deriva llamadas a agentes humanos con contexto completo 
                      y resumen de la conversación.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Voces Personalizadas</h3>
                    <p className="text-muted-foreground">
                      Síntesis de voz natural con tonos, acentos y personalidades 
                      adaptadas a tu marca.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Gestión de Interrupciones</h3>
                    <p className="text-muted-foreground">
                      Maneja interrupciones naturales y cambios de tema durante 
                      la conversación sin perder contexto.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Analytics Avanzados</h3>
                    <p className="text-muted-foreground">
                      Métricas detalladas sobre calidad de llamadas, satisfacción 
                      y oportunidades de optimización.
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
              Aplicaciones por Sector
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Call Centers</h3>
                <p className="text-sm text-muted-foreground">
                  Atención de primer nivel, filtrado de llamadas y resolución 
                  automática de consultas frecuentes.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Sector Sanitario</h3>
                <p className="text-sm text-muted-foreground">
                  Programación de citas, recordatorios de medicación y 
                  triaje inicial de síntomas.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Servicios Financieros</h3>
                <p className="text-sm text-muted-foreground">
                  Consultas de saldos, gestión de pagos y asesoramiento 
                  básico sobre productos financieros.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Retail y E-commerce</h3>
                <p className="text-sm text-muted-foreground">
                  Seguimiento de pedidos, gestión de devoluciones y 
                  recomendaciones de productos.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Inmobiliarias</h3>
                <p className="text-sm text-muted-foreground">
                  Calificación de leads, programación de visitas y 
                  información sobre propiedades disponibles.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Servicios Públicos</h3>
                <p className="text-sm text-muted-foreground">
                  Información ciudadana, gestión de trámites y 
                  reportes de incidencias urbanas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-gradient-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">
              Especificaciones Técnicas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="font-semibold mb-4">Rendimiento</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Latencia &lt; 300ms</li>
                  <li>• Precisión de reconocimiento &gt; 95%</li>
                  <li>• Disponibilidad 99.9%</li>
                  <li>• Escalabilidad automática</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="font-semibold mb-4">Compatibilidad</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Integración SIP/VoIP</li>
                  <li>• Sistemas PBX tradicionales</li>
                  <li>• APIs REST y WebRTC</li>
                  <li>• Formatos de audio estándar</li>
                </ul>
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
              Transforma tu atención telefónica
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Implementamos VoiceBots personalizados que se integran perfectamente 
              con tu infraestructura actual.
            </p>
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contacto">
                Solicitar demostración
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceBots;