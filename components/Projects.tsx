'use client';

import SocialCards, { type CardItem } from '@/components/ui/card-fan-carousel';
import { BlurFade } from '@/components/ui/blur-fade';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { language, t } = useLanguage();

  const projects: CardItem[] = [
    {
      alt:
        language === 'mr'
          ? 'SGGS इन्स्टिट्यूट — अकॅडेमिक पोर्टल & ERP (sggs.ac.in)'
          : 'SGGS Institute of Technology — Academic ERP & Portal (sggs.ac.in)',
      linkUrl: 'https://sggs.ac.in',
    },
    {
      alt:
        language === 'mr'
          ? 'नानकसर साहिब ट्रस्ट — हेरिटेज & सेवा ERP (nanaksar.org)'
          : 'Nanaksar Sahib Trust — Devotional Heritage & Seva ERP',
      linkUrl: 'https://test.nanaksarsahib.org/',
    },
    {
      alt:
        language === 'mr'
          ? 'सरीन फोटोग्राफी — स्टुडिओ पोर्टफोलिओ'
          : 'Serene Photography — Studio Portfolio Website',
      linkUrl: 'https://photographer-portfolio-mauve-nine.vercel.app',
    },
    {
      alt:
        language === 'mr'
          ? 'ग्लो & ग्रेस — सलून & ऑनलाइन बुकिंग SaaS'
          : 'Glow & Grace — Luxury Salon & Booking SaaS',
      linkUrl: 'https://beauty-parler.vercel.app/',
    },
    {
      alt:
        language === 'mr'
          ? 'जिम पोर्टफोलिओ — फिटनेस वेबसाइट'
          : 'Gym Portfolio — Fitness Website',
      linkUrl: 'https://gym-portfolio-theta.vercel.app/',
    },
  ];

  return (
    <section id="work" className="bg-[#FAF7F2] py-12 transition-colors duration-300 dark:bg-[#18181B] md:py-20 lg:py-24">
      <div className="container">
        <BlurFade inView delay={0.1}>
          <div className="mb-6 text-center md:mb-8">
            <h2 className="mb-4 text-4xl font-medium text-[#3F3A34] dark:text-white md:text-5xl lg:text-6xl">
              {t.projects.heading}{' '}
              <AnimatedGradientText colorFrom="#C07A3D" colorTo="#D4B86A">
                {t.projects.headingAccent}
              </AnimatedGradientText>
            </h2>
            <p className="text-lg text-[#6B645C] dark:text-[#B3B3B3]">
              {t.projects.subheading}
            </p>
          </div>
        </BlurFade>

        <SocialCards cards={projects} />
      </div>
    </section>
  );
}
