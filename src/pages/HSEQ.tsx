import React, { useEffect } from 'react';
import { Shield, Leaf, Award, HeartPulse, ClipboardCheck, Users, Target, Scale, CheckCircle2, AlertTriangle, Gauge, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function HSEQ() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const images = {
    safety: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
    ],
    health: [
      'https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
    ],
    environment: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
    ],
    quality: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
    ]
  };

  useEffect(() => {
    Object.values(images).flat().forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Hero Section */}
      <div 
        className="relative flex content-center items-center justify-center"
        style={{
          minHeight: "60vh",
          backgroundImage: `url('${images.safety[1]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="container relative mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 mx-auto text-center">
              <div className="text-white">
                <h1 className="text-6xl font-bold mb-6">HSEQ</h1>
                <p className="text-xl mb-8 text-gray-200">Health, Safety, Environment & Quality Excellence</p>
                <button 
                  onClick={handleContactClick}
                  className="bg-blue-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-800 transition duration-300"
                >
                  CONTACT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Industry-Leading Safety Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.safety.map((image, index) => (
              <div 
                key={index}
                className="relative h-64 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
              >
                <img 
                  src={image} 
                  alt={`Industrial Safety ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">
                    {index === 0 ? "Advanced PPE Standards" : 
                     index === 1 ? "Offshore Safety Protocols" : 
                     "Emergency Response Equipment"}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Advanced Medical Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.health.map((image, index) => (
              <div 
                key={index}
                className="relative h-80 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
              >
                <img 
                  src={image} 
                  alt={`Medical Facility ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">
                    {index === 0 ? "24/7 Medical Facilities" : "Emergency Response Team"}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Environmental Stewardship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.environment.map((image, index) => (
              <div 
                key={index}
                className="relative h-80 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
              >
                <img 
                  src={image} 
                  alt={`Environmental Protection ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">
                    {index === 0 ? "Environmental Monitoring Systems" : "Ecosystem Protection Measures"}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
            <HeartPulse className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-xl font-bold mb-3 dark:text-white">Health Excellence</h3>
            <p className="text-gray-600 dark:text-gray-300">Pioneering occupational health programs with state-of-the-art medical monitoring, ergonomic workstations, and comprehensive wellness initiatives ensuring optimal employee wellbeing.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
            <Shield className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-xl font-bold mb-3 dark:text-white">Safety Leadership</h3>
            <p className="text-gray-600 dark:text-gray-300">Industry-leading safety protocols with advanced risk prevention systems, real-time monitoring, and proactive hazard identification ensuring zero-incident operations.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
            <Leaf className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-xl font-bold mb-3 dark:text-white">Environmental Stewardship</h3>
            <p className="text-gray-600 dark:text-gray-300">Revolutionary green initiatives and carbon-neutral operations, implementing cutting-edge sustainable practices and eco-friendly technologies.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
            <Award className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-xl font-bold mb-3 dark:text-white">Quality Assurance</h3>
            <p className="text-gray-600 dark:text-gray-300">Uncompromising quality standards with advanced quality control systems and continuous improvement processes ensuring operational excellence.</p>
          </div>
        </div>

        <div className="bg-blue-900 text-white rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Safety Excellence Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center transform transition-all duration-300 hover:scale-110">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-sm">Safety Compliance Rate</div>
            </div>
            <div className="text-center transform transition-all duration-300 hover:scale-110">
              <div className="text-4xl font-bold mb-2">5+ Years</div>
              <div className="text-sm">Zero Major Incidents</div>
            </div>
            <div className="text-center transform transition-all duration-300 hover:scale-110">
              <div className="text-4xl font-bold mb-2">100,000+</div>
              <div className="text-sm">Safety Training Hours</div>
            </div>
            <div className="text-center transform transition-all duration-300 hover:scale-110">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm">Safety Monitoring</div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Advanced Safety Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <CheckCircle2 className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-3 dark:text-white">Intelligent Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-300">AI-powered surveillance systems with real-time hazard detection and automated emergency response protocols.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <AlertTriangle className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-3 dark:text-white">Predictive Safety</h3>
              <p className="text-gray-600 dark:text-gray-300">Advanced analytics for early risk identification and proactive incident prevention measures.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <Brain className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold mb-3 dark:text-white">Smart PPE Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">IoT-enabled personal protective equipment with real-time monitoring and safety alerts.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">International Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-3 dark:text-white">ISO 9001:2015</h3>
              <p className="text-gray-600 dark:text-gray-300">Advanced Quality Management System certification ensuring world-class service delivery and continuous improvement processes.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-3 dark:text-white">ISO 14001:2015</h3>
              <p className="text-gray-600 dark:text-gray-300">Comprehensive Environmental Management System certification showcasing our leadership in sustainable operations and ecological preservation.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-3 dark:text-white">ISO 45001:2018</h3>
              <p className="text-gray-600 dark:text-gray-300">State-of-the-art Occupational Health and Safety Management System ensuring superior workplace safety standards.</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Strategic Performance Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <ClipboardCheck className="w-8 h-8 text-blue-900 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Advanced Risk Management</h3>
                <p className="text-gray-600 dark:text-gray-300">Cutting-edge risk assessment technologies and AI-driven mitigation strategies ensuring comprehensive operational safety.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-blue-900 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Elite Safety Training</h3>
                <p className="text-gray-600 dark:text-gray-300">Virtual reality-enhanced safety training programs and continuous professional development initiatives.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <Target className="w-8 h-8 text-blue-900 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Real-time Performance Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">Advanced monitoring systems with predictive analytics for proactive performance optimization.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              <Scale className="w-8 h-8 text-blue-900 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Global Compliance Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">Automated compliance monitoring and real-time regulatory updates ensuring consistent global standards.</p>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="relative rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url('${images.safety[0]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative py-16 px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience World-Class HSEQ Excellence
            </h2>
            <p className="text-white text-xl mb-8">Partner with us to elevate your safety and quality standards to unprecedented levels</p>
            <button 
              onClick={handleContactClick}
              className="bg-blue-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HSEQ;