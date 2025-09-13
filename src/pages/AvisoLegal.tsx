const AvisoLegal = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Aviso Legal
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Datos Identificativos</h2>
            <p className="text-muted-foreground mb-4">
              Denominación social: Neuron Lab Consulting S.L.<br />
              CIF: B12345678<br />
              Domicilio: Madrid, España<br />
              Email: hola@neuronlab.es<br />
              Teléfono: +34 600 123 456
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Objeto</h2>
            <p className="text-muted-foreground mb-4">
              El presente aviso legal regula el uso del sitio web neuronlab.es, 
              propiedad de Neuron Lab Consulting S.L. La utilización del sitio web 
              implica la aceptación plena de las condiciones establecidas en este aviso legal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Condiciones de Uso</h2>
            <p className="text-muted-foreground mb-4">
              El usuario se compromete a utilizar el sitio web de forma diligente, 
              correcta y lícita, conforme a la legislación vigente, la moral, las buenas 
              costumbres y el orden público.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Propiedad Intelectual</h2>
            <p className="text-muted-foreground mb-4">
              Todos los contenidos del sitio web, incluyendo textos, fotografías, 
              gráficos, imágenes, iconos, tecnología, software, así como su diseño 
              gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece 
              a Neuron Lab Consulting S.L.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Responsabilidad</h2>
            <p className="text-muted-foreground mb-4">
              Neuron Lab Consulting S.L. no se hace responsable de los daños y 
              perjuicios que pudieran derivarse del uso incorrecto del sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Modificaciones</h2>
            <p className="text-muted-foreground mb-4">
              Neuron Lab Consulting S.L. se reserva el derecho de efectuar sin previo 
              aviso las modificaciones que considere oportunas en su portal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Legislación Aplicable</h2>
            <p className="text-muted-foreground">
              La relación entre Neuron Lab Consulting S.L. y el usuario se regirá por 
              la normativa española vigente y cualquier controversia se someterá a los 
              Juzgados y Tribunales de Madrid.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AvisoLegal;