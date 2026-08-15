'use client';

import {
  BarChart3,
  CreditCard,
  Handshake,
  Package,
  Store,
  Users,
} from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';

const services = [
  {
    title: 'Website Design',
    description: 'Clean, modern designs that reflect your brand identity and resonate with your audience.',
    icon: '✦',
  },
  {
    title: 'Development',
    description: 'Fast, reliable websites built with modern technology. Optimized for performance and accessibility.',
    icon: '◆',
  },
  {
    title: 'Portfolio Sites',
    description: 'Beautiful showcases for your creative work. Designed to let your projects shine and speak for themselves.',
    icon: '◉',
  },
  {
    title: 'Business Sites',
    description: 'Professional web presence for local businesses. Simple, effective, and easy to manage.',
    icon: '◈',
  },
];

const advancedCapabilities = [
  {
    title: 'Store Management',
    description: 'Point-of-sale, catalogs, pricing, and sales tracking in one place.',
    icon: Store,
  },
  {
    title: 'Inventory Control',
    description: 'Live stock levels, alerts, and supplier workflows.',
    icon: Package,
  },
  {
    title: 'Staff Management',
    description: 'Scheduling, attendance, and simple performance tracking.',
    icon: Users,
  },
  {
    title: 'Customer Relations',
    description: 'CRM, bookings, appointments, and a clean customer database.',
    icon: Handshake,
  },
  {
    title: 'Analytics & Reports',
    description: 'Sales, revenue, and dashboards you can actually use.',
    icon: BarChart3,
  },
  {
    title: 'Payment Integration',
    description: 'Secure gateways, invoices, and automated billing.',
    icon: CreditCard,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20 lg:mb-24">
          <h2 className="mb-6 text-5xl font-medium leading-[1.1] tracking-tight text-[#3F3A34] dark:text-white md:text-6xl lg:text-7xl">
            What we{' '}
            <AnimatedGradientText colorFrom="#C07A3D" colorTo="#D4B86A">
              do
            </AnimatedGradientText>
          </h2>
          <p className="text-xl leading-relaxed text-[#6B645C] dark:text-[#B3B3B3] md:text-2xl">
            Simple solutions, thoughtfully crafted for real people.
          </p>
        </div>

        <div className="mx-auto mb-20 grid max-w-6xl grid-cols-1 gap-6 md:mb-28 md:grid-cols-2 lg:mb-32 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-[#E6DED3] bg-[#FAF7F2] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#C07A3D] hover:shadow-2xl hover:shadow-[#C07A3D]/10 dark:border-[#2A2A2E] dark:bg-[#18181B] dark:hover:border-[#C6A75E] dark:hover:shadow-[#C6A75E]/10 lg:p-10"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C07A3D]/0 to-transparent transition-all duration-500 group-hover:from-[#C07A3D]/5 dark:group-hover:from-[#C6A75E]/5" />
              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between">
                  <span className="inline-block text-4xl text-[#C07A3D] transition-transform duration-500 group-hover:scale-110 dark:text-[#C6A75E]">
                    {service.icon}
                  </span>
                  <span className="text-sm font-medium text-[#9A948C] transition-colors duration-300 group-hover:text-[#C07A3D] dark:text-[#6B6B6B] dark:group-hover:text-[#C6A75E]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-medium text-[#3F3A34] transition-colors duration-300 group-hover:text-[#C07A3D] dark:text-white dark:group-hover:text-[#C6A75E] lg:text-3xl">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-[#6B645C] dark:text-[#B3B3B3] lg:text-lg">
                  {service.description}
                </p>
              </div>
              <div className="pointer-events-none absolute right-0 bottom-0 h-24 w-24 rounded-tl-full bg-gradient-to-tl from-[#C07A3D]/0 to-transparent transition-all duration-500 group-hover:from-[#C07A3D]/10 dark:group-hover:from-[#C6A75E]/10" />
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16 lg:mb-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#C07A3D]/10 px-4 py-2 text-sm font-medium text-[#C07A3D] dark:bg-[#C6A75E]/10 dark:text-[#C6A75E]">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#C07A3D] dark:bg-[#C6A75E]" />
              Full-Stack Solutions
            </div>
            <h3 className="mb-6 text-4xl font-medium leading-[1.1] tracking-tight text-[#3F3A34] dark:text-white md:text-5xl lg:text-6xl">
              Beyond beautiful websites
            </h3>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#6B645C] dark:text-[#B3B3B3] md:text-xl">
              We&apos;re currently focused on portfolios and showcase websites, but we also build comprehensive business management systems tailored to your operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {advancedCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <BlurFade key={capability.title} inView delay={0.05 * index}>
                  <div className="group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-2xl border border-[#E6DED3] bg-[#FAF7F2] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C07A3D] hover:shadow-[0_16px_40px_rgba(192,122,61,0.12)] dark:border-[#2A2A2E] dark:bg-[#18181B] dark:hover:border-[#C6A75E] dark:hover:shadow-[0_16px_40px_rgba(198,167,94,0.12)]">
                    <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#C07A3D]/0 blur-2xl transition-all duration-500 group-hover:bg-[#C07A3D]/15 dark:group-hover:bg-[#C6A75E]/15" />

                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C07A3D]/10 text-[#C07A3D] transition-transform duration-300 group-hover:scale-110 dark:bg-[#C6A75E]/10 dark:text-[#C6A75E]">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <span className="text-xs font-medium tracking-wider text-[#9A948C] dark:text-[#6B6B6B]">
                        0{index + 1}
                      </span>
                    </div>

                    <h4 className="mb-2 text-lg font-medium text-[#3F3A34] transition-colors duration-300 group-hover:text-[#C07A3D] dark:text-white dark:group-hover:text-[#C6A75E]">
                      {capability.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-[#6B645C] dark:text-[#B3B3B3]">
                      {capability.description}
                    </p>

                    <div className="mt-auto pt-5">
                      <span className="inline-block h-px w-8 bg-[#E6DED3] transition-all duration-300 group-hover:w-14 group-hover:bg-[#C07A3D] dark:bg-[#2A2A2E] dark:group-hover:bg-[#C6A75E]" />
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>

          <div className="mt-16 text-center md:mt-20">
            <div className="inline-flex flex-col items-center gap-4 rounded-3xl border border-[#C07A3D]/20 bg-gradient-to-br from-[#C07A3D]/5 to-transparent p-8 dark:border-[#C6A75E]/20 dark:from-[#C6A75E]/5 lg:p-10">
              <p className="text-lg font-medium text-[#3F3A34] dark:text-white md:text-xl">
                Need a custom business solution?
              </p>
              <p className="max-w-2xl text-base text-[#6B645C] dark:text-[#B3B3B3]">
                From simple booking systems to complex inventory management, we build scalable solutions that grow with your business.
              </p>
              <a
                href="#contact"
                className="mt-2 inline-flex items-center gap-2 rounded-xl bg-[#C07A3D] px-8 py-4 text-[15px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#A86930] dark:bg-[#C6A75E] dark:hover:bg-[#D4B86A]"
              >
                Discuss your project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
