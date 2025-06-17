
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import QuoteSection from '../components/QuoteSection';
import Footer from '../components/Footer';
import LogoWatermark from '../components/LogoWatermark';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <LogoWatermark />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <QuoteSection />
      <Footer />
    </div>
  );
};

export default Index;
