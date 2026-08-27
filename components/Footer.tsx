'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { buildMailtoCompose, openEmailCompose } from '@/lib/email-compose';

const emails = [
  { address: 'atharvasjoshi2005@gmail.com', name: 'Atharva' },
  { address: 'rameshwarsarkale21@gmail.com', name: 'Rameshwar' },
];

const phones = [
  { number: '9156906881', tel: '+919156906881' },
  { number: '8080652957', tel: '+918080652957' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/#about', label: t.nav.about },
    { href: '/#services', label: t.nav.services },
    { href: '/#work', label: t.nav.work },
    { href: '/#contact', label: t.nav.contact },
    { href: '/terms', label: t.footer.termsLink },
  ];

  return (
    <footer className="border-t border-[#E6DED3] bg-[#FAF7F2] transition-colors duration-300 dark:border-[#2A2A2E] dark:bg-[#0E0E10]">
      <div className="container py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <div className="relative mb-5 max-w-[220px]">
                <Image
                  src="/images/logo.png"
                  alt="Dual Axis Logo"
                  width={220}
                  height={128}
                  className="h-auto w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </Link>
            <p className="mb-4 max-w-xs text-base leading-relaxed text-[#6B645C] dark:text-[#B3B3B3]">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#9A948C] dark:text-[#6B6B6B]">
              <MapPin className="h-4 w-4 shrink-0 text-[#C07A3D] dark:text-[#C6A75E]" />
              <span>{t.footer.location}</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#3F3A34] dark:text-white">
              {t.footer.quickLinksTitle}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-[#6B645C] transition-colors hover:text-[#C07A3D] dark:text-[#B3B3B3] dark:hover:text-[#C6A75E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-5">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#3F3A34] dark:text-white">
              {t.footer.contactTitle}
            </h3>

            <div className="space-y-5">
              <div>
                <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[#9A948C] dark:text-[#6B6B6B]">
                  <Mail className="h-3.5 w-3.5" />
                  {t.footer.emailLabel}
                </p>
                <ul className="space-y-2">
                  {emails.map((email) => (
                    <li key={email.address}>
                      <a
                        href={buildMailtoCompose(email.address)}
                        onClick={(event) => {
                          event.preventDefault();
                          openEmailCompose(email.address);
                        }}
                        className="group flex flex-col rounded-lg border border-transparent px-2 py-1.5 -mx-2 transition-colors hover:border-[#C07A3D]/15 hover:bg-[#C07A3D]/5 dark:hover:border-[#C6A75E]/15 dark:hover:bg-[#C6A75E]/5"
                      >
                        <span className="text-[15px] font-medium text-[#3F3A34] transition-colors group-hover:text-[#C07A3D] dark:text-white dark:group-hover:text-[#C6A75E]">
                          {email.address}
                        </span>
                        <span className="text-xs text-[#9A948C] dark:text-[#6B6B6B]">{email.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[#9A948C] dark:text-[#6B6B6B]">
                  <Phone className="h-3.5 w-3.5" />
                  {t.footer.phoneLabel}
                </p>
                <ul className="flex flex-wrap gap-3">
                  {phones.map((phone) => (
                    <li key={phone.number}>
                      <a
                        href={`tel:${phone.tel}`}
                        className="inline-flex items-center rounded-lg border border-[#E6DED3] bg-white/60 px-3.5 py-2 text-[15px] font-medium text-[#3F3A34] transition-all hover:border-[#C07A3D]/40 hover:text-[#C07A3D] dark:border-[#2A2A2E] dark:bg-[#18181B] dark:text-white dark:hover:border-[#C6A75E]/40 dark:hover:text-[#C6A75E]"
                      >
                        +91 {phone.number}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E6DED3]/80 dark:border-[#2A2A2E]">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-[#9A948C] dark:text-[#6B6B6B]">
            © {currentYear} {t.footer.copyright}
          </p>
          <p className="text-sm text-[#9A948C] dark:text-[#6B6B6B]">
            {t.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
