'use client';

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { 
  Terminal, 
  LayoutTemplate, 
  Smartphone, 
  Database,
  ArrowLeft,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import { ImWindows } from "react-icons/im"; // <-- Tu importación de react-icons

// --- DATA ACTUALIZADA CON GRADIENTES PARA MODO CLARO Y OSCURO ---
const PROJECTS = [
  {
    id: 'guia-puntana',
    name: 'Guía Puntana',
    description: 'Directorio de profesionales y oficios con conexión directa por WhatsApp.',
    icon: LayoutTemplate,
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
    icon: Smartphone,
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

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [projectId, setProjectId] = useState<string | null>(null);

  // Estados del Tema
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    params.then((p) => setProjectId(p.id));
  }, [params]);

  if (!projectId) return null; 

  const currentIndex = PROJECTS.findIndex((p) => p.id === projectId);

  if (currentIndex === -1) {
    return notFound();
  }

  const isDark = resolvedTheme === 'dark';
  const project = PROJECTS[currentIndex];
  const Icon = project.icon;

  const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
  const nextIndex = (currentIndex + 1) % PROJECTS.length;
  
  const prevProject = PROJECTS[prevIndex];
  const nextProject = PROJECTS[nextIndex];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-slate-50 transition-colors duration-300 dark:bg-[#000000] font-sans overflow-hidden">
      
      {/* --- FONDO --- */}
      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${project.gradient} opacity-60 dark:opacity-40 transition-colors duration-1000`}></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-[0.03] pointer-events-none transition-all duration-1000">
        <Icon className="h-[150vw] w-[150vw] md:h-[80vw] md:w-[80vw] text-gray-900 dark:text-white" />
      </div>

      {/* --- BOTÓN VOLVER (Fijo Arriba Izquierda) --- */}
      <div className="fixed left-4 top-4 z-50 md:left-8 md:top-8">
        <Link 
          href="/#productos" 
          className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-md transition-all hover:bg-gray-100 hover:text-gray-900 dark:border-white/10 dark:bg-[#111111]/80 dark:text-gray-300 dark:shadow-lg dark:hover:bg-white/10 dark:hover:text-white"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="hidden sm:inline">Volver al Hub</span>
          <span className="sm:hidden">Volver</span>
        </Link>
      </div>

      {/* --- PÍLDORA UNIFICADA (Fija Arriba Derecha) --- */}
      <div className="fixed right-4 top-4 z-50 md:right-8 md:top-8">
        {mounted ? (
          <div className="flex items-center rounded-full border border-gray-200 bg-gray-100/50 p-1 shadow-inner backdrop-blur-md dark:border-white/10 dark:bg-[#0a0a0a]/80">
            <button
              onClick={() => setTheme('light')}
              className={`flex h-8 w-10 cursor-pointer items-center justify-center rounded-full transition-all ${
                !isDark
                  ? 'bg-white text-gray-900 shadow-sm dark:bg-white/10 dark:text-white'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white'
              }`}
              aria-label="Modo Claro"
            >
              <Sun size={15} />
            </button>
            
            <button
              onClick={() => setTheme('dark')}
              className={`flex h-8 w-10 cursor-pointer items-center justify-center rounded-full transition-all ${
                isDark
                  ? 'bg-gray-800 text-white shadow-sm dark:bg-[#222222] dark:text-white'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              aria-label="Modo Oscuro"
            >
              <Moon size={15} />
            </button>

            <div className="mx-1 h-4 w-[1px] bg-gray-300 dark:bg-white/10"></div>

            {/* BOTÓN CON EL ICONO DE REACT-ICONS */}
            <a
              href="https://simple-devs-landing.vercel.app/"
              className="group flex h-8 w-10 items-center justify-center rounded-full text-gray-500 transition-all hover:bg-white hover:text-blue-500 hover:shadow-sm dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-blue-400"
              title="Ir a SimpleDevs OS"
            >
              <ImWindows className="h-[18px] w-[18px] transition-transform group-hover:scale-110" />
            </a>
          </div>
        ) : (
          <div className="h-10 w-[140px] opacity-0" />
        )}
      </div>

      {/* --- CONTROLES LATERALES (Desktop - Fijos a los lados) --- */}
      <Link 
        href={`/proyectos/${prevProject.id}`}
        title={`Anterior: ${prevProject.name}`}
        className="fixed left-8 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/80 p-4 text-gray-500 shadow-sm backdrop-blur-md transition-all hover:scale-110 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:border-white/10 dark:bg-[#111111]/80 dark:text-gray-400 dark:shadow-lg dark:hover:border-white/30 dark:hover:bg-white/10 dark:hover:text-white md:flex"
      >
        <ChevronLeft size={32} />
      </Link>

      <Link 
        href={`/proyectos/${nextProject.id}`}
        title={`Siguiente: ${nextProject.name}`}
        className="fixed right-8 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/80 p-4 text-gray-500 shadow-sm backdrop-blur-md transition-all hover:scale-110 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:border-white/10 dark:bg-[#111111]/80 dark:text-gray-400 dark:shadow-lg dark:hover:border-white/30 dark:hover:bg-white/10 dark:hover:text-white md:flex"
      >
        <ChevronRight size={32} />
      </Link>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 w-full max-w-4xl px-6 py-20 pb-32 md:pb-20 text-center flex flex-col items-center">
        
        {/* Logo del Proyecto */}
        <div className={`mt-8 mb-8 flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-3xl md:rounded-[2rem] border border-gray-200 shadow-xl backdrop-blur-xl dark:border-white/10 dark:shadow-2xl ${project.bgColor}`}>
          <Icon className={`h-12 w-12 md:h-16 md:w-16 ${project.textColor}`} />
        </div>

        {/* Nombre y Descripción */}
        <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {project.name}
        </h1>
        <p className="mb-10 max-w-2xl text-lg md:text-2xl leading-relaxed text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Etiquetas */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded-lg border border-gray-200 bg-white/80 px-4 py-2 text-sm md:text-base font-medium text-gray-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#111111]/80 dark:text-gray-300 dark:shadow-lg"
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
          className="group flex items-center gap-3 rounded-xl bg-gray-900 px-8 py-4 text-base md:text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-black active:scale-95 dark:bg-white dark:text-black dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]"
        >
          Visitar Sitio Web
          <ExternalLink size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

      </div>

      {/* --- CONTROLES INFERIORES (Solo Móvil - Fijos Abajo) --- */}
      <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-4 md:hidden">
        <Link 
          href={`/proyectos/${prevProject.id}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/95 py-3 text-sm font-medium text-gray-700 shadow-lg backdrop-blur-md transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-[#111111]/95 dark:text-gray-300 dark:shadow-2xl dark:hover:bg-white/10 dark:hover:text-white"
        >
          <ChevronLeft size={18} /> Anterior
        </Link>
        <Link 
          href={`/proyectos/${nextProject.id}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/95 py-3 text-sm font-medium text-gray-700 shadow-lg backdrop-blur-md transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-[#111111]/95 dark:text-gray-300 dark:shadow-2xl dark:hover:bg-white/10 dark:hover:text-white"
        >
          Siguiente <ChevronRight size={18} />
        </Link>
      </div>

    </div>
  );
}