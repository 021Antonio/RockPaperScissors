"use client";

import React from 'react';
import { PenTool, Hammer, Truck, Wrench, RefreshCw, Layers, ChevronRight } from 'lucide-react';

const Solucao360 = () => {
  const steps = [
    { icon: PenTool, label: "Design", desc: "Concepção criativa", angle: 270 },
    { icon: Layers, label: "Projeto", desc: "Documentação executiva", angle: 330 },
    { icon: Hammer, label: "Fabricação", desc: "Indústria 4.0", angle: 30 },
    { icon: Truck, label: "Logística", desc: "Frota e entrega", angle: 90 },
    { icon: Wrench, label: "Instalação", desc: "Equipe certificada", angle: 150 },
    { icon: RefreshCw, label: "Manutenção", desc: "Pós-venda ativo", angle: 210 },
  ];

  // Ângulos para as setinhas
  const arrowAngles = [300, 0, 60, 120, 180, 240];

  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-projettar-light border-y border-gray-200 relative overflow-hidden">
      
      {/* Definição das animações personalizadas localmente */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 60s linear infinite;
        }
      `}</style>

      {/* Textura de fundo sutil */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            
            {/* ESQUERDA: TEXTO */}
            <div className="w-full lg:w-5/12 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-projettar-black mb-8 leading-tight">
                    Rapidez, Qualidade e <br/><span className="text-projettar-red">Gestão Total.</span>
                </h2>
                <div className="space-y-6 text-lg text-projettar-grey leading-relaxed font-medium">
                    <p>
                        Nossa solução 360º é pensada para que você se preocupe apenas com seu negócio principal.
                    </p>
                    <p className="text-projettar-black font-bold border-l-4 border-projettar-red pl-4 py-2 bg-white shadow-sm rounded-r-lg">
                        Da ideia inicial à manutenção contínua, a Projettar oferece um ciclo integrado sem terceirização de responsabilidade.
                    </p>
                </div>
            </div>

            {/* DIREITA: CICLO VISUAL */}
            <div className="w-full lg:w-7/12 flex justify-center py-6 lg:py-12">
                
                {/* --- VERSÃO MOBILE (GRID ESTÁTICO) --- */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:hidden w-full">
                    {steps.map((item, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
                            {idx < steps.length - 1 && (
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-200 md:hidden">
                                    <ChevronRight size={16} />
                                </div>
                            )}
                            <div className="text-projettar-red mb-2 bg-red-50 p-3 rounded-full">
                                <item.icon size={24} />
                            </div>
                            <h4 className="font-bold text-projettar-black text-sm uppercase">{item.label}</h4>
                            <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* --- VERSÃO DESKTOP (CÍRCULO COM SERVIÇOS GIRATÓRIOS) --- */}
                <div className="hidden lg:block relative w-[480px] h-[480px]">
                    
                    {/* 1. Base Estática (O Aro Branco - Fica parado) */}
                    <div className="absolute inset-8 border-4 border-white bg-white/50 backdrop-blur-sm shadow-xl rounded-full z-0"></div>
                    
                    {/* 2. Container Giratório (Leva os serviços e setas) */}
                    <div className="absolute inset-0 z-10 animate-spin-slow pointer-events-none">
                        
                        {/* Setinhas (Giram junto com o aro invisível) */}
                        {arrowAngles.map((angle, idx) => (
                             <div 
                                key={`arrow-${idx}`}
                                className="absolute top-1/2 left-1/2 text-projettar-red/40"
                                style={{ 
                                    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(185px) rotate(90deg)` 
                                }}
                             >
                                 <ChevronRight size={24} strokeWidth={3} />
                             </div>
                        ))}

                        {/* Serviços (Ícones e Texto) */}
                        {steps.map((item, idx) => {
                            const angleRad = (item.angle * Math.PI) / 180;
                            const radius = 45; // Raio em porcentagem (ajuste para afastar/aproximar do centro)
                            const top = 50 + radius * Math.sin(angleRad); 
                            const left = 50 + radius * Math.cos(angleRad);
                            
                            return (
                                <div 
                                    key={idx} 
                                    className="absolute flex items-center justify-center w-0 h-0 pointer-events-auto" 
                                    style={{ top: `${top}%`, left: `${left}%` }}
                                >
                                    <div className="flex flex-col items-center group cursor-default animate-spin-slow-reverse transform -translate-x-1/2 -translate-y-1/2">
                                        
                                        <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] border-2 border-gray-50 flex items-center justify-center text-projettar-red transition-all duration-300 group-hover:scale-110 group-hover:bg-projettar-red group-hover:text-white group-hover:border-projettar-red group-hover:shadow-projettar-red/30 relative z-20">
                                            <item.icon size={32} strokeWidth={1.5} />
                                        </div>
                                        
                                        <div className="mt-4 flex flex-col items-center text-center bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-gray-100 group-hover:border-projettar-red/50 transition-colors z-10">
                                            <span className="text-sm font-black text-projettar-black uppercase tracking-wider whitespace-nowrap">
                                                {item.label}
                                            </span>
                                            <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap">
                                                {item.desc}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* 3. Núcleo Central (Logo Estática) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-32 h-32 bg-white rounded-2xl shadow-[0_0_30px_-5px_rgba(0,0,0,0.1)] border-4 border-gray-50 flex items-center justify-center transform rotate-45 overflow-hidden relative group cursor-default transition-transform duration-500 hover:scale-105">
                             <div className="absolute inset-0 bg-gradient-to-br from-projettar-red to-[#8B181C] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                             <img 
                                src="/img/logo1.png" 
                                alt="Logo Projettar" 
                                className="w-22 h-auto object-contain transform -rotate-45 relative z-10 group-hover:brightness-0 group-hover:invert transition-all duration-500" 
                             />
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solucao360;