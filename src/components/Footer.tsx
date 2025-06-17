
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
                className="h-10 w-10 brightness-0 invert opacity-90"
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
                className="block text-gray-300 hover:text-gold transition-colors font-lato"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-gold transition-colors font-lato"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-gold transition-colors font-lato"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-gold transition-colors font-lato"
              >
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
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
