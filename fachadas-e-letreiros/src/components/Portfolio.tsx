import React from 'react';
import { Image as ImageIcon, PencilRuler, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    { title: "Fachadas", desc: "Revestimento em ACM, projetos comerciais e retrofit de fachadas." },
    { title: "Letras / Iluminação", desc: "Letras caixa, LED, neon, backlight e frontlight." },
    { title: "Comunicação Interna", desc: "Sinalização corporativa, ambientação e placas de setorização." },
    { title: "Impressão", desc: "Impressão digital de alta resolução em lonas, adesivos e banners." },
    { title: "Envelopamento", desc: "Personalização de frotas comerciais e veículos utilitários." },
    { title: "Estruturas", desc: "Totens, pórticos e estruturas metálicas certificadas." },
  ];

  return (
    <section id="portfolio" className="py-24 bg-projettar-light border-b border-gray-200 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-projettar-black mb-4">
            Cada detalhe da presença visual <br/>
            <span className="text-projettar-red">da sua empresa em um único lugar.</span>
          </h2>
          <div className="w-20 h-1.5 bg-projettar-red mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* --- CARD DE DESTAQUE: CRIAÇÃO DE PROJETO (Layout Split Grande) --- */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 group relative rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[400px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            
            {/* 1. ÁREA DA FOTO (Lado Esquerdo - 50% de largura) */}
            <div className="w-full md:w-1/2 relative bg-gray-100 overflow-hidden">
                {/* IMAGEM REAL:
                   <img 
                      src="/caminho/para/sua-foto-de-projeto.jpg" 
                      alt="Criação de Projeto" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                */}
                
                {/* Placeholder visual da foto */}
                <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                     <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                     <div className="flex flex-col items-center text-gray-400">
                        <ImageIcon className="w-16 h-16 mb-2 opacity-50" />
                        <span className="text-xs font-bold uppercase tracking-widest">Foto do Projeto</span>
                     </div>
                </div>

                {/* Overlay sutil para garantir contraste se a foto for muito clara na borda */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 md:to-transparent"></div>
            </div>

            {/* 2. ÁREA DO CONTEÚDO (Lado Direito - 50% de largura) */}
            <div className="w-full md:w-1/2 relative p-10 md:p-14 flex flex-col justify-center">
                
                {/* Fundo Gradiente Vermelho (Idêntico ao que você gostou) */}
                <div className="absolute inset-0 bg-gradient-to-br from-projettar-red to-[#8B181C]"></div>
                
                {/* Decoração de Fundo */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                    {/* Ícone (Movido para cá para acompanhar o texto) */}
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm mb-8 border border-white/20 shadow-lg">
                         <PencilRuler className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
                        Criação de Projeto
                    </h3>
                    
                    <p className="text-white/90 text-lg leading-relaxed font-medium mb-8 border-l-4 border-white/30 pl-6">
                        Desde a criação de logo até o projeto executivo. Transformamos sua ideia em documentação técnica precisa e design impactante.
                    </p>
                </div>
            </div>
          </div>

          {/* --- CARDS PADRÃO --- */}
          {portfolioItems.map((item, index) => (
            <div 
                key={index} 
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-projettar-red/10 hover:-translate-y-2 hover:border-projettar-red/40 cursor-default flex flex-col overflow-hidden"
            >
              <div className="h-64 w-full bg-gray-50 relative overflow-hidden flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <div className="flex flex-col items-center justify-center text-gray-300 z-10">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-3">
                         <ImageIcon className="w-8 h-8 text-gray-300" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Foto do Projeto</span>
                  </div>
              </div>

              <div className="p-8 flex flex-col flex-grow bg-white relative">
                  <h3 className="text-xl font-black text-projettar-black mb-3 group-hover:text-projettar-red transition-colors">
                      {item.title}
                  </h3>
                  <p className="text-projettar-grey text-sm leading-relaxed font-medium">
                      {item.desc}
                  </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
             <a 
                href="#contato" 
                className="inline-flex items-center gap-2 border-2 border-projettar-red text-projettar-red hover:bg-projettar-red hover:text-white font-bold text-base px-8 py-3 rounded transition-all duration-300 uppercase tracking-wider"
             >
                Solicitar Orçamento Personalizado
             </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;