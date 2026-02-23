'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Terminal, 
  LayoutTemplate, 
  Smartphone, 
  Database, 
  ChevronRight, 
  ChevronLeft,
  Search,
  Menu,
  ArrowRight
} from 'lucide-react';

// --- DATA DE PROYECTOS ---
const PROJECTS = [
  {
    id: 'guia-puntana',
    name: 'Guía Puntana',
    description: 'Directorio de profesionales y oficios con conexión directa por WhatsApp.',
    icon: LayoutTemplate,
    color: 'bg-orange-500',
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
    color: 'bg-blue-500',
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
    color: 'bg-emerald-500',
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
    color: 'bg-purple-500',
    textColor: 'text-purple-500',
    gradient: 'from-purple-500/20 via-[#000000] to-[#000000]',
    link: '#',
    tags: ['Herramientas', 'Open Source']
  },
];

export default function HubPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play del carousel (cambia cada 5 segundos si no está el mouse encima)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PROJECTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % PROJECTS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);

  return (
    <div className="min-h-screen bg-[#000000] text-gray-300 selection:bg-blue-500/30 font-sans">
      
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#000000]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-white to-gray-400 font-bold text-black">
                S
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">
                SimpleDevs
              </span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="#productos" className="text-sm font-medium hover:text-white transition-colors">Proyectos</Link>
              <Link href="#soluciones" className="text-sm font-medium hover:text-white transition-colors">Soluciones</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white hidden sm:block">
              <Search size={20} />
            </button>
            <button className="md:hidden text-gray-400 hover:text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* --- CAROUSEL HERO (SOLO DESKTOP: hidden md:block) --- */}
        <section 
          className="hidden md:block relative overflow-hidden pt-16 pb-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Contenedor principal del carousel */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            
            {/* Carril animado */}
            <div className="relative h-[450px] overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
              {PROJECTS.map((project, index) => {
                const Icon = project.icon;
                const isActive = currentSlide === index;
                
                return (
                  <div 
                    key={project.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  >
                    {/* Resplandor radial de fondo estilo JetBrains */}
                    <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${project.gradient} opacity-60`}></div>
                    
                    <div className="relative flex h-full items-center p-12 lg:p-20">
                      <div className="max-w-2xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                          <Icon size={16} className={project.textColor} />
                          <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">Proyecto Destacado</span>
                        </div>
                        
                        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white lg:text-6xl">
                          {project.name}
                        </h1>
                        
                        <p className="mb-10 text-xl text-gray-400 leading-relaxed max-w-xl">
                          {project.description}
                        </p>
                        
                        <a 
                          href={project.link}
                          className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
                        >
                          Ir al Proyecto <ArrowRight size={18} />
                        </a>
                      </div>

                      {/* Icono gigante decorativo a la derecha */}
                      <div className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                        <Icon size={400} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controles del Carousel */}
            <button 
              onClick={prevSlide}
              className="absolute left-8 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-[#111111]/80 p-3 text-white backdrop-blur-md transition-all hover:bg-white/10 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-8 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-[#111111]/80 p-3 text-white backdrop-blur-md transition-all hover:bg-white/10 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicadores (Dots) */}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
              {PROJECTS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'}`}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* --- PRODUCT GRID (El Hub) - SIEMPRE VISIBLE, PRIMERO EN MOBILE --- */}
        <section id="productos" className="py-12 md:py-20 bg-[#000000] md:bg-[#080808]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 md:mb-12">
              <h2 className="text-3xl font-bold text-white md:text-4xl">Nuestros Proyectos</h2>
              <p className="mt-3 text-gray-400 md:text-lg">Explora el ecosistema de soluciones digitales.</p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:gap-8">
              {PROJECTS.map((project) => {
                const Icon = project.icon;
                return (
                  <a 
                    key={project.id} 
                    href={project.link}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-6 md:p-8 transition-all hover:border-white/20 hover:bg-[#151515]"
                  >
                    <div>
                      <div className="mb-5 flex items-center justify-between md:mb-6">
                        <div className={`flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl ${project.color} bg-opacity-10 transition-transform group-hover:scale-110`}>
                          <Icon size={24} className={`md:h-7 md:w-7 ${project.textColor}`} />
                        </div>
                        <div className="rounded-full bg-white/5 p-2 transition-colors group-hover:bg-white/10">
                           <ArrowRight size={20} className="text-gray-500 transition-transform group-hover:-rotate-45 group-hover:text-white" />
                        </div>
                      </div>
                      
                      <h3 className="mb-2 text-xl font-bold text-white group-hover:text-gray-200 md:text-2xl transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed md:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2 md:mt-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-400 border border-white/10 transition-colors group-hover:text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/10 py-10 md:py-12 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} SimpleDevs. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}