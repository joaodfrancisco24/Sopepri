import { X, CheckCircle2, Shield, Calendar, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service;
  language: 'pt' | 'en';
  onClose: () => void;
  onBook: (serviceId: string) => void;
}

export default function ServiceModal({ service, language, onClose, onBook }: ServiceModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="relative bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 dark:border-slate-800 z-10"
      >
        {/* Color Accent Bar */}
        <div className="h-1.5 bg-gradient-to-r from-sky-500 to-indigo-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Body */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center space-x-2.5 mb-3">
            <div className="p-2 bg-sky-50 dark:bg-sky-950/50 text-sky-500 rounded-lg">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {language === 'pt' ? service.title : service.titleEn}
            </h3>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-4">
            {language === 'pt' ? service.detailedDescription : service.detailedDescriptionEn}
          </p>

          {/* Service Perks / Trust badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="flex items-center space-x-2.5 p-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
              <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
              <div>
                <h4 className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {language === 'pt' ? 'Segurança & Garantia' : 'Safety & Guarantee'}
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  {language === 'pt' ? 'Técnicos certificados' : 'Certified technicians'}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 p-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
              <Calendar className="w-4 h-4 text-indigo-500 shrink-0" />
              <div>
                <h4 className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {language === 'pt' ? 'Suporte Ágil' : 'Agile Support'}
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  {language === 'pt' ? 'Atendimento imediato' : 'Immediate service'}
                </p>
              </div>
            </div>
          </div>

          {/* Pricing range if available */}
          <div className="flex items-center justify-between p-3 bg-sky-50/50 dark:bg-sky-950/20 rounded-lg border border-sky-100/50 dark:border-sky-900/30 mb-5">
            <div className="flex items-center space-x-2">
              <CreditCard className="w-4 h-4 text-sky-500" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {language === 'pt' ? 'Estimativa de Custo:' : 'Cost Estimate:'}
              </span>
            </div>
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400">
              {service.estimatedCostRange}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-150"
            >
              {language === 'pt' ? 'Voltar' : 'Back'}
            </button>
            <button
              onClick={() => onBook(service.id)}
              className="px-4.5 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white text-xs font-bold shadow-md shadow-sky-500/10 transition-all duration-150"
            >
              {language === 'pt' ? 'Solicitar este Serviço' : 'Request this Service'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
