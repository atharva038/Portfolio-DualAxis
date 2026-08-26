'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  HeartHandshake,
  Camera,
  Sparkles,
  ExternalLink,
  Lock,
  ChevronLeft,
  ChevronRight,
  Radio,
  ArrowUpRight,
  Award,
  Users,
  Building,
  Volume2,
  Calendar,
  CheckCircle2,
  Clock,
  Zap,
} from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';

export interface CategoryWork {
  id: string;
  name: string;
  category: string;
  domain: string;
  url: string;
  icon: React.ElementType;
  tag: string;
  headline: string;
  tagline: string;
  accent: string;
  accentLight: string;
  glowColor: string;
  themeGradient: string;
  cardBg: string;
  borderColor: string;
  metrics: { label: string; value: string; icon: React.ElementType }[];
  highlights: string[];
  mockType: 'education' | 'devotional' | 'creative' | 'booking';
}

export const CATEGORY_WORKS: CategoryWork[] = [
  {
    id: 'sggs',
    name: 'SGGS Institute',
    category: 'Higher Education & Autonomous Institute Portal',
    domain: 'sggs.ac.in',
    url: 'https://sggs.ac.in',
    icon: GraduationCap,
    tag: 'Education',
    headline: 'Autonomous Campus & Academic Portal',
    tagline: 'High-availability student dashboards, examination archives, faculty directory, and automated admissions workflow.',
    accent: '#C07A3D',
    accentLight: '#F3B476',
    glowColor: 'rgba(192, 122, 61, 0.22)',
    themeGradient: 'from-[#172030] via-[#0F1622] to-[#0A0E17]',
    cardBg: 'bg-[#151E2D]/90',
    borderColor: 'border-[#223046]',
    metrics: [
      { label: 'Campus Area', value: '46+ Acres', icon: Building },
      { label: 'Active Students', value: '3,500+', icon: Users },
      { label: 'Accreditation', value: 'NAAC A+', icon: Award },
    ],
    highlights: ['Autonomous Examination ERP', 'Admissions & Merit System', 'Central Research Hub'],
    mockType: 'education',
  },
  {
    id: 'nanaksar',
    name: 'Nanaksar Sahib',
    category: 'Sacred Devotional & Gurudwara Trust Management',
    domain: 'test.nanaksarsahib.org/',
    url: 'https://test.nanaksarsahib.org/',
    icon: HeartHandshake,
    tag: 'Devotional & Trust',
    headline: 'Sacred Heritage & Trust Management ERP',
    tagline: 'Connecting global devotees with live Gurbani audio streams, 24/7 Langar seva tracking, and transparent trust administration.',
    accent: '#D97706',
    accentLight: '#FDE68A',
    glowColor: 'rgba(217, 119, 6, 0.25)',
    themeGradient: 'from-[#2A1607] via-[#1B0E05] to-[#100803]',
    cardBg: 'bg-[#231307]/90',
    borderColor: 'border-[#4A280E]',
    metrics: [
      { label: 'Daily Sangat', value: '10,000+', icon: Users },
      { label: 'Global Centers', value: '25+ Branches', icon: Building },
      { label: 'Daily Seva', value: '24/7 Langar', icon: Clock },
    ],
    highlights: ['Live Kirtan & Broadcasts', 'Langar & Seva Coordination', 'Worldwide Devotee Portal'],
    mockType: 'devotional',
  },
  {
    id: 'serene',
    name: 'Serene Studio',
    category: 'Editorial Photography & Visual Storytelling',
    domain: 'photographer-portfolio.vercel.app',
    url: 'https://photographer-portfolio-mauve-nine.vercel.app',
    icon: Camera,
    tag: 'Creative Portfolio',
    headline: 'Cinematic Visual Gallery & Client Proofing',
    tagline: 'Emotion-driven visual storytelling with masonry galleries, instant image optimization, and friction-free inquiry booking.',
    accent: '#C6A75E',
    accentLight: '#F5E6C3',
    glowColor: 'rgba(198, 167, 94, 0.22)',
    themeGradient: 'from-[#22201D] via-[#151412] to-[#0D0C0B]',
    cardBg: 'bg-[#201D19]/90',
    borderColor: 'border-[#3D372F]',
    metrics: [
      { label: 'Curated Shoots', value: '40+ Galleries', icon: Camera },
      { label: 'Performance', value: '0.4s Fast', icon: Zap },
      { label: 'Client Reviews', value: '5.0 ★ Rating', icon: Award },
    ],
    highlights: ['High-Res Masonry Layout', 'Private Client Proofing', 'Direct Calendar Booking'],
    mockType: 'creative',
  },
  {
    id: 'beauty',
    name: 'Glow & Grace',
    category: 'Luxury Salon & Real-time Appointment SaaS',
    domain: 'beauty-parler.vercel.app',
    url: 'https://beauty-parler.vercel.app/',
    icon: Sparkles,
    tag: 'Salon & Booking',
    headline: 'Smart Appointment Scheduling & Services Menu',
    tagline: 'Elevating local salon experiences with real-time slot selection, bridal consultations, tiered services, and automated reminders.',
    accent: '#C05A74',
    accentLight: '#FBCFE8',
    glowColor: 'rgba(192, 90, 116, 0.22)',
    themeGradient: 'from-[#26121E] via-[#170A12] to-[#0E050B]',
    cardBg: 'bg-[#230F1B]/90',
    borderColor: 'border-[#4B1F39]',
    metrics: [
      { label: 'Appointments', value: '2,400+', icon: Calendar },
      { label: 'Direct Booking', value: '98% Online', icon: Zap },
      { label: 'Services Menu', value: '35+ Packages', icon: Sparkles },
    ],
    highlights: ['Instant Slot Engine', 'Bridal & Treatment Menus', 'Automated Confirmations'],
    mockType: 'booking',
  },
];

const AUTOPLAY_DURATION = 6000;

export function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeWork = CATEGORY_WORKS[activeIndex];
  const IconComponent = activeWork.icon;

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % CATEGORY_WORKS.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + CATEGORY_WORKS.length) % CATEGORY_WORKS.length);
  }, []);

  const selectWork = (idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      goToNext();
    }, AUTOPLAY_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goToNext, isHovered, activeIndex]);

  return (
    <div
      className="group relative w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Ambient Background Glow */}
      <motion.div
        animate={{
          backgroundColor: activeWork.glowColor,
        }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute -inset-6 rounded-[3rem] opacity-70 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
      />

      {/* Segmented Category Filter Navigation */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1">
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl border border-[#E6DED3]/80 bg-white/70 backdrop-blur-md dark:border-[#2A2A30] dark:bg-[#1C1C22]/80 shadow-xs">
          {CATEGORY_WORKS.map((work, idx) => {
            const isActive = idx === activeIndex;
            const TabIcon = work.icon;
            return (
              <button
                key={work.id}
                onClick={() => selectWork(idx)}
                type="button"
                className={`relative flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-[#3F3A34] dark:text-white font-semibold'
                    : 'text-[#6B645C] hover:text-[#3F3A34] dark:text-[#A1A1AA] dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryWorkTab"
                    className="absolute inset-0 rounded-xl bg-[#FAF7F2] border border-[#E0D7CB] shadow-xs dark:bg-[#282832] dark:border-[#383846]"
                    transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                  />
                )}
                <TabIcon
                  className={`relative z-10 h-4 w-4 transition-colors ${
                    isActive ? 'text-[#C07A3D] dark:text-[#E0C782]' : 'opacity-70'
                  }`}
                />
                <span className="relative z-10">{work.name}</span>
                {isActive && (
                  <span className="relative z-10 hidden sm:inline-block text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded-md bg-[#C07A3D]/10 text-[#C07A3D] dark:bg-[#C6A75E]/15 dark:text-[#E0C782]">
                    {work.tag}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#6B645C] dark:text-[#A1A1AA] font-mono">
            <Radio className={`h-3 w-3 ${isHovered ? 'text-amber-500' : 'text-emerald-500 animate-pulse'}`} />
            <span>0{activeIndex + 1} / 0{CATEGORY_WORKS.length}</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={goToPrev}
              aria-label="Previous category"
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#E6DED3] bg-white/80 text-[#6B645C] shadow-2xs backdrop-blur-md transition-all hover:bg-white hover:text-[#3F3A34] dark:border-[#2A2A30] dark:bg-[#1C1C22]/80 dark:text-[#A1A1AA] dark:hover:bg-[#282832] dark:hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next category"
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#E6DED3] bg-white/80 text-[#6B645C] shadow-2xs backdrop-blur-md transition-all hover:bg-white hover:text-[#3F3A34] dark:border-[#2A2A30] dark:bg-[#1C1C22]/80 dark:text-[#A1A1AA] dark:hover:bg-[#282832] dark:hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Showcase Stage */}
      <div className="relative overflow-hidden rounded-[2rem] border border-[#E6DED3] bg-[#EFE9E1]/60 p-3 sm:p-4 shadow-[0_28px_80px_rgba(63,58,52,0.16)] backdrop-blur-xl dark:border-[#282830] dark:bg-[#18181D]/70 dark:shadow-[0_28px_80px_rgba(0,0,0,0.6)]">
        <BorderBeam
          size={240}
          duration={8}
          colorFrom={activeWork.accent}
          colorTo={activeWork.accentLight}
          borderWidth={1.5}
        />

        {/* Top Header Strip */}
        <div className="flex items-center justify-between border-b border-[#E0D7CB] bg-white/80 px-4 py-2.5 rounded-t-[1.3rem] dark:border-[#24242C] dark:bg-[#15151A]/80">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56]/90" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]/90" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F]/90" />
            <span className="ml-2 text-xs font-mono text-[#6B645C] dark:text-[#A1A1AA] hidden sm:inline">
              Dual Axis · Selected Work
            </span>
          </div>

          <a
            href={activeWork.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1.5 rounded-full border border-[#E2DAD0] bg-white px-3 py-1 text-xs font-mono text-[#3F3A34] shadow-2xs transition-all hover:border-[#C07A3D]/40 dark:border-[#2C2C34] dark:bg-[#1E1E24] dark:text-[#E4E4E7]"
          >
            <Lock className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
            <span>https://{activeWork.domain}</span>
            <ExternalLink className="h-3 w-3 text-[#C07A3D] opacity-70 group-hover/link:opacity-100 transition-opacity dark:text-[#E0C782]" />
          </a>
        </div>

        {/* Autoplay Progress Line */}
        <div className="h-[2px] w-full overflow-hidden bg-[#EAE3D9] dark:bg-[#222228]">
          <motion.div
            key={activeIndex + (isHovered ? '-paused' : '-running')}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: isHovered ? 0 : AUTOPLAY_DURATION / 1000,
              ease: 'linear',
            }}
            style={{
              backgroundColor: activeWork.accent,
            }}
            className="h-full"
          />
        </div>

        {/* Animated Banner Body */}
        <div className="relative min-h-[380px] lg:min-h-[360px] w-full overflow-hidden rounded-b-[1.3rem]">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={activeWork.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction * -50, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute inset-0 flex flex-col justify-between bg-gradient-to-br ${activeWork.themeGradient} p-6 sm:p-8 lg:p-10 text-white`}
            >
              {/* Background ambient lighting */}
              <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:20px_20px]" />
              <div
                className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full blur-3xl opacity-30"
                style={{ backgroundColor: activeWork.accent }}
              />

              {/* Main Content Grid */}
              <div className="relative z-10 grid gap-6 lg:grid-cols-12 lg:items-center">
                {/* Left Area (7 cols) */}
                <div className="space-y-4 lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      style={{ backgroundColor: `${activeWork.accent}33`, borderColor: `${activeWork.accent}66` }}
                      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-0.8 text-xs font-semibold uppercase tracking-wider text-white"
                    >
                      <IconComponent className="h-3.5 w-3.5" />
                      {activeWork.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.8 text-[11px] font-medium text-white/90 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Live Production
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                      {activeWork.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-lg">
                      {activeWork.tagline}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeWork.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/90 backdrop-blur-md"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics & Launch */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-4">
                    <div className="flex items-center gap-5 sm:gap-7">
                      {activeWork.metrics.map((m, i) => {
                        const MetricIcon = m.icon;
                        return (
                          <div key={i} className="space-y-0.5">
                            <div className="flex items-center gap-1 text-white/70 text-[11px] uppercase font-mono">
                              <MetricIcon className="h-3 w-3" />
                              <span>{m.label}</span>
                            </div>
                            <p className="text-base sm:text-lg font-bold text-white tracking-tight font-mono">
                              {m.value}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <a
                      href={activeWork.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: activeWork.accent,
                      }}
                      className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:brightness-110"
                    >
                      <span>Visit Live Portal</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Right Area: Native Fast Crafted Interactive UI Mock (5 cols) */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => window.open(activeWork.url, '_blank')}
                    className={`cursor-pointer rounded-2xl border p-4 sm:p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] ${activeWork.cardBg} ${activeWork.borderColor}`}
                  >
                    {/* Mock Type Specific Rich Native UI */}
                    {activeWork.mockType === 'education' && (
                      <div className="space-y-3 font-sans">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C07A3D]/20 text-[#F5C28F]">
                              <GraduationCap className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-white">SGGS Campus ERP</p>
                              <p className="text-[10px] text-white/60">Autonomous Academic System</p>
                            </div>
                          </div>
                          <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                            Admissions Open
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-xs">
                            <p className="text-[11px] text-white/70">Central Examination & Notices</p>
                            <p className="font-medium text-white text-xs mt-0.5">Winter Semester Results & Academic Calendar 2026</p>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-center text-xs">
                            <div className="rounded-lg bg-white/5 p-2 border border-white/10">
                              <p className="text-base font-bold text-[#F5C28F]">12 Depts</p>
                              <p className="text-[10px] text-white/60">B.Tech & M.Tech</p>
                            </div>
                            <div className="rounded-lg bg-white/5 p-2 border border-white/10">
                              <p className="text-base font-bold text-emerald-400">100%</p>
                              <p className="text-[10px] text-white/60">Autonomous Portal</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1 text-[11px] text-[#F5C28F]">
                          <span>Click to launch sggs.ac.in</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    )}

                    {activeWork.mockType === 'devotional' && (
                      <div className="space-y-3 font-sans">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D97706]/20 text-[#FDE68A]">
                              <Volume2 className="h-4 w-4 animate-pulse" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-white">Nanaksar Gurbani Stream</p>
                              <p className="text-[10px] text-white/60">Live Samagam Broadcast</p>
                            </div>
                          </div>
                          <span className="flex items-center gap-1 rounded-md bg-red-500/20 px-2 py-0.5 text-[10px] font-medium text-red-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-ping" />
                            ON AIR
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-xs space-y-1">
                            <div className="flex justify-between text-[11px] text-white/70">
                              <span>Daily Nitnem & Kirtan</span>
                              <span className="text-[#FDE68A]">24/7 Audio Feed</span>
                            </div>
                            {/* Equalizer animation */}
                            <div className="flex items-end gap-1 h-6 pt-1">
                              {[40, 70, 90, 60, 100, 75, 50, 85, 65, 95, 45, 80].map((h, i) => (
                                <motion.div
                                  key={i}
                                  animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.5}%`] }}
                                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08 }}
                                  className="w-full rounded-full bg-[#FDE68A]/80"
                                />
                              ))}
                            </div>
                          </div>
                          <div className="rounded-lg bg-white/5 p-2 border border-white/10 flex items-center justify-between text-xs">
                            <span className="text-white/80">Langar & Seva Registration</span>
                            <span className="font-semibold text-emerald-400">Open 24/7</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1 text-[11px] text-[#FDE68A]">
                          <span>Click to launch nanaksar portal</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    )}

                    {activeWork.mockType === 'creative' && (
                      <div className="space-y-3 font-sans">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C6A75E]/20 text-[#F5E6C3]">
                              <Camera className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-white">Serene Visual Studio</p>
                              <p className="text-[10px] text-white/60">Editorial & Photography</p>
                            </div>
                          </div>
                          <span className="rounded-md bg-[#C6A75E]/20 px-2 py-0.5 text-[10px] font-medium text-[#F5E6C3]">
                            5.0 ★ Rating
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-3 flex flex-col justify-between h-20">
                            <p className="text-[10px] text-white/60">Masonry Gallery</p>
                            <p className="text-xs font-medium text-white">40+ Curated Shoots</p>
                          </div>
                          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-3 flex flex-col justify-between h-20">
                            <p className="text-[10px] text-white/60">Sub-second Speed</p>
                            <p className="text-xs font-bold text-emerald-400">0.4s Fast Load</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1 text-[11px] text-[#F5E6C3]">
                          <span>Click to open photo studio</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    )}

                    {activeWork.mockType === 'booking' && (
                      <div className="space-y-3 font-sans">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C05A74]/20 text-[#FBCFE8]">
                              <Sparkles className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-white">Glow & Grace Salon</p>
                              <p className="text-[10px] text-white/60">Real-time Booking SaaS</p>
                            </div>
                          </div>
                          <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                            Instant Slots
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-xs space-y-1.5">
                            <p className="text-[11px] text-white/70">Select Available Slot Today</p>
                            <div className="flex gap-1.5">
                              <span className="rounded-lg bg-[#C05A74] px-2 py-1 text-[10px] font-semibold text-white">10:30 AM</span>
                              <span className="rounded-lg bg-white/10 px-2 py-1 text-[10px] text-white/80">02:00 PM</span>
                              <span className="rounded-lg bg-white/10 px-2 py-1 text-[10px] text-white/80">04:30 PM</span>
                            </div>
                          </div>
                          <div className="rounded-lg bg-white/5 p-2 border border-white/10 flex items-center justify-between text-xs">
                            <span className="text-white/80">Bridal & Hair Packages</span>
                            <span className="font-semibold text-[#FBCFE8]">Confirmed via SMS</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1 text-[11px] text-[#FBCFE8]">
                          <span>Click to open salon app</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
