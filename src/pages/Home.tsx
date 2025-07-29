import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ship, Truck, Train, Warehouse as WarehouseIcon, Tangent as Tank, Shield } from 'lucide-react';
import WelcomeMessage from '../components/WelcomeMessage';
import { useTheme } from '../context/ThemeContext';

function Home() {
  const { isDarkMode } = useTheme();

  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const mutedTextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const cardBgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-300`}>
      {/* Hero Section */}
      <div className={`relative h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
        <WelcomeMessage />
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
        <WelcomeMessage />
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className={`text-xl ${mutedTextColor} max-w-3xl mx-auto`}>
            Comprehensive logistics solutions tailored to meet your global shipping and storage needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/ocean-freight" className="group">
            <div className={`${cardBgColor} rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              <Ship className="w-12 h-12 text-blue-900 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-bold mb-4 ${textColor}`}>Ocean Freight</h3>
              <p className={mutedTextColor}>
                Global maritime solutions with comprehensive FCL and LCL services, supported by our worldwide network of shipping partners.
              </p>
            </div>
          </Link>

          <Link to="/road-freight" className="group">
            <div className={`${cardBgColor} rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              <Truck className="w-12 h-12 text-blue-900 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-bold mb-4 ${textColor}`}>Road Freight</h3>
              <p className={mutedTextColor}>
                Reliable ground transportation solutions with real-time tracking and flexible scheduling across North America and Europe.
              </p>
            </div>
          </Link>

          <Link to="/rail-transport" className="group">
            <div className={`${cardBgColor} rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              <Train className="w-12 h-12 text-blue-900 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-bold mb-4 ${textColor}`}>Rail Transport</h3>
              <p className={mutedTextColor}>
                Efficient and sustainable rail freight solutions with multimodal integration and competitive rates.
              </p>
            </div>
          </Link>

          <Link to="/warehouse" className="group">
            <div className={`${cardBgColor} rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              <WarehouseIcon className="w-12 h-12 text-blue-900 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-bold mb-4 ${textColor}`}>Warehouse Solutions</h3>
              <p className={mutedTextColor}>
                State-of-the-art storage and distribution facilities with advanced inventory management and real-time tracking.
              </p>
            </div>
          </Link>

          <Link to="/tank-terminal" className="group">
            <div className={`${cardBgColor} rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              <Tank className="w-12 h-12 text-blue-900 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-bold mb-4 ${textColor}`}>Tank Terminal</h3>
              <p className={mutedTextColor}>
                Advanced storage and handling solutions for liquid bulk commodities with comprehensive safety systems.
              </p>
            </div>
          </Link>

          <Link to="/hseq" className="group">
            <div className={`${cardBgColor} rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              <Shield className="w-12 h-12 text-blue-900 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-bold mb-4 ${textColor}`}>HSEQ</h3>
              <p className={mutedTextColor}>
                Health, Safety, Environment & Quality excellence with industry-leading standards and certifications.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} py-20 transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>About Oakmar Terminal</h2>
              <p className={`${mutedTextColor} mb-6 text-lg leading-relaxed`}>
                Oakmar Terminal LLC (OM.TLLC) is a major petroleum tank farm storage company and leading international liquid bulk storage provider. We form an integral part of our customers' supply chains, providing essential infrastructure and innovative services in transporting products from areas of supply to areas of demand.
              </p>
              <p className={`${mutedTextColor} mb-8 text-lg leading-relaxed`}>
                With over 15 years of experience in international trade and logistics, we operate 32 petroleum storage terminals with 497 tanks across Houston, Rotterdam, and major ports worldwide. Our strategic partnerships with key industry players enable us to enhance capacity for storage and efficient trans-shipment of oil cargo.
              </p>
              <p className={`${mutedTextColor} mb-8 text-lg leading-relaxed`}>
                We specialize in serving heavy industries including energy, oil and gas, mining, construction, automotive and aerospace, providing integrated global door-to-door forwarding solutions tailored to specific customer needs.
              </p>
              <Link to="/contact">
                <button className="bg-blue-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition duration-300">
                  Get In Touch
                </button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="Logistics Operations"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;