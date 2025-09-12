import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    title: 'Automatización de Atención al Cliente',
    company: 'TechCorp S.L.',
    sector: 'Tecnología',
    challenge: 'La empresa recibía más de 1,000 consultas diarias que saturaban a su equipo de atención al cliente.',
    solution: 'Implementamos un ChatBot inteligente con procesamiento de lenguaje natural que resuelve el 87% de las consultas automáticamente.',
    results: [
      { metric: '87%', description: 'Consultas resueltas automáticamente' },
      { metric: '65%', description: 'Reducción en tiempo de respuesta' },
      { metric: '€45K', description: 'Ahorro anual en personal' },
      { metric: '94%', description: 'Satisfacción del cliente' }
    ],
    technologies: ['GPT-4', 'Botpress', 'API REST', 'CRM Integration']
  },
  {
    title: 'Optimización de Inventarios con IA',
    company: 'RetailMax',
    sector: 'Retail',
    challenge: 'Pérdidas significativas por exceso de stock y roturas de inventario que afectaban las ventas.',
    solution: 'Desarrollamos un sistema de predicción de demanda usando machine learning para optimizar niveles de stock.',
    results: [
      { metric: '42%', description: 'Reducción de exceso de stock' },
      { metric: '78%', description: 'Mejora en disponibilidad' },
      { metric: '€120K', description: 'Ahorro en costes de almacén' },
      { metric: '23%', description: 'Incremento en ventas' }
    ],
    technologies: ['Python', 'TensorFlow', 'Power BI', 'Azure ML']
  },
  {
    title: 'Análisis Predictivo Financiero',
    company: 'FinanceFirst',
    sector: 'Finanzas',
    challenge: 'Dificultades para evaluar riesgos crediticios y detectar patrones de fraude en tiempo real.',
    solution: 'Implementamos algoritmos de machine learning para análisis de riesgo y detección temprana de fraudes.',
    results: [
      { metric: '91%', description: 'Precisión en detección de fraudes' },
      { metric: '56%', description: 'Reducción de riesgo crediticio' },
      { metric: '€200K', description: 'Pérdidas evitadas primer año' },
      { metric: '0.3s', description: 'Tiempo de análisis por transacción' }
    ],
    technologies: ['scikit-learn', 'Apache Kafka', 'MongoDB', 'Real-time Analytics']
  }
];

const Casos = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <TrendingUp className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Casos de Éxito Comprobados
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Empresas que ya{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                transformaron
              </span>
              {' '}su negocio
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Descubre cómo nuestras soluciones de IA han generado resultados 
              medibles y transformaciones reales en empresas de diferentes sectores.
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {cases.map((caso, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">{caso.sector}</Badge>
                      <span className="text-sm text-muted-foreground">{caso.company}</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold">
                      {caso.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Desafío</h3>
                      <p className="text-muted-foreground">{caso.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Solución</h3>
                      <p className="text-muted-foreground">{caso.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Tecnologías utilizadas</h3>
                    <div className="flex flex-wrap gap-2">
                      {caso.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    Resultados obtenidos
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {caso.results.map((result, idx) => (
                      <div key={idx} className="p-6 rounded-xl bg-card border border-border">
                        <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                          {result.metric}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {result.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Resultados que hablan por sí solos
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Empresas transformadas</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">185%</div>
              <div className="text-muted-foreground">ROI promedio</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">67%</div>
              <div className="text-muted-foreground">Ahorro de tiempo</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">€2.5M</div>
              <div className="text-muted-foreground">Ahorros generados</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Preparado para ser nuestro próximo caso de éxito?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a las empresas que ya han transformado sus procesos y 
              multiplicado sus resultados con nuestras soluciones de IA.
            </p>
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contacto">
                Comenzar mi transformación
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Casos;