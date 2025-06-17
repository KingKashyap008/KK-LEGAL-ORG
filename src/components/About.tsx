
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-black mb-6">
              About <span className="text-gold">KK Legal</span>
            </h2>
            <p className="text-xl text-gray-600 font-lato">
              तमसो मा ज्योतिर्गमय - From darkness to light
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile: Image first, Desktop: Text first */}
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-montserrat font-semibold text-black mb-6">
                Advocate Y.S. Kashyap Sai
              </h3>
              
              <div className="space-y-6 text-gray-700 font-lato text-lg leading-relaxed">
                <p>
                  KK Legal was founded with a clear vision: to dispel the "darkness" of legal uncertainty through methodical application of law, clear communication, and an empathetic understanding of each client's unique journey.
                </p>
                
                <p>
                  Our mission is to be the reliable "light" that provides clarity, strategic direction, and resolute advocacy, transforming client anxieties into concrete resolutions. We believe that justice is not about complexity—it's about finding the clear path forward.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="border-l-4 border-gold pl-4">
                    <h4 className="font-montserrat font-semibold text-black mb-2">Clarity</h4>
                    <p className="text-gray-600">Demystifying legal complexities into understandable terms.</p>
                  </div>
                  
                  <div className="border-l-4 border-gold pl-4">
                    <h4 className="font-montserrat font-semibold text-black mb-2">Integrity</h4>
                    <p className="text-gray-600">Unwavering commitment to ethical practice and transparency.</p>
                  </div>
                  
                  <div className="border-l-4 border-gold pl-4">
                    <h4 className="font-montserrat font-semibold text-black mb-2">Empowerment</h4>
                    <p className="text-gray-600">Equipping clients with knowledge and agency to make informed decisions.</p>
                  </div>
                  
                  <div className="border-l-4 border-gold pl-4">
                    <h4 className="font-montserrat font-semibold text-black mb-2">Resolution</h4>
                    <p className="text-gray-600">Relentless focus on achieving tangible, favorable, and sustainable outcomes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Image second, Desktop: Image second */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Advocate Y.S. Kashyap Sai" 
                  className="w-80 h-80 object-cover rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 border-4 border-gold rounded-lg -m-4 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
