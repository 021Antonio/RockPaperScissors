import Header from "@/components/Header";
import HeroFachadas from "@/components/HeroFachadas";
import VideoProvaSocial from "@/components/VideoProvaSocial";
import Portfolio from "@/components/Portfolio";
import Solucao360 from "@/components/Solucao360";
import Stats from "@/components/Status";
import Sobrenos from "@/components/Sobrenos";
import Testimonials from "@/components/Testimonials";
import Clientes from "@/components/Clientes";
import Formulario from "@/components/Formulario";
import Cta from "@/components/Cta";
import Equipamentos from "@/components/Equipamentos";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-projettar-red selection:text-white">
      <Header />
      <HeroFachadas />

      <Portfolio />

      <VideoProvaSocial />
      
      <Solucao360 />

      <Cta /> 
      
      <Stats />

      <Sobrenos />

      <Clientes />

      <Testimonials />

      <Formulario />
  
      <Equipamentos/>

    </main>
  );
}