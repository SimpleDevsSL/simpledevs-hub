// lib/projects.ts
import { Terminal, Smartphone, Database } from 'lucide-react';

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
    tags: ['Next.js', 'Supabase', 'Directorio']
  },
  {
    id: 'social-network',
    name: 'SocialNet',
    description: 'Plataforma de interacción social con recuperación de contraseñas y gestión de usuarios.',
    icon: Smartphone, // Usamos iconos de lucide
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-500',
    gradient: 'from-blue-500/20 via-slate-50 to-slate-50 dark:from-blue-500/20 dark:via-[#000000] dark:to-[#000000]',
    link: '#',
    tags: ['PHP', 'MySQL', 'Social']
  },
  {
    id: '3d-print-manager',
    name: 'PrintFlow',
    description: 'Panel de control para gestión y calibración de impresoras 3D Createbot.',
    icon: Terminal,
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-500',
    gradient: 'from-emerald-500/20 via-slate-50 to-slate-50 dark:from-emerald-500/20 dark:via-[#000000] dark:to-[#000000]',
    link: '#',
    tags: ['IoT', 'Dashboard']
  },
  {
    id: 'dev-tools',
    name: 'DevUtils',
    description: 'Colección de herramientas y calculadoras enfocadas en programación funcional.',
    icon: Database,
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-500',
    gradient: 'from-purple-500/20 via-slate-50 to-slate-50 dark:from-purple-500/20 dark:via-[#000000] dark:to-[#000000]',
    link: '#',
    tags: ['Herramientas', 'Open Source']
  },
];