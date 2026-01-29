import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 md:pt-6 transition-all duration-300">
      <div className={`
        mx-auto max-w-5xl
        bg-gradient-to-br from-[#FAF7F2]/95 to-[#F5EFE6]/92
        dark:bg-gradient-to-br dark:from-[#18181B]/95 dark:to-[#0E0E10]/92
        backdrop-blur-xl
        border border-[#E6DED3]/40 dark:border-[#2A2A2E]/40
        shadow-lg shadow-black/5 dark:shadow-black/30
        transition-all duration-300 ease-out
        ${isScrolled 
          ? 'rounded-2xl py-3 px-6' 
          : 'rounded-3xl py-4 px-8'
        }
      `}>
        <div className="flex items-center justify-between relative z-10">
          <a 
            href="#" 
            className={`
              font-medium text-[#3F3A34] dark:text-white 
              hover:text-[#C07A3D] dark:hover:text-[#C6A75E] 
              transition-all duration-300
              ${isScrolled ? 'text-base' : 'text-lg'}
            `}
          >
            Dual Axis
          </a>
          
          <nav className={`
            hidden md:flex items-center gap-1
          `}>
            <a 
              href="#about" 
              className={`
                text-[#3F3A34] dark:text-white 
                hover:text-[#C07A3D] dark:hover:text-[#C6A75E] 
                hover:bg-[#FAF7F2]/50 dark:hover:bg-[#18181B]/50
                rounded-lg px-4 py-2
                transition-all duration-200
                ${isScrolled ? 'text-sm' : 'text-[15px]'}
              `}
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a 
              href="#services" 
              className={`
                text-[#3F3A34] dark:text-white 
                hover:text-[#C07A3D] dark:hover:text-[#C6A75E] 
                hover:bg-[#FAF7F2]/50 dark:hover:bg-[#18181B]/50
                rounded-lg px-4 py-2
                transition-all duration-200
                ${isScrolled ? 'text-sm' : 'text-[15px]'}
              `}
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a 
              href="#work" 
              className={`
                text-[#3F3A34] dark:text-white 
                hover:text-[#C07A3D] dark:hover:text-[#C6A75E] 
                hover:bg-[#FAF7F2]/50 dark:hover:bg-[#18181B]/50
                rounded-lg px-4 py-2
                transition-all duration-200
                ${isScrolled ? 'text-sm' : 'text-[15px]'}
              `}
              onClick={closeMobileMenu}
            >
              Work
            </a>
            <a 
              href="#contact" 
              className={`
                text-[#3F3A34] dark:text-white 
                hover:text-[#C07A3D] dark:hover:text-[#C6A75E] 
                hover:bg-[#FAF7F2]/50 dark:hover:bg-[#18181B]/50
                rounded-lg px-4 py-2
                transition-all duration-200
                ${isScrolled ? 'text-sm' : 'text-[15px]'}
              `}
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button 
              className={`
                flex items-center justify-center rounded-lg 
                bg-[#FAF7F2] dark:bg-[#18181B] 
                text-[#3F3A34] dark:text-white 
                hover:bg-[#E6DED3] dark:hover:bg-[#2A2A2E] 
                transition-all duration-200
                ${isScrolled ? 'w-9 h-9' : 'w-10 h-10'}
              `}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              )}
            </button>

            <button 
              className={`
                md:hidden flex items-center justify-center rounded-lg 
                bg-[#FAF7F2] dark:bg-[#18181B] 
                text-[#3F3A34] dark:text-white 
                hover:bg-[#E6DED3] dark:hover:bg-[#2A2A2E] 
                transition-all duration-200
                ${isScrolled ? 'w-9 h-9' : 'w-10 h-10'}
              `}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2">
          <div className="mx-auto max-w-5xl bg-gradient-to-br from-[#FAF7F2]/95 to-[#F5EFE6]/92 dark:bg-gradient-to-br dark:from-[#18181B]/95 dark:to-[#0E0E10]/92 backdrop-blur-xl border border-[#E6DED3]/40 dark:border-[#2A2A2E]/40 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/30 p-4">
            <nav className="flex flex-col gap-1 relative z-10">
              <a 
                href="#about" 
                className="text-[15px] text-[#3F3A34] dark:text-white hover:text-[#C07A3D] dark:hover:text-[#C6A75E] hover:bg-[#FAF7F2]/50 dark:hover:bg-[#18181B]/50 rounded-lg px-4 py-3 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a 
                href="#services" 
                className="text-[15px] text-[#3F3A34] dark:text-white hover:text-[#C07A3D] dark:hover:text-[#C6A75E] hover:bg-[#FAF7F2]/50 dark:hover:bg-[#18181B]/50 rounded-lg px-4 py-3 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                Services
              </a>
              <a 
                href="#work" 
                className="text-[15px] text-[#3F3A34] dark:text-white hover:text-[#C07A3D] dark:hover:text-[#C6A75E] hover:bg-[#FAF7F2]/50 dark:hover:bg-[#18181B]/50 rounded-lg px-4 py-3 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                Work
              </a>
              <a 
                href="#contact" 
                className="text-[15px] text-[#3F3A34] dark:text-white hover:text-[#C07A3D] dark:hover:text-[#C6A75E] hover:bg-[#FAF7F2]/50 dark:hover:bg-[#18181B]/50 rounded-lg px-4 py-3 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
