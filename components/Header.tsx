'use client';

import Image from 'next/image';
import { useState, useEffect, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';

const emptySubscribe = () => () => {};

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');
  const homePrefix = pathname === '/' ? '' : '/';

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const navLinks = [
    { href: '#about', id: 'about', label: t.nav.about },
    { href: '#services', id: 'services', label: t.nav.services },
    { href: '#work', id: 'work', label: t.nav.work },
    { href: '#contact', id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      // Section spy to highlight active nav link
      const sections = ['contact', 'work', 'services', 'about'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionId);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5 transition-all duration-300">
      {/* Matte Floating Capsule */}
      <motion.div
        layout
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`
          mx-auto max-w-[1400px]
          bg-[#F5EFE6] dark:bg-[#18181C]
          border border-[#DFD3C3] dark:border-[#2B2B32]
          shadow-[0_4px_20px_rgba(50,40,30,0.06)] dark:shadow-[0_6px_28px_rgba(0,0,0,0.45)]
          transition-all duration-300 ease-out
          ${
            isScrolled
              ? 'rounded-2xl py-2.5 px-4 sm:px-6'
              : 'rounded-full py-3 px-5 sm:px-7'
          }
        `}
      >
        <div className="flex items-center justify-between relative z-10">
          {/* Brand Logo with Matte Presentation & Status Dot */}
          <a
            href={pathname === '/' ? '#' : '/'}
            className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
          >
            {/* Transparent Official Logo Mark */}
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center">
              <Image
                src="/images/logo-icon.png"
                alt="Dual Axis Logo"
                width={44}
                height={44}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold tracking-tight text-[#3F3A34] transition-colors group-hover:text-[#C07A3D] dark:text-white dark:group-hover:text-[#C6A75E] text-base sm:text-lg">
                Dual Axis
              </span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Matte Hover Pill */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden md:flex items-center gap-1 relative"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredNav === link.id;

              return (
                <a
                  key={link.id}
                  href={`${homePrefix}${link.href}`}
                  onMouseEnter={() => setHoveredNav(link.id)}
                  className={`
                    relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full
                    ${
                      isActive
                        ? 'text-[#C07A3D] font-semibold dark:text-[#E0C782]'
                        : 'text-[#6B645C] hover:text-[#3F3A34] dark:text-[#A1A1AA] dark:hover:text-white'
                    }
                  `}
                >
                  {/* Solid Matte Hover / Active Background Pill */}
                  {(isHovered || (isActive && !hoveredNav)) && (
                    <motion.span
                      layoutId="navbar-matte-pill"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-[#E8DEC\-C] bg-[#E8DEC\-D] bg-[#EBE2D4] dark:bg-[#25252C] -z-10"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Language Segmented Switch + Theme Toggle + Quick CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Segmented Matte Language Switcher */}
            <div className="flex items-center rounded-full border border-[#DFD3C3] bg-[#EBE2D4]/70 p-0.5 text-xs font-semibold dark:border-[#2B2B32] dark:bg-[#121215]">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`relative px-2.5 py-1 rounded-full transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-[#F5EFE6] text-[#C07A3D] font-bold shadow-xs dark:bg-[#24242A] dark:text-[#E0C782]'
                    : 'text-[#6B645C] hover:text-[#3F3A34] dark:text-[#A1A1AA] dark:hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('mr')}
                className={`relative px-2.5 py-1 rounded-full transition-all duration-200 ${
                  language === 'mr'
                    ? 'bg-[#F5EFE6] text-[#C07A3D] font-bold shadow-xs dark:bg-[#24242A] dark:text-[#E0C782]'
                    : 'text-[#6B645C] hover:text-[#3F3A34] dark:text-[#A1A1AA] dark:hover:text-white'
                }`}
              >
                मराठी
              </button>
            </div>

            {/* Tactile Matte Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DFD3C3] bg-[#EBE2D4]/80 text-[#3F3A34] transition-all duration-200 hover:border-[#C07A3D]/40 hover:bg-[#E2D8C8] hover:text-[#C07A3D] hover:scale-105 dark:border-[#2B2B32] dark:bg-[#222228] dark:text-[#E4E4E7] dark:hover:border-[#C6A75E]/40 dark:hover:bg-[#2B2B34] dark:hover:text-[#E0C782]"
              aria-label={isMounted ? `Switch to ${theme === 'light' ? 'dark' : 'light'} theme` : 'Toggle theme'}
            >
              {isMounted ? (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="h-4 w-4" />
              )}
            </button>

            {/* Quick Contact CTA Button */}
            <a
              href={`${homePrefix}#contact`}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#C07A3D] px-4 py-2 text-xs font-semibold text-white shadow-[0_2px_10px_rgba(192,122,61,0.25)] transition-all duration-200 hover:bg-[#A86930] hover:-translate-y-0.5 dark:bg-[#C6A75E] dark:text-[#0E0E10] dark:shadow-[0_2px_10px_rgba(198,167,94,0.2)] dark:hover:bg-[#D4B86A]"
            >
              <span>{language === 'mr' ? 'संवाद साधा' : "Let's Talk"}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-[#DFD3C3] bg-[#EBE2D4] text-[#3F3A34] transition-all hover:bg-[#DFD3C3] dark:border-[#2B2B32] dark:bg-[#222228] dark:text-white"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer Navigation in Solid Matte */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-2.5 mx-auto max-w-[1400px] overflow-hidden rounded-3xl border border-[#DFD3C3] bg-[#F5EFE6] p-4 shadow-xl dark:border-[#2B2B32] dark:bg-[#18181C]"
          >
            <nav className="flex flex-col gap-1 relative z-10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`${homePrefix}${link.href}`}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium text-[#3F3A34] transition-colors hover:bg-[#EBE2D4] hover:text-[#C07A3D] dark:text-white dark:hover:bg-[#24242A] dark:hover:text-[#E0C782]"
                  onClick={closeMobileMenu}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-50" />
                </a>
              ))}

              <div className="mt-2 pt-3 border-t border-[#DFD3C3] dark:border-[#2B2B32]">
                <a
                  href={`${homePrefix}#contact`}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#C07A3D] px-4 py-3 text-sm font-semibold text-white shadow-md dark:bg-[#C6A75E] dark:text-black"
                >
                  <span>{language === 'mr' ? 'संवाद सुरू करा' : "Start a Conversation"}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
