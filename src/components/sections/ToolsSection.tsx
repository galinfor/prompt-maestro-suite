import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap } from 'lucide-react';

const tools = [
  { name: 'ChatGPT', category: 'Conversacional' },
  { name: 'Claude', category: 'Análisis' },
  { name: 'Midjourney', category: 'Imágenes' },
  { name: 'Runway', category: 'Video' },
  { name: 'Make', category: 'Automatización' },
  { name: 'Zapier', category: 'Integración' },
  { name: 'OpenAI API', category: 'Desarrollo' },
  { name: 'Anthropic', category: 'LLMs' },
  { name: 'Stability AI', category: 'Generativo' },
  { name: 'Eleven Labs', category: 'Audio' },
  { name: 'Synthesia', category: 'Avatares' },
  { name: 'Dola', category: 'Asistentes' },
  { name: 'Perplexity', category: 'Búsqueda' },
  { name: 'Copilot', category: 'Productividad' },
  { name: 'Gemini', category: 'Multimodal' },
  { name: 'Colab', category: 'Desarrollo' },
  { name: 'Botpress', category: 'ChatBots' },
  { name: 'Voiceflow', category: 'VoiceBots' },
  { name: 'LangChain', category: 'Framework' },
  { name: 'Pinecone', category: 'Vectores' },
];

const expertiseAreas = [
  'SEO con IA',
  'Marketing Digital',
  'E-commerce',
  'WordPress',
  'YouTube',
  'FFMPEG',
  'Procesamiento de Video',
  'Análisis de Audio',
  'Generación de Texto',
  'Computer Vision',
  'NLP',
  'Machine Learning',
];

export function ToolsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Cpu className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              Tecnología de Vanguardia
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Dominamos más de{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              50 herramientas
            </span>{' '}
            de IA
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Utilizamos la última tecnología en Inteligencia Artificial para crear 
            soluciones personalizadas que impulsan tu negocio hacia el futuro.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Herramientas de IA que utilizamos
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {tool.name}
              </Badge>
            ))}
            <Badge 
              variant="outline" 
              className="px-4 py-2 text-sm border-dashed border-primary/30 text-primary"
            >
              +25 más...
            </Badge>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Áreas de especialización técnica
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseAreas.map((area, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {area}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-primary/5 border border-primary/20">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">
                ¿Listo para revolucionar tu empresa?
              </span>
            </div>
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/contacto">
                Solicitar consultoría gratuita
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}