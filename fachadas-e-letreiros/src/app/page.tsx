import Header from "@/components/Header";
import HeroFachadas from "@/components/HeroFachadas";
import VideoProvaSocial from "@/components/VideoProvaSocial";
import Portfolio from "@/components/Portfolio";
import Solucao360 from "@/components/Solucao360";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Clientes from "@/components/Clientes";
import FooterForm from "@/components/FooterForm";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import CallToAction from "@/components/CallToAction"; // Importe o novo componente

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-projettar-red selection:text-white">
      <Header />
      <HeroFachadas />
      
      {/* Bloco Cinza (Portfolio) com CTA no final */}
      <Portfolio />
      
      {/* Bloco Branco (Video) */}
      <VideoProvaSocial />
      
      {/* Bloco Cinza (Soluções) */}
      <Solucao360 />

      {/* --- NOVO BLOCO DE CTA (CORTE VISUAL) [cite: 32, 35, 37] --- */}
      {/* Inserido aqui para quebrar o ritmo antes dos números */}
      <CallToAction /> 
      
      {/* Bloco Preto (Stats) */}
      <Stats />
      
      {/* Bloco Branco (Sobre Nós) */}
      <WhyUs />
      
      {/* Bloco Cinza (Clientes) */}
      <Clientes />
      
      {/* Bloco Branco (Depoimentos) */}
      <Testimonials />
      
      {/* Bloco Final (Formulário) */}
      <FooterForm />
      
      <FloatingWhatsapp />
    </main>
  );
}