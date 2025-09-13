import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';
import { ScrollIndicator } from '@/components/ui/scroll-indicator';
import Cal, { getCalApi } from "@calcom/embed-react";

interface CalendarModalProps {
  children?: React.ReactNode;
  triggerText?: string;
}

export function CalendarModal({ children, triggerText = "Agendar reunión" }: CalendarModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#153a53"},"dark":{"cal-brand":"#38AEFA"}},"hideEventTypeDetails":true,"layout":"month_view"});
    })();
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="hero" size="xl" className="group">
            <Calendar className="mr-2 h-5 w-5" />
            {triggerText}
            <Clock className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-[95vw] h-[85vh] max-h-[900px] p-0 overflow-hidden relative">
        <DialogHeader className="p-6 pb-4 border-b">
          <DialogTitle className="text-2xl font-bold">
            Agendar reunión gratuita
          </DialogTitle>
        </DialogHeader>
        <div 
          ref={scrollRef}
          className="flex-1 p-0 h-[calc(85vh-80px)] overflow-auto custom-scrollbar"
        >
          <Cal 
            namespace="30min"
            calLink="daivd-rodriguez-kweqav/30min"
            style={{width:"100%",height:"100%",overflow:"auto"}}
            config={{"layout":"month_view","theme":"dark"}}
          />
        </div>
        <ScrollIndicator targetRef={scrollRef} />
      </DialogContent>
    </Dialog>
  );
}