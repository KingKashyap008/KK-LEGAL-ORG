// src/components/Contact.tsx
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '../lib/supabaseClient'; // Make sure this path is correct: ../lib/supabaseClient

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

  const handleSubmit = async (e: React.FormEvent) => { // Added 'async' keyword here
    e.preventDefault();
    console.log('DEBUG: handleSubmit function started!');
    console.log('Attempting to submit form data:', formData);

    try {
      // Insert data into your 'contacts' table
      const { data, error } = await supabase
        .from('contact_submissions') // Make sure 'contacts' is the exact name of your table in Supabase
        .insert([formData]);

      if (error) {
        throw error;
      }

      console.log('Form submitted successfully to Supabase:', data);
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

    } catch (error: any) {
      console.error('Error submitting form to Supabase:', error.message);
      toast({
        title: "Error submitting request",
        description: `Something went wrong: ${error.message}. Please try again.`,
        variant: "destructive", // Using a destructive variant for error toasts
      });
    }
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
          {/* STYLING FIX: Removed problematic classes to make text readable */}
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
            Get In Touch {/* Removed the <span> with bg-gold-text */}
          </h2>
          <p className="text-xl text-gray-600 font-source max-w-3xl mx-auto">
            Take the first step from uncertainty to clarity. Contact us for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-playfair font-semibold text-black mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-medium text-black">Phone</h4>
                    <p className="text-gray-600 font-source">+91 99806 50291</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-medium text-black">Email</h4>
                    <p className="text-gray-600 font-source">kklegal.org@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-medium text-black">Location</h4>
                    <p className="text-gray-600 font-source">Practicing Across Karnataka</p>
                  </div>
                </div>
              </div>

              <button
                onClick={openWhatsApp}
                className="w-full mt-8 bg-whatsapp hover:bg-green-600 text-white py-4 rounded-lg font-source font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6 text-white" />
                WhatsApp Consultation
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-playfair font-semibold text-black mb-6">Request Consultation</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-black font-playfair font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold font-source"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-black font-playfair font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold font-source"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-black font-playfair font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold font-source"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-black font-playfair font-medium mb-2">
                  Legal Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold font-source"
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
                <label htmlFor="description" className="block text-black font-playfair font-medium mb-2">
                  Brief Description of Legal Matter *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold font-source resize-none"
                  placeholder="Please provide a brief overview of your legal matter..."
                />
              </div>

              <div>
                <label className="block text-black font-playfair font-medium mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleChange}
                      className="text-gold focus:ring-gold"
                    />
                    <span className="ml-2 font-source">Email</span>
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
                    <span className="ml-2 font-source">Phone</span>
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
                    <span className="ml-2 font-source">WhatsApp</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="videocall"
                      checked={formData.preferredContact === 'videocall'}
                      onChange={handleChange}
                      className="text-gold focus:ring-gold"
                    />
                    <span className="ml-2 font-source">Video Call</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-yellow-600 text-black py-4 rounded-lg font-source font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-6 h-6 text-black" />
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