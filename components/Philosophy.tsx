'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section className="py-10 md:py-14">
      <div className="container text-center">
        <h2 className="mb-6 text-4xl font-medium leading-tight tracking-tight text-[#3F3A34] dark:text-white md:mb-8 md:text-5xl lg:text-6xl">
          {t.philosophy.titlePart1}
          <br />
          {t.philosophy.titlePart2}
        </h2>

        <div className="flex flex-col items-center justify-center gap-4 text-lg text-[#6B645C] dark:text-[#B3B3B3] md:flex-row md:gap-10">
          {t.philosophy.points.map((point, index) => (
            <div key={index} className="flex items-center gap-4">
              {index > 0 && (
                <span className="hidden text-[#E6DED3] dark:text-[#2A2A2E] md:inline">•</span>
              )}
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
