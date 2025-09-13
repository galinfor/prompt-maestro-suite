const Cookies = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Política de Cookies
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. ¿Qué son las Cookies?</h2>
            <p className="text-muted-foreground mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo 
              cuando visitas un sitio web. Nos ayudan a mejorar tu experiencia de navegación 
              y a proporcionar servicios personalizados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Tipos de Cookies que Utilizamos</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Cookies Estrictamente Necesarias</h3>
              <p className="text-muted-foreground mb-2">
                Estas cookies son esenciales para el funcionamiento del sitio web y no pueden 
                ser desactivadas. Incluyen cookies de autenticación, seguridad y preferencias básicas.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Cookies de Rendimiento</h3>
              <p className="text-muted-foreground mb-2">
                Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, 
                proporcionando información sobre las áreas visitadas, el tiempo de navegación 
                y los problemas encontrados.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Cookies de Funcionalidad</h3>
              <p className="text-muted-foreground mb-2">
                Permiten que el sitio web recuerde las elecciones que realizas y proporcionan 
                características mejoradas y más personales.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Cookies de Marketing</h3>
              <p className="text-muted-foreground mb-2">
                Se utilizan para rastrear a los visitantes en los sitios web con el fin de 
                mostrar anuncios que sean relevantes y atractivos para el usuario individual.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cookies de Terceros</h2>
            <p className="text-muted-foreground mb-4">
              Nuestro sitio web puede utilizar cookies de terceros como Google Analytics 
              para analizar el tráfico del sitio web y mejorar nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Gestión de Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas 
              las cookies que ya están en tu ordenador y puedes configurar la mayoría de 
              navegadores para evitar que se coloquen.
            </p>
            <p className="text-muted-foreground mb-4">
              Sin embargo, si haces esto, es posible que tengas que ajustar manualmente 
              algunas preferencias cada vez que visites un sitio y que algunos servicios 
              y funcionalidades no funcionen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Consentimiento</h2>
            <p className="text-muted-foreground mb-4">
              Al continuar navegando por nuestro sitio web, aceptas el uso de cookies 
              conforme a esta política. Puedes retirar tu consentimiento en cualquier momento 
              modificando la configuración de tu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contacto</h2>
            <p className="text-muted-foreground">
              Si tienes alguna pregunta sobre nuestra política de cookies, puedes 
              contactarnos en: hola@neuronlab.es
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;