import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';

interface CalendarModalProps {
  children?: React.ReactNode;
  triggerText?: string;
}

export function CalendarModal({ children, triggerText = "Agendar reunión" }: CalendarModalProps) {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex-1 p-6 pt-4">
          <div 
            style={{width:'100%', height:'100%', overflow:'scroll'}} 
            id="my-cal-inline-30min"
            className="rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Initialize Cal.com script when component mounts
if (typeof window !== 'undefined') {
  (function (C: any, A: string, L: string) { 
    let p = function (a: any, ar: any) { a.q.push(ar); }; 
    let d = C.document; 
    C.Cal = C.Cal || function () { 
      let cal = C.Cal; 
      let ar = arguments; 
      if (!cal.loaded) { 
        cal.ns = {}; 
        cal.q = cal.q || []; 
        d.head.appendChild(d.createElement("script")).src = A; 
        cal.loaded = true; 
      } 
      if (ar[0] === L) { 
        const api = function () { p(api, arguments); }; 
        const namespace = ar[1]; 
        api.q = api.q || []; 
        if(typeof namespace === "string"){
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar); 
        return;
      } 
      p(cal, ar); 
    }; 
  })(window, "https://app.cal.com/embed/embed.js", "init");
  
  (window as any).Cal("init", "30min", {origin:"https://app.cal.com"});

  (window as any).Cal.ns["30min"]("inline", {
    elementOrSelector:"#my-cal-inline-30min",
    config: {"layout":"month_view","theme":"dark"},
    calLink: "daivd-rodriguez-kweqav/30min",
  });

  (window as any).Cal.ns["30min"]("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#153a53"},"dark":{"cal-brand":"#38AEFA"}},"hideEventTypeDetails":true,"layout":"month_view"});
}