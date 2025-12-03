import React from 'react';
import { Target, Eye, Diamond, CheckCircle2 } from 'lucide-react';

const WhyUs = () => {
  return (
    // MUDANÇA: bg-projettar-light (Cinza)
    <section id="sobre" className="py-28 bg-projettar-light relative overflow-hidden border-b border-gray-200">
      {/* ... (O conteúdo interno permanece IDÊNTICO, só mudamos a linha acima) ... */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- BLOCO 1: INSTITUCIONAL --- */}
        <div className="mb-24">
            <div className="text-center mb-16">
                <span className="text-xs font-bold text-projettar-red uppercase tracking-[0.25em] mb-3 block">
                    Quem Somos
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-projettar-black mb-6">
                    Engenharia e Criatividade <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-projettar-red to-projettar-darkRed">
                        Unidas pelo Excelência.
                    </span>
                </h2>
                <p className="text-lg text-projettar-grey max-w-3xl mx-auto leading-relaxed">
                    Mais do que fabricar letreiros, nós materializamos a autoridade da sua marca através de estruturas físicas de alto impacto.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* MISSÃO */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-projettar-red/20 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Target className="w-7 h-7 text-projettar-red" />
                    </div>
                    <h3 className="text-xl font-black text-projettar-black mb-4 uppercase tracking-wide">Missão</h3>
                    <p className="text-projettar-grey text-sm leading-relaxed">
                        Transformar marcas em estruturas físicas de impacto, criando fachadas e letreiros com alto padrão estético, segurança técnica e integração total com o DNA de excelência do Grupo Projettar.
                    </p>
                </div>

                {/* VISÃO */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-projettar-red/20 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Eye className="w-7 h-7 text-projettar-red" />
                    </div>
                    <h3 className="text-xl font-black text-projettar-black mb-4 uppercase tracking-wide">Visão</h3>
                    <p className="text-projettar-grey text-sm leading-relaxed">
                        Ser líder nacional em comunicação visual arquitetônica, reconhecida pela capacidade de unir criatividade, engenharia e produção industrial em soluções que elevam a presença dos clientes.
                    </p>
                </div>

                {/* VALORES */}
                <div className="bg-projettar-red p-8 rounded-2xl border border-projettar-red shadow-2xl text-white group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Diamond className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-black mb-4 uppercase tracking-wide">Valores</h3>
                    <ul className="space-y-3 text-sm font-medium opacity-90">
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/80" />
                            <span>Criatividade com responsabilidade técnica.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/80" />
                            <span>Precisão e acabamento de excelência.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/80" />
                            <span>Compromisso absoluto com prazos.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* --- BLOCO 2: DIFERENCIAIS --- */}
        <div className="border-t border-gray-200 pt-20">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                
                <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] bg-projettar-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center group">
                         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 to-black"></div>
                         <div className="text-center z-10 p-8">
                             <p className="text-white font-bold uppercase tracking-[0.2em] text-sm">Parceria Estratégica</p>
                             <p className="text-gray-400 text-xs mt-2">Foto de Mãos Unidas</p>
                         </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-10">
                    <h3 className="text-3xl font-extrabold text-projettar-black mb-8">
                        Por que escolher a Projettar?
                    </h3>

                    <div className="flex gap-6 group">
                        <span className="text-5xl font-black text-projettar-red/10 group-hover:text-projettar-red/20 transition-colors">01.</span>
                        <div>
                            <h4 className="text-xl font-bold text-projettar-black mb-2">Solução 360º: Zero Preocupação</h4>
                            <p className="text-projettar-grey leading-relaxed">
                                Cuidamos de TUDO: Da criação do design estratégico à fabricação, instalação e manutenção. Você não precisa coordenar fornecedores.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 group">
                        <span className="text-5xl font-black text-projettar-red/10 group-hover:text-projettar-red/20 transition-colors">02.</span>
                        <div>
                            <h4 className="text-xl font-bold text-projettar-black mb-2">Qualidade Absurda com Rapidez</h4>
                            <p className="text-projettar-grey leading-relaxed">
                                Metodologia industrial otimizada para entregar a beleza que sua marca exige, sem atrasar os prazos.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 group">
                        <span className="text-5xl font-black text-projettar-red/10 group-hover:text-projettar-red/20 transition-colors">03.</span>
                        <div>
                            <h4 className="text-xl font-bold text-projettar-black mb-2">Economia de Longo Prazo</h4>
                            <p className="text-projettar-grey leading-relaxed">
                                Utilizamos materiais de alta performance (ACM) que garantem vida útil prolongada, eliminando custos com reparos.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;