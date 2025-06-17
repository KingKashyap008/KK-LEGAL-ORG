
import { useState } from 'react';
import { Menu, X, Home, Briefcase, User, Phone } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d2c7383a-b808-4503-8eb7-7814803eba24.png" 
              alt="KK Legal Logo" 
              className="h-12 w-12"
              style={{ 
                filter: 'hue-rotate(15deg) saturate(2.5) brightness(1.3) contrast(1.6) sepia(0.4)'
              }}
            />
            <div>
              <h1 className="text-gold font-playfair font-bold text-xl bg-gold-text bg-clip-text text-transparent">KK Legal</h1>
              <p className="text-white text-sm font-source">तमसो मा ज्योतिर्गमय</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-gold transition-colors font-source font-medium flex items-center gap-2"
            >
              <Home size={18} />
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-gold transition-colors font-source font-medium flex items-center gap-2"
            >
              <Briefcase size={18} />
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gold transition-colors font-source font-medium flex items-center gap-2"
            >
              <User size={18} />
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gold transition-colors font-source font-medium flex items-center gap-2"
            >
              <Phone size={18} />
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} className="text-gold" /> : <Menu size={28} className="text-gold" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-8 md:hidden">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white text-2xl font-playfair hover:text-gold transition-colors flex items-center gap-3"
            >
              <Home size={24} />
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white text-2xl font-playfair hover:text-gold transition-colors flex items-center gap-3"
            >
              <Briefcase size={24} />
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white text-2xl font-playfair hover:text-gold transition-colors flex items-center gap-3"
            >
              <User size={24} />
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white text-2xl font-playfair hover:text-gold transition-colors flex items-center gap-3"
            >
              <Phone size={24} />
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
