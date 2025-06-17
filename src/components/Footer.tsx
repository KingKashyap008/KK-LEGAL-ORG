
import { Home, Briefcase, User, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Motto */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/d2c7383a-b808-4503-8eb7-7814803eba24.png" 
                alt="KK Legal Logo" 
                className="h-10 w-10"
                style={{ 
                  filter: 'hue-rotate(15deg) saturate(2.5) brightness(1.3) contrast(1.6) sepia(0.4)'
                }}
              />
              <div>
                <h3 className="text-gold font-cormorant font-bold text-xl bg-gold-text bg-clip-text text-transparent">KK Legal</h3>
                <p className="text-black text-sm font-inter">तमसो मा ज्योतिर्गमय</p>
              </div>
            </div>
            <p className="text-gray-600 font-inter">
              From darkness to light - providing strategic legal counsel across Karnataka.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gold font-cormorant font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-inter"
              >
                <Home size={16} />
                Home
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-inter"
              >
                <Briefcase size={16} />
                Services
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-inter"
              >
                <User size={16} />
                About
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-inter"
              >
                <Phone size={16} />
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-gold font-cormorant font-semibold text-lg">Contact Information</h4>
            <div className="space-y-2 text-gray-700 font-inter">
              <p>Advocate Y.S. Kashyap Sai</p>
              <p>Phone: +91 99806 50291</p>
              <p>Email: kklegal.org@gmail.com</p>
              <p>Practicing Across Karnataka</p>
              <a 
                href="https://www.linkedin.com/in/yskashyapsai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-700 hover:text-gold transition-colors mt-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 font-inter text-sm">
              © 2024 KK Legal. All rights reserved.
            </p>
            <p className="text-gray-500 font-inter text-sm text-center md:text-right">
              This website is intended for informational purposes only. No legal services are solicited or advertised.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
