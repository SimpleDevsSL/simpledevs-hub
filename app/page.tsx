'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { PROJECTS } from '@/lib/projects';
import {  
  ChevronRight, 
  ChevronLeft,
  Menu,
  ArrowRight,
  Sun,
  Moon
} from 'lucide-react';
import { ImWindows } from "react-icons/im"; // <-- Tu importación de react-icons


export default function HubPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Estados para next-themes
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === 'dark';

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
    <div className="min-h-screen bg-slate-50 text-gray-700 transition-colors duration-300 dark:bg-[#000000] dark:text-gray-300 selection:bg-blue-500/30 font-sans">
      
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 dark:border-white/10 dark:bg-[#000000]/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-gray-800 to-gray-600 text-white dark:from-white dark:to-gray-400 font-bold dark:text-black shadow-sm">
                S
              </div>
              <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                SimpleDevs
              </span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="#productos" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Proyectos</Link>
              <Link href="#soluciones" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Soluciones</Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* PÍLDORA UNIFICADA */}
            {mounted ? (
              <div className="flex items-center rounded-full border border-gray-200 bg-gray-100/50 p-1 shadow-inner dark:border-white/10 dark:bg-[#0a0a0a]">
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
                  className="group flex h-8 w-10 items-center justify-center rounded-full text-gray-500 transition-all hover:bg-white hover:text-blue-500 hover:shadow-sm dark:text-gray-500 dark:hover:bg-white/10 dark:hover:text-blue-400"
                  title="Ir a SimpleDevs OS"
                >
                  <ImWindows className="h-[18px] w-[18px] transition-transform group-hover:scale-110" />
                </a>
              </div>
            ) : (
              <div className="h-10 w-[140px] opacity-0" />
            )}

            <button className="md:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10 transition-colors">
              <Menu size={24} />
            </button>
          </div>

        </div>
      </header>

      <main>
        {/* --- CAROUSEL HERO (SOLO DESKTOP) --- */}
        <section 
          className="hidden md:block relative overflow-hidden pt-16 pb-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="relative h-[450px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#080808] transition-colors duration-300">
              {PROJECTS.map((project, index) => {
                const Icon = project.icon;
                const isActive = currentSlide === index;
                
                return (
                  <div 
                    key={project.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  >
                    <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${project.gradient} opacity-60`}></div>
                    
                    <div className="relative flex h-full items-center p-12 lg:p-20">
                      <div className="max-w-2xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/50 px-4 py-1.5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                          <Icon className={`h-4 w-4 ${project.textColor}`} />
                          <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">Proyecto Destacado</span>
                        </div>
                        
                        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-6xl">
                          {project.name}
                        </h1>
                        
                        <p className="mb-10 text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                          {project.description}
                        </p>
                        
                        <Link 
                          href={`/proyectos/${project.id}`}
                          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 dark:bg-white dark:text-black"
                        >
                          Ver Detalles <ArrowRight size={18} />
                        </Link>
                      </div>

                      <div className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                        <Icon size={400} className="w-[400px] h-[400px] text-black dark:text-white" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button onClick={prevSlide} className="absolute left-8 top-1/2 z-20 -translate-y-1/2 rounded-full border border-gray-200 bg-white/80 p-3 text-gray-700 shadow-md backdrop-blur-md transition-all hover:scale-110 hover:bg-gray-50 dark:border-white/10 dark:bg-[#111111]/80 dark:text-white dark:hover:bg-white/10">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-8 top-1/2 z-20 -translate-y-1/2 rounded-full border border-gray-200 bg-white/80 p-3 text-gray-700 shadow-md backdrop-blur-md transition-all hover:scale-110 hover:bg-gray-50 dark:border-white/10 dark:bg-[#111111]/80 dark:text-white dark:hover:bg-white/10">
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
              {PROJECTS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-gray-800 dark:bg-white' : 'w-2 bg-gray-300 hover:bg-gray-400 dark:bg-white/30 dark:hover:bg-white/60'}`}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* --- PRODUCT GRID --- */}
        <section id="productos" className="py-10 md:py-20 bg-slate-50 transition-colors duration-300 dark:bg-[#000000] md:dark:bg-[#080808]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">Nuestros Proyectos</h2>
              <p className="mt-2 md:mt-3 text-sm md:text-lg text-gray-600 dark:text-gray-400">Explora el ecosistema de soluciones digitales.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-2 xl:gap-8">
              {PROJECTS.map((project) => {
                const Icon = project.icon;
                return (
                  <Link 
                    key={project.id} 
                    href={`/proyectos/${project.id}`}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-xl md:rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-8 transition-all hover:border-gray-300 hover:shadow-md dark:border-white/10 dark:bg-[#111111] dark:hover:border-white/20 dark:hover:bg-[#151515]"
                  >
                    <div>
                      <div className="mb-3 md:mb-6 flex flex-row items-center justify-between">
                        <div className={`flex h-10 w-10 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-lg md:rounded-xl ${project.bgColor} transition-transform group-hover:scale-110`}>
                          <Icon className={`h-5 w-5 md:h-7 md:w-7 ${project.textColor}`} />
                        </div>
                        <div className="rounded-full bg-gray-100 p-1.5 md:p-2 transition-colors group-hover:bg-gray-200 dark:bg-white/5 dark:group-hover:bg-white/10">
                           <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-gray-500 transition-transform group-hover:-rotate-45 dark:group-hover:text-white" />
                        </div>
                      </div>
                      
                      <h3 className="mb-1 md:mb-2 text-sm sm:text-base md:text-2xl font-bold text-gray-900 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200 transition-colors leading-tight">
                        {project.name}
                      </h3>
                      
                      <p className="hidden md:block text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="hidden md:flex mt-6 flex-wrap gap-2 md:mt-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors group-hover:text-gray-900 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:group-hover:text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-500 md:py-12 dark:border-white/10">
        <p>&copy; {new Date().getFullYear()} SimpleDevs. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}