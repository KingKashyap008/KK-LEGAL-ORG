
import { MessageCircle, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919980650291', '_blank');
  };

  return (
    <section id="home" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-black mb-6 leading-tight">
            Strategic Legal Counsel.
            <span className="bg-gold-text bg-clip-text text-transparent block">Clear Pathways Forward.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 font-source mb-4">
            Led by Advocate Y.S. Kashyap Sai | Practicing Across Karnataka
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-8">
            <button 
              onClick={openWhatsApp}
              className="bg-whatsapp hover:bg-green-600 text-white px-8 py-4 rounded-lg font-source font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6 text-white" />
              WhatsApp Now
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 rounded-lg font-source font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar className="w-6 h-6" />
              Request a Consultation
            </button>
          </div>
          
          <blockquote className="text-xl md:text-2xl text-gray-600 font-playfair italic border-l-4 border-gold pl-6 max-w-3xl mx-auto">
            "In the shadow of legal challenges, we forge your clear path to resolution."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Hero;
