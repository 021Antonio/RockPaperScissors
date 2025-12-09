"use client";
import React, { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";

const FooterForm = () => {

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwQUz-XmGhl7moyVgVRQyp6LgvNkBByISkAvZMwBigdszjPBMWAN1WDy3MIcCdfqWPB/exec";

  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const [servico, setServico] = useState("");
  const [outroServico, setOutroServico] = useState("");
  const [bairro, setBairro] = useState("");
  const [regiao, setRegiao] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorWhatsapp, setErrorWhatsapp] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const servicosOptions = [
    "Fachadas",
    "Letras / Iluminação",
    "Comunicação Interna",
    "Impressão",
    "Envelopamento",
    "Estruturas",
    "Criação de Projeto",
    "Outros",
  ];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const whatsappRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

  const formatWhatsapp = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, "");
    if (onlyNumbers.length <= 2) return `(${onlyNumbers}`;
    if (onlyNumbers.length <= 7) return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
    return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 7)}-${onlyNumbers.slice(7, 11)}`;
  };

  const validateFields = () => {
    let valid = true;
    if (!whatsappRegex.test(whatsapp)) {
      setErrorWhatsapp("Digite um WhatsApp válido.");
      valid = false;
    } else setErrorWhatsapp("");

    if (!emailRegex.test(email)) {
      setErrorEmail("Digite um e-mail válido.");
      valid = false;
    } else setErrorEmail("");

    if (!servico || !bairro || !regiao || !nome) valid = false;
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) return;

    setLoading(true);

    const servicoFinal = servico === "Outros" && outroServico.trim() !== "" ? outroServico : servico;

    const formData = {
      nome,
      whatsapp,
      email,
      servico: servicoFinal,
      bairro,
      regiao,
      outroServico,
      mensagem: mensagem || "Sem mensagem",
      origem: "Landing - Fachadas",
    };

    try {

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSuccess(true);
      setNome("");
      setWhatsapp("");
      setEmail("");
      setServico("");
      setOutroServico("");
      setBairro("");
      setRegiao("");
      setMensagem("");

      setTimeout(() => setSuccess(false), 5000);

    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao conectar com o servidor. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-projettar-light border-t border-gray-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-0 opacity-60"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          {/* COPY ESQUERDA */}
          <div className="w-full lg:w-5/12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-projettar-black mb-8 leading-tight">
              Vamos tirar seu projeto do papel?
            </h2>
            <p className="text-xl text-projettar-grey font-medium leading-relaxed mb-10">
              Preencha o formulário para receber uma análise técnica inicial.
            </p>
            {/* Lista de passos (decoração) */}
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-projettar-red font-bold text-xl">1</div>
                <div><h4 className="font-bold text-projettar-black text-lg">Consultoria Técnica</h4><p className="text-sm text-gray-500">Análise de viabilidade e materiais.</p></div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-projettar-red font-bold text-xl">2</div>
                <div><h4 className="font-bold text-projettar-black text-lg">Orçamento Transparente</h4><p className="text-sm text-gray-500">Sem custos ocultos.</p></div>
              </div>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-projettar-red to-projettar-darkRed rounded-t-3xl"></div>
              <h3 className="text-2xl font-extrabold text-projettar-black mb-8">Solicitar Orçamento</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome */}
                <div className="group">
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Nome Completo *</label>
                  <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required className="w-full p-4 border-2 border-gray-100 rounded-xl bg-gray-50 focus:bg-white focus:border-projettar-red outline-none" placeholder="Seu nome aqui" />
                </div>

                {/* WhatsApp + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">WhatsApp *</label>
                    <input type="tel" value={whatsapp} onChange={(e) => setWhatsapp(formatWhatsapp(e.target.value))} required className={`w-full p-4 border-2 rounded-xl bg-gray-50 ${errorWhatsapp ? "border-red-500" : "border-gray-100"}`} placeholder="(21) 99999-9999" />
                    {errorWhatsapp && <p className="text-red-500 text-xs mt-1 font-bold">{errorWhatsapp}</p>}
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">E-mail Corporativo *</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={`w-full p-4 border-2 rounded-xl bg-gray-50 ${errorEmail ? "border-red-500" : "border-gray-100"}`} placeholder="seu@empresa.com" />
                    {errorEmail && <p className="text-red-500 text-xs mt-1 font-bold">{errorEmail}</p>}
                  </div>
                </div>

                {/* Serviço */}
                <div className="group relative">
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Serviço de Interesse *</label>
                  <div className="relative">
                    <select value={servico} onChange={(e) => setServico(e.target.value)} required className="w-full p-4 border-2 border-gray-100 rounded-xl bg-gray-50 focus:bg-white focus:border-projettar-red cursor-pointer">
                      <option value="" disabled>Selecione uma opção</option>
                      {servicosOptions.map((srv, idx) => (<option key={idx} value={srv}>{srv}</option>))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></div>
                  </div>
                  {servico === "Outros" && (
                    <div className="mt-3 animate-fadeIn">
                      <input type="text" value={outroServico} onChange={(e) => setOutroServico(e.target.value)} className="w-full p-4 border-2 border-projettar-red/30 rounded-xl bg-red-50/50 focus:bg-white focus:border-projettar-red outline-none" placeholder="Especifique (opcional)" />
                    </div>
                  )}
                </div>

                {/* Bairro + Região */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Bairro *</label>
                    <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} required className="w-full p-4 border-2 border-gray-100 rounded-xl bg-gray-50" placeholder="Ex: Barra da Tijuca" />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Região / Cidade *</label>
                    <input type="text" value={regiao} onChange={(e) => setRegiao(e.target.value)} required className="w-full p-4 border-2 border-gray-100 rounded-xl bg-gray-50" placeholder="Ex: Rio de Janeiro" />
                  </div>
                </div>

                {/* Mensagem */}
                <div className="group">
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Me conte um pouco sobre sua empresa <span className="text-gray-400 font-normal lowercase">(opcional)</span></label>
                  <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} rows={3} className="w-full p-4 border-2 border-gray-100 rounded-xl bg-gray-50 resize-none" placeholder="Breve descrição..." />
                </div>

                <button type="submit" disabled={loading} className="w-full bg-projettar-red hover:bg-projettar-darkRed text-white font-bold text-lg py-5 rounded-xl shadow-lg disabled:opacity-70 transition-all">
                  {loading ? "ENVIANDO..." : "ENVIAR SOLICITAÇÃO"}
                </button>

                {success && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center font-bold text-sm flex items-center justify-center gap-2 mt-4">
                    <CheckCircle2 size={18} /> Solicitação enviada com sucesso!
                  </div>
                )}
                <p className="text-center text-xs text-gray-400 mt-4">🔒 Seus dados estão seguros.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterForm;