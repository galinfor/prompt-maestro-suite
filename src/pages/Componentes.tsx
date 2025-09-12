import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { 
  Zap, 
  MessageSquare, 
  Mic, 
  UserCheck, 
  Search,
  Lightbulb,
  Cog,
  Rocket,
  Code2,
  Palette,
  Layout
} from 'lucide-react';

const buttonVariants = [
  { variant: 'default', label: 'Default' },
  { variant: 'destructive', label: 'Destructive' },
  { variant: 'outline', label: 'Outline' },
  { variant: 'secondary', label: 'Secondary' },
  { variant: 'ghost', label: 'Ghost' },
  { variant: 'link', label: 'Link' },
  { variant: 'neural', label: 'Neural' },
  { variant: 'hero', label: 'Hero' },
  { variant: 'whatsapp', label: 'WhatsApp' },
  { variant: 'cta', label: 'CTA' },
] as const;

const buttonSizes = [
  { size: 'sm', label: 'Small' },
  { size: 'default', label: 'Default' },
  { size: 'lg', label: 'Large' },
  { size: 'xl', label: 'Extra Large' },
] as const;

const badgeVariants = [
  { variant: 'default', label: 'Default' },
  { variant: 'secondary', label: 'Secondary' },
  { variant: 'destructive', label: 'Destructive' },
  { variant: 'outline', label: 'Outline' },
] as const;

const icons = [
  { Icon: Zap, name: 'Zap' },
  { Icon: MessageSquare, name: 'MessageSquare' },
  { Icon: Mic, name: 'Mic' },
  { Icon: UserCheck, name: 'UserCheck' },
  { Icon: Search, name: 'Search' },
  { Icon: Lightbulb, name: 'Lightbulb' },
  { Icon: Cog, name: 'Cog' },
  { Icon: Rocket, name: 'Rocket' },
];

const Componentes = () => {
  const [selectedButtonVariant, setSelectedButtonVariant] = useState<'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'neural' | 'hero' | 'whatsapp' | 'cta'>('default');
  const [selectedButtonSize, setSelectedButtonSize] = useState<'sm' | 'default' | 'lg' | 'xl'>('default');

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Code2 className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Sistema de Diseño
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Librería de{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Componentes
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explora todos los componentes reutilizables de nuestro sistema de diseño. 
              Cada elemento está optimizado para la mejor experiencia de usuario.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="buttons" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="buttons" className="flex items-center space-x-2">
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline">Botones</span>
              </TabsTrigger>
              <TabsTrigger value="forms" className="flex items-center space-x-2">
                <Layout className="h-4 w-4" />
                <span className="hidden sm:inline">Formularios</span>
              </TabsTrigger>
              <TabsTrigger value="badges" className="flex items-center space-x-2">
                <Code2 className="h-4 w-4" />
                <span className="hidden sm:inline">Badges</span>
              </TabsTrigger>
              <TabsTrigger value="cards" className="flex items-center space-x-2">
                <Layout className="h-4 w-4" />
                <span className="hidden sm:inline">Cards</span>
              </TabsTrigger>
              <TabsTrigger value="icons" className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span className="hidden sm:inline">Iconos</span>
              </TabsTrigger>
              <TabsTrigger value="special" className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Especiales</span>
              </TabsTrigger>
            </TabsList>

            {/* Buttons Tab */}
            <TabsContent value="buttons" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Botones</CardTitle>
                  <CardDescription>
                    Diferentes variantes y tamaños de botones para todas las necesidades.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Controls */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Variante
                      </label>
                      <Select value={selectedButtonVariant} onValueChange={(value: any) => setSelectedButtonVariant(value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {buttonVariants.map((variant) => (
                            <SelectItem key={variant.variant} value={variant.variant}>
                              {variant.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tamaño
                      </label>
                      <Select value={selectedButtonSize} onValueChange={(value: any) => setSelectedButtonSize(value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {buttonSizes.map((size) => (
                            <SelectItem key={size.size} value={size.size}>
                              {size.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="p-8 rounded-lg bg-muted/30 flex items-center justify-center">
                    <Button variant={selectedButtonVariant} size={selectedButtonSize}>
                      Botón de ejemplo
                    </Button>
                  </div>

                  {/* All Variants Grid */}
                  <div>
                    <h4 className="font-medium text-foreground mb-4">Todas las variantes</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {buttonVariants.map((variant) => (
                        <div key={variant.variant} className="space-y-2">
                          <Button variant={variant.variant as any} className="w-full">
                            {variant.label}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Forms Tab */}
            <TabsContent value="forms" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Elementos de Formulario</CardTitle>
                  <CardDescription>
                    Inputs, selects y otros elementos para formularios.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Input de texto
                        </label>
                        <Input placeholder="Escribe algo aquí..." />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Select
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opcion1">Opción 1</SelectItem>
                            <SelectItem value="opcion2">Opción 2</SelectItem>
                            <SelectItem value="opcion3">Opción 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Textarea
                      </label>
                      <Textarea placeholder="Escribe un mensaje más largo aquí..." rows={4} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Badges Tab */}
            <TabsContent value="badges" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardDescription>
                    Etiquetas para categorizar y destacar información.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-4">
                    {badgeVariants.map((variant) => (
                      <Badge key={variant.variant} variant={variant.variant as any}>
                        {variant.label}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Cards Tab */}
            <TabsContent value="cards" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Básica</CardTitle>
                    <CardDescription>
                      Una card simple con título y descripción.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Contenido de ejemplo dentro de la card.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-card transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Card con Icono</CardTitle>
                        <CardDescription>Con hover effect</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Card con icono y efecto hover.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/50 bg-primary/5">
                  <CardHeader>
                    <CardTitle>Card Destacada</CardTitle>
                    <CardDescription>
                      Con estilo especial
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Card con estilo destacado para contenido importante.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Icons Tab */}
            <TabsContent value="icons" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Iconos Lucide</CardTitle>
                  <CardDescription>
                    Selección de iconos utilizados en el sistema.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                    {icons.map((icon) => (
                      <div key={icon.name} className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <icon.Icon className="h-6 w-6 text-primary" />
                        <span className="text-xs text-muted-foreground text-center">
                          {icon.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Special Components Tab */}
            <TabsContent value="special" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>WhatsApp Button</CardTitle>
                    <CardDescription>
                      Botón flotante y variante de menú para WhatsApp.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Variante de menú:</p>
                      <WhatsAppButton variant="menu" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Variante flotante:</p>
                      <p className="text-xs text-muted-foreground">
                        (Visible en la esquina inferior derecha de la página)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Gradientes</CardTitle>
                    <CardDescription>
                      Gradientes personalizados del sistema.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="h-16 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <span className="text-background font-medium">Primary Gradient</span>
                      </div>
                      <div className="h-16 rounded-lg bg-gradient-secondary flex items-center justify-center">
                        <span className="text-background font-medium">Secondary Gradient</span>
                      </div>
                      <div className="h-16 rounded-lg bg-gradient-hero flex items-center justify-center">
                        <span className="text-foreground font-medium">Hero Gradient</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Componentes;