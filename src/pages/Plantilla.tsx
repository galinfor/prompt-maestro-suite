import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Code2, 
  Palette, 
  Layout, 
  Plus,
  Edit,
  Eye,
  Settings
} from 'lucide-react';

const sectionTypes = [
  {
    id: 'hero',
    name: 'Hero Section',
    description: 'Sección principal con título, subtítulo y CTA',
    icon: Layout,
    preview: 'Título llamativo + CTA'
  },
  {
    id: 'content',
    name: 'Content Block',
    description: 'Bloque de contenido con texto e imágenes',
    icon: FileText,
    preview: 'Texto + Imagen'
  },
  {
    id: 'services',
    name: 'Services Grid',
    description: 'Grid de servicios con iconos y descripciones',
    icon: Palette,
    preview: '3-4 columnas de servicios'
  },
  {
    id: 'testimonials',
    name: 'Testimonials',
    description: 'Testimonios de clientes',
    icon: Eye,
    preview: 'Citas + Fotos'
  },
  {
    id: 'cta',
    name: 'Call to Action',
    description: 'Sección de llamada a la acción',
    icon: Plus,
    preview: 'Título + Botón'
  },
  {
    id: 'features',
    name: 'Features List',
    description: 'Lista de características o beneficios',
    icon: Settings,
    preview: 'Lista con iconos'
  }
];

const pageExamples = [
  {
    title: 'Página de Producto',
    description: 'Estructura típica para mostrar un producto o servicio',
    sections: ['hero', 'features', 'testimonials', 'cta'],
    status: 'template'
  },
  {
    title: 'Landing Page',
    description: 'Página de aterrizaje para campañas',
    sections: ['hero', 'services', 'testimonials', 'cta'],
    status: 'template'
  },
  {
    title: 'Página de Empresa',
    description: 'Página corporativa con información de la empresa',
    sections: ['hero', 'content', 'features', 'cta'],
    status: 'template'
  }
];

const Plantilla = () => {
  const [selectedSections, setSelectedSections] = useState<string[]>(['hero']);

  const addSection = (sectionId: string) => {
    setSelectedSections(prev => [...prev, sectionId]);
  };

  const removeSection = (index: number) => {
    setSelectedSections(prev => prev.filter((_, i) => i !== index));
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...selectedSections];
    if (direction === 'up' && index > 0) {
      [newSections[index], newSections[index - 1]] = [newSections[index - 1], newSections[index]];
    } else if (direction === 'down' && index < newSections.length - 1) {
      [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
    }
    setSelectedSections(newSections);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Code2 className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Page Master System
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Constructor de{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Páginas
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Crea páginas personalizadas combinando diferentes secciones. 
              Sistema modular que permite escalabilidad y mantenimiento eficiente.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Section Library */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Librería de Secciones</h2>
                <p className="text-muted-foreground mb-6">
                  Arrastra y suelta secciones para construir tu página.
                </p>
              </div>

              <div className="space-y-3">
                {sectionTypes.map((section) => (
                  <Card 
                    key={section.id} 
                    className="hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => addSection(section.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <section.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground mb-1">
                            {section.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {section.description}
                          </p>
                          <Badge variant="secondary" className="text-xs">
                            {section.preview}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Page Builder */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Constructor de Página</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Vista previa
                  </Button>
                  <Button variant="default" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Guardar
                  </Button>
                </div>
              </div>

              {/* Page Structure */}
              <div className="space-y-3">
                {selectedSections.length === 0 ? (
                  <Card className="border-dashed border-2 border-muted">
                    <CardContent className="p-12 text-center">
                      <Layout className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-medium text-foreground mb-2">
                        Página vacía
                      </h3>
                      <p className="text-muted-foreground">
                        Selecciona secciones de la librería para comenzar a construir tu página.
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  selectedSections.map((sectionId, index) => {
                    const section = sectionTypes.find(s => s.id === sectionId);
                    return (
                      <Card key={`${sectionId}-${index}`} className="border-primary/20">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                {section && <section.icon className="h-4 w-4 text-primary" />}
                              </div>
                              <div>
                                <h3 className="font-medium text-foreground">
                                  {section?.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  Posición {index + 1}
                                </p>
                              </div>
                            </div>
                            <div className="flex space-x-1">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => moveSection(index, 'up')}
                                disabled={index === 0}
                              >
                                ↑
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => moveSection(index, 'down')}
                                disabled={index === selectedSections.length - 1}
                              >
                                ↓
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => removeSection(index)}
                              >
                                ✕
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })
                )}
              </div>

              {/* Page Templates */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Plantillas Predefinidas</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {pageExamples.map((page, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{page.title}</CardTitle>
                          <Badge variant="outline">{page.status}</Badge>
                        </div>
                        <CardDescription>{page.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-2">
                            {page.sections.map((sectionId) => {
                              const section = sectionTypes.find(s => s.id === sectionId);
                              return (
                                <Badge key={sectionId} variant="secondary" className="text-xs">
                                  {section?.name}
                                </Badge>
                              );
                            })}
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full"
                            onClick={() => setSelectedSections(page.sections)}
                          >
                            Usar plantilla
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Documentación del Sistema
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Contrato del Manifiesto</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div><code className="bg-muted px-2 py-1 rounded">slug</code> - URL de la página</div>
                    <div><code className="bg-muted px-2 py-1 rounded">title</code> - Título SEO</div>
                    <div><code className="bg-muted px-2 py-1 rounded">description</code> - Meta descripción</div>
                    <div><code className="bg-muted px-2 py-1 rounded">sections[]</code> - Array de secciones</div>
                    <div><code className="bg-muted px-2 py-1 rounded">ogImage</code> - Imagen social</div>
                    <div><code className="bg-muted px-2 py-1 rounded">indexable</code> - SEO indexable</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    <span>Estructura de Secciones</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div><code className="bg-muted px-2 py-1 rounded">type</code> - Tipo de sección</div>
                    <div><code className="bg-muted px-2 py-1 rounded">props</code> - Propiedades específicas</div>
                    <div><code className="bg-muted px-2 py-1 rounded">id</code> - Identificador único</div>
                    <div><code className="bg-muted px-2 py-1 rounded">visible</code> - Visibilidad</div>
                    <div><code className="bg-muted px-2 py-1 rounded">order</code> - Orden de renderizado</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plantilla;