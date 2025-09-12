import { Building2, GraduationCap, Heart, ShoppingBag, Truck, DollarSign } from 'lucide-react';

const sectors = [
  {
    icon: DollarSign,
    title: 'Finanzas',
    description: 'En el ámbito financiero, la inteligencia artificial se emplea para la detección de fraudes, análisis de riesgos crediticios, optimización de carteras de inversión y la mejora de la experiencia del cliente en servicios bancarios.',
    applications: ['Detección de fraudes', 'Análisis de riesgos', 'Trading algorítmico', 'KYC automatizado']
  },
  {
    icon: Heart,
    title: 'Salud',
    description: 'Revolucionamos la atención sanitaria con IA para diagnósticos precisos, gestión de pacientes, análisis de imágenes médicas y optimización de tratamientos personalizados.',
    applications: ['Diagnóstico por imagen', 'Gestión de citas', 'Historiales inteligentes', 'Telemedicina']
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    description: 'Transformamos el comercio con recomendaciones personalizadas, gestión de inventarios inteligente, análisis de comportamiento del cliente y optimización de precios dinámicos.',
    applications: ['Recomendaciones IA', 'Gestión de stock', 'Análisis de ventas', 'Chatbots de compra']
  },
  {
    icon: GraduationCap,
    title: 'Educación',
    description: 'Potenciamos el aprendizaje con tutores virtuales, evaluación automatizada, contenido adaptativo y análisis del progreso estudiantil para experiencias educativas personalizadas.',
    applications: ['Tutores virtuales', 'Evaluación automatizada', 'Contenido adaptativo', 'Análisis del progreso']
  },
  {
    icon: Truck,
    title: 'Logística',
    description: 'Optimizamos la cadena de suministro con rutas inteligentes, predicción de demanda, gestión automatizada de almacenes y seguimiento en tiempo real de envíos.',
    applications: ['Optimización de rutas', 'Predicción de demanda', 'Gestión de almacenes', 'Tracking inteligente']
  },
  {
    icon: Building2,
    title: 'Manufactura',
    description: 'Mejoramos la producción con mantenimiento predictivo, control de calidad automatizado, optimización de procesos y monitoreo inteligente de líneas de producción.',
    applications: ['Mantenimiento predictivo', 'Control de calidad', 'Optimización de procesos', 'Monitoreo IoT']
  }
];

export function SectorsGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Consultoría que se adapta a{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              diferentes sectores
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra experiencia multisectorial nos permite implementar soluciones de IA 
            específicas para las necesidades únicas de cada industria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <sector.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {sector.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {sector.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-medium text-foreground text-sm">Aplicaciones clave:</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {sector.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}