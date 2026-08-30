'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Camera,
  Sparkles,
  CheckCircle2,
  Zap,
  Users,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { DotPattern } from '@/components/ui/dot-pattern';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { WordRotate } from '@/components/ui/word-rotate';

export default function Hero() {
  const { t, language } = useLanguage();

  const FEATURED_WORKS = [
    {
      id: 'sggs',
      name: language === 'mr' ? 'SGGS इन्स्टिट्यूट' : 'SGGS Institute',
      fullName:
        language === 'mr'
          ? 'श्री गुरु गोविंद सिंघजी अभियांत्रिकी आणि तंत्रज्ञान संस्था (ERP)'
          : 'SGGS Institute of Engineering & Technology',
      domain: 'sggs.ac.in',
      tag: language === 'mr' ? 'शैक्षणिक ERP' : 'Education ERP',
      url: 'https://sggs.ac.in',
      icon: GraduationCap,
      accent: '#C07A3D',
      highlights:
        language === 'mr'
          ? ['स्वायत्त परीक्षा पोर्टल', 'प्रवेश आणि गुणवत्ता यादी इंजिन', 'NAAC A+ मान्यताप्राप्त']
          : ['Autonomous Examination Portal', 'Admissions & Merit Engine', 'NAAC A+ Accredited'],
      stats: language === 'mr' ? '३,५००+ विद्यार्थी' : '3,500+ Students',
    },
    {
      id: 'nanaksar',
      name: language === 'mr' ? 'नानकसर साहिब' : 'Nanaksar Sahib',
      fullName:
        language === 'mr'
          ? 'नानकसर साहिब गुरुद्वारा आणि जागतिक ट्रस्ट'
          : 'Nanaksar Sahib Gurudwara & Global Trust',
      domain: 'test.nanaksarsahib.org/',
      tag: language === 'mr' ? 'धार्मिक & ट्रस्ट' : 'Devotional & Trust',
      url: 'https://test.nanaksarsahib.org/',
      icon: HeartHandshake,
      accent: '#D97706',
      highlights:
        language === 'mr'
          ? ['थेट गुरबानी ऑडिओ प्रवाह', '२४/७ लंगर सेवा व्यवस्थापन', 'जागतिक भाविक पोर्टल']
          : ['Live Gurbani Audio Streams', '24/7 Langar Seva Tracking', 'Global Devotee Portal'],
      stats: language === 'mr' ? '१०,०००+ दैनिक संगत' : '10,000+ Daily Sangat',
    },
    {
      id: 'serene',
      name: language === 'mr' ? 'सेरीन स्टुडिओ' : 'Serene Studio',
      fullName:
        language === 'mr'
          ? 'सेरीन फोटोग्राफी आणि व्हिज्युअल गॅलरी'
          : 'Serene Photography & Editorial Gallery',
      domain: 'photographer-portfolio.vercel.app',
      tag: language === 'mr' ? 'क्रिएटिव्ह पोर्टफोलिओ' : 'Creative Portfolio',
      url: 'https://photographer-portfolio-mauve-nine.vercel.app',
      icon: Camera,
      accent: '#C6A75E',
      highlights:
        language === 'mr'
          ? ['मेसनरी व्हिज्युअल गॅलरी', 'खाजगी क्लायंट प्रुफिंग', '०.४ सेकंद जलद लोड']
          : ['Masonry Visual Galleries', 'Private Client Proofing', 'Sub-second Load Time'],
      stats: language === 'mr' ? '५.० ★ ग्राहक रेटिंग' : '5.0 ★ Client Rating',
    },
    {
      id: 'beauty',
      name: language === 'mr' ? 'ग्लो & ग्रेस' : 'Glow & Grace',
      fullName:
        language === 'mr'
          ? 'ग्लो & ग्रेस लक्झरी सलून आणि स्पा'
          : 'Glow & Grace Luxury Salon',
      domain: 'beauty-parler.vercel.app',
      tag: language === 'mr' ? 'सलून & बुकिंग' : 'Salon & Booking',
      url: 'https://beauty-parler.vercel.app/',
      icon: Sparkles,
      accent: '#DB2777',
      highlights:
        language === 'mr'
          ? ['रिअल-टाइम स्लॉट बुकिंग SaaS', 'ब्रायडल आणि ट्रीटमेंट मेनू', 'झटपट SMS कन्फर्मेशन']
          : ['Real-time Slot Appointment SaaS', 'Bridal & Treatment Menus', 'Instant SMS Confirmations'],
      stats: language === 'mr' ? '२,४००+ अपॉइंटमेंट्स' : '2,400+ Appointments',
    },
  ];

  const TRUST_METRICS = [
    { label: t.hero.metrics.loadTimeLabel, value: t.hero.metrics.loadTime, icon: Zap },
    { label: t.hero.metrics.studentsLabel, value: t.hero.metrics.students, icon: Users },
    { label: t.hero.metrics.devoteesLabel, value: t.hero.metrics.devotees, icon: HeartHandshake },
    { label: t.hero.metrics.bespokeLabel, value: t.hero.metrics.bespoke, icon: ShieldCheck },
  ];

  const [selectedWorkId, setSelectedWorkId] = useState<string>('sggs');
  const activeWork = FEATURED_WORKS.find((w) => w.id === selectedWorkId) || FEATURED_WORKS[0];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F5EFE6] dark:bg-[#0E0E10] pt-28 pb-16 md:pt-36 md:pb-24 transition-colors duration-300">
      <DotPattern
        className="text-[#C07A3D]/25 dark:text-[#C6A75E]/18 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)] pointer-events-none"
      />
      <BackgroundBeams className="opacity-30 dark:opacity-20 pointer-events-none" />

      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[34rem] w-full max-w-4xl rounded-full bg-gradient-to-b from-[#C07A3D]/15 via-[#D4B86A]/10 to-transparent blur-3xl dark:from-[#C6A75E]/15 dark:via-[#C07A3D]/10" />
      <div className="pointer-events-none absolute top-24 left-[6%] h-80 w-80 rounded-full bg-[#C07A3D]/10 blur-3xl dark:bg-[#C6A75E]/8" />
      <div className="pointer-events-none absolute bottom-16 right-[6%] h-96 w-96 rounded-full bg-[#C07A3D]/10 blur-3xl dark:bg-[#C6A75E]/8" />

      <div className="container relative z-20 mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-7 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-[#C07A3D]/25 bg-white/70 px-4 py-1.5 text-sm font-medium text-[#C07A3D] backdrop-blur-md dark:border-[#C6A75E]/30 dark:bg-white/5 dark:text-[#C6A75E] shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C07A3D] opacity-75 dark:bg-[#C6A75E]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C07A3D] dark:bg-[#C6A75E]" />
              </span>
              <span>{t.hero.badge}</span>
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0.4, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: 'easeInOut',
            }}
            className="text-5xl font-medium tracking-tight text-[#3F3A34] dark:text-white md:text-7xl lg:text-8xl leading-[1.06]"
          >
            {t.hero.titlePart1}{' '}
            <AnimatedGradientText colorFrom="#C07A3D" colorTo="#D4B86A" className="font-medium">
              {t.hero.titleRight}
            </AnimatedGradientText>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 text-xl text-[#6B645C] dark:text-[#B3B3B3] md:text-2xl font-light"
          >
            <span>{t.hero.subtitlePrefix}</span>
            <WordRotate
              words={t.hero.rotatingNiches}
              className="inline font-medium text-[#C07A3D] dark:text-[#C6A75E]"
              duration={2600}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-xl text-base md:text-lg text-[#6B645C] dark:text-[#B3B3B3] leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#C07A3D] px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_30px_rgba(192,122,61,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#A86930] hover:shadow-[0_16px_36px_rgba(192,122,61,0.38)] dark:bg-[#C6A75E] dark:text-[#0E0E10] dark:font-semibold dark:shadow-[0_12px_30px_rgba(198,167,94,0.25)] dark:hover:bg-[#D4B86A]"
            >
              {t.hero.startConversation}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E6DED3] bg-white/70 px-6 py-3.5 text-[15px] font-medium text-[#3F3A34] shadow-2xs backdrop-blur-sm transition-all duration-200 hover:border-[#C07A3D]/40 hover:bg-white hover:text-[#C07A3D] dark:border-[#2A2A2E] dark:bg-white/5 dark:text-white dark:hover:border-[#C6A75E]/40 dark:hover:bg-white/10 dark:hover:text-[#C6A75E]"
            >
              {t.hero.seeRecentWork}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pt-6 sm:pt-8 w-full max-w-[50rem] space-y-4"
          >
            <div className="flex items-center justify-between px-2">
              <span className="text-xs uppercase tracking-widest text-[#9A948C] dark:text-[#6B6B6B] font-mono">
                {t.hero.selectedDeployments}
              </span>
              <span className="text-[11px] text-[#C07A3D] dark:text-[#E0C782] font-mono">
                {t.hero.liveProduction}
              </span>
            </div>

            {/* Clickable Client Deployment Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {FEATURED_WORKS.map((work) => {
                const isSelected = work.id === selectedWorkId;
                const WorkIcon = work.icon;
                return (
                  <button
                    key={work.id}
                    onClick={() => setSelectedWorkId(work.id)}
                    type="button"
                    className={`relative flex items-center justify-center gap-2 rounded-xl border p-2.5 text-xs font-medium transition-all duration-200 ${
                      isSelected
                        ? 'border-[#C07A3D]/50 bg-white shadow-sm dark:border-[#C6A75E]/50 dark:bg-[#1E1E26] text-[#3F3A34] dark:text-white'
                        : 'border-[#E6DED3]/70 bg-white/40 hover:border-[#C07A3D]/30 hover:bg-white dark:border-[#2A2A2E]/70 dark:bg-white/5 dark:hover:bg-white/10 text-[#6B645C] dark:text-[#A1A1AA]'
                    }`}
                  >
                    <WorkIcon className="h-4 w-4 shrink-0 text-[#C07A3D] dark:text-[#C6A75E]" />
                    <span className="truncate">{work.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Project Details Glass Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWork.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-[#E6DED3]/80 bg-white/70 p-4 text-left shadow-xs backdrop-blur-xl sm:p-5 dark:border-[#2A2A32] dark:bg-[#16161C]/80"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E6DED3]/60 dark:border-[#2A2A32] pb-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-[#C07A3D]/10 px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-[#C07A3D] dark:bg-[#C6A75E]/15 dark:text-[#E0C782]">
                        {activeWork.tag}
                      </span>
                      <span className="text-xs text-[#6B645C] dark:text-[#A1A1AA] font-mono">
                        {activeWork.domain}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#3F3A34] dark:text-white">
                      {activeWork.fullName}
                    </h4>
                  </div>

                  <a
                    href={activeWork.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#C07A3D] px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#A86930] hover:scale-105 dark:bg-[#C6A75E] dark:text-black"
                  >
                    <span>{t.hero.visitLiveSite}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {activeWork.highlights.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-[#6B645C] dark:text-[#B3B3B3] bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-lg"
                      >
                        <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-mono font-bold text-[#C07A3D] dark:text-[#E0C782]">
                    {activeWork.stats}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {TRUST_METRICS.map((metric, i) => {
                const MetricIcon = metric.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-xl border border-[#E6DED3]/60 bg-white/40 p-2.5 text-left backdrop-blur-md dark:border-[#2A2A2E]/60 dark:bg-white/5"
                  >
                    <MetricIcon className="h-4 w-4 text-[#C07A3D] dark:text-[#C6A75E] shrink-0" />
                    <div>
                      <p className="font-mono text-sm font-bold text-[#3F3A34] dark:text-white leading-none">
                        {metric.value}
                      </p>
                      <p className="text-[10px] text-[#6B645C] dark:text-[#A1A1AA] uppercase tracking-wider mt-0.5">
                        {metric.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
