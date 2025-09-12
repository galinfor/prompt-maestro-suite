import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-neural-network.jpg';

const stats = [
  { value: '94%', label: 'Reducción de errores' },
  { value: '67%', label: 'Ahorro de tiempo' },
  { value: '185%', label: 'ROI promedio' },
  { value: '24/7', label: 'Disponibilidad' },
];

const benefits = [
  {
    icon: Zap,
    title: 'Automatización Inteligente',
    description: 'Optimizamos procesos con IA que aprende y se adapta'
  },
  {
    icon: TrendingUp,
    title: 'Crecimiento Escalable',
    description: 'Soluciones que crecen con tu negocio'
  },
  {
    icon: Shield,
    title: 'Seguridad Garantizada',
    description: 'Protocolos de seguridad de nivel empresarial'
  }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Red neuronal futurista representando automatización con IA" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-neural-purple rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-primary/30 rounded-full animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Líderes en IA Empresarial en España
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Transformamos tu
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  negocio con IA
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Automatizamos procesos empresariales con Inteligencia Artificial avanzada. 
                Más eficiencia, menos errores, resultados medibles desde el primer día.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contacto">
                  Transformar mi empresa
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/casos">Ver casos de éxito</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}