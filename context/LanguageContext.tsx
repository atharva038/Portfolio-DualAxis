'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'mr';

export interface Translations {
  nav: {
    about: string;
    services: string;
    work: string;
    contact: string;
    lampMode: string;
    navMode: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleRight: string;
    subtitlePrefix: string;
    rotatingNiches: string[];
    description: string;
    startConversation: string;
    seeRecentWork: string;
    selectedDeployments: string;
    liveProduction: string;
    visitLiveSite: string;
    metrics: {
      loadTime: string;
      loadTimeLabel: string;
      students: string;
      studentsLabel: string;
      devotees: string;
      devoteesLabel: string;
      bespoke: string;
      bespokeLabel: string;
    };
  };
  philosophy: {
    titlePart1: string;
    titlePart2: string;
    points: string[];
  };
  about: {
    titlePart1: string;
    titlePart2: string;
    titlePart3: string;
    desc1: string;
    desc2Part1: string;
    desc2Part2: string;
    teamAtharvaRole: string;
    teamRameshwarRole: string;
  };
  services: {
    heading: string;
    headingAccent: string;
    subheading: string;
    coreServices: {
      title: string;
      description: string;
    }[];
    advancedTitle: string;
    advancedBadge: string;
    advancedSubtitle: string;
    advancedCapabilities: {
      title: string;
      description: string;
    }[];
  };
  projects: {
    heading: string;
    headingAccent: string;
    subheading: string;
    liveProject: string;
  };
  expect: {
    heading: string;
    items: string[];
  };
  contact: {
    headingPart1: string;
    headingPart2: string;
    headingAccent: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successMessage: string;
    errorMessage: string;
    whatsappBtn: string;
    directChat: string;
    responseSpeed: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    allRightsReserved: string;
  };
  modal: {
    title: string;
    subtitle: string;
    englishTitle: string;
    englishDesc: string;
    marathiTitle: string;
    marathiDesc: string;
    selectBtn: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      work: 'Work',
      contact: 'Contact',
      lampMode: 'Lamp Mode',
      navMode: 'Navigation',
    },
    hero: {
      badge: 'Dual Axis · Design & Development',
      titlePart1: 'Websites that feel',
      titleRight: 'right',
      subtitlePrefix: 'Calm, thoughtful sites for',
      rotatingNiches: ['institutions', 'devotional trusts', 'creative studios', 'businesses'],
      description:
        'Simple solutions, thoughtfully crafted — tailored digital experiences for institutes, devotional foundations, and ambitious businesses.',
      startConversation: 'Start a conversation',
      seeRecentWork: 'See recent work',
      selectedDeployments: 'Selected Client Deployments',
      liveProduction: 'Live Production Sites',
      visitLiveSite: 'Visit Live Site',
      metrics: {
        loadTime: '0.4s',
        loadTimeLabel: 'Avg Load Time',
        students: '3,500+',
        studentsLabel: 'Campus Students',
        devotees: '10,000+',
        devoteesLabel: 'Daily Devotees',
        bespoke: '100%',
        bespokeLabel: 'Bespoke Code',
      },
    },
    philosophy: {
      titlePart1: 'Software built to perform,',
      titlePart2: 'not just to exist.',
      points: ['Custom products', 'Scalable systems', 'Production-ready delivery'],
    },
    about: {
      titlePart1: 'A small team, focused on',
      titlePart2: 'simple things that',
      titlePart3: 'work',
      desc1:
        "We're a two-person freelance team building calm, practical websites for studios, trusts, and ambitious businesses.",
      desc2Part1: 'No noise, no unnecessary complexity —',
      desc2Part2: 'just work that feels right.',
      teamAtharvaRole: 'Developer & Architect',
      teamRameshwarRole: 'Developer & Designer',
    },
    services: {
      heading: 'What we',
      headingAccent: 'do',
      subheading: 'Thoughtfully crafted digital solutions for ambitious clients.',
      coreServices: [
        {
          title: 'Website Design',
          description: 'Clean, modern designs that reflect your brand identity and resonate with your audience.',
        },
        {
          title: 'Web Development',
          description: 'Fast, reliable websites built with modern tech. Optimized for high performance and speed.',
        },
        {
          title: 'Portfolio Sites',
          description: 'Beautiful showcases for creative work. Designed to let your projects speak for themselves.',
        },
        {
          title: 'Institutional & Business Portals',
          description: 'Professional web ecosystems for colleges, trusts, and local businesses. Simple and effective.',
        },
      ],
      advancedTitle: 'Business & Trust Management Systems',
      advancedBadge: 'Enterprise Systems',
      advancedSubtitle: 'Custom operational platforms tailored to your daily workflow.',
      advancedCapabilities: [
        {
          title: 'Portal Management',
          description: 'Academic archives, merit lists, notices, and faculty directories.',
        },
        {
          title: 'Inventory & Seva Tracking',
          description: 'Live stock management, donations, and automated volunteer workflows.',
        },
        {
          title: 'Staff & Team Scheduling',
          description: 'Timetables, duty rosters, and simple attendance tracking.',
        },
        {
          title: 'Customer & Devotee Relations',
          description: 'Appointment bookings, registrations, and clean database management.',
        },
        {
          title: 'Analytics & Dashboards',
          description: 'Live operational insights, reports, and clear visual summaries.',
        },
        {
          title: 'Online Payments & Receipts',
          description: 'Secure instant payments, registration fees, and digital receipts.',
        },
      ],
    },
    projects: {
      heading: 'Recent',
      headingAccent: 'work',
      subheading: "Selected projects we're proud of.",
      liveProject: 'View live project',
    },
    expect: {
      heading: 'What you can expect',
      items: [
        'Clear, honest communication at every step',
        'Fast turnaround and reliable delivery dates',
        'Practical solutions tailored to your real needs',
        'No unnecessary complexity or bloated code',
      ],
    },
    contact: {
      headingPart1: "Let's talk about",
      headingPart2: 'your',
      headingAccent: 'project',
      subtitle:
        "Have a project in mind? We'd love to hear about it. Tell us what you're looking to build.",
      emailLabel: 'Email us directly',
      phoneLabel: 'Call us',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email address',
      phonePlaceholder: 'Phone number (optional)',
      messagePlaceholder: 'Tell us about your project, goals, and timeline...',
      submitBtn: 'Send message',
      submittingBtn: 'Sending...',
      successMessage: 'Thank you! We received your message and will reply within 24 hours.',
      errorMessage: 'Something went wrong. Please try again or reach out on WhatsApp.',
      whatsappBtn: 'Chat on WhatsApp',
      directChat: 'Quickest response via WhatsApp',
      responseSpeed: 'Usually replies in under 1 hour',
    },
    footer: {
      tagline: 'Websites that feel right.',
      copyright: 'Dual Axis. All rights reserved.',
      allRightsReserved: 'Crafted with care in Maharashtra, India.',
    },
    modal: {
      title: 'Welcome to Dual Axis',
      subtitle: 'Please select your preferred language',
      englishTitle: 'English',
      englishDesc: 'Calm, thoughtful digital experiences',
      marathiTitle: 'मराठी (Marathi)',
      marathiDesc: 'मनाला भावणाऱ्या आणि दर्जेदार वेबसाइट्स',
      selectBtn: 'Continue',
    },
  },
  mr: {
    nav: {
      about: 'आमच्याबद्दल',
      services: 'सेवा',
      work: 'कामे',
      contact: 'संपर्क',
      lampMode: 'लॅम्प मोड',
      navMode: 'नेव्हिगेशन',
    },
    hero: {
      badge: 'Dual Axis · डिझाईन आणि डेव्हलपमेंट',
      titlePart1: 'मनाला भावणाऱ्या',
      titleRight: 'वेबसाइट्स',
      subtitlePrefix: 'शांत आणि विचारपूर्वक तयार केलेल्या साइट्स',
      rotatingNiches: ['संस्थांसाठी', 'धार्मिक ट्रस्टसाठी', 'क्रिएटिव्ह स्टुडिओसाठी', 'व्यवसायांसाठी'],
      description:
        'साधे, सुंदर आणि प्रभावी उपाय — शैक्षणिक संस्था, धार्मिक ट्रस्ट आणि महत्त्वाकांक्षी व्यवसायांसाठी खास डिजिटल अनुभव.',
      startConversation: 'संवाद सुरू करा',
      seeRecentWork: 'कामे पहा',
      selectedDeployments: 'निवडक थेट प्रकल्प (Live Deployments)',
      liveProduction: 'थेट सुरू असलेल्या साइट्स',
      visitLiveSite: 'साइट पहा',
      metrics: {
        loadTime: '०.४ सेकंद',
        loadTimeLabel: 'सरासरी वेग',
        students: '३,५००+',
        studentsLabel: 'विद्यार्थी जोडलेले',
        devotees: '१०,०००+',
        devoteesLabel: 'दैनिक भाविक',
        bespoke: '१००%',
        bespokeLabel: 'खास कोडिंग',
      },
    },
    philosophy: {
      titlePart1: 'फक्त अस्तित्वात असण्यासाठी नाही,',
      titlePart2: 'तर उत्कृष्ट कामगिरीसाठी तयार केलेले सॉफ्टवेअर.',
      points: ['कस्टम प्रॉडक्ट्स', 'स्केलेबल सिस्टीम्स', 'खात्रीशीर डिलिव्हरी'],
    },
    about: {
      titlePart1: 'एक छोटी टीम, खरोखर',
      titlePart2: 'काम करणाऱ्या सोप्या गोष्टींवर',
      titlePart3: 'लक्ष केंद्रित करणारी',
      desc1:
        'आम्ही दोन जणांची फ्रीलान्स टीम आहोत, जी संस्था, मंदिरे/ट्रस्ट आणि स्थानिक व्यवसायांसाठी शांत, विचारपूर्वक वेबसाइट्स बनवते.',
      desc2Part1: 'कोणताही गोंधळ नाही, कोणतीही अनावश्यक क्लिष्टता नाही —',
      desc2Part2: 'फक्त मनाला भावणारे दर्जेदार काम.',
      teamAtharvaRole: 'डेव्हलपर आणि आर्किटेक्ट',
      teamRameshwarRole: 'डेव्हलपर आणि डिझायनर',
    },
    services: {
      heading: 'आमच्या',
      headingAccent: 'सेवा',
      subheading: 'महत्त्वाकांक्षी ग्राहकांसाठी विचारपूर्वक तयार केलेले आधुनिक डिजिटल उपाय.',
      coreServices: [
        {
          title: 'वेबसाइट डिझाईन',
          description: 'स्वच्छ, आधुनिक आणि आकर्षक डिझाईन जे तुमच्या ब्रँडला एक मजबूत ओळख मिळवून देतात.',
        },
        {
          title: 'वेब डेव्हलपमेंट',
          description: 'आधुनिक तंत्रज्ञानावर आधारित जलद आणि सुरक्षित वेबसाइट्स. कामगिरी आणि सुरक्षेसाठी अत्यंत अनुकूल.',
        },
        {
          title: 'पोर्टफोलिओ वेबसाइट्स',
          description: 'तुमच्या सर्जनशील कामाचे सुंदर प्रदर्शन. तुमच्या कलाकृतींना योग्य वाव देणारे डिझाईन.',
        },
        {
          title: 'संस्था व बिझनेस पोर्टल्स',
          description: 'महाविद्यालये, ट्रस्ट आणि स्थानिक व्यवसायांसाठी व्यावसायिक डिजिटल व्यवस्थापन. वापरण्यास अत्यंत सोपे.',
        },
      ],
      advancedTitle: 'बिझनेस & ट्रस्ट मॅनेजमेंट सिस्टीम्स (ERP)',
      advancedBadge: 'प्रगत व्यवस्थापन प्रणाली',
      advancedSubtitle: 'तुमच्या दैनंदिन कामकाजासाठी तयार केलेली खास डिजिटल प्रणाली.',
      advancedCapabilities: [
        {
          title: 'पोर्टल मॅनेजमेंट',
          description: 'शैक्षणिक निकाल, गुणवत्ता यादी, सूचना फलक आणि प्राध्यापक डिरेक्टरी व्यवस्थापन.',
        },
        {
          title: 'इन्व्हेंटरी & सेवा ट्रॅकिंग',
          description: 'थेट स्टॉक व्यवस्थापन, देणग्या आणि स्वयंसेवक सेवा नोंदणी.',
        },
        {
          title: 'कर्मचारी वेळापत्रक & उपस्थिती',
          description: 'कामाचे नियोजन, हजेरी आणि साधी कार्यप्रदर्शन नोंद.',
        },
        {
          title: 'ग्राहक & भाविक संबंध (CRM)',
          description: 'ऑनलाइन अपॉइंटमेंट बुकिंग, नोंदणी आणि सुरक्षित डेटाबेस व्यवस्थापन.',
        },
        {
          title: 'ॲनालिटिक्स आणि रिपोर्ट्स',
          description: 'दैनिक कामकाज, जमा-खर्च आणि थेट स्पष्ट व्हिज्युअल डॅशबोर्ड.',
        },
        {
          title: 'ऑनलाइन पेमेंट & डिजिटल पावत्या',
          description: 'सुरक्षित झटपट पेमेंट, नोंदणी फी आणि तत्काळ डिजिटल पावत्या.',
        },
      ],
    },
    projects: {
      heading: 'अलीकडील',
      headingAccent: 'कामे',
      subheading: 'आम्हाला अभिमान असलेले काही निवडक प्रकल्प.',
      liveProject: 'थेट प्रकल्प पहा',
    },
    expect: {
      heading: 'तुम्ही आमच्याकडून काय अपेक्षा करू शकता',
      items: [
        'प्रत्येक टप्प्यावर स्पष्ट, प्रामाणिक आणि पारदर्शक संवाद',
        'वेळेवर जलद डिलिव्हरी आणि खात्रीशीर सहकार्य',
        'तुमच्या खऱ्या गरजांनुसार व्यावहारिक आणि सोपे उपाय',
        'कोणताही अनावश्यक गोंधळ किंवा जड कोड नाही',
      ],
    },
    contact: {
      headingPart1: 'तुमच्या प्रकल्पाबद्दल',
      headingPart2: '',
      headingAccent: 'बोलूया',
      subtitle: 'तुमच्या मनात एखादा प्रकल्प आहे का? आम्हाला ऐकायला आवडेल. तुम्हाला काय तयार करायचे आहे ते सांगा.',
      emailLabel: 'थेट ईमेल करा',
      phoneLabel: 'थेट कॉल करा',
      namePlaceholder: 'तुमचे नाव',
      emailPlaceholder: 'तुमचा ईमेल पत्ता',
      phonePlaceholder: 'फोन नंबर (ऐच्छिक)',
      messagePlaceholder: 'तुमच्या प्रकल्पाबद्दल, उद्दिष्टांबद्दल आणि वेळेबद्दल सांगा...',
      submitBtn: 'संदेश पाठवा',
      submittingBtn: 'पाठवत आहे...',
      successMessage: 'धन्यवाद! आम्हाला तुमचा संदेश मिळाला आहे, आम्ही २४ तासांच्या आत संपर्क करू.',
      errorMessage: 'काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा किंवा व्हॉट्सॲपवर संपर्क साधा.',
      whatsappBtn: 'व्हॉट्सॲपवर चॅट करा',
      directChat: 'व्हॉट्सॲपवर सर्वात जलद प्रतिसाद',
      responseSpeed: 'सामान्यतः १ तासाच्या आत उत्तर दिले जाते',
    },
    footer: {
      tagline: 'मनाला भावणाऱ्या आणि योग्य काम करणाऱ्या वेबसाइट्स.',
      copyright: 'Dual Axis. सर्व हक्क राखीव.',
      allRightsReserved: 'महाराष्ट्रात आपुलकीने तयार केलेले.',
    },
    modal: {
      title: 'ड्युअल ॲक्सिस मध्ये आपले स्वागत आहे',
      subtitle: 'कृपया आपली पसंतीची भाषा निवडा',
      englishTitle: 'English (इंग्रजी)',
      englishDesc: 'Calm, thoughtful digital experiences',
      marathiTitle: 'मराठी (Marathi)',
      marathiDesc: 'शांत, विचारपूर्वक आणि दर्जेदार वेबसाइट्स',
      selectBtn: 'निवडा आणि सुरू करा',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  isLanguageModalOpen: boolean;
  setIsLanguageModalOpen: (open: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('da-language') as Language | null;
      if (saved === 'en' || saved === 'mr') {
        queueMicrotask(() => {
          setLanguageState(saved);
          setIsLanguageModalOpen(false);
        });
      } else {
        queueMicrotask(() => {
          setIsLanguageModalOpen(true);
        });
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('da-language', lang);
    } catch {
      // ignore
    }
    setIsLanguageModalOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mr' : 'en');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        isLanguageModalOpen,
        setIsLanguageModalOpen,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
