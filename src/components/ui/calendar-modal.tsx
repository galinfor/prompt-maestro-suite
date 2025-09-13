import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';
import Cal, { getCalApi } from "@calcom/embed-react";

interface CalendarModalProps {
  children?: React.ReactNode;
  triggerText?: string;
}

export function CalendarModal({ children, triggerText = "Agendar reunión" }: CalendarModalProps) {
  const [isOpen, setIsOpen] = useState(false);

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
      <DialogContent className="max-w-4xl w-full h-[80vh] max-h-[800px] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold">
            Agendar reunión gratuita
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 p-6 pt-4 h-full">
          <Cal 
            namespace="30min"
            calLink="daivd-rodriguez-kweqav/30min"
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{"layout":"month_view","theme":"dark"}}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}