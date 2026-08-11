import { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SopepriLogo from './SopepriLogo';

interface HeaderProps {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
  activePage: 'home' | 'sobre-nos' | 'contactos';
  onPageChange: (page: 'home' | 'sobre-nos' | 'contactos') => void;
}

export default function Header({ language, setLanguage, activePage, onPageChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home', labelEn: 'Home' },
    { id: 'sobre-nos', label: 'Sobre Nós', labelEn: 'About Us' },
    { id: 'contactos', label: 'Contactos', labelEn: 'Contacts' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    onPageChange(id as 'home' | 'sobre-nos' | 'contactos');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        activePage !== 'home'
          ? 'bg-[#1b2336] shadow-lg border-b border-slate-800 py-2'
          : isScrolled
          ? 'bg-[#1b2336]/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-2'
          : 'bg-gradient-to-b from-slate-950/80 to-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            id="header-logo"
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <SopepriLogo theme="dark" language={language} />
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-0.5 lg:space-x-1.5">
            {menuItems.map((item) => {
              const active = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all duration-200 ${
                    active
                      ? 'text-sky-400 bg-sky-950/30 border-b-2 border-sky-400 rounded-b-none'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {language === 'pt' ? item.label : item.labelEn}
                </button>
              );
            })}

            {/* Language Selector */}
            <div className="h-4 w-[1px] bg-slate-700 mx-2"></div>
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-all duration-200 border border-slate-700"
              title={language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span className="uppercase">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-200"
            >
              <span className="text-[10px] font-extrabold uppercase">
                {language === 'pt' ? 'EN' : 'PT'}
              </span>
            </button>

            <button
              id="mobile-menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#1b2336] border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5">
              {menuItems.map((item) => {
                const active = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold tracking-wide transition-all ${
                      active
                        ? 'bg-sky-950 text-sky-400 border-l-4 border-sky-400'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {language === 'pt' ? item.label : item.labelEn}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-slate-800 mt-4 px-4 flex flex-col space-y-2.5 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>+244 928 585 096</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>secretaria@sopepri.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
