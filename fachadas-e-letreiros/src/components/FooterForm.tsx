"use client";
import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const FooterForm = () => {
  // --- LÓGICA DO FORMULÁRIO (Restaurada) ---
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errorWhatsapp, setErrorWhatsapp] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  // Regex de validação
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const whatsappRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

  // Máscara automática de WhatsApp
  const formatWhatsapp = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, "");
    if (onlyNumbers.length <= 2) return `(${onlyNumbers}`;
    if (onlyNumbers.length <= 7) return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
    return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 7)}-${onlyNumbers.slice(7, 11)}`;
  };

  // Validação dos campos
  const validateFields = () => {
    let valid = true;
    if (!whatsappRegex.test(whatsapp)) {
      setErrorWhatsapp("Digite um WhatsApp válido.");
      valid = false;
    } else {
      setErrorWhatsapp("");
    }
    if (!emailRegex.test(email)) {
      setErrorEmail("Digite um e-mail válido.");
      valid = false;
    } else {
      setErrorEmail("");
    }
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) return;
    setLoading(true);

    const data = {
      nome,
      whatsapp,
      email,
      origem: "Landing - Fachadas",
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwOi_nbuvG8KGIWPQpmnQkYIYUlMSXzgA_ipNf7zhq_m5NdHiM7aFKlq-P_IL8_qAXt-A/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );
      setSuccess(true);
      setNome("");
      setWhatsapp("");
      setEmail("");
      setErrorWhatsapp("");
      setErrorEmail("");
      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-projettar-light border-t border-gray-200 relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-0 opacity-60"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
            
            {/* --- COPY ESQUERDA --- */}
            <div className="w-full lg:w-5/12">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-projettar-black mb-8 leading-tight">
                    Vamos tirar seu projeto do papel?
                </h2>
                <p className="text-xl text-projettar-grey font-medium leading-relaxed mb-10">
                    Preencha o formulário para receber uma análise técnica inicial. Nossa equipe comercial entrará em contato em até 24 horas.
                </p>
                
                <div className="space-y-6">
                    <div className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-projettar-red font-bold text-xl">1</div>
                        <div>
                            <h4 className="font-bold text-projettar-black text-lg">Consultoria Técnica</h4>
                            <p className="text-sm text-gray-500">Análise de viabilidade e materiais.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-projettar-red font-bold text-xl">2</div>
                        <div>
                            <h4 className="font-bold text-projettar-black text-lg">Orçamento Transparente</h4>
                            <p className="text-sm text-gray-500">Sem custos ocultos ou surpresas.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- FORMULÁRIO DIREITA (Funcional) --- */}
            <div className="w-full lg:w-1/2">
                <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-projettar-red to-projettar-darkRed rounded-t-3xl"></div>
                    
                    <h3 className="text-2xl font-extrabold text-projettar-black mb-8">Solicitar Orçamento</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="group">
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Nome Completo</label>
                            <input 
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                                className="w-full p-4 border-2 border-gray-100 rounded-xl bg-gray-50 focus:bg-white focus:border-projettar-red focus:ring-0 outline-none transition-all font-medium text-projettar-black placeholder-gray-300" 
                                placeholder="Seu nome aqui" 
                            />
                        </div>
                        
                        <div className="group">
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">WhatsApp</label>
                            <input 
                                type="tel"
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(formatWhatsapp(e.target.value))}
                                required
                                className={`w-full p-4 border-2 rounded-xl bg-gray-50 focus:bg-white outline-none transition-all font-medium text-projettar-black placeholder-gray-300 ${errorWhatsapp ? "border-red-500 focus:border-red-500" : "border-gray-100 focus:border-projettar-red"}`}
                                placeholder="(21) 99999-9999" 
                            />
                             {errorWhatsapp && <p className="text-red-500 text-xs mt-1 font-bold">{errorWhatsapp}</p>}
                        </div>
                        
                        <div className="group">
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">E-mail Corporativo</label>
                            <input 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={`w-full p-4 border-2 rounded-xl bg-gray-50 focus:bg-white outline-none transition-all font-medium text-projettar-black placeholder-gray-300 ${errorEmail ? "border-red-500 focus:border-red-500" : "border-gray-100 focus:border-projettar-red"}`}
                                placeholder="seu@empresa.com" 
                            />
                            {errorEmail && <p className="text-red-500 text-xs mt-1 font-bold">{errorEmail}</p>}
                        </div>
                        
                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full bg-projettar-red hover:bg-projettar-darkRed text-white font-bold text-lg py-5 rounded-xl shadow-lg shadow-projettar-red/20 hover:shadow-projettar-red/40 transition-all duration-300 transform hover:-translate-y-1 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? "ENVIANDO..." : "ENVIAR SOLICITAÇÃO"}
                        </button>

                        {success && (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center font-bold text-sm animate-pulse">
                                Solicitação enviada com sucesso!
                            </div>
                        )}
                        
                        <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                            🔒 Seus dados estão seguros.
                        </p>
                    </form>
                </div>
            </div>

        </div>

        {/* Footer Real */}
        <div className="mt-32 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Grupo Projettar. Engenharia Visual.</p>
            <p>Rio de Janeiro - RJ</p>
        </div>
      </div>
    </section>
  );
};

export default FooterForm;