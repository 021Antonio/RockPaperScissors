import React from 'react';

const Clientes = () => {
  const logos = [
    { name: "Petrobras", src: "/img/clientes/petrobras.png", height: "h-16 md:h-20" },
    { name: "Vó Alzira", src: "/img/clientes/voalzira.png", height: "h-12 md:h-16" },
    { name: "Smartfit", src: "/img/clientes/smartfit.png", height: "h-16 md:h-20" },
  ];

  return (
    // MUDANÇA: bg-white
    <section id="clientes" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
                Empresas que confiam na Projettar
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                {logos.map((logo, index) => (
                    <img 
                        key={index}
                        src={logo.src} 
                        alt={logo.name} 
                        className={`${logo.height} w-auto object-contain hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100`}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;