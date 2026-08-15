'use client';

import SocialCards, { type CardItem } from '@/components/ui/card-fan-carousel';
import { BlurFade } from '@/components/ui/blur-fade';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';

const projects: CardItem[] = [
  {
    alt: 'Serene Photography — Portfolio Website',
    linkUrl: 'https://photographer-portfolio-mauve-nine.vercel.app',
  },
  {
    alt: 'Beauty Parlor — Business Website',
    linkUrl: 'https://beauty-parler.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="work" className="bg-[#FAF7F2] py-12 transition-colors duration-300 dark:bg-[#18181B] md:py-20 lg:py-24">
      <div className="container">
        <BlurFade inView delay={0.1}>
          <div className="mb-6 text-center md:mb-8">
            <h2 className="mb-4 text-4xl font-medium text-[#3F3A34] dark:text-white md:text-5xl lg:text-6xl">
              Recent{' '}
              <AnimatedGradientText colorFrom="#C07A3D" colorTo="#D4B86A">
                work
              </AnimatedGradientText>
            </h2>
            <p className="text-lg text-[#6B645C] dark:text-[#B3B3B3]">
              Selected projects we&apos;re proud of.
            </p>
          </div>
        </BlurFade>

        <SocialCards cards={projects} />
      </div>
    </section>
  );
}
