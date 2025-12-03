"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Usando ícones prontos ou SVG manual se preferir

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detecta o scroll para mudar o estilo da barra
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mapeamento: Texto do Menu -> ID da Seção
  const menuItems = [
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Clientes', href: '#clientes' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 bg-projettar-red z-[60]"></div>
      
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b
        ${scrolled || mobileMenuOpen
            ? 'bg-white shadow-sm border-gray-100 py-2' 
            : 'bg-white/60 backdrop-blur-md border-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16 relative z-50">
          
          {/* --- LOGO --- */}
          <div className="flex-shrink-0 cursor-pointer group">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img 
                    src="/img/logo.png" 
                    alt="Logo Projettar" 
                    className={`w-auto object-contain transition-all duration-500 ${scrolled || mobileMenuOpen ? 'h-10' : 'h-12'}`} 
                />
            </Link>
          </div>

          {/* --- MENU DESKTOP --- */}
          <nav className="hidden md:flex items-center gap-10 text-xs font-bold text-projettar-black uppercase tracking-[0.15em]">
            {menuItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                className="relative py-2 group hover:text-projettar-red transition-colors duration-300"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-projettar-red transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* --- CTA DESKTOP --- */}
          <div className="hidden md:block">
             <a 
                href="#contato" 
                className={`bg-projettar-red hover:bg-[#B01F24] text-white font-bold rounded shadow-lg shadow-projettar-red/20 hover:shadow-projettar-red/40 transition-all duration-300 uppercase tracking-wider transform hover:-translate-y-0.5
                ${scrolled ? 'text-[10px] px-6 py-2.5' : 'text-xs px-8 py-3'}`}
             >
                Solicitar Contato
             </a>
          </div>

          {/* --- BOTÃO MOBILE (HAMBURGER / CLOSE) --- */}
          <button 
            className="md:hidden text-projettar-black p-2 hover:bg-gray-50 rounded-lg transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? (
                // Ícone X (Fechar)
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
                // Ícone Hamburger (Abrir)
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* --- MENU MOBILE (DROPDOWN) --- */}
        <div 
            className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${mobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
        >
            <nav className="flex flex-col p-6 space-y-6">
                {menuItems.map((item) => (
                    <Link 
                        key={item.label} 
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)} // Fecha ao clicar
                        className="text-lg font-bold text-projettar-black uppercase tracking-widest hover:text-projettar-red transition-colors border-b border-gray-50 pb-2"
                    >
                        {item.label}
                    </Link>
                ))}
                
                <div className="pt-4">
                    <a 
                        href="#contato" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full text-center bg-projettar-red text-white font-bold py-4 rounded shadow-lg uppercase tracking-wider text-sm"
                    >
                        Solicitar Orçamento
                    </a>
                </div>
            </nav>
        </div>

      </header>
    </>
  );
};

export default Header;