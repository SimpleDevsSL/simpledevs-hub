import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Terminal, 
  LayoutTemplate, 
  Smartphone, 
  Database,
  ArrowLeft,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const PROJECTS = [
  {
    id: 'guia-puntana',
    name: 'Guía Puntana',
    description: 'Directorio de profesionales y oficios con conexión directa por WhatsApp.',
    icon: LayoutTemplate,
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-500',
    gradient: 'from-orange-500/20 via-[#000000] to-[#000000]',
    link: 'https://guia-puntana.vercel.app',
    tags: ['Next.js', 'Supabase', 'Directorio']
  },
  {
    id: 'social-network',
    name: 'SocialNet',
    description: 'Plataforma de interacción social con recuperación de contraseñas y gestión de usuarios.',
    icon: Smartphone,
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-500',
    gradient: 'from-blue-500/20 via-[#000000] to-[#000000]',
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
    gradient: 'from-emerald-500/20 via-[#000000] to-[#000000]',
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
    gradient: 'from-purple-500/20 via-[#000000] to-[#000000]',
    link: '#',
    tags: ['Herramientas', 'Open Source']
  },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  const currentIndex = PROJECTS.findIndex((p) => p.id === id);

  if (currentIndex === -1) {
    return notFound();
  }

  const project = PROJECTS[currentIndex];
  const Icon = project.icon;

  const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
  const nextIndex = (currentIndex + 1) % PROJECTS.length;
  
  const prevProject = PROJECTS[prevIndex];
  const nextProject = PROJECTS[nextIndex];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#000000] font-sans overflow-hidden">
      
      {/* --- FONDO --- */}
      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${project.gradient} opacity-40 transition-colors duration-1000`}></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none transition-all duration-1000">
        <Icon className="h-[150vw] w-[150vw] md:h-[80vw] md:w-[80vw] text-white" />
      </div>

      {/* --- BOTÓN VOLVER (Fijo Arriba Izquierda) --- */}
      <div className="fixed left-4 top-4 z-50 md:left-8 md:top-8">
        <Link 
          href="/#productos" 
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-[#111111]/80 px-4 py-2 text-sm font-medium text-gray-300 shadow-lg backdrop-blur-md transition-all hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="hidden sm:inline">Volver al Hub</span>
          <span className="sm:hidden">Volver</span>
        </Link>
      </div>

      {/* --- CONTROLES LATERALES (Desktop - Fijos a los lados) --- */}
      <Link 
        href={`/proyectos/${prevProject.id}`}
        title={`Anterior: ${prevProject.name}`}
        className="fixed left-8 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#111111]/80 p-4 text-gray-400 backdrop-blur-md transition-all hover:scale-110 hover:border-white/30 hover:bg-white/10 hover:text-white md:flex"
      >
        <ChevronLeft size={32} />
      </Link>

      <Link 
        href={`/proyectos/${nextProject.id}`}
        title={`Siguiente: ${nextProject.name}`}
        className="fixed right-8 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#111111]/80 p-4 text-gray-400 backdrop-blur-md transition-all hover:scale-110 hover:border-white/30 hover:bg-white/10 hover:text-white md:flex"
      >
        <ChevronRight size={32} />
      </Link>

      {/* --- CONTENIDO PRINCIPAL --- */}
      {/* Añadido pb-32 en móvil para que los botones inferiores fijos no tapen el enlace del sitio */}
      <div className="relative z-10 w-full max-w-4xl px-6 py-20 pb-32 md:pb-20 text-center flex flex-col items-center">
        
        {/* Logo del Proyecto */}
        <div className={`mt-8 mb-8 flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-3xl md:rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl ${project.bgColor}`}>
          <Icon className={`h-12 w-12 md:h-16 md:w-16 ${project.textColor}`} />
        </div>

        {/* Nombre y Descripción */}
        <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
          {project.name}
        </h1>
        <p className="mb-10 max-w-2xl text-lg md:text-2xl leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Etiquetas */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded-lg border border-white/10 bg-[#111111]/80 px-4 py-2 text-sm md:text-base font-medium text-gray-300 shadow-lg backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botón de Enlace al Sitio */}
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-base md:text-lg font-bold text-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] active:scale-95"
        >
          Visitar Sitio Web
          <ExternalLink size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

      </div>

      {/* --- CONTROLES INFERIORES (Solo Móvil - Fijos Abajo) --- */}
      <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-4 md:hidden">
        <Link 
          href={`/proyectos/${prevProject.id}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#111111]/90 py-3 text-sm font-medium text-gray-300 shadow-2xl backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
        >
          <ChevronLeft size={18} /> Anterior
        </Link>
        <Link 
          href={`/proyectos/${nextProject.id}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#111111]/90 py-3 text-sm font-medium text-gray-300 shadow-2xl backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
        >
          Siguiente <ChevronRight size={18} />
        </Link>
      </div>

    </div>
  );
}