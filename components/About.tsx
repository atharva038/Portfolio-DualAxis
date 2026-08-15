'use client';

import Image from 'next/image';
import { BlurFade } from '@/components/ui/blur-fade';
import { ShineBorder } from '@/components/ui/shine-border';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';

const team = [
  {
    src: '/images/atharva.png',
    name: 'Atharva Sachin Joshi',
    role: 'Developer',
    imageClass: 'object-cover object-[center_22%]',
  },
  {
    src: '/images/Ram.jpeg',
    name: 'Rameshwar Madhav Sarkale',
    role: 'Developer',
    imageClass: 'object-cover object-[center_8%]',
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#FAF7F2] py-16 transition-colors duration-300 dark:bg-[#18181B] md:py-24 lg:py-32">
      <div className="pointer-events-none absolute top-16 right-0 h-72 w-72 rounded-full bg-[#C07A3D]/8 blur-3xl dark:bg-[#C6A75E]/10" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <BlurFade inView delay={0.1}>
              <h2 className="text-4xl font-medium leading-tight tracking-tight text-[#3F3A34] dark:text-white md:text-5xl lg:text-6xl">
                A small team, focused on
                <br />
                simple things that{' '}
                <AnimatedGradientText colorFrom="#C07A3D" colorTo="#D4B86A">
                  work
                </AnimatedGradientText>
                .
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.2}>
              <p className="text-lg leading-relaxed text-[#6B645C] dark:text-[#B3B3B3]">
                We&apos;re a two-person freelance team building calm,
                practical websites for studios and local businesses.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.3}>
              <p className="text-lg leading-relaxed text-[#6B645C] dark:text-[#B3B3B3]">
                No noise, no unnecessary complexity —
                <br />
                just work that feels right.
              </p>
            </BlurFade>
            <BlurFade inView delay={0.4}>
              <span className="mt-4 block text-sm italic text-[#9A948C] dark:text-[#6B6B6B]">
                — Atharva & Rameshwar
              </span>
            </BlurFade>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5">
            {team.map((member, index) => (
              <BlurFade key={member.name} inView delay={0.15 + index * 0.12}>
                <article className={`group ${index === 1 ? 'sm:mt-10' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-[#E8E2D9] shadow-[0_18px_40px_rgba(63,58,52,0.12)] dark:bg-[#1F1F23] dark:shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                    <ShineBorder
                      shineColor={['#C07A3D', '#C6A75E', '#A86930']}
                      borderWidth={1}
                      duration={12}
                    />
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={member.src}
                        alt={member.name}
                        fill
                        quality={95}
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 42vw, 320px"
                        className={`${member.imageClass} transition-transform duration-700 group-hover:scale-105`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <h3 className="text-lg font-medium text-white">{member.name}</h3>
                        <span className="mt-1 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
                          {member.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
