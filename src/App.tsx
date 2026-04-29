import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  LayoutDashboard, 
  AlertCircle, 
  CheckCircle2, 
  Briefcase, 
  ShieldCheck, 
  Database, 
  Globe, 
  Cpu, 
  Users,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Scale
} from 'lucide-react';

interface SlideData {
  id: number;
  section?: string;
  title?: string;
  subtitle?: string;
  type: 'title' | 'content' | 'grid' | 'comparison' | 'split' | 'tech';
  icon?: React.ReactNode;
  content?: React.ReactNode;
  items?: { label: string; description: string; detail?: string; icon?: React.ReactNode }[];
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideData[] = [
    {
      id: 0,
      title: "SICD",
      subtitle: "Modernización del Sistema de Inventario",
      type: "title",
      content: (
        <div className="flex flex-col items-center gap-12 mt-12">
          <div className="h-px w-32 bg-gold" />
          <div className="text-center space-y-4">
            <h3 className="text-primary font-serif italic text-3xl">Distribuidora de Artículos de Aseo B2B</h3>
            <p className="text-slate-500 tracking-[0.2em] font-light uppercase text-sm">Propuesta de Proyecto de Título • Pinval</p>
          </div>
          <div className="flex gap-4 mt-8">
             <div className="px-4 py-1 border border-slate-200 text-[10px] uppercase tracking-widest text-slate-400">2026 Edition</div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      section: "01. CONTEXTO",
      title: "Descripción Situacional",
      subtitle: "Empresa Pinval: El eslabón crítico en la cadena B2B",
      type: "split",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed font-light text-lg">
              Pinval opera como un intermediario estratégico conectando grandes proveedores de aseo con comercios minoristas y corporativos.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-50 border-l-2 border-primary">
                <Briefcase className="w-5 h-5 text-gold" />
                <div>
                  <span className="block font-bold text-sm text-primary">Operación Logística</span>
                  <span className="text-xs text-slate-500 italic">Intermediación y distribución masiva</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 border-l-2 border-primary">
                <LayoutDashboard className="w-5 h-5 text-gold" />
                <div>
                  <span className="block font-bold text-sm text-primary">Infraestructura IT</span>
                  <span className="text-xs text-slate-500 italic">Sistema POS actual con limitación en bodega</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 p-8 rounded-sm shadow-inner border border-slate-200">
             <h4 className="text-primary font-serif text-xl mb-4 italic">Gestión de Inventario</h4>
             <p className="text-sm text-slate-500 mb-6 underline decoration-gold/30 underline-offset-4">Metodología Actual: Planillas Excel</p>
             <div className="space-y-2">
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                   <div className="h-full bg-primary w-[90%]" />
                </div>
                <p className="text-[10px] text-right text-slate-400 uppercase tracking-tighter">Dependencia del proceso manual: 90%</p>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      section: "01. CONTEXTO",
      title: "Problemática Central",
      subtitle: "Riesgos operativos y desfase de información",
      type: "grid",
      items: [
        { label: "Dependencia Crítica", description: "El uso excesivo de Excel genera silos de información.", icon: <AlertCircle className="text-red-500" /> },
        { label: "Inconsistencia de Datos", description: "Desfase temporal entre ventas POS y existencias reales.", icon: <ArrowRight className="text-slate-400" /> },
        { label: "Vulnerabilidad", description: "Alta probabilidad de error humano en la transcripción de datos.", icon: <LayoutDashboard className="text-slate-400" /> },
        { label: "Impacto Estratégico", description: "Pérdida de competitividad por falta de visión en tiempo real.", icon: <TrendingUp className="text-slate-400" /> }
      ]
    },
    {
      id: 3,
      section: "02. ESTRATEGIA",
      title: "Capa de Negocio",
      subtitle: "Propuesta de valor y necesidades del cliente",
      type: "split",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          <div className="bg-white p-10">
            <h4 className="text-gold font-serif text-lg mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-xs text-gold font-bold">A</span>
              AS-IS (Actual)
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Digitalización manual en Excel tras cada venta.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Falta de validación automática de existencias.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Pedidos por WhatsApp sin integración directa.
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 p-10">
            <h4 className="text-primary font-serif text-lg mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-bold">B</span>
              TO-BE (Propuesta)
            </h4>
            <ul className="space-y-4 text-sm text-primary">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                Sistema Cloud centralizado con SSOT.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                Integración nativa con canales de venta.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                Trazabilidad 360° desde pedido a entrega.
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 4,
      section: "03. SOLUCIÓN",
      title: "Nuestra Propuesta",
      subtitle: "SICD: Modernización Integral",
      type: "grid",
      items: [
        { label: "Dashboard Inteligente", description: "Visualización de KPI y gestión de inventario reactivo.", icon: <LayoutDashboard className="text-primary" /> },
        { label: "Validación Automática", description: "Control de stock en tiempo real integrado con ventas.", icon: <CheckCircle2 className="text-primary" /> },
        { label: "Gobernanza de Datos", description: "Protocolos estrictos de calidad y registro de movimientos.", icon: <Database className="text-primary" /> },
        { label: "Eficiencia B2B", description: "Diseñado específicamente para el flujo mayorista de Pinval.", icon: <Globe className="text-primary" /> }
      ]
    },
    {
      id: 5,
      section: "04. COMPLIANCE",
      title: "Marco Legal y Ético",
      subtitle: "Protección de datos y estándares chilenos",
      type: "tech",
      content: (
        <div className="space-y-8 w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-slate-200 bg-white shadow-sm">
              <div className="text-[10px] text-gold font-bold mb-2 uppercase tracking-widest">Ley 21.719</div>
              <p className="text-sm text-slate-600 font-light leading-relaxed">Protección de los datos personales: recolección, almacenamiento y uso legítimo asegurando privacidad absoluta.</p>
            </div>
            <div className="p-6 border border-slate-200 bg-white shadow-sm">
               <div className="text-[10px] text-gold font-bold mb-2 uppercase tracking-widest">Ley 21.663</div>
               <p className="text-sm text-slate-600 font-light leading-relaxed">Obligaciones de seguridad de la información y responsabilidad proactiva en el manejo de activos digitales.</p>
            </div>
          </div>
          <div className="flex justify-between items-center px-10 py-6 bg-primary text-white">
             <div className="flex items-center gap-4">
                <Scale className="w-6 h-6 text-gold" />
                <span className="font-serif italic text-lg">Inclusión Digital</span>
             </div>
             <p className="text-xs text-slate-400 italic max-w-sm text-right">Diseño intuitivo que garantiza que ningún operario quede excluido por experiencia técnica.</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      section: "05. TECNOLOGÍA",
      title: "Arquitectura del Sistema",
      subtitle: "Componentes técnicos y stack de desarrollo",
      type: "tech",
      content: (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {[
            { name: "PostgreSQL", use: "Base de Datos", icon: <Database />, detail: "Integridad ACID" },
            { name: "Node.js", use: "Servidor API", icon: <Cpu />, detail: "Escalabilidad" },
            { name: "React + TS", use: "Interfaz Web", icon: <Globe />, detail: "Modularidad" },
            { name: "Selenium", use: "Quality Assurance", icon: <ShieldCheck />, detail: "Automatización" }
          ].map((tech, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 flex flex-col items-center text-center gap-3">
              <div className="text-primary mb-2">{tech.icon}</div>
              <h5 className="font-bold text-primary text-sm tracking-tight">{tech.name}</h5>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">{tech.use}</p>
              <div className="h-px w-8 bg-gold/30 mt-2" />
              <p className="text-xs text-slate-500 italic mt-1">{tech.detail}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 7,
      section: "06. EQUIPO",
      title: "Estructura del Proyecto",
      subtitle: "Responsabilidades y roles estratégicos",
      type: "grid",
      items: [
        { label: "Jorge Manriquez", description: "Product Owner", detail: "Visión estratégica y cliente" },
        { label: "Santiago Mora", description: "DB Analyst", detail: "Diseño y estructura de datos" },
        { label: "Constanza Arce", description: "Governance Eng.", detail: "Políticas y calidad de datos" },
        { label: "Josue Campusano", description: "QA Lead", detail: "Aseguramiento y estabilidad" }
      ]
    },
    {
      id: 8,
      title: "Fin de la Propuesta",
      subtitle: "Gracias por su atención",
      type: "title",
      content: (
        <div className="flex flex-col items-center gap-12 mt-12">
           <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-gold" />
           </div>
           <div className="space-y-2 text-center">
              <p className="text-primary font-serif text-xl italic underline underline-offset-8 decoration-gold/50">¿Consultas o Dudas?</p>
              <p className="text-slate-400 font-mono text-xs mt-4">SICD SYSTEM • PINVAL 2026</p>
           </div>
        </div>
      )
    }
  ];

  const handleNext = useCallback(() => {
    if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
  }, [currentSlide, slides.length]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-4 bg-[#e2e8f0]">
      
      {/* Slide Container (16:9 feel) */}
      <div className="w-full max-w-6xl aspect-[16/9] bg-pearl shadow-2xl relative flex flex-col overflow-hidden border border-white/50">
        
        {/* Header decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute top-12 left-12 h-6 w-px bg-gold pointer-events-none" />

        {/* Slide Content */}
        <div className="flex-1 p-16 flex flex-col relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 flex flex-col"
            >
              {/* Top Meta */}
              {slides[currentSlide].section && (
                <motion.div 
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="mb-8 flex items-center gap-3"
                >
                  <span className="text-[10px] font-mono font-bold text-gold tracking-widest uppercase">{slides[currentSlide].section}</span>
                  <div className="h-px flex-1 bg-slate-200" />
                </motion.div>
              )}

              {/* Title Section */}
              <div className="mb-12">
                <motion.h2 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className={`font-serif text-primary leading-tight ${slides[currentSlide].type === 'title' ? 'text-7xl md:text-8xl text-center mb-4 pt-12' : 'text-5xl mb-2'}`}
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.p 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className={`${slides[currentSlide].type === 'title' ? 'text-center text-slate-400' : 'text-gold italic text-xl'}`}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col justify-center">
                {slides[currentSlide].content}
                
                {slides[currentSlide].items && (
                  <div className={`grid gap-6 ${slides[currentSlide].items.length > 2 ? 'grid-cols-2' : 'grid-cols-1 max-w-2xl mx-auto'}`}>
                    {slides[currentSlide].items.map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="flex items-start gap-4 p-6 bg-white border border-slate-100 shadow-sm hover:border-gold/30 transition-colors"
                      >
                        <div className="mt-1">{item.icon || <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />}</div>
                        <div>
                          <h4 className="font-bold text-primary mb-1">{item.label}</h4>
                          <p className="text-sm text-slate-500 font-light leading-relaxed">{item.description}</p>
                          {item.detail && <p className="text-[10px] text-gold mt-2 font-mono uppercase tracking-widest">{item.detail}</p>}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Area */}
        <div className="px-12 py-8 flex items-center justify-between border-t border-slate-200/50 bg-slate-50/50">
          <div className="flex items-center gap-4">
             <div className="h-6 w-6 bg-primary rotate-45 flex items-center justify-center">
                <div className="h-3 w-3 bg-gold rotate-12" />
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-bold text-primary tracking-tighter uppercase leading-none">SICD System</span>
                <span className="text-[8px] text-slate-400 uppercase tracking-widest leading-none mt-1">Gobernanza de Datos • Pinval</span>
             </div>
          </div>

          <div className="flex items-center gap-12">
             <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-gold italic">Confidencial</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[10px] font-mono text-slate-400">B2B Logistic Proposal</span>
             </div>
             <div className="text-xs font-serif italic text-primary">
                {String(currentSlide + 1).padStart(2, '0')}
             </div>
          </div>
        </div>

        {/* Controls Layer */}
        <div className="absolute inset-y-0 left-0 w-24 group">
          <button 
            onClick={handlePrev}
            className="h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden"
            disabled={currentSlide === 0}
          >
            <div className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-primary hover:border-gold transition-all">
              <ChevronLeft size={20} />
            </div>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 w-24 group">
          <button 
            onClick={handleNext}
            className="h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden"
            disabled={currentSlide === slides.length - 1}
          >
            <div className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-primary hover:border-gold transition-all">
              <ChevronRight size={20} />
            </div>
          </button>
        </div>
      </div>

      {/* Floating Navigator */}
      <div className="mt-8 px-6 py-2 bg-white rounded-full shadow-lg border border-slate-200 flex items-center gap-4">
        <button onClick={handlePrev} disabled={currentSlide === 0} className="text-slate-400 hover:text-primary disabled:opacity-30"><ChevronLeft size={18} /></button>
        <div className="flex gap-2">
           {slides.map((_, i) => (
             <div 
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 w-6 rounded-full cursor-pointer transition-all duration-300 ${i === currentSlide ? 'bg-primary shadow-[0_0_8px_rgba(30,41,59,0.3)]' : 'bg-slate-200 hover:bg-slate-300'}`} 
             />
           ))}
        </div>
        <button onClick={handleNext} disabled={currentSlide === slides.length - 1} className="text-slate-400 hover:text-primary disabled:opacity-30"><ChevronRight size={18} /></button>
      </div>

      <div className="mt-4 text-[10px] text-slate-400 font-mono tracking-widest uppercase flex items-center gap-4">
         <span>Use keyboard arrows</span>
         <div className="h-px w-8 bg-slate-300" />
         <span>Created with AI Studio Build</span>
      </div>
    </div>
  );
}
