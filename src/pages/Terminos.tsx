const Terminos = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Términos y Condiciones
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
            <p className="text-muted-foreground mb-4">
              Al acceder y utilizar los servicios de Neuron Lab Consulting S.L., 
              aceptas estar legalmente vinculado por estos términos y condiciones. 
              Si no estás de acuerdo con alguno de estos términos, no utilices nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Descripción de Servicios</h2>
            <p className="text-muted-foreground mb-4">
              Neuron Lab Consulting S.L. ofrece servicios de consultoría y desarrollo 
              de soluciones de Inteligencia Artificial, incluyendo pero no limitado a:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Automatización de procesos mediante IA</li>
              <li>Desarrollo de ChatBots inteligentes</li>
              <li>Implementación de VoiceBots</li>
              <li>Creación de Avatares IA</li>
              <li>Consultoría estratégica en IA</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Obligaciones del Cliente</h2>
            <p className="text-muted-foreground mb-4">El cliente se compromete a:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Proporcionar información veraz y actualizada</li>
              <li>Colaborar activamente en el desarrollo del proyecto</li>
              <li>Respetar los plazos acordados</li>
              <li>Realizar los pagos según lo establecido</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Propiedad Intelectual</h2>
            <p className="text-muted-foreground mb-4">
              Los desarrollos realizados específicamente para el cliente serán propiedad 
              del mismo una vez completado el pago íntegro. Sin embargo, Neuron Lab Consulting 
              S.L. se reserva los derechos sobre metodologías, frameworks y conocimientos 
              generales desarrollados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Confidencialidad</h2>
            <p className="text-muted-foreground mb-4">
              Nos comprometemos a mantener la confidencialidad de toda la información 
              proporcionada por el cliente durante el desarrollo de los proyectos y 
              no divulgarla a terceros sin autorización expresa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitación de Responsabilidad</h2>
            <p className="text-muted-foreground mb-4">
              Nuestra responsabilidad se limitará al valor del contrato suscrito. 
              No seremos responsables de daños indirectos, lucro cesante o daños 
              consecuenciales que puedan derivarse del uso de nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Modificaciones</h2>
            <p className="text-muted-foreground mb-4">
              Nos reservamos el derecho de modificar estos términos y condiciones 
              en cualquier momento. Las modificaciones entrarán en vigor una vez 
              publicadas en nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Ley Aplicable</h2>
            <p className="text-muted-foreground">
              Estos términos se regirán por la legislación española. Cualquier disputa 
              será resuelta por los tribunales competentes de Madrid.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terminos;