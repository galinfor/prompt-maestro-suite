import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Mic, UserCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Zap,
    title: 'Automatización IA',
    description: 'Automatizamos procesos complejos con algoritmos inteligentes que aprenden y optimizan continuamente.',
    features: ['Reducción de errores del 94%', 'Ahorro de tiempo del 67%', 'ROI del 185%'],
    href: '/servicios/automatizacion'
  },
  {
    icon: MessageSquare,
    title: 'ChatBots Inteligentes',
    description: 'Asistentes conversacionales que entienden contexto y proporcionan respuestas precisas y naturales.',
    features: ['Soporte 24/7', 'Integración omnicanal', 'Aprendizaje continuo'],
    href: '/servicios/chatbots'
  },
  {
    icon: Mic,
    title: 'VoiceBots',
    description: 'Asistentes de voz que transforman la atención telefónica con tecnología de reconocimiento avanzado.',
    features: ['Reconocimiento natural', 'Múltiples idiomas', 'Análisis de sentimientos'],
    href: '/servicios/voicebots'
  },
  {
    icon: UserCheck,
    title: 'Avatares IA',
    description: 'Representaciones visuales inteligentes para presentaciones, formación y atención al cliente.',
    features: ['Síntesis de voz realista', 'Gestos naturales', 'Personalización completa'],
    href: '/servicios/avatares'
  }
];

export function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Servicios de{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              IA Generativa
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especializados en las tecnologías más avanzadas de Inteligencia Artificial 
            para revolucionar la forma en que tu empresa opera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button asChild variant="ghost" className="group/btn w-full justify-between">
                <Link to={service.href}>
                  Saber más
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}