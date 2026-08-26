'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Expect() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#FAF7F2] dark:bg-[#18181B] transition-colors duration-300">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#3F3A34] dark:text-white mb-10 md:mb-12 text-center">
            {t.expect.heading}
          </h2>

          <div className="space-y-5 md:space-y-6">
            {t.expect.items.map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-lg md:text-xl">
                <span className="text-[#C07A3D] dark:text-[#C6A75E] font-medium">—</span>
                <span className="text-[#6B645C] dark:text-[#B3B3B3]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
