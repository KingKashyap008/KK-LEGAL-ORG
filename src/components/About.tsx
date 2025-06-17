
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-black mb-6">
            About <span className="bg-gold-text bg-clip-text text-transparent">Advocate Y.S. Kashyap Sai</span>
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
            Guiding clients from uncertainty to clarity with principled legal counsel
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Professional Image */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="relative">
                <img 
                  src="/lovable-uploads/9aa2557b-b20c-49a0-aec7-657a903c03dc.png" 
                  alt="Advocate Y.S. Kashyap Sai" 
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 rounded-lg ring-4 ring-gold ring-opacity-20"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 order-2 lg:order-2">
              <div className="text-lg text-gray-700 font-inter space-y-4">
                <p>
                  Advocate Y.S. Kashyap Sai founded KK Legal with a clear vision: to dispel the "darkness" of legal uncertainty through methodical application of law, clear communication, and an empathetic understanding of each client's unique journey.
                </p>
                <p>
                  The firm's mission embodies the ancient Sanskrit principle <em className="text-gold font-medium">"Tamaso mā jyotir gamaya"</em> - from darkness to light - serving as the reliable beacon that provides clarity, strategic direction, and resolute advocacy.
                </p>
                <p>
                  Practicing across Karnataka, Advocate Sai transforms client anxieties into concrete resolutions through principled legal counsel and an unwavering commitment to justice.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-1 h-6 bg-gold mr-3"></div>
                    <h4 className="font-cormorant font-semibold text-black">Clarity</h4>
                  </div>
                  <p className="text-gray-600 font-inter text-sm">Demystifying legal complexities into understandable terms</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-1 h-6 bg-gold mr-3"></div>
                    <h4 className="font-cormorant font-semibold text-black">Integrity</h4>
                  </div>
                  <p className="text-gray-600 font-inter text-sm">Unwavering commitment to ethical practice and transparency</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-1 h-6 bg-gold mr-3"></div>
                    <h4 className="font-cormorant font-semibold text-black">Empowerment</h4>
                  </div>
                  <p className="text-gray-600 font-inter text-sm">Equipping clients with knowledge to make informed decisions</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-1 h-6 bg-gold mr-3"></div>
                    <h4 className="font-cormorant font-semibold text-black">Resolution</h4>
                  </div>
                  <p className="text-gray-600 font-inter text-sm">Relentless focus on achieving tangible, favorable outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
