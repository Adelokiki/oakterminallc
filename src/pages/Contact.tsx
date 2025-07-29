import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Contact() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const mutedTextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const inputBgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const inputBorderColor = isDarkMode ? 'border-gray-700' : 'border-gray-300';
  const inputTextColor = isDarkMode ? 'text-white' : 'text-gray-700';
  const iconBgColor = isDarkMode ? 'bg-blue-900' : 'bg-blue-900';

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-300`}>
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="relative flex content-center items-center justify-center"
          style={{
            minHeight: "60vh",
            backgroundImage: "url('/oak-terminal-9.png.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <div className="container relative mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Get in touch with our team for inquiries about our Oakmar Terminal shipping services
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className={`text-3xl font-bold mb-8 ${textColor}`}>Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`${iconBgColor} p-3 rounded-lg`}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${textColor}`}>Phone</h3>
                  <p className={mutedTextColor}>+1 (555) 123-4567</p>
                  <p className={mutedTextColor}>+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={`${iconBgColor} p-3 rounded-lg`}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${textColor}`}>Email</h3>
                  <p className={mutedTextColor}>info@oakmarterminal.com</p>
                  <p className={mutedTextColor}>support@oakmarterminal.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={`${iconBgColor} p-3 rounded-lg`}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${textColor}`}>Location</h3>
                  <p className={mutedTextColor}>2353 North State Highway D</p>
                  <p className={mutedTextColor}>Hayti MO, 63851, Pemiscot County</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={`${iconBgColor} p-3 rounded-lg`}>
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${textColor}`}>Business Hours</h3>
                  <p className={mutedTextColor}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className={mutedTextColor}>Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12">
              <img 
                src="/oak-terminal-16.png.jpg"
                alt="Oakmar Terminal Location"
                className="w-full h-64 rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl p-8 transition-colors duration-300`}>
            <h2 className={`text-3xl font-bold mb-8 ${textColor}`}>Send Us a Message</h2>
            
            {submitted && (
              <div className={`mb-6 p-4 ${isDarkMode ? 'bg-green-900 border-green-800 text-green-200' : 'bg-green-50 border-green-100 text-green-600'} border rounded-lg transition-colors duration-300`}>
                Thank you for your message. We'll get back to you soon!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${mutedTextColor} mb-1`}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg ${inputBgColor} ${inputBorderColor} border ${inputTextColor} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300`}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${mutedTextColor} mb-1`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg ${inputBgColor} ${inputBorderColor} border ${inputTextColor} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300`}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className={`block text-sm font-medium ${mutedTextColor} mb-1`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg ${inputBgColor} ${inputBorderColor} border ${inputTextColor} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300`}
                />
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium ${mutedTextColor} mb-1`}>
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg ${inputBgColor} ${inputBorderColor} border ${inputTextColor} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300`}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="shipping">Shipping Services</option>
                  <option value="storage">Storage Solutions</option>
                  <option value="quote">Request a Quote</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${mutedTextColor} mb-1`}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-2 rounded-lg ${inputBgColor} ${inputBorderColor} border ${inputTextColor} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300`}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;