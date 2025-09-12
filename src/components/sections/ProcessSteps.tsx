import { Search, Lightbulb, Cog, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Análisis y Diagnóstico',
    description: 'Evaluamos tus procesos actuales, identificamos oportunidades de mejora y definimos objetivos específicos para la implementación de IA.',
    duration: '1-2 semanas'
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Estrategia y Diseño',
    description: 'Diseñamos una estrategia personalizada de IA, seleccionamos las tecnologías adecuadas y creamos un roadmap detallado de implementación.',
    duration: '2-3 semanas'
  },
  {
    icon: Cog,
    step: '03',
    title: 'Desarrollo e Integración',
    description: 'Desarrollamos las soluciones de IA, las integramos con tus sistemas existentes y realizamos pruebas exhaustivas de funcionamiento.',
    duration: '4-8 semanas'
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Lanzamiento y Optimización',
    description: 'Desplegamos la solución, formamos a tu equipo, monitorizamos el rendimiento y optimizamos continuamente los resultados.',
    duration: 'Ongoing'
  }
];

export function ProcessSteps() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Nuestro proceso de{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              transformación
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un enfoque metodológico y probado que garantiza el éxito de tu proyecto 
            de IA desde la concepción hasta la implementación total.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-4" />
              )}
              
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    {step.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4 p-8 rounded-2xl bg-gradient-primary/5 border border-primary/20">
            <h3 className="text-2xl font-semibold">
              ¿Preparado para comenzar tu transformación?
            </h3>
            <p className="text-muted-foreground max-w-md">
              Solicita una consultoría gratuita y descubre cómo podemos revolucionar tu negocio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}