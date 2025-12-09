"use client";

import React from 'react';
import { Printer, Cpu, Zap, ScanLine, Settings, Crosshair } from 'lucide-react';

const Equipamentos = () => {
  const machines = [
    { 
      title: "Router CNC de Grande Formato", 
      desc: "Corte computadorizado de alta precisão para ACM, PVC expandido, acrílico e madeira.",
      icon: Cpu 
    },
    { 
      title: "Impressora UV Industrial", 
      desc: "Impressão direta em substratos rígidos com cura UV, garantindo durabilidade e cores vivas.",
      icon: Printer 
    },
    { 
      title: "Corte a Laser CO2", 
      desc: "Acabamento perfeito e polido para letras caixa e detalhes finos em acrílico.",
      icon: Zap 
    },
    { 
      title: "Plotter de Recorte Eletrônico", 
      desc: "Precisão milimétrica para adesivos de vinil, envelopamento e máscaras de pintura.",
      icon: Crosshair 
    },
  ];

  return (
    <section id="equipamentos" className="py-24 bg-white border-t border-gray-100 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-projettar-red uppercase tracking-[0.25em] mb-3 block">
             Nossa Estrutura
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-projettar-black mb-4">
            Tecnologia de ponta para <br/>
            <span className="text-projettar-red">execução perfeita.</span>
          </h2>
          <div className="w-20 h-1.5 bg-projettar-red mx-auto rounded-full mt-6"></div>
          <p className="mt-6 text-lg text-projettar-grey max-w-2xl mx-auto font-medium">
            Não terceirizamos responsabilidade. Possuímos parque industrial próprio para garantir o prazo e a qualidade que prometemos.
          </p>
        </div>

        {/* --- GRID DE EQUIPAMENTOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {machines.map((item, index) => (
            <div 
                key={index} 
                className="group bg-projettar-light rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Área da Imagem (Placeholder) */}
              <div className="h-48 w-full bg-gray-200 relative overflow-hidden flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                  <div className="flex flex-col items-center justify-center text-gray-400">
                      <div className="w-12 h-12 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm mb-2">
                         <item.icon className="w-6 h-6 text-gray-500" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Foto da Máquina</span>
                  </div>
                  
                  {/* Overlay Gradiente Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-black text-projettar-black mb-3 leading-tight group-hover:text-projettar-red transition-colors">
                      {item.title}
                  </h3>
                  <p className="text-projettar-grey text-sm leading-relaxed font-medium">
                      {item.desc}
                  </p>
                  
                  {/* Detalhe Decorativo Inferior */}
                  <div className="mt-auto pt-4 flex items-center gap-2">
                      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-0 bg-projettar-red group-hover:w-full transition-all duration-700 ease-out"></div>
                      </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-32 pt-10 border-t border-gray-200 text-sm text-gray-400">
           <div className="flex justify-between text-xs">
             <p>© 2025 Projettar. Todos os direitos reservados.</p>
             <p className="font-semibold">© Criado por Orked e DevForge</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Equipamentos;