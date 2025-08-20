import React from 'react';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Contact() {
  const { isDarkMode } = useTheme();

  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const mutedTextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const cardBgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
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
              Get in touch with our team for inquiries about our logistics and shipping services
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className={`text-3xl font-bold mb-8 ${textColor}`}>Get In Touch</h2>
            <p className={`${mutedTextColor} mb-8 text-lg`}>
              Ready to discuss your logistics needs? We're here to help with all your shipping, storage, and transportation requirements.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`${iconBgColor} p-3 rounded-lg`}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${textColor}`}>Phone</h3>
                  <p className={mutedTextColor}>+31 10 899 0688 (Netherlands)</p>
                  <p className={`${mutedTextColor} text-sm mt-1`}>Available Monday - Friday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={`${iconBgColor} p-3 rounded-lg`}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${textColor}`}>Email</h3>
                  <div className="space-y-2">
                    <a 
                      href="mailto:info@oakmar-terminalllc.com" 
                      className={`${mutedTextColor} hover:text-blue-600 transition-colors flex items-center space-x-2`}
                    >
                      <span>info@oakmar-terminalllc.com</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a 
                      href="mailto:logistics@oakmar-terminalllc.com" 
                      className={`${mutedTextColor} hover:text-blue-600 transition-colors flex items-center space-x-2`}
                    >
                      <span>logistics@oakmar-terminalllc.com</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className={`${mutedTextColor} text-sm mt-2`}>We typically respond within 24 hours</p>
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
                  <p className={mutedTextColor}>United States</p>
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
                  <p className={mutedTextColor}>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="space-y-8">
            <h2 className={`text-3xl font-bold mb-8 ${textColor}`}>How Can We Help?</h2>
            
            {/* Email Card */}
            <div className={`${cardBgColor} rounded-lg shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
              <div className="flex items-center space-x-4 mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
                <h3 className={`text-2xl font-bold ${textColor}`}>Send Us an Email</h3>
              </div>
              <p className={`${mutedTextColor} mb-6`}>
                For detailed inquiries, quotes, or specific service requests, email us directly. We'll respond with comprehensive information tailored to your needs.
              </p>
              <div className="space-y-3">
                <a 
                  href="mailto:info@oakmar-terminalllc.com?subject=General Inquiry&body=Hello Oakmar Terminal,%0D%0A%0D%0AI would like to inquire about your services.%0D%0A%0D%0APlease contact me at your earliest convenience.%0D%0A%0D%0AThank you."
                  className="block w-full bg-blue-900 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300 font-semibold"
                >
                  Email General Inquiries
                </a>
                <a 
                  href="mailto:logistics@oakmar-terminalllc.com?subject=Logistics Services Inquiry&body=Hello Oakmar Terminal Logistics Team,%0D%0A%0D%0AI am interested in your logistics services.%0D%0A%0D%0AService needed:%0D%0AOrigin:%0D%0ADestination:%0D%0ACargo details:%0D%0A%0D%0APlease provide a quote and timeline.%0D%0A%0D%0AThank you."
                  className="block w-full bg-green-700 text-white text-center py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 font-semibold"
                >
                  Email Logistics Team
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className={`${cardBgColor} rounded-lg shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="w-8 h-8 text-green-600" />
                <h3 className={`text-2xl font-bold ${textColor}`}>Call Us Directly</h3>
              </div>
              <p className={`${mutedTextColor} mb-6`}>
                For urgent matters or immediate assistance, call our Netherlands office. Our experienced team is ready to discuss your logistics requirements.
              </p>
              <a 
                href="tel:+31108990688"
                className="block w-full bg-green-700 text-white text-center py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 font-semibold"
              >
                Call +31 10 899 0688
              </a>
            </div>

            {/* Services Overview */}
            <div className={`${cardBgColor} rounded-lg shadow-xl p-8`}>
              <h3 className={`text-xl font-bold mb-4 ${textColor}`}>Our Services</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className={`${mutedTextColor} space-y-2`}>
                  <p>• Ocean Freight</p>
                  <p>• Road Freight</p>
                  <p>• Rail Transport</p>
                </div>
                <div className={`${mutedTextColor} space-y-2`}>
                  <p>• Warehouse Solutions</p>
                  <p>• Tank Terminal</p>
                  <p>• HSEQ Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Image */}
        <div className="mt-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${textColor}`}>Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img 
              src="/oak-terminal-16.png.jpg"
              alt="Oakmar Terminal Location"
              className="w-full h-64 rounded-lg object-cover shadow-lg"
            />
            <img 
              src="/oak-terminal-10.png.jpg"
              alt="Oakmar Terminal Facilities"
              className="w-full h-64 rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;