import React from 'react';
import { motion } from 'motion/react';
import ContactForm from './ContactForm';
import { SERVICES } from '../data';

interface ContactsViewProps {
  language: 'pt' | 'en';
  preselectedServiceId?: string;
}

export default function ContactsView({ language, preselectedServiceId }: ContactsViewProps) {
  return (
    <div className="pt-16">
      {/* Mini Hero Banner for Contactos */}
      <div className="bg-slate-950 text-white py-14 px-4 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/src/assets/images/hero_engineer_1786349101016.jpg"
            alt="Contacts Background"
            className="w-full h-full object-cover filter brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 to-indigo-950/40" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-1">
          <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">
            {language === 'pt' ? 'Canais de Atendimento' : 'Get in Touch'}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight">
            {language === 'pt' ? 'Contactos' : 'Contacts'}
          </h1>
        </div>
      </div>

      {/* SECTION 8: CONTACTOS */}
      <section
        id="contactos"
        className="py-12 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Title Block */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest block">
              {language === 'pt' ? 'Fale Connosco' : 'Contact Us'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {language === 'pt' ? 'Fale Connosco' : 'Contact Us'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              {language === 'pt'
                ? 'Tem dúvidas ou deseja solicitar um serviço especializado? Preencha o formulário abaixo e responderemos em tempo recorde.'
                : 'Have questions or want to request specialized service? Fill in the form below and we will reply in record time.'}
            </p>
          </div>

          {/* Inquiries / Contact form panel block */}
          <ContactForm 
            language={language} 
            services={SERVICES} 
            preselectedServiceId={preselectedServiceId} 
            onSuccessSubmit={() => {}}
          />
        </div>
      </section>
    </div>
  );
}
