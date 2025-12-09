import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Camila Nunes",
      role: "Cliente Satisfeita",
      text: "Achei eles aqui pelo Google e confesso que fiquei um pouco cabreira no início, pois não conhecia o trabalho deles. Mas fui surpreendida, o trabalho deles é impecável. O letreiro ficou lindo e eles são super atenciosos. Recomendo muito!",
    },
    {
      name: "Espaço Gomes Festas",
      role: "Cliente Satisfeito",
      text: "Um lugar incrível, bastante reservado, aconchegante, arejado, perfeito para qualquer tipo de evento! Conheçam o espaço e desfrute desse ambiente perfeito!",
    },
    {
      name: "Delrio Atacadão do Piso",
      role: "Cliente Satisfeita",
      text: "Como sempre o atendimento maravilhoso, profissionais atenciosas e dedicadas! Fui atendida hoje pela Joyce através do WhatsApp, e ela facilitou muito minha compra, me atendendo de forma rápida e objetiva! Obrigada! Super recomendo!!!!!!",
    },
  ];

  return (
    <section className="py-24 bg-projettar-light border-t border-gray-200" id="depoimentos">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
            <span className="text-xs font-bold text-projettar-red uppercase tracking-[0.25em] mb-3 block">
                Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-projettar-black leading-tight">
                O que nossos clientes dizem
                <span className="block w-20 h-1.5 bg-projettar-red mx-auto mt-6 rounded-full"></span>
            </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {testimonials.map((item, index) => (
                <div 
                    key={index}
                    className="flex flex-col h-full bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
                >
                    {/* Ícone de Aspas Decorativo */}
                    <div className="absolute top-6 right-6 text-projettar-red opacity-10 group-hover:opacity-20 transition-opacity">
                        <Quote size={48} fill="currentColor" />
                    </div>

                    {/* Estrelas */}
                    <div className="flex gap-1 text-projettar-red mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} fill="currentColor" size={18} />
                        ))}
                    </div>

                    {/* Texto (flex-grow garante que o rodapé fique alinhado) */}
                    <div className="flex-grow">
                        <p className="text-projettar-grey text-sm md:text-base leading-relaxed font-medium italic">
                            "{item.text}"
                        </p>
                    </div>

                    {/* Separador visual */}
                    <div className="w-full h-px bg-gray-100 my-6"></div>

                    {/* Autor */}
                    <div>
                        <p className="font-black text-projettar-black text-sm uppercase tracking-wide">
                            {item.name}
                        </p>
                        <p className="text-xs text-gray-400 font-bold mt-1">
                            {item.role}
                        </p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;