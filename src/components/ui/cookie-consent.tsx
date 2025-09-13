import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
              <Cookie className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">
                🍪 Utilizamos cookies
              </h3>
              <p className="text-sm text-muted-foreground">
                Utilizamos cookies para mejorar tu experiencia de navegación, 
                analizar el tráfico del sitio y personalizar el contenido. 
                Puedes gestionar tus preferencias en nuestra{' '}
                <Link 
                  to="/cookies" 
                  className="text-primary hover:underline font-medium"
                >
                  política de cookies
                </Link>
                .
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
              className="flex-1 lg:flex-initial"
            >
              Rechazar
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleAccept}
              className="flex-1 lg:flex-initial"
            >
              Aceptar todas
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="p-2 h-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}