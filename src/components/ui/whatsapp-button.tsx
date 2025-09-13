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
      <div className="fixed bottom-4 right-4 z-50">
        <div className="relative">
          {/* Chat bubble notification - slower animation */}
          <div className="absolute -top-12 -left-32 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg border animate-[bounce_3s_ease-in-out_infinite]">
            <div className="text-sm font-medium">¡Hola! 👋</div>
            <div className="text-xs text-gray-600">¿Justo para automatizar tus procesos? Chatea con nosotros por WhatsApp</div>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b"></div>
          </div>
          
          <Button
            onClick={handleClick}
            className={cn(
              "w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-0",
              "animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] hover:animate-none",
              className
            )}
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="h-7 w-7" />
          </Button>
        </div>
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