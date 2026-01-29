import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Expect from './components/Expect';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
