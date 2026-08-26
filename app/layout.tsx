import type { Metadata, Viewport } from 'next';
import { Inter, Geist } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import LanguageModal from '@/components/LanguageModal';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://www.dual-axis.tech';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dual Axis — Web Development & Design Studio',
  description:
    'A two-person freelance web development team creating calm, human-first websites for studios and local businesses. Simple solutions, thoughtfully crafted.',
  keywords: [
    'web development',
    'web design',
    'freelance developers',
    'portfolio websites',
    'business websites',
    'Dual Axis',
    'custom websites',
    'responsive design',
  ],
  authors: [{ name: 'Dual Axis - Atharva & Rameshwar Sarkale' }],
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Dual Axis — Web Development & Design Studio',
    description:
      'A two-person freelance web development team creating calm, human-first websites for studios and local businesses.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dual Axis — Web Development & Design Studio',
    description:
      'A two-person freelance web development team creating calm, human-first websites for studios and local businesses.',
    images: ['/images/logo.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#C07A3D',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Dual Axis',
  alternateName: 'Dual Axis Web Development',
  description:
    'A two-person freelance web development team creating calm, human-first websites for studios and local businesses. We specialize in portfolio sites, business websites, and custom web solutions.',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/logo.png`,
  telephone: '+91-9156906881',
  email: 'contact@dual-axis.tech',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    addressCountry: 'India',
  },
  sameAs: ['https://github.com/atharva038'],
  founder: [
    {
      '@type': 'Person',
      name: 'Atharva Sachin Joshi',
      jobTitle: 'Developer',
    },
    {
      '@type': 'Person',
      name: 'Rameshwar Sarkale',
      jobTitle: 'Developer',
    },
  ],
  knowsAbout: [
    'Web Development',
    'Web Design',
    'Portfolio Websites',
    'Business Websites',
    'React',
    'TypeScript',
    'Frontend Development',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  serviceType: [
    'Website Design',
    'Web Development',
    'Portfolio Sites',
    'Business Sites',
    'Custom Web Solutions',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.variable} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <LanguageModal />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
