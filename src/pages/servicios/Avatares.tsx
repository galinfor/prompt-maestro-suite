import { Button } from '@/components/ui/button';
import { ArrowRight, UserCheck, Video, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Avatares = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <UserCheck className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Representaciones Digitales
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Avatares IA
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Crea representaciones visuales hiperrealistas que hablan, gestualizan y 
              se comunican como personas reales. Perfectos para presentaciones, 
              formación, atención al cliente y marketing personalizado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contacto">
                  Crear mi Avatar
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
              Innovación Visual e Interactiva
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Video className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Síntesis de Voz Realista</h3>
                <p className="text-muted-foreground">Voces naturales indistinguibles de humanos</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gestos Naturales</h3>
                <p className="text-muted-foreground">Movimientos y expresiones faciales realistas</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <Palette className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalización Completa</h3>
                <p className="text-muted-foreground">Apariencia, voz y personalidad únicas</p>
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
              Características Técnicas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Renderizado en Tiempo Real</h3>
                    <p className="text-muted-foreground">
                      Generación de video 4K en tiempo real con sincronización 
                      perfecta entre audio y movimientos labiales.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Múltiples Idiomas</h3>
                    <p className="text-muted-foreground">
                      Soporte para más de 50 idiomas con acentos y 
                      pronunciaciones regionales específicas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Expresiones Emocionales</h3>
                    <p className="text-muted-foreground">
                      Amplia gama de expresiones faciales que se adaptan 
                      automáticamente al contexto del mensaje.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Integración Multicanal</h3>
                    <p className="text-muted-foreground">
                      Despliegue en sitios web, aplicaciones móviles, 
                      quioscos interactivos y plataformas de video.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Personalización Avanzada</h3>
                    <p className="text-muted-foreground">
                      Desde rasgos físicos hasta vestimenta y accesorios, 
                      cada detalle es completamente personalizable.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Control Interactivo</h3>
                    <p className="text-muted-foreground">
                      Los usuarios pueden interactuar con el avatar mediante 
                      voz, texto o gestos en tiempo real.
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
              Aplicaciones Versátiles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Presentaciones Corporativas</h3>
                <p className="text-sm text-muted-foreground">
                  Portavoces virtuales para eventos, presentaciones de productos 
                  y comunicaciones internas.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Formación y Educación</h3>
                <p className="text-sm text-muted-foreground">
                  Instructores virtuales para cursos online, simulaciones 
                  y entrenamientos corporativos.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Atención al Cliente</h3>
                <p className="text-sm text-muted-foreground">
                  Recepcionistas virtuales para oficinas, hoteles y 
                  centros comerciales.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Marketing Digital</h3>
                <p className="text-sm text-muted-foreground">
                  Embajadores de marca virtuales para campañas publicitarias 
                  y redes sociales.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Sector Sanitario</h3>
                <p className="text-sm text-muted-foreground">
                  Asistentes virtuales para información médica, terapias 
                  y acompañamiento de pacientes.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-3">Entretenimiento</h3>
                <p className="text-sm text-muted-foreground">
                  Personajes virtuales para videojuegos, aplicaciones 
                  interactivas y metaverso.
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
                <h3 className="font-semibold mb-4">Calidad Visual</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Renderizado 4K/60fps</li>
                  <li>• Iluminación realista</li>
                  <li>• Texturas de alta definición</li>
                  <li>• Animaciones fluidas</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="font-semibold mb-4">Compatibilidad</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• WebGL y WebRTC</li>
                  <li>• iOS y Android nativo</li>
                  <li>• Unity y Unreal Engine</li>
                  <li>• Streaming en vivo</li>
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
              Dale vida a tu marca digital
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Crea avatares únicos que representen tu empresa y conecten 
              emocionalmente con tu audiencia.
            </p>
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contacto">
                Diseñar mi avatar
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Avatares;