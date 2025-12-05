import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';
import { PageSection } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentSection: PageSection;
  onNavigate: (section: PageSection) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-white/10 
      ${isScrolled ? 'bg-void/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate(PageSection.HOME)}
        >
          <Anchor className="w-8 h-8 text-gold group-hover:rotate-45 transition-transform duration-500" />
          <div className="flex flex-col">
            <span className="font-display text-2xl tracking-widest text-white leading-none">ARK OF LIGHT</span>
            <span className="font-serif text-xs tracking-[0.3em] text-gold text-center">光影之舟</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as PageSection)}
              className={`text-sm tracking-widest transition-all duration-300 relative group
                ${currentSection === item.id ? 'text-gold' : 'text-gray-400 hover:text-white'}`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-1/2 w-1 h-1 rounded-full bg-gold transform -translate-x-1/2 transition-opacity duration-300
                ${currentSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></span>
            </button>
          ))}
          <button 
            onClick={() => onNavigate(PageSection.TICKETS)}
            className="ml-4 px-6 py-2 border border-gold text-gold text-sm tracking-widest hover:bg-gold hover:text-void transition-colors duration-300"
          >
            立即購票
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-void z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 transform lg:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onNavigate(item.id as PageSection);
              setIsMobileMenuOpen(false);
            }}
            className={`text-2xl font-serif tracking-widest ${currentSection === item.id ? 'text-gold' : 'text-gray-400'}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;