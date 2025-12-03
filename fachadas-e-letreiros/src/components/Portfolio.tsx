import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    // [cite: 5]
    { title: "Fachadas", desc: "Revestimento em ACM, projetos comerciais e retrofit de fachadas." },
    // [cite: 6]
    { title: "Letras / Iluminação", desc: "Letras caixa, LED, neon, backlight e frontlight." },
    // [cite: 7]
    { title: "Comunicação Interna", desc: "Sinalização corporativa, ambientação e placas de setorização." },
    // [cite: 8]
    { title: "Impressão", desc: "Impressão digital de alta resolução em lonas, adesivos e banners." },
    // [cite: 9]
    { title: "Envelopamento", desc: "Personalização de frotas comerciais e veículos utilitários." },
    // [cite: 10]
    { title: "Estruturas", desc: "Totens, pórticos e estruturas metálicas certificadas." },
  ];

  return (
    <section id="portfolio" className="py-24 bg-projettar-light border-b border-gray-200 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
           {/* [cite: 3] Sugestão do PDF para ajustar títulos se desejar, mantive o foco na copy visual */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-projettar-black mb-4">
            Cada detalhe da presença visual <br/>
            <span className="text-projettar-red">da sua empresa em um único lugar.</span>
          </h2>
          <div className="w-20 h-1.5 bg-projettar-red mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <div 
                key={index} 
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-projettar-red/10 hover:-translate-y-2 hover:border-projettar-red/40 cursor-default flex flex-col overflow-hidden"
            >
              <div className="h-64 w-full bg-gray-50 relative overflow-hidden flex items-center justify-center">
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

        {/* --- NOVO CTA DE ENCERRAMENTO DA SEÇÃO --- */}
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