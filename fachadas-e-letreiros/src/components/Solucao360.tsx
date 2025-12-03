import React from 'react';
import { PenTool, Hammer, Truck, Wrench, RefreshCw, Layers } from 'lucide-react';

const Solucao360 = () => {
  const steps = [
    { icon: Layers, label: "1. Serviço", desc: "Análise técnica", angle: 270 },
    { icon: PenTool, label: "2. Design", desc: "Projeto executivo", angle: 330 },
    { icon: Wrench, label: "3. Instalação", desc: "Equipe certificada", angle: 30 },
    { icon: RefreshCw, label: "4. Manutenção", desc: "Pós-venda ativo", angle: 90 },
    { icon: Truck, label: "5. Logística", desc: "Frota própria", angle: 150 },
    { icon: Hammer, label: "6. Fabricação", desc: "Indústria 4.0", angle: 210 },
  ];

  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-projettar-light border-y border-gray-200 relative overflow-hidden">
      {/* Textura de fundo */}
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
                        Nossa solução é pensada para que você se preocupe apenas com seu negócio.
                    </p>
                    <p className="text-projettar-black font-bold border-l-4 border-projettar-red pl-4 py-2 bg-white shadow-sm rounded-r-lg">
                        Da ideia à inauguração, a Projettar oferece um serviço integrado sem terceirização de responsabilidade.
                    </p>
                </div>
            </div>

            {/* DIREITA: CICLO VISUAL */}
            <div className="w-full lg:w-7/12 flex justify-center py-6 lg:py-12">
                
                {/* --- VERSÃO MOBILE (GRID ESTÁTICO) --- */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:hidden w-full">
                    {steps.map((item, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="text-projettar-red mb-2 bg-red-50 p-3 rounded-full">
                                <item.icon size={24} />
                            </div>
                            <h4 className="font-bold text-projettar-black text-sm uppercase">{item.label}</h4>
                            <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* --- VERSÃO DESKTOP (CÍRCULO ESTÁTICO) --- */}
                <div className="hidden lg:block relative w-[450px] h-[450px]">
                    
                    <div className="absolute inset-8 border-2 border-white bg-white shadow-lg rounded-full"></div>
                    <div className="absolute inset-[60px] border border-dashed border-gray-300 rounded-full"></div>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-28 h-28 bg-white rounded-xl shadow-xl shadow-gray-200 border-4 border-gray-50 flex items-center justify-center transform rotate-45 overflow-hidden relative group cursor-default">
                             <div className="absolute inset-0 bg-projettar-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                             <img 
                                src="/img/logo.png" 
                                alt="Logo Projettar" 
                                className="w-20 h-auto object-contain transform -rotate-45 relative z-10 group-hover:brightness-0 group-hover:invert transition-all duration-500" 
                             />
                        </div>
                    </div>

                    {steps.map((item, idx) => {
                        const angleRad = (item.angle * Math.PI) / 180;
                        const radius = 46; 
                        const top = 50 + radius * Math.sin(angleRad); 
                        const left = 50 + radius * Math.cos(angleRad);
                        return (
                            <div key={idx} className="absolute flex flex-col items-center group cursor-pointer" style={{ top: `${top}%`, left: `${left}%`, transform: 'translate(-50%, -50%)' }}>
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-md border-2 border-gray-50 flex items-center justify-center text-projettar-red transition-all duration-300 group-hover:scale-110 group-hover:bg-projettar-red group-hover:text-white z-20 relative">
                                    <item.icon size={28} />
                                </div>
                                <span className="mt-3 text-[10px] font-black text-projettar-black uppercase tracking-wider bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 z-30 whitespace-nowrap group-hover:border-projettar-red transition-colors">
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solucao360;