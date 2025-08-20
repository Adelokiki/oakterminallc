import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailJSSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send email directly using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message
      };

      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      if (response.status === 200) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Failed to send message. Please try again or contact us directly at info@oakmar-terminalllc.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNetlifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          'name': formData.name,
          'email': formData.email,
          'phone': formData.phone,
          'subject': formData.subject,
          'message': formData.message
        }).toString()
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Failed to send message. Please try again or contact us directly at info@oakmar-terminalllc.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = handleNetlifySubmit;

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
                  <p className={mutedTextColor}>+31 10 899 0688 (Netherlands)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={`${iconBgColor} p-3 rounded-lg`}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${textColor}`}>Email</h3>
                  <p className={mutedTextColor}>info@oakmar-terminalllc.com</p>
                  <p className={mutedTextColor}>logistics@oakmar-terminalllc.com</p>
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

            {error && (
              <div className={`mb-6 p-4 ${isDarkMode ? 'bg-red-900 border-red-800 text-red-200' : 'bg-red-50 border-red-100 text-red-600'} border rounded-lg transition-colors duration-300`}>
                {error}
              </div>
            )}

            <form 
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>
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
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg transition duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-900 text-white hover:bg-blue-800'
                }`}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;