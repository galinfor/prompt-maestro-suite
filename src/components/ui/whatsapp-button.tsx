import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  variant?: 'floating' | 'menu';
  className?: string;
  message?: string;
  phone?: string;
}

export function WhatsAppButton({ 
  variant = 'floating', 
  className,
  message = "Hola, me gustaría información sobre vuestros servicios de IA",
  phone = "34600123456"
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        position: variant,
        custom_parameter: 'cta_interaction'
      });
    }
    window.open(whatsappUrl, '_blank');
  };

  if (variant === 'floating') {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleClick}
          variant="whatsapp"
          size="lg"
          className={cn(
            "rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110",
            "animate-pulse hover:animate-none",
            className
          )}
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="hidden sm:inline ml-2">WhatsApp</span>
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={handleClick}
      variant="whatsapp"
      size="default"
      className={cn("", className)}
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </Button>
  );
}