import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HardHat, ArrowUpRight, Star, X, Plus, ChevronLeft, ChevronRight, Truck, Building2, Paintbrush, Wrench, Shield, Award, Users, HelpCircle } from 'lucide-react';
import { PILLARS, SERVICES, PORTFOLIO, TESTIMONIALS, BRANDS } from '../data';
import { Service, Testimonial } from '../types';

interface HomeViewProps {
  language: 'pt' | 'en';
  onBookService: (serviceId?: string) => void;
  onSelectService: (service: Service) => void;
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

export default function HomeView({ language, onBookService, onSelectService }: HomeViewProps) {
  // Testimonials State
  const [testimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [currentTestimonialPage, setCurrentTestimonialPage] = useState(0);

  // Brands Slider State
  const [activeBrandIdx, setActiveBrandIdx] = useState(0);

  // Brands auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBrandIdx((prev) => (prev + 1) % BRANDS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const testimonialsPerPage = 3;
  const totalTestimonialPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentTestimonialPage((prev) => (prev + 1) % totalTestimonialPages);
  };

  const prevTestimonials = () => {
    setCurrentTestimonialPage((prev) => (prev - 1 + totalTestimonialPages) % totalTestimonialPages);
  };

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section
        id="home"
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center pt-20 pb-16 px-4 bg-slate-950 text-white overflow-hidden"
      >
        {/* Hero Abstract Background Geometric Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/assets/images/hero_engineer_1786349101016.jpg"
            alt="Sopepri Hero Banner"
            className="w-full h-full object-cover scale-105 filter brightness-[0.35] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          {/* Visual Slanted/Diagonal Mask to separate layout like original screenshot */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/80 to-indigo-950/40" />
          <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-slate-50 dark:text-slate-950 fill-current">
              <path d="M1200 120L0 120 309.19 8C485.49-16.7 659.1 11.6 828.16 35.13 1032.55 63.4 1165.63 34.62 1200 12V120z" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-[10px] font-bold tracking-wider uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
              <span>{language === 'pt' ? 'Angola • Assistência de Excelência' : 'Angola • Excellence Support'}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans leading-tight"
            >
              {language === 'pt' ? 'Bem-vindo à ' : 'Welcome to '}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">SOPEPRI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal"
            >
              {language === 'pt'
                ? 'A SOPEPRI é uma empresa angolana dedicada ao comércio e prestação de serviços técnicos em geral, com especial foco na manutenção e apoio a condomínios e organizações. Com uma equipa experiente e comprometida, oferecemos soluções completas, seguras e eficientes, que contribuem para a valorização e o bem-estar dos espaços que atendemos.'
                : 'SOPEPRI is an Angolan company dedicated to trade and the provision of technical services in general, with a special focus on maintenance and support for condominiums and organizations. With an experienced and committed team, we offer complete, secure, and efficient solutions that contribute to the enhancement and well-being of the spaces we serve.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-wrap gap-3"
            >
              <button
                onClick={() => onBookService()}
                className="px-5 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white text-xs font-bold tracking-wider shadow-lg shadow-sky-500/20 hover:shadow-indigo-500/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {language === 'pt' ? 'FALE CONNOSCO' : 'GET IN TOUCH'}
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('servicos');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-5 py-3 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-bold tracking-wider transition-all duration-200 transform hover:-translate-y-0.5"
              >
                {language === 'pt' ? 'Nossos Serviços' : 'Our Services'}
              </button>
            </motion.div>
          </div>

          {/* Right Column Portrait Graphic Card */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-3 shadow-xl"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative group">
                <img
                  src="/assets/images/hero_engineer_1786349101016.jpg"
                  alt="Sopepri Engineer Profile"
                  className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />
                
                {/* Floating Metric Card inside Graphic */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 border border-slate-800 backdrop-blur-md p-3 rounded-lg flex items-center space-x-2.5">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-md shrink-0">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">
                      {language === 'pt' ? 'Equipa Especializada' : 'Expert Technical Team'}
                    </p>
                    <p className="text-xs font-bold text-white mt-0.5">
                      {language === 'pt' ? 'Atendimento 24/7 Luanda' : '24/7 Response in Luanda'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THREE PILLARS */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-xl p-5 shadow-lg hover:shadow-xl dark:hover:border-slate-700/50 transition-all duration-300"
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: NOSSOS SERVIÇOS */}
      <section
        id="servicos"
        className="py-12 bg-slate-50 dark:bg-slate-900/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Title Block */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest block">
              {language === 'pt' ? 'O Que Fazemos' : 'What We Do'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {language === 'pt' ? 'Nossos Serviços' : 'Our Services'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              {language === 'pt'
                ? 'Na SOPEPRI, transformamos desafios em soluções práticas e eficientes. Oferecemos serviços técnicos, construção e manutenção com qualidade, rapidez e confiança.'
                : 'At SOPEPRI, we transform challenges into practical and efficient solutions. We offer technical, construction, and maintenance services with quality, speed, and reliability.'}
            </p>
          </div>

          {/* Service Cards Grid (7 Cards balanced) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((srv, idx) => {
              const isLast = idx === SERVICES.length - 1;
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                  className={`bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-4.5 shadow-md hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between ${
                    isLast ? 'lg:col-span-3 lg:max-w-md lg:mx-auto lg:w-full' : ''
                  }`}
                >
                  <div className="space-y-3">
                    {/* Icon */}
                    <div className="p-2 bg-slate-50 dark:bg-slate-800 text-sky-500 rounded-lg w-fit border border-slate-100 dark:border-slate-800">
                      <IconResolver name={srv.iconName} className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                        {language === 'pt' ? srv.title : srv.titleEn}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                        {language === 'pt' ? srv.description : srv.descriptionEn}
                      </p>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-4 mt-4 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center">
                    <button
                      onClick={() => onSelectService(srv)}
                      className="text-[11px] font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 flex items-center space-x-1"
                    >
                      <span>{language === 'pt' ? 'Saber mais' : 'Learn more'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onBookService(srv.id)}
                      className="text-[10px] font-bold text-slate-600 dark:text-slate-300 hover:text-sky-500 bg-slate-50 hover:bg-sky-50 dark:bg-slate-800 dark:hover:bg-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
                    >
                      {language === 'pt' ? 'Orçamento' : 'Estimate'}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: PORTFÓLIO */}
      <section
        id="portfolio"
        className="py-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Title Block */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest block">
              {language === 'pt' ? 'Nossos Trabalhos' : 'Our Work'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {language === 'pt' ? 'Portfólio' : 'Portfolio'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              {language === 'pt'
                ? 'Transformamos espaços com eficiência, segurança e compromisso em cada detalhe dos nossos serviços e produtos.'
                : 'We transform spaces with efficiency, safety, and commitment in every detail of our services and products.'}
            </p>
          </div>

          {/* Image Gallery Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PORTFOLIO.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 text-left"
              >
                {/* Photo Container */}
                <div className="relative aspect-square overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-950/75 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-bold text-sky-400 border border-slate-800 uppercase tracking-wider">
                    {language === 'pt' ? item.category : item.categoryEn}
                  </div>
                </div>

                {/* Context Block */}
                <div className="p-3.5 space-y-1">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                    {language === 'pt' ? item.title : item.titleEn}
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {language === 'pt' ? item.description : item.descriptionEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTEMUNHOS */}
      <section
        id="testemunhos"
        className="py-12 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Title Block */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest block">
              {language === 'pt' ? 'Clientes Satisfeitos' : 'Satisfied Clients'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {language === 'pt' ? 'Testemunho' : 'Testimonials'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              {language === 'pt'
                ? 'Os testemunhos dos nossos clientes refletem a confiança, qualidade e dedicação que colocamos em cada projeto. Cada opinião é um reconhecimento do nosso compromisso.'
                : 'Our clients testimonials reflect the trust, quality, and dedication we put into every project. Every feedback recognizes our commitment.'}
            </p>
          </div>

          {/* Testimonial Display Layout */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialPage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {testimonials.slice(currentTestimonialPage * testimonialsPerPage, (currentTestimonialPage + 1) * testimonialsPerPage).map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-all relative"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 text-slate-100 dark:text-slate-800 pointer-events-none">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-25">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    <div className="space-y-3 relative z-10">
                      {/* Rating Stars */}
                      <div className="flex space-x-1 text-amber-500">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>

                      {/* Feedback Text */}
                      <blockquote className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed pr-6">
                        "{language === 'pt' ? item.text : item.textEn}"
                      </blockquote>
                    </div>

                    {/* Author Meta Details */}
                    <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="text-left">
                        <cite className="not-italic text-xs font-bold text-slate-950 dark:text-white block leading-none">
                          {item.author}
                        </cite>
                        <span className="text-[10px] text-slate-400 block font-medium mt-1">
                          {language === 'pt' ? item.role : item.roleEn} • {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Slider Controller Navigation */}
            {totalTestimonialPages > 1 && (
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 relative z-10">
                <div className="flex space-x-1.5">
                  {Array.from({ length: totalTestimonialPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonialPage(i)}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        i === currentTestimonialPage ? 'w-6 bg-sky-500' : 'w-2 bg-slate-200 dark:bg-slate-700'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonials}
                    className="p-2 border border-slate-200 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl transition-all"
                    title={language === 'pt' ? 'Anterior' : 'Previous'}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonials}
                    className="p-2 border border-slate-200 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl transition-all"
                    title={language === 'pt' ? 'Seguinte' : 'Next'}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 7: MARCAS QUE CONFIAM EM NÓS */}
      <section className="py-12 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              {language === 'pt' ? 'Marcas que confiam em nós' : 'Brands that trust us'}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              {language === 'pt'
                ? 'As marcas que confiam na SOPEPRI são a prova do nosso compromisso com a qualidade, eficiência e profissionalismo.'
                : 'Brands that trust SOPEPRI stand as proof of our commitment to quality, efficiency, and professional work.'}
            </p>
          </div>

          {/* Slider container */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center">
              {BRANDS.map((brand, idx) => {
                const isActive = idx === activeBrandIdx;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border text-center transition-all duration-500 flex flex-col items-center justify-center h-20 cursor-pointer ${
                      isActive
                        ? 'border-indigo-500 bg-slate-50 dark:bg-slate-900/50 scale-105 shadow-md shadow-indigo-500/5'
                        : 'border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950 opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => setActiveBrandIdx(idx)}
                  >
                    {brand.logoType === 'BCA' && (
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-emerald-700 flex items-center justify-center text-white font-extrabold text-[9px]">
                          BCA
                        </div>
                        <div className="text-left">
                          <p className="font-extrabold text-xs text-[#0E5135] tracking-tight">BCA</p>
                          <p className="text-[7px] text-slate-400 leading-none">Banco Comercial Angolano</p>
                        </div>
                      </div>
                    )}

                    {brand.logoType === 'BFA' && (
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-orange-600 flex items-center justify-center text-white font-extrabold text-[9px]">
                          BFA
                        </div>
                        <div className="text-left">
                          <p className="font-extrabold text-xs text-orange-600 tracking-tight">BFA</p>
                          <p className="text-[7px] text-slate-400 leading-none">Banco de Fomento Angola</p>
                        </div>
                      </div>
                    )}

                    {brand.logoType === 'BOAVIDA' && (
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-indigo-950 flex items-center justify-center text-white font-extrabold text-[9px]">
                          GBV
                        </div>
                        <div className="text-left">
                          <p className="font-extrabold text-xs text-indigo-950 dark:text-indigo-400 tracking-tight leading-none">GRUPO BOAVIDA</p>
                          <p className="text-[7px] text-slate-400 leading-none mt-0.5">Excelência Imobiliária</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Slider dots indicators */}
            <div className="flex justify-center space-x-1.5 mt-4">
              {BRANDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveBrandIdx(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    i === activeBrandIdx ? 'bg-indigo-600 w-3' : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
