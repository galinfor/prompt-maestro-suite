import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import ceoImage from '@/assets/ceo-david-placeholder.jpg';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Utilizamos las tecnologías más avanzadas para crear soluciones que marquen la diferencia.'
  },
  {
    icon: Target,
    title: 'Resultados',
    description: 'Nos enfocamos en generar valor medible y transformaciones reales para nuestros clientes.'
  },
  {
    icon: Users,
    title: 'Colaboración',
    description: 'Trabajamos como una extensión de tu equipo para garantizar el éxito del proyecto.'
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Mantenemos los más altos estándares de calidad en cada implementación.'
  }
];

const team = [
  {
    name: 'David Rodríguez',
    role: 'CEO & Fundador',
    image: ceoImage,
    description: 'Experto en IA con más de 10 años de experiencia transformando empresas. Especialista en automatización inteligente y estrategia digital.',
    expertise: ['Inteligencia Artificial', 'Automatización', 'Estrategia Digital', 'Transformación Empresarial']
  }
];

const Nosotros = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Quiénes Somos
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Expertos en{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                transformación
              </span>
              {' '}empresarial
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Somos un equipo de especialistas en Inteligencia Artificial dedicados a 
              revolucionar la forma en que las empresas operan y crecen.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Nuestra misión
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En Neuron Lab Consulting, creemos que la Inteligencia Artificial no es solo 
                una tecnología del futuro, sino una herramienta transformadora del presente. 
                Nuestra misión es democratizar el acceso a la IA empresarial, haciendo que 
                las tecnologías más avanzadas sean accesibles y prácticas para empresas de 
                todos los tamaños.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabajamos incansablemente para traducir la complejidad tecnológica en 
                soluciones simples que generen valor real y resultados medibles desde el 
                primer día de implementación.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Empresas transformadas</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">185%</div>
                <div className="text-sm text-muted-foreground">ROI promedio</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">€2.5M</div>
                <div className="text-sm text-muted-foreground">Ahorros generados</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Soporte continuo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nuestros valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Los principios que guían cada proyecto y definen nuestra forma de trabajar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nuestro equipo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profesionales apasionados por la tecnología y comprometidos con el éxito de nuestros clientes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Áreas de especialización:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={`${member.name}, ${member.role} de Neuron Lab Consulting`}
                      className="w-full max-w-md mx-auto rounded-2xl shadow-card"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ¿Por qué elegir Neuron Lab?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Experiencia comprobada</h3>
                    <p className="text-muted-foreground">Más de 50 implementaciones exitosas en diferentes sectores.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Enfoque personalizado</h3>
                    <p className="text-muted-foreground">Cada solución se diseña específicamente para tu negocio y objetivos.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Tecnología de vanguardia</h3>
                    <p className="text-muted-foreground">Utilizamos las herramientas más avanzadas del mercado.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Resultados medibles</h3>
                    <p className="text-muted-foreground">ROI promedio del 185% y resultados visibles desde el primer mes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Soporte continuo</h3>
                    <p className="text-muted-foreground">Acompañamiento 24/7 y optimización constante de las soluciones.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Transparencia total</h3>
                    <p className="text-muted-foreground">Informes detallados y comunicación constante sobre el progreso.</p>
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Preparado para conocernos mejor?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Reserva una consultoría gratuita y descubre cómo podemos transformar tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contacto">
                  Agendar reunión
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/casos">Ver nuestros casos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;