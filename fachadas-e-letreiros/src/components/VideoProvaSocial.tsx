import React from 'react';
import { Play } from 'lucide-react';

const VideoProvaSocial = () => {
  return (
    <section className="py-28 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-28">
          
          {/* ESQUERDA: VÍDEO (Bloco Sólido Projettar) */}
          <div className="w-full lg:w-1/2 group">
            <div className="aspect-video bg-gradient-to-br from-projettar-red to-[#901015] shadow-[0_30px_60px_-15px_rgba(197,35,41,0.35)] flex items-center justify-center relative cursor-pointer rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
               
               <div className="text-center z-10">
                   <div className="w-24 h-24 bg-white/90 backdrop-blur border-2 border-white/50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:bg-white transition-all">
                        <Play className="w-10 h-10 text-projettar-red fill-projettar-red ml-1"/>
                   </div>
                   <h3 className="text-2xl font-black text-white uppercase tracking-[0.2em] px-4 drop-shadow-sm mb-2">
                     VÍDEO CASE
                   </h3>
                   <p className="text-white/80 text-sm font-bold uppercase tracking-wider">Padrão de Qualidade</p>
               </div>
            </div>
          </div>

          {/* DIREITA: TEXTO DE AUTORIDADE */}
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <h2 className="text-3xl md:text-4xl font-extrabold text-projettar-black mb-8 leading-tight">
              A Qualidade da Projettar em Detalhes: <br/>
              <span className="text-projettar-red">O Rigor Exigido pela Petrobras.</span>
            </h2>
            
            <div className="space-y-8 text-projettar-grey text-lg leading-relaxed text-justify lg:text-right">
                <p className="font-medium">
                    Acompanhe no vídeo o desenvolvimento de um de nossos projetos mais exigentes. O que está em jogo é o padrão de excelência que aplicamos em cada fachada: a gestão e a precisão necessárias para atender demandas de grande escala e alto rigor técnico.
                </p>
                
                {/* Destaque com a cor da marca */}
                <div className="bg-red-50 p-6 rounded-xl border-l-[6px] border-projettar-red shadow-sm">
                    <p className="font-bold text-projettar-black text-xl italic leading-tight">
                        "Somos a escolha de gigantes como a <span className="text-projettar-red">Petrobras</span>, provando nossa capacidade de entregar projetos complexos com segurança e qualidade industrial."
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoProvaSocial;