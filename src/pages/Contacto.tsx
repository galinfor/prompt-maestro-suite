import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarModal } from '@/components/ui/calendar-modal';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    tamaño: '',
    presupuesto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos en las próximas 24 horas.",
      });
      setIsSubmitting(false);
      setFormData({
        nombre: '',
        email: '',
        empresa: '',
        tamaño: '',
        presupuesto: '',
        mensaje: ''
      });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Mail className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Hablemos de tu proyecto
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Transforma tu empresa{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                con IA
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Agenda una consultoría gratuita y descubre cómo la Inteligencia Artificial 
              puede revolucionar tu negocio. Te respondemos en menos de 24 horas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  Solicita tu consultoría gratuita
                </h2>
                <p className="text-muted-foreground">
                  Completa el formulario y nuestro equipo se pondrá en contacto contigo 
                  para analizar tu proyecto y proponer las mejores soluciones de IA.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <Input
                      id="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => handleChange('nombre', e.target.value)}
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="tu@empresa.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                    Empresa *
                  </label>
                  <Input
                    id="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => handleChange('empresa', e.target.value)}
                    placeholder="Nombre de tu empresa"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="tamaño" className="block text-sm font-medium text-foreground mb-2">
                      Tamaño de empresa
                    </label>
                    <Select value={formData.tamaño} onValueChange={(value) => handleChange('tamaño', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tamaño" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">Startup (1-10 empleados)</SelectItem>
                        <SelectItem value="pyme">PYME (11-50 empleados)</SelectItem>
                        <SelectItem value="mediana">Mediana (51-250 empleados)</SelectItem>
                        <SelectItem value="grande">Grande (250+ empleados)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="presupuesto" className="block text-sm font-medium text-foreground mb-2">
                      Presupuesto estimado
                    </label>
                    <Select value={formData.presupuesto} onValueChange={(value) => handleChange('presupuesto', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Rango de inversión" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-15k">€5.000 - €15.000</SelectItem>
                        <SelectItem value="15k-50k">€15.000 - €50.000</SelectItem>
                        <SelectItem value="50k-100k">€50.000 - €100.000</SelectItem>
                        <SelectItem value="100k+">€100.000+</SelectItem>
                        <SelectItem value="consultar">A consultar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <Textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => handleChange('mensaje', e.target.value)}
                    placeholder="Describe qué procesos te gustaría automatizar, qué desafíos tienes actualmente, o cualquier información relevante sobre tu proyecto..."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Enviando mensaje...</>
                  ) : (
                    <>
                      Enviar solicitud
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Te responderemos en menos de 24 horas</span>
              </div>
            </div>

            {/* Contact Info & Calendar */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">hola@neuronlab.es</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Teléfono</p>
                      <p className="text-muted-foreground">+34 600 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Ubicación</p>
                      <p className="text-muted-foreground">Madrid, España</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cal.com Embed Placeholder */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Agenda una reunión directamente
                </h3>
                <div className="bg-muted/50 rounded-lg p-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    Agenda tu reunión gratuita de 30 minutos
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Selecciona un horario que te convenga y hablemos sobre tu proyecto
                  </p>
                  <CalendarModal triggerText="Abrir calendario" />
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  ¿Por qué contactarnos?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">Consultoría inicial gratuita de 30 minutos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">Análisis personalizado de tu caso de uso</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">Propuesta técnica y económica detallada</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">Sin compromiso ni costes ocultos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;