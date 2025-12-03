import React from 'react';

const HeroFachadas = () => {
  return (
    <section className="relative pt-40 pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* ESQUERDA: TEXTO DE IMPACTO */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-projettar-black leading-[1.1] tracking-tight">
              Especialistas em Construção de <br />
              <span className="text-projettar-red inline-block relative z-10">
                 Fachadas e Letreiros
                 {/* Sublinhado sutil */}
                 <span className="absolute bottom-1 left-0 w-full h-3 bg-red-100 -z-10 opacity-50"></span>
              </span>
            </h1>
            
            <div className="border-l-[6px] border-projettar-red pl-6 py-2">
                <p className="text-xl text-projettar-grey font-medium leading-relaxed max-w-xl">
                <strong>Projetamos a sua marca contra a invisibilidade e o amadorismo:</strong> Implemente agora uma fachada que atrai, impressiona e dura, transformando quem passa em quem compra.
                </p>
            </div>

            <div className="mt-4">
              <a 
                href="#contato" 
                className="inline-block w-full md:w-auto text-center bg-projettar-red hover:bg-[#A0181D] text-white text-lg font-bold px-12 py-5 rounded shadow-xl hover:shadow-projettar-red/30 hover:-translate-y-1 transition-all duration-300"
              >
                Fale com um especialista
              </a>
              <p className="mt-4 text-sm text-projettar-grey flex items-center gap-2 font-semibold">
                 <span className="w-2 h-2 bg-projettar-red rounded-full animate-pulse"></span>
                 Metodologia validada por grandes marcas.
              </p>
            </div>
          </div>

          {/* DIREITA: VISUAL TÉCNICO (Placeholder Premium) */}
          <div className="w-full lg:w-1/2 relative">
             {/* Moldura de engenharia */}
             <div className="relative aspect-[4/3] bg-gray-50 rounded-lg shadow-2xl border-2 border-gray-100 flex items-center justify-center group overflow-hidden perspective-1000">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-50 via-gray-100 to-gray-200 opacity-50"></div>
                
                <div className="text-center z-10 transform group-hover:scale-105 transition-duration-500 p-8 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                    <div className="w-20 h-20 mx-auto mb-5 bg-projettar-light rounded-full shadow-inner border border-gray-200 flex items-center justify-center text-3xl text-gray-300">📷</div>
                    <p className="text-sm font-black text-projettar-black uppercase tracking-[0.2em] mb-2">Exemplo de Fachada</p>
                    <span className="text-xs font-bold text-projettar-red bg-red-50 px-3 py-1 rounded-full">Acabamento Industrial</span>
                </div>
             </div>
             {/* Elemento gráfico de marca atrás */}
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-projettar-red/5 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroFachadas;