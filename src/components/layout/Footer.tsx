import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const footerSections = [
  {
    title: 'Servicios',
    links: [
      { name: 'Automatización IA', href: '/servicios#automatizacion' },
      { name: 'ChatBots Inteligentes', href: '/servicios#chatbots' },
      { name: 'VoiceBots', href: '/servicios#voicebots' },
      { name: 'Avatares IA', href: '/servicios#avatares' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { name: 'Nosotros', href: '/nosotros' },
      { name: 'Casos de Éxito', href: '/casos' },
      { name: 'Contacto', href: '/contacto' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Sectores',
    links: [
      { name: 'Finanzas', href: '/servicios#finanzas' },
      { name: 'Salud', href: '/servicios#salud' },
      { name: 'Retail', href: '/servicios#retail' },
      { name: 'Educación', href: '/servicios#educacion' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Política de Privacidad', href: '/privacidad' },
      { name: 'Aviso Legal', href: '/aviso-legal' },
      { name: 'Política de Cookies', href: '/cookies' },
      { name: 'Términos y Condiciones', href: '/terminos' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <Brain className="h-6 w-6 text-background" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Neuron Lab Consulting
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transformamos empresas con soluciones de Inteligencia Artificial que automatizan procesos, 
              aumentan la eficiencia y mejoran la experiencia del cliente.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hola@neuronlab.es</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+34 600 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Madrid, España</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Neuron Lab Consulting. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Desarrollado con ❤️ en España
          </p>
        </div>
      </div>
    </footer>
  );
}