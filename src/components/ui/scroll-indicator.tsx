import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  targetRef: React.RefObject<HTMLElement>;
}

export function ScrollIndicator({ targetRef }: ScrollIndicatorProps) {
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const checkScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const hasMoreContent = scrollHeight > clientHeight;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
      
      setShowIndicator(hasMoreContent && !isAtBottom);
    };

    // Check initially
    checkScroll();

    // Add scroll listener
    element.addEventListener('scroll', checkScroll);
    
    // Also check on resize
    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(element);

    return () => {
      element.removeEventListener('scroll', checkScroll);
      resizeObserver.disconnect();
    };
  }, [targetRef]);

  if (!showIndicator) return null;

  const scrollToBottom = () => {
    if (targetRef.current) {
      targetRef.current.scrollTo({
        top: targetRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
      <button
        onClick={scrollToBottom}
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full pointer-events-auto",
          "bg-primary/80 hover:bg-primary text-primary-foreground",
          "shadow-lg hover:shadow-xl transition-all duration-300",
          "animate-[bounce_2s_ease-in-out_infinite]"
        )}
        aria-label="Desplázate hacia abajo para ver más contenido"
      >
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
}