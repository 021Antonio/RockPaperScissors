"use client";
import React, { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.2 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    let frameId: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));
      if (progress < 1) frameId = window.requestAnimationFrame(step);
      else setCount(end);
    };
    frameId = window.requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{count}</span>;
};

const Stats = () => {
  return (
    // VOLTOU PARA O BRANCO (Clean)
    <section className="py-24 bg-white border-b border-gray-100 relative">
      <div className="container mx-auto px-6 text-center">
        
        <h3 className="text-2xl md:text-3xl font-black text-projettar-black uppercase mb-16 tracking-[0.2em]">
            Há mais de 3 anos no mercado
            <span className="block w-24 h-1 bg-projettar-red mx-auto mt-6"></span>
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0">
            {/* ITEM 1 */}
            <div className="flex-1 px-4 group cursor-default">
                <div className="flex justify-center items-baseline text-6xl md:text-7xl font-black text-projettar-red mb-2 tracking-tighter">
                    <span>+</span><AnimatedCounter end={500} />
                </div>
                <span className="text-projettar-black font-bold text-sm md:text-base uppercase tracking-widest">Letreiros Instalados</span>
            </div>
            
            <div className="hidden md:block w-px h-24 bg-gray-200 mx-8"></div>
            
            {/* ITEM 2 */}
            <div className="flex-1 px-4 group cursor-default">
                <div className="flex justify-center items-baseline text-6xl md:text-7xl font-black text-projettar-red mb-2 tracking-tighter">
                    <span>+</span><AnimatedCounter end={300} />
                </div>
                <span className="text-projettar-black font-bold text-sm md:text-base uppercase tracking-widest">Clientes Atendidos</span>
            </div>
            
            <div className="hidden md:block w-px h-24 bg-gray-200 mx-8"></div>

            {/* ITEM 3 */}
            <div className="flex-1 px-4 group cursor-default">
                <div className="flex justify-center items-baseline text-6xl md:text-7xl font-black text-projettar-red mb-2 tracking-tighter">
                    <span>+</span><AnimatedCounter end={50} />
                </div>
                <span className="text-projettar-black font-bold text-sm md:text-base uppercase tracking-widest">Em nosso time</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;