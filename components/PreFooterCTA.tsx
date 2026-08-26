'use client';

import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { LampContainer } from '@/components/ui/lamp';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';

export default function PreFooterCTA() {
  const whatsappLink = `https://wa.me/919156906881?text=${encodeURIComponent(
    "Hi! I came across Dual Axis and I'm interested in discussing a website project. Can we chat?"
  )}`;

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] dark:bg-[#18181B] transition-colors duration-300">
      <LampContainer>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 sm:space-y-7">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-[#C07A3D]/25 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#C07A3D] backdrop-blur-md dark:border-[#C6A75E]/30 dark:bg-white/5 dark:text-[#E0C782] shadow-2xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Let&apos;s Build Together</span>
            </p>
          </motion.div>

          {/* Main Dramatic Headline */}
          <motion.h2
            initial={{ opacity: 0.4, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: 'easeInOut',
            }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#3F3A34] dark:text-white leading-[1.12]"
          >
            Ready to build a website that{' '}
            <AnimatedGradientText colorFrom="#C07A3D" colorTo="#D4B86A" className="font-medium">
              feels right?
            </AnimatedGradientText>
          </motion.h2>

          {/* Value Prop Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-xl text-base sm:text-lg text-[#6B645C] dark:text-[#B3B3B3] leading-relaxed"
          >
            Whether it&apos;s an institutional portal, devotional trust ecosystem, or high-impact creative brand — we craft digital experiences that perform.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-1"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#C07A3D] px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_30px_rgba(192,122,61,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#A86930] hover:shadow-[0_16px_36px_rgba(192,122,61,0.38)] dark:bg-[#C6A75E] dark:text-[#0E0E10] dark:font-semibold dark:shadow-[0_12px_30px_rgba(198,167,94,0.25)] dark:hover:bg-[#D4B86A]"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E6DED3] bg-white/80 px-6 py-3.5 text-[15px] font-medium text-[#3F3A34] shadow-2xs backdrop-blur-sm transition-all duration-200 hover:border-[#25D366]/50 hover:bg-white hover:text-[#25D366] dark:border-[#2A2A2E] dark:bg-white/5 dark:text-white dark:hover:border-[#25D366]/50 dark:hover:bg-white/10 dark:hover:text-[#25D366]"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Value Guarantee / Trust Pills Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-xs sm:text-sm text-[#6B645C] dark:text-[#A1A1AA]"
          >
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-[#C07A3D] dark:text-[#C6A75E]" />
              <span>Fast Turnaround</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="h-4 w-4 text-[#C07A3D] dark:text-[#C6A75E]" />
              <span>100% Bespoke Code</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Zap className="h-4 w-4 text-[#C07A3D] dark:text-[#C6A75E]" />
              <span>0.4s Fast Load Times</span>
            </div>
          </motion.div>
        </div>
      </LampContainer>
    </section>
  );
}
