import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Footer from '@/components/Footer';

const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="min-h-[28rem]" />,
});
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="min-h-[28rem]" />,
});
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="min-h-[32rem]" />,
});
const Expect = dynamic(() => import('@/components/Expect'), {
  loading: () => <div className="min-h-[8rem]" />,
});
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="min-h-[28rem]" />,
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <About />
        <Services />
        <Projects />
        <Expect />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
