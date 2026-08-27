'use client';

import {
  BarChart3,
  CreditCard,
  Handshake,
  Package,
  Store,
  Users,
} from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { useLanguage } from '@/context/LanguageContext';

const icons = ['✦', '◆', '◉', '◈'];
const advancedIcons = [Store, Package, Users, Handshake, BarChart3, CreditCard];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative overflow-hidden bg-[#FAF7F2] py-16 transition-colors duration-300 dark:bg-[#18181B] md:py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C07A3D]/8 blur-3xl dark:bg-[#C6A75E]/8" />

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
          {/* Header */}
          <div className="space-y-4">
            <BlurFade inView delay={0.1}>
              <h2 className="text-4xl font-medium leading-tight tracking-tight text-[#3F3A34] dark:text-white md:text-5xl lg:text-6xl">
                {t.services.heading}{' '}
                <AnimatedGradientText colorFrom="#C07A3D" colorTo="#D4B86A">
                  {t.services.headingAccent}
                </AnimatedGradientText>
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.2}>
              <p className="max-w-xl text-lg text-[#6B645C] dark:text-[#B3B3B3]">
                {t.services.subheading}
              </p>
            </BlurFade>
          </div>

          {/* Core Services Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {t.services.coreServices.map((service, index) => (
              <BlurFade key={service.title} inView delay={0.15 + index * 0.08}>
                <article className="group h-full rounded-2xl border border-[#E6DED3] bg-[#F5EFE6] p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#C07A3D]/40 hover:shadow-lg dark:border-[#2A2A2E] dark:bg-[#0E0E10] dark:hover:border-[#C6A75E]/40">
                  <div className="flex items-start justify-between">
                    <span className="text-2xl text-[#C07A3D] dark:text-[#C6A75E]">
                      {icons[index % icons.length]}
                    </span>
                    <span className="text-xs font-mono text-[#9A948C] dark:text-[#6B6B6B]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-[#3F3A34] dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#6B645C] dark:text-[#B3B3B3]">
                    {service.description}
                  </p>
                </article>
              </BlurFade>
            ))}
          </div>

          {/* Advanced Capabilities / ERP Systems */}
          <div className="space-y-8 rounded-3xl border border-[#E6DED3]/80 bg-[#F5EFE6]/60 p-6 sm:p-10 dark:border-[#2A2A2E]/80 dark:bg-[#0E0E10]/60 backdrop-blur-md">
            <div className="space-y-2">
              <span className="inline-flex items-center rounded-full bg-[#C07A3D]/10 px-3.5 py-1 text-xs font-semibold text-[#C07A3D] dark:bg-[#C6A75E]/15 dark:text-[#E0C782]">
                {t.services.advancedBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#3F3A34] dark:text-white">
                {t.services.advancedTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#6B645C] dark:text-[#B3B3B3]">
                {t.services.advancedSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.services.advancedCapabilities.map((cap, i) => {
                const IconComponent = advancedIcons[i % advancedIcons.length];
                return (
                  <div
                    key={cap.title}
                    className="flex flex-col gap-2 rounded-xl border border-[#E6DED3] bg-white/70 p-5 shadow-2xs transition-all duration-200 hover:border-[#C07A3D]/40 dark:border-[#2A2A2E] dark:bg-white/5 dark:hover:border-[#C6A75E]/40"
                  >
                    <IconComponent className="h-5 w-5 text-[#C07A3D] dark:text-[#C6A75E]" />
                    <h4 className="text-base font-medium text-[#3F3A34] dark:text-white">
                      {cap.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6B645C] dark:text-[#B3B3B3] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
