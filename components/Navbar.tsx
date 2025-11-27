import React, { useState, useEffect } from 'react';
import { Scale } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-4 border-b border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo - Scrolls to Top */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 border border-gold-400 flex items-center justify-center rounded-sm group-hover:bg-gold-400 transition-colors duration-300">
            <Scale className="w-6 h-6 text-gold-400 group-hover:text-navy-900 transition-colors duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-widest text-white uppercase leading-none">Imperium</span>
            <span className="text-[10px] text-gold-400 tracking-[0.3em] uppercase leading-none">Advocacia</span>
          </div>
        </a>

        {/* CTA - Direct WhatsApp Link */}
        <a
          href="https://wa.me/5521969142576?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20estrat%C3%A9gica%20do%20meu%20escrit%C3%B3rio."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-gold-400 text-gold-400 text-xs uppercase tracking-widest hover:bg-gold-400 hover:text-navy-900 transition-all duration-300 font-medium"
        >
          Agendar Consulta
        </a>
      </div>
    </nav>
  );
};

export default Navbar;