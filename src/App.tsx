import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Service } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import HomeView from './components/HomeView';
import AboutUsView from './components/AboutUsView';
import ContactsView from './components/ContactsView';

export default function App() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [activePage, setActivePage] = useState<'home' | 'sobre-nos' | 'contactos'>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('');

  const handleBookService = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedServiceId(serviceId);
    } else {
      setPreselectedServiceId('');
    }
    setSelectedService(null);
    setActivePage('contactos');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-200 antialiased selection:bg-sky-500 selection:text-white flex flex-col justify-between">
      <div>
        {/* Header */}
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          activePage={activePage} 
          onPageChange={setActivePage} 
        />

        {/* Main Content Area */}
        <main className="overflow-hidden min-h-[60vh]">
          <AnimatePresence mode="wait">
            {activePage === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <HomeView 
                  language={language} 
                  onBookService={handleBookService} 
                  onSelectService={setSelectedService} 
                />
              </motion.div>
            )}

            {activePage === 'sobre-nos' && (
              <motion.div
                key="sobre-nos"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <AboutUsView language={language} />
              </motion.div>
            )}

            {activePage === 'contactos' && (
              <motion.div
                key="contactos"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <ContactsView 
                  language={language} 
                  preselectedServiceId={preselectedServiceId} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Footer */}
      <Footer language={language} onPageChange={setActivePage} />

      {/* Service Detail Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            language={language}
            onClose={() => setSelectedService(null)}
            onBook={(serviceId) => handleBookService(serviceId)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
