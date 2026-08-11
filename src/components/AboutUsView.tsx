import React from 'react';
import { motion } from 'motion/react';
import { HardHat, Truck, Building2, Paintbrush, Wrench, Shield, Award, Users, HelpCircle } from 'lucide-react';
import { PILLARS } from '../data';

interface AboutUsViewProps {
  language: 'pt' | 'en';
}

function IconResolver({ name, className }: { name: string; className?: string }) {
  const icons: { [key: string]: React.ComponentType<any> } = {
    HardHat,
    Truck,
    Building2,
    Paintbrush,
    Wrench,
    Shield,
    Award,
    Users,
  };
  const Comp = icons[name] || HelpCircle;
  return <Comp className={className} />;
}

export default function AboutUsView({ language }: AboutUsViewProps) {
  return (
    <div className="pt-16">
      {/* Mini Hero Banner for Sobre Nós */}
      <div className="bg-slate-950 text-white py-14 px-4 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/assets/images/portfolio_teamwork_1786349171155.jpg"
            alt="Teamwork Background"
            className="w-full h-full object-cover filter brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 to-indigo-950/40" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-1">
          <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">
            {language === 'pt' ? 'Quem Somos' : 'About Us'}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight">
            {language === 'pt' ? 'Sobre Nós' : 'About Us'}
          </h1>
        </div>
      </div>

      {/* SECTION 3: SOBRE NÓS */}
      <section
        id="sobre-nos"
        className="py-12 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800">
                <img
                  src="/assets/images/portfolio_teamwork_1786349171155.jpg"
                  alt="Sopepri Project Management Collaboration"
                  className="w-full h-auto object-cover aspect-[4/3] filter contrast-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>
              {/* Floating Metric badge */}
              <div className="absolute -bottom-3 -right-2 sm:right-4 bg-gradient-to-r from-indigo-600 to-sky-500 text-white px-4 py-2.5 rounded-lg shadow-lg border border-indigo-400/20">
                <span className="block text-xl font-black font-sans tracking-tight leading-none">100%</span>
                <span className="block text-[9px] uppercase font-bold text-slate-200 tracking-wider mt-0.5">
                  {language === 'pt' ? 'Capital Angolano' : 'Angolan Owned Capital'}
                </span>
              </div>
            </div>

            {/* Text Content Column */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest block">
                  {language === 'pt' ? 'Quem Somos' : 'About Us'}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {language === 'pt' ? 'Excelência Técnica e Solidez em Angola' : 'Technical Excellence & Trust in Angola'}
                </h2>
              </div>

              <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm space-y-3 leading-relaxed">
                <p>
                  {language === 'pt'
                    ? 'Nascemos da ambição de prover suporte técnico integral, materiais de construção certificados e comércio especializado de tintas para organizações e condomínios de Luanda. A nossa atuação foca-se na eficiência operacional, minimizando impactos para os residentes e gestores.'
                    : 'We were born from the ambition to provide complete technical support, certified construction materials, and specialized paint commerce for organizations and condominiums in Luanda. Our focus remains on operational efficiency, minimizing disruption for residents and managers alike.'}
                </p>
                <p>
                  {language === 'pt'
                    ? 'Pautamos a nossa conduta pela transparência e pelo cumprimento integral de prazos, colaborando ativamente com grandes grupos empresariais, comerciais e condomínios habitacionais de relevo em toda a província.'
                    : 'We guide our conduct through transparency and strict compliance with timelines, actively collaborating with major business groups, commercial centers, and prominent residential communities throughout the province.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <span className="block text-sm font-bold text-slate-900 dark:text-white">
                    {language === 'pt' ? 'Visão' : 'Vision'}
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    {language === 'pt'
                      ? 'Ser a principal referência em manutenção predial e apoio a condomínios em Luanda.'
                      : 'To be the prime reference in building maintenance and condominium support in Luanda.'}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="block text-sm font-bold text-slate-900 dark:text-white">
                    {language === 'pt' ? 'Missão' : 'Mission'}
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    {language === 'pt'
                      ? 'Valorizar espaços com soluções céleres, materiais de marca confiável e alta competência técnica.'
                      : 'To enhance spaces with prompt solutions, trusted material brands, and technical skill.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THREE PILLARS (Our values) */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {language === 'pt' ? 'Nossos Valores Fundamentais' : 'Our Core Values'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {language === 'pt' ? 'Os pilares que orientam cada projeto e relação de parceria.' : 'The pillars guiding every project and partnership.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 text-left"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 rounded-xl shrink-0 border border-sky-100/30 dark:border-sky-900/30">
                    <IconResolver name={pillar.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                    {language === 'pt' ? pillar.title : pillar.titleEn}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {language === 'pt' ? pillar.description : pillar.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
