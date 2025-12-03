import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    // MUDANÇA: bg-projettar-light (Cinza) e bordas ajustadas
    <section className="py-24 bg-projettar-light border-t border-gray-200" id="depoimentos">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        
        <div className="mb-16">
            <span className="text-xs font-bold text-projettar-red uppercase tracking-[0.25em] mb-3 block">
                Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-projettar-black leading-tight">
                O que nossos clientes dizem
            </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-left relative">
                <div className="absolute top-8 right-8 text-6xl text-projettar-red font-serif leading-none opacity-20">"</div>
                <div className="flex gap-1 text-projettar-red mb-4">
                    <Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/>
                </div>
                <p className="text-projettar-grey text-sm leading-relaxed mb-6 font-medium">
                    Excelente fábrica. Limpa e muito segura. Produto de excelente qualidade por bons preços. Recomendo.
                </p>
                <div>
                    <p className="font-black text-projettar-black text-sm uppercase tracking-wide">Fabio Zafalon</p>
                    <p className="text-xs text-gray-400">Cliente Satisfeito</p>
                </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-left relative">
                <div className="absolute top-8 right-8 text-6xl text-projettar-red font-serif leading-none opacity-20">"</div>
                <div className="flex gap-1 text-projettar-red mb-4">
                    <Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/>
                </div>
                <p className="text-projettar-grey text-sm leading-relaxed mb-6 font-medium">
                    Em termos de qualidade de produto e serviço, não há ninguém melhor no país.
                </p>
                <div>
                    <p className="font-black text-projettar-black text-sm uppercase tracking-wide">Igor SL</p>
                    <p className="text-xs text-gray-400">Cliente Satisfeito</p>
                </div>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-left relative">
                <div className="absolute top-8 right-8 text-6xl text-projettar-red font-serif leading-none opacity-20">"</div>
                <div className="flex gap-1 text-projettar-red mb-4">
                    <Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/>
                </div>
                <p className="text-projettar-grey text-sm leading-relaxed mb-6 font-medium">
                    Uma excelente empresa, atendimento impecável e resultado acima do esperado.
                </p>
                <div>
                    <p className="font-black text-projettar-black text-sm uppercase tracking-wide">Nicole Calça</p>
                    <p className="text-xs text-gray-400">Cliente Satisfeita</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;