import React from 'react';

const CallToAction = () => {
  return (
    // Fundo Degradê Vermelho da Marca (Destaque Premium)
    <section className="py-24 bg-gradient-to-r from-projettar-red to-projettar-darkRed text-white relative overflow-hidden">
      
      {/* Elemento decorativo sutil (brilho) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        
        {/* Copy solicitada no PDF */}
        <h2 className="text-2xl md:text-4xl font-extrabold mb-10 leading-snug max-w-4xl mx-auto drop-shadow-sm">
          "Você investe milhões na excelência interna da sua empresa, mas o que o cliente vê primeiro? <br/>
          <span className="text-white bg-white/20 px-2 rounded">A fachada.</span>"
        </h2>

        {/* Botão de Ação (Invertido: Branco com texto Vermelho) */}
        <a 
          href="#contato" 
          className="inline-block bg-white text-projettar-red hover:bg-gray-100 font-bold text-lg px-10 py-4 rounded shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          Fale com um especialista
        </a>

      </div>
    </section>
  );
};

export default CallToAction;