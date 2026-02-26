// lib/projects.ts
import { File, Database, ClockFading  } from 'lucide-react';

// --- ICONO PERSONALIZADO: GUÍA PUNTANA ---
export const GuiaPuntanaLogo = ({ className }: { className?: string }) => (
  <div 
    className={className} 
    style={{ 
      backgroundColor: 'currentColor',
      WebkitMask: 'url(/logo-oscuro.svg) center/contain no-repeat',
      mask: 'url(/logo-oscuro.svg) center/contain no-repeat'
    }} 
  />
);

// --- BASE DE DATOS DE PROYECTOS ---
export const PROJECTS = [
  {
    id: 'guia-puntana',
    name: 'Guía Puntana',
    description: 'Directorio de profesionales y oficios con conexión directa por WhatsApp.',
    icon: GuiaPuntanaLogo, // Usamos el logo personalizado
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-500',
    gradient: 'from-orange-500/20 via-slate-50 to-slate-50 dark:from-orange-500/20 dark:via-[#000000] dark:to-[#000000]',
    link: 'https://guia-puntana.vercel.app',
    tags: ['Oficio', 'Trabajo', 'Social']
  },
  {
    id: 'san-luis-tramites',
    name: 'San Luis Tramites',
    description: 'Mi proximo tramite en San Luis.',
    icon: File , // Usamos iconos de lucide
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-500',
    gradient: 'from-blue-500/20 via-slate-50 to-slate-50 dark:from-blue-500/20 dark:via-[#000000] dark:to-[#000000]',
    link: 'https://san-luis-tramites.vercel.app',
    tags: ['Trámite', 'Tiempo']
  },
  {
    id: 'InTheZone',
    name: 'InTheZone',
    description: 'Pomodoro app & habit tracker.',
    icon: ClockFading,
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-500',
    gradient: 'from-emerald-500/20 via-slate-50 to-slate-50 dark:from-emerald-500/20 dark:via-[#000000] dark:to-[#000000]',
    link: 'https://in-the-zone-app.vercel.app',
    tags: ['Pomodoro', 'Productividad']
  },
];