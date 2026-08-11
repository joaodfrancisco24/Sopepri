import { Phone, Mail, MapPin } from 'lucide-react';
import SopepriLogo from './SopepriLogo';

interface FooterProps {
  language: 'pt' | 'en';
  onPageChange: (page: 'home' | 'sobre-nos' | 'contactos') => void;
}

export default function Footer({ language, onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    if (id === 'home' || id === 'sobre-nos' || id === 'contactos') {
      onPageChange(id);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      onPageChange('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <footer id="main-footer" className="bg-[#0f172a] text-slate-300 pt-10 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2.5 cursor-pointer group" onClick={() => handleNavClick('home')}>
              <SopepriLogo theme="dark" language={language} symbolClassName="w-8 h-8" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              {language === 'pt'
                ? 'A SOPEPRI é uma empresa angolana focada no comércio de materiais de excelência e na prestação de assistência técnica para condomínios e organizações.'
                : 'SOPEPRI is an Angolan company focused on the trade of excellent materials and the provision of technical assistance for condominiums and organizations.'}
            </p>
          </div>

          {/* Column 2: Navigation Menu */}
          <div>
            <h3 className="text-white font-bold text-xs mb-3 uppercase tracking-wider border-b border-slate-800 pb-1.5">
              {language === 'pt' ? 'Menu' : 'Menu'}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-sky-400 transition-colors duration-200 block text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('sobre-nos')}
                  className="hover:text-sky-400 transition-colors duration-200 block text-left"
                >
                  {language === 'pt' ? 'Sobre Nós' : 'About Us'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contactos')}
                  className="hover:text-sky-400 transition-colors duration-200 block text-left"
                >
                  {language === 'pt' ? 'Contactos' : 'Contacts'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-xs mb-3 uppercase tracking-wider border-b border-slate-800 pb-1.5">
              {language === 'pt' ? 'Nossos Serviços' : 'Our Services'}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick('servicos')}
                  className="hover:text-sky-400 transition-colors duration-200 text-left block"
                >
                  {language === 'pt' ? 'Construção Civil' : 'Civil Construction'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('servicos')}
                  className="hover:text-sky-400 transition-colors duration-200 text-left block"
                >
                  {language === 'pt' ? 'Fornecimento de Materiais' : 'Material Supply'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('servicos')}
                  className="hover:text-sky-400 transition-colors duration-200 text-left block"
                >
                  {language === 'pt' ? 'Manutenção em Condomínios' : 'Condominium Maintenance'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('servicos')}
                  className="hover:text-sky-400 transition-colors duration-200 text-left block"
                >
                  {language === 'pt' ? 'Soluções Hidráulicas e Mecânicas' : 'Hydraulics & Mechanics'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-white font-bold text-xs mb-3 uppercase tracking-wider border-b border-slate-800 pb-1.5">
              {language === 'pt' ? 'Informações' : 'Information'}
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Luanda / Estrada de Catete, Rua da Suave, Travessa nº7
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:secretaria@sopepri.com" className="hover:text-sky-400 transition-colors duration-200 break-all">
                  secretaria@sopepri.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+244928585096" className="hover:text-sky-400 transition-colors duration-200">
                  +244 928 585 096
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-5 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500">
          <p className="mb-3 sm:mb-0">
            Copyright &copy; {currentYear} Sopepri | Powered by{' '}
            <span className="text-slate-400 hover:text-white transition-colors duration-150">Proservice</span>
          </p>
          <div className="flex space-x-5">
            <span className="hover:text-slate-400 cursor-pointer">
              {language === 'pt' ? 'Termos de Serviço' : 'Terms of Service'}
            </span>
            <span className="hover:text-slate-400 cursor-pointer">
              {language === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
