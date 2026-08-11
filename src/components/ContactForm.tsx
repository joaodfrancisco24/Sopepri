import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle, Phone, Mail, MapPin, Trash2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactInquiry, Service } from '../types';

interface ContactFormProps {
  language: 'pt' | 'en';
  services: Service[];
  preselectedServiceId?: string;
  onSuccessSubmit?: () => void;
}

export default function ContactForm({ language, services, preselectedServiceId, onSuccessSubmit }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [serviceId, setServiceId] = useState(preselectedServiceId || '');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [showAdminLogs, setShowAdminLogs] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  // Load inquiries from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('sopepri_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing inquiries', e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Quick client-side checks
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage(
        language === 'pt'
          ? 'Por favor, preencha todos os campos obrigatórios.'
          : 'Please fill in all required fields.'
      );
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      const newInquiry: ContactInquiry = {
        id: 'inq_' + Date.now(),
        name,
        email,
        phone,
        subject: subject || (language === 'pt' ? 'Contacto Geral' : 'General Contact'),
        message,
        serviceId: serviceId || undefined,
        timestamp: new Date().toLocaleString(language === 'pt' ? 'pt-PT' : 'en-US'),
        status: 'pending'
      };

      const updated = [newInquiry, ...inquiries];
      setInquiries(updated);
      localStorage.setItem('sopepri_inquiries', JSON.stringify(updated));

      // Reset Form
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setServiceId('');
      setMessage('');

      setStatus('success');
      if (onSuccessSubmit) {
        onSuccessSubmit();
      }

      // Revert status to idle after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 800);
  };

  const handleDeleteInquiry = (id: string) => {
    const filtered = inquiries.filter((inq) => inq.id !== id);
    setInquiries(filtered);
    localStorage.setItem('sopepri_inquiries', JSON.stringify(filtered));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Contact Direct Info Panel */}
      <div className="lg:col-span-5 space-y-4">
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6 text-white space-y-4 backdrop-blur-sm">
          <h3 className="text-lg font-bold tracking-tight">
            {language === 'pt' ? 'Canais Diretos' : 'Direct Channels'}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {language === 'pt'
              ? 'Tem alguma dúvida ou precisa de uma assistência técnica de urgência? Ligue-nos diretamente ou visite o nosso escritório em Luanda.'
              : 'Have any questions or need urgent technical assistance? Call us directly or visit our office in Luanda.'}
          </p>

          <div className="space-y-3 pt-3 border-t border-slate-800">
            <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
              <MapPin className="w-4.5 h-4.5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">{language === 'pt' ? 'Endereço' : 'Address'}</p>
                <p className="text-slate-400 mt-0.5 text-xs">Luanda / Estrada de Catete, Rua da Suave, Travessa nº7</p>
              </div>
            </div>

            <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
              <Mail className="w-4.5 h-4.5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">{language === 'pt' ? 'E-mail Comercial' : 'Commercial E-mail'}</p>
                <a href="mailto:secretaria@sopepri.com" className="text-slate-400 hover:text-sky-400 transition-colors mt-0.5 block text-xs">
                  secretaria@sopepri.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
              <Phone className="w-4.5 h-4.5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">{language === 'pt' ? 'Contacto Telefónico' : 'Telephone Contact'}</p>
                <a href="tel:+244928585096" className="text-slate-400 hover:text-sky-400 transition-colors mt-0.5 block font-mono text-sm">
                  +244 928 585 096
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic client state notice/admin logs panel toggle */}
        {inquiries.length > 0 && (
          <button
            onClick={() => setShowAdminLogs(!showAdminLogs)}
            className="w-full flex items-center justify-between p-3.5 bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/50 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition-all duration-200"
          >
            <span className="flex items-center space-x-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {language === 'pt'
                  ? `Ver caixa de mensagens enviadas (${inquiries.length})`
                  : `View sent messages mailbox (${inquiries.length})`}
              </span>
            </span>
            <span className="bg-slate-700/60 px-2 py-0.5 rounded-md text-slate-300 text-[9px]">
              {showAdminLogs ? (language === 'pt' ? 'Ocultar' : 'Hide') : (language === 'pt' ? 'Mostrar' : 'Show')}
            </span>
          </button>
        )}
      </div>

      {/* Main Interactive Contact Form */}
      <div className="lg:col-span-7">
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-xl p-5 sm:p-6 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  {language === 'pt' ? 'Seu Nome *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 text-slate-900 dark:text-white transition-all"
                  placeholder={language === 'pt' ? 'Ex: Carlos Domingos' : 'e.g. John Doe'}
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  {language === 'pt' ? 'Seu E-mail *' : 'Your Email *'}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 text-slate-900 dark:text-white transition-all"
                  placeholder={language === 'pt' ? 'Ex: carlos@email.com' : 'e.g. carlos@email.com'}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  {language === 'pt' ? 'Telefone / WhatsApp *' : 'Phone / WhatsApp *'}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 text-slate-900 dark:text-white transition-all"
                  placeholder="Ex: +244 928 585 096"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  {language === 'pt' ? 'Serviço de Interesse' : 'Service of Interest'}
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 text-slate-900 dark:text-white transition-all"
                >
                  <option value="">{language === 'pt' ? '-- Selecione (Opcional) --' : '-- Select (Optional) --'}</option>
                  {services.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {language === 'pt' ? srv.title : srv.titleEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                {language === 'pt' ? 'Assunto' : 'Subject'}
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 text-slate-900 dark:text-white transition-all"
                placeholder={language === 'pt' ? 'Ex: Orçamento de Pintura' : 'e.g. Painting Estimate'}
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                {language === 'pt' ? 'Mensagem / Detalhes do Pedido *' : 'Message / Request Details *'}
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 text-slate-900 dark:text-white transition-all resize-y"
                placeholder={language === 'pt' ? 'Escreva aqui os pormenores do seu projeto ou a sua dúvida...' : 'Write the details of your project or inquiry here...'}
              />
            </div>

            {/* Status alerts */}
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2 p-2.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-lg text-xs"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    {language === 'pt'
                      ? 'Mensagem enviada com sucesso! Entraremos em contacto brevemente.'
                      : 'Message sent successfully! We will get in touch shortly.'}
                  </span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2 p-2.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/30 text-rose-700 dark:text-rose-400 rounded-lg text-xs"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-sky-500/25 transition-all disabled:opacity-75 cursor-pointer"
            >
              {status === 'submitting' ? (
                <span>{language === 'pt' ? 'A enviar...' : 'Sending...'}</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>{language === 'pt' ? 'Enviar Mensagem' : 'Send Message'}</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Admin Sent Box Overlay / History Log */}
      <AnimatePresence>
        {showAdminLogs && inquiries.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="col-span-1 lg:col-span-12 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm mt-4"
          >
            <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
              <h4 className="font-bold text-slate-100 flex items-center space-x-2 text-sm sm:text-base">
                <MessageSquare className="w-4 h-4 text-sky-400" />
                <span>
                  {language === 'pt' ? 'Caixa de Saída (Simulado)' : 'Outbox (Simulated Local Log)'}
                </span>
              </h4>
              <span className="text-xs text-slate-500">
                {language === 'pt' ? 'Persistido no navegador' : 'Persisted in browser'}
              </span>
            </div>

            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
              {inquiries.map((inq) => {
                const srv = services.find((s) => s.id === inq.serviceId);
                return (
                  <div
                    key={inq.id}
                    className="p-4 bg-slate-800/60 border border-slate-700/40 rounded-xl text-slate-300 relative group transition-all"
                  >
                    <button
                      onClick={() => handleDeleteInquiry(inq.id)}
                      className="absolute top-4 right-4 text-slate-500 hover:text-rose-400 p-1.5 rounded-lg hover:bg-slate-700/50 transition-colors"
                      title={language === 'pt' ? 'Excluir log' : 'Delete log'}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-2">
                      <div>
                        <strong className="text-slate-100">{language === 'pt' ? 'Nome:' : 'Name:'}</strong>{' '}
                        {inq.name}
                      </div>
                      <div>
                        <strong className="text-slate-100">E-mail:</strong> {inq.email}
                      </div>
                      <div>
                        <strong className="text-slate-100">{language === 'pt' ? 'Telefone:' : 'Phone:'}</strong>{' '}
                        <span className="font-mono">{inq.phone}</span>
                      </div>
                      <div>
                        <strong className="text-slate-100">{language === 'pt' ? 'Data:' : 'Date:'}</strong>{' '}
                        {inq.timestamp}
                      </div>
                    </div>

                    {srv && (
                      <div className="mb-2">
                        <span className="inline-block bg-sky-950 text-sky-400 text-[10px] font-bold px-2 py-0.5 rounded-md border border-sky-900/60">
                          {language === 'pt' ? 'Serviço:' : 'Service:'} {language === 'pt' ? srv.title : srv.titleEn}
                        </span>
                      </div>
                    )}

                    <div className="text-xs bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/50">
                      <p className="font-semibold text-slate-200 mb-1">
                        {language === 'pt' ? 'Assunto:' : 'Subject:'} {inq.subject}
                      </p>
                      <p className="text-slate-400 whitespace-pre-wrap">{inq.message}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
