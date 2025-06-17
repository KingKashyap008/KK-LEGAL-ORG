import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: '',
    preferredContact: 'email'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Consultation Request Received",
      description: "We will contact you within 24 hours to discuss your legal matter.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      description: '',
      preferredContact: 'email'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919980650291', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-black mb-6">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
            Take the first step from uncertainty to clarity. Contact us for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-montserrat font-semibold text-black mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-black">Phone</h4>
                    <p className="text-gray-600 font-lato">+91 99806 50291</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-black">Email</h4>
                    <p className="text-gray-600 font-lato">kklegal.org@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-black">Location</h4>
                    <p className="text-gray-600 font-lato">Practicing Across Karnataka</p>
                  </div>
                </div>
              </div>

              <button
                onClick={openWhatsApp}
                className="w-full mt-8 bg-whatsapp hover:bg-green-600 text-white py-4 rounded-lg font-montserrat font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                </svg>
                WhatsApp Consultation
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-montserrat font-semibold text-black mb-6">Request Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-black font-montserrat font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold font-lato"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-black font-montserrat font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold font-lato"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-black font-montserrat font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold font-lato"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-black font-montserrat font-medium mb-2">
                  Legal Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold font-lato"
                >
                  <option value="">Select a service</option>
                  <option value="criminal">Criminal Law</option>
                  <option value="property">Property & Civil Disputes</option>
                  <option value="family">Family Law</option>
                  <option value="debt">Debt Recovery</option>
                  <option value="arbitration">Arbitration & Mediation</option>
                  <option value="ip">Intellectual Property</option>
                  <option value="environmental">Environmental Law</option>
                  <option value="business">Startup & Business Advisory</option>
                  <option value="consumer">Consumer Protection</option>
                  <option value="cyber">Cyber Law</option>
                  <option value="constitutional">Constitutional Law</option>
                  <option value="rera">Real Estate (RERA)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-black font-montserrat font-medium mb-2">
                  Brief Description of Legal Matter *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold font-lato resize-none"
                  placeholder="Please provide a brief overview of your legal matter..."
                />
              </div>

              <div>
                <label className="block text-black font-montserrat font-medium mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleChange}
                      className="text-gold focus:ring-gold"
                    />
                    <span className="ml-2 font-lato">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleChange}
                      className="text-gold focus:ring-gold"
                    />
                    <span className="ml-2 font-lato">Phone</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="whatsapp"
                      checked={formData.preferredContact === 'whatsapp'}
                      onChange={handleChange}
                      className="text-gold focus:ring-gold"
                    />
                    <span className="ml-2 font-lato">WhatsApp</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-yellow-600 text-black py-4 rounded-lg font-montserrat font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
