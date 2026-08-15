'use client';

import { ArrowRight } from 'lucide-react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { BlurFade } from '@/components/ui/blur-fade';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { BorderBeam } from '@/components/ui/border-beam';
import { DotPattern } from '@/components/ui/dot-pattern';
import { WordRotate } from '@/components/ui/word-rotate';
import { CachedSitePreview } from '@/components/ui/cached-site-preview';

const featured = {
  title: 'Serene Photography',
  category: 'Portfolio Website',
  url: 'https://photographer-portfolio-mauve-nine.vercel.app',
};

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden pt-28 pb-8 md:pt-32 md:pb-10 lg:pt-36 lg:pb-12">
      <DotPattern
        className="text-[#C07A3D]/25 dark:text-[#C6A75E]/15 [mask-image:radial-gradient(700px_circle_at_70%_40%,white,transparent)]"
      />
      <BackgroundBeams className="opacity-35 dark:opacity-20" />
      <div className="hero-texture pointer-events-none absolute inset-0 opacity-20 dark:opacity-10" />
      <div className="pointer-events-none absolute top-24 left-[8%] h-64 w-64 rounded-full bg-[#C07A3D]/12 blur-3xl dark:bg-[#C6A75E]/10" />
      <div className="pointer-events-none absolute right-[6%] bottom-10 h-72 w-72 rounded-full bg-[#C07A3D]/10 blur-3xl dark:bg-[#C6A75E]/8" />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-7 lg:space-y-8">
            <BlurFade delay={0.08} inView>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#C07A3D]/20 bg-[#C07A3D]/8 px-4 py-1.5 text-sm font-medium text-[#C07A3D] dark:border-[#C6A75E]/25 dark:bg-[#C6A75E]/10 dark:text-[#C6A75E]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C07A3D] opacity-70 dark:bg-[#C6A75E]" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C07A3D] dark:bg-[#C6A75E]" />
                </span>
                Dual Axis · Design & Development
              </p>
            </BlurFade>

            <BlurFade delay={0.16} inView>
              <h1 className="text-5xl font-medium leading-[1.05] tracking-tight text-[#3F3A34] dark:text-white md:text-6xl lg:text-7xl">
                Websites that
                <br />
                feel{' '}
                <AnimatedGradientText colorFrom="#C07A3D" colorTo="#D4B86A" className="font-medium">
                  right
                </AnimatedGradientText>
              </h1>
            </BlurFade>

            <BlurFade delay={0.24} inView>
              <div className="flex flex-wrap items-center gap-2 text-lg text-[#6B645C] dark:text-[#B3B3B3] md:text-xl">
                <span>Calm, thoughtful sites for</span>
                <WordRotate
                  words={['studios', 'businesses', 'creatives', 'locals']}
                  className="inline text-[#C07A3D] dark:text-[#C6A75E]"
                  duration={2600}
                />
              </div>
            </BlurFade>

            <BlurFade delay={0.32} inView>
              <p className="max-w-md text-base leading-relaxed text-[#6B645C] dark:text-[#B3B3B3] md:text-lg">
                Simple solutions, thoughtfully crafted — so your work looks as considered as it feels.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#C07A3D] px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_30px_rgba(192,122,61,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#A86930] dark:bg-[#C6A75E] dark:shadow-[0_12px_30px_rgba(198,167,94,0.22)] dark:hover:bg-[#D4B86A]"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E6DED3] bg-white/50 px-6 py-3.5 text-[15px] font-medium text-[#3F3A34] backdrop-blur-sm transition-all duration-200 hover:border-[#C07A3D]/40 hover:text-[#C07A3D] dark:border-[#2A2A2E] dark:bg-white/5 dark:text-white dark:hover:border-[#C6A75E]/40 dark:hover:text-[#C6A75E]"
                >
                  See recent work
                </a>
              </div>
            </BlurFade>

            
          </div>

          <BlurFade delay={0.22} inView direction="left">
            <div
              className="group relative cursor-pointer"
              onClick={() => window.open(featured.url, '_blank')}
            >
              <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-[#C07A3D]/20 via-transparent to-[#C6A75E]/15 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100 dark:from-[#C6A75E]/20" />
              <div className="relative overflow-hidden rounded-2xl border border-[#E6DED3]/70 bg-[#E8E2D9] shadow-[0_24px_60px_rgba(63,58,52,0.16)] dark:border-[#2A2A2E] dark:bg-[#1F1F23] dark:shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                <BorderBeam size={140} duration={8} colorFrom="#C07A3D" colorTo="#C6A75E" borderWidth={1.5} />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <CachedSitePreview src={featured.url} title={featured.title} liveUntilCached delayMs={400} />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 opacity-90 transition-opacity group-hover:opacity-100">
                    <p className="text-xs tracking-wide text-white/70">{featured.category}</p>
                    <p className="text-base font-medium text-white">{featured.title}</p>
                    <p className="mt-1 text-sm text-white/80">View live project ↗</p>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
