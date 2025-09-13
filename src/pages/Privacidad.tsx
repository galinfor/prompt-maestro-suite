const Privacidad = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Política de Privacidad
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Información General</h2>
            <p className="text-muted-foreground mb-4">
              En Neuron Lab Consulting respetamos tu privacidad y nos comprometemos a proteger 
              tu información personal. Esta política describe cómo recopilamos, usamos y 
              protegemos tus datos personales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Datos que Recopilamos</h2>
            <p className="text-muted-foreground mb-4">
              Recopilamos información que nos proporcionas directamente cuando:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Te comunicas con nosotros</li>
              <li>Solicitas información sobre nuestros servicios</li>
              <li>Te suscribes a nuestro boletín</li>
              <li>Utilizas nuestros servicios</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Uso de la Información</h2>
            <p className="text-muted-foreground mb-4">
              Utilizamos tu información personal para:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Comunicarnos contigo</li>
              <li>Cumplir con nuestras obligaciones legales</li>
              <li>Proteger nuestros derechos y los de terceros</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Compartir Información</h2>
            <p className="text-muted-foreground mb-4">
              No vendemos, alquilamos ni compartimos tu información personal con terceros, 
              excepto cuando sea necesario para proporcionar nuestros servicios o cuando 
              la ley lo requiera.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Seguridad</h2>
            <p className="text-muted-foreground mb-4">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para 
              proteger tu información personal contra el acceso no autorizado, alteración, 
              divulgación o destrucción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Tus Derechos</h2>
            <p className="text-muted-foreground mb-4">
              Según el RGPD, tienes derecho a:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Acceder a tus datos personales</li>
              <li>Rectificar información inexacta</li>
              <li>Suprimir tus datos</li>
              <li>Limitar el tratamiento</li>
              <li>Portabilidad de datos</li>
              <li>Oponerte al tratamiento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contacto</h2>
            <p className="text-muted-foreground">
              Para ejercer tus derechos o si tienes preguntas sobre esta política, 
              contáctanos en: hola@neuronlab.es
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacidad;