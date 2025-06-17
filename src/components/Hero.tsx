
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
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-black mb-6 leading-tight">
            Strategic Legal Counsel.
            <span className="text-gold block">Clear Pathways Forward.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 font-lato mb-4">
            Led by Advocate Y.S. Kashyap Sai | Practicing Across Karnataka
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-8">
            <button 
              onClick={openWhatsApp}
              className="bg-whatsapp hover:bg-green-600 text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
              </svg>
              WhatsApp Now
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 rounded-lg font-montserrat font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Request a Consultation
            </button>
          </div>
          
          <blockquote className="text-xl md:text-2xl text-gray-600 font-lato italic border-l-4 border-gold pl-6 max-w-3xl mx-auto">
            "In the shadow of legal challenges, we forge your clear path to resolution."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Hero;
