
import { Home, Briefcase, User, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Motto */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/d2c7383a-b808-4503-8eb7-7814803eba24.png" 
                alt="KK Legal Logo" 
                className="h-10 w-10 brightness-0 invert opacity-100"
                style={{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(93%) saturate(1352%) hue-rotate(2deg) brightness(119%) contrast(109%)' }}
              />
              <div>
                <h3 className="text-gold font-montserrat font-bold text-xl">KK Legal</h3>
                <p className="text-white text-sm font-lato">तमसो मा ज्योतिर्गमय</p>
              </div>
            </div>
            <p className="text-gray-300 font-lato">
              From darkness to light - providing strategic legal counsel across Karnataka.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gold font-montserrat font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors font-lato"
              >
                <Home size={16} />
                Home
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors font-lato"
              >
                <Briefcase size={16} />
                Services
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors font-lato"
              >
                <User size={16} />
                About
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors font-lato"
              >
                <Phone size={16} />
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-gold font-montserrat font-semibold text-lg">Contact Information</h4>
            <div className="space-y-2 text-gray-300 font-lato">
              <p>Advocate Y.S. Kashyap Sai</p>
              <p>Phone: +91 99806 50291</p>
              <p>Email: kklegal.org@gmail.com</p>
              <p>Practicing Across Karnataka</p>
              <a 
                href="https://www.linkedin.com/in/yskashyapsai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-gold transition-colors mt-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-lato text-sm">
              © 2024 KK Legal. All rights reserved.
            </p>
            <p className="text-gray-400 font-lato text-sm text-center md:text-right">
              This website is intended for informational purposes only. No legal services are solicited or advertised.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
