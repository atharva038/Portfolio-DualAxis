'use client';

import Image from 'next/image';
import { useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { Check, Sparkles } from 'lucide-react';

const emptySubscribe = () => () => {};

export default function LanguageModal() {
  const { language, setLanguage, isLanguageModalOpen, setIsLanguageModalOpen } = useLanguage();
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isMounted || !isLanguageModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Matte Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsLanguageModalOpen(false)}
        />

        {/* Solid Matte Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#DFD3C3] bg-[#F5EFE6] p-6 sm:p-8 shadow-2xl dark:border-[#2B2B32] dark:bg-[#18181C]"
        >
          {/* Header */}
          <div className="text-center space-y-2 mb-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center mb-2">
              <Image
                src="/images/logo-icon.png"
                alt="Dual Axis Logo"
                width={64}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#3F3A34] dark:text-white">
              Choose your language
            </h3>
            <p className="text-sm font-medium text-[#C07A3D] dark:text-[#E0C782]">
              आपली पसंतीची भाषा निवडा
            </p>
          </div>

          {/* Language Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            {/* English Card */}
            <button
              onClick={() => setLanguage('en')}
              type="button"
              className={`group relative flex flex-col items-start justify-between rounded-2xl border p-4 sm:p-5 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                language === 'en'
                  ? 'border-[#C07A3D] bg-[#FAF7F2] shadow-sm dark:border-[#C6A75E] dark:bg-[#22222A]'
                  : 'border-[#DFD3C3] bg-[#EBE2D4]/50 hover:bg-[#EBE2D4] dark:border-[#2A2A30] dark:bg-[#151518] dark:hover:bg-[#202026]'
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <span className="text-2xl">🇬🇧</span>
                {language === 'en' && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C07A3D] text-white dark:bg-[#C6A75E] dark:text-black">
                    <Check className="h-3 w-3" />
                  </span>
                )}
              </div>
              <div className="mt-3">
                <h4 className="text-base font-semibold text-[#3F3A34] dark:text-white">
                  English
                </h4>
                <p className="text-xs text-[#6B645C] dark:text-[#A1A1AA] mt-0.5">
                  Calm, thoughtful design
                </p>
              </div>
              <span className="mt-3 text-[11px] font-semibold text-[#C07A3D] dark:text-[#E0C782]">
                Select English →
              </span>
            </button>

            {/* Marathi Card */}
            <button
              onClick={() => setLanguage('mr')}
              type="button"
              className={`group relative flex flex-col items-start justify-between rounded-2xl border p-4 sm:p-5 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                language === 'mr'
                  ? 'border-[#C07A3D] bg-[#FAF7F2] shadow-sm dark:border-[#C6A75E] dark:bg-[#22222A]'
                  : 'border-[#DFD3C3] bg-[#EBE2D4]/50 hover:bg-[#EBE2D4] dark:border-[#2A2A30] dark:bg-[#151518] dark:hover:bg-[#202026]'
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <span className="text-2xl">🇮🇳</span>
                {language === 'mr' && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C07A3D] text-white dark:bg-[#C6A75E] dark:text-black">
                    <Check className="h-3 w-3" />
                  </span>
                )}
              </div>
              <div className="mt-3">
                <h4 className="text-base font-semibold text-[#3F3A34] dark:text-white">
                  मराठी
                </h4>
                <p className="text-xs text-[#6B645C] dark:text-[#A1A1AA] mt-0.5">
                  मनाला भावणाऱ्या वेबसाइट्स
                </p>
              </div>
              <span className="mt-3 text-[11px] font-semibold text-[#C07A3D] dark:text-[#E0C782]">
                मराठी निवडा →
              </span>
            </button>
          </div>

          {/* Quick Continue / Footer */}
          <div className="flex items-center justify-between border-t border-[#DFD3C3] dark:border-[#2B2B32] pt-4 text-xs text-[#8A847C] dark:text-[#888890]">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#C07A3D] dark:text-[#C6A75E]" />
              You can switch anytime from the navbar
            </span>
            <button
              onClick={() => setLanguage(language)}
              type="button"
              className="font-semibold text-[#3F3A34] hover:underline dark:text-white"
            >
              Done / पूर्ण
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
