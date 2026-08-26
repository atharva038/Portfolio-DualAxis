'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-16 md:py-24 border-t border-[#E6DED3] dark:border-[#2A2A2E] bg-[#FAF7F2] dark:bg-[#0E0E10] transition-colors duration-300">
      <div className="container">
        <div className="text-center space-y-6">
          <div className="flex flex-col items-center">
            {/* Enhanced High-Definition Luxury Brand Logo */}
            <div className="relative mb-6 max-w-[280px] sm:max-w-[340px] md:max-w-[380px] w-full flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Dual Axis Logo"
                width={380}
                height={220}
                className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            <p className="text-lg md:text-xl text-[#6B645C] dark:text-[#B3B3B3] font-medium max-w-lg">
              {t.footer.tagline}
            </p>
          </div>

          <div className="pt-8 md:pt-12 border-t border-[#E6DED3]/80 dark:border-[#2A2A2E]">
            <p className="text-sm text-[#9A948C] dark:text-[#6B6B6B]">
              © {currentYear} {t.footer.copyright} · {t.footer.allRightsReserved}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
