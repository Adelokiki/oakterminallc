import React, { useState } from 'react';
import { Package, Truck, BarChart3, Shield, Clock, Database } from 'lucide-react';

function Warehouse() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative flex content-center items-center justify-center"
        style={{
          minHeight: "80vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
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
                <h1 className="text-6xl font-bold mb-6">Warehouse Solutions</h1>
                <p className="text-xl mb-8 text-gray-200">State-of-the-art Storage and Distribution Facilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Leading Logistics Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-8">Leading Logistics Solutions Provider</h2>
          <p className="text-gray-700 max-w-4xl mx-auto">
            Oakmar Terminal LLC (OM.TLLC) operates as an advanced multi-modal logistics and procurement services company with over 15 years of experience in international trade and logistics. We specialize in providing complete supply management solutions through our global network, serving heavy industries including energy, oil and gas, mining, construction, automotive and aerospace.
          </p>
        </div>

        {/* Logistics Services Section */}
        <div className="bg-gray-50 rounded-xl p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8">Comprehensive Logistics Services</h2>
          <p className="text-gray-700 mb-6">
            Our specialized services are concentrated in import and export operations, located throughout the world's most demanded business trade and logistics distribution centers. These services support and promote international trade of crude oil and petroleum/petrochemical products worldwide, in compliance with all legal requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Multi-Modal Transportation</h3>
              <p className="text-gray-600 mb-4">
                We offer land, air and sea freight services at competitive transit times, functioning as buyer, wholesaler, agent or representative of international and domestic companies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Global Network Coverage</h3>
              <p className="text-gray-600 mb-4">
                Our global presence, either directly or through our worldwide network of business partners, allows us to cover every destination where cargo needs to transit, ensuring complete door-to-door solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Supply Chain Integration */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Connecting Supply Chains</h2>
          <p className="text-gray-700 max-w-4xl mx-auto text-center">
            As a leading international and independent liquid bulk storage company, we form an integral part of our customers' supply chains. We provide essential infrastructure and innovative services in the process of transporting products from areas of supply to areas of demand. In our position as connected partner in current and future logistic networks, we are a relevant player in the energy transition, enabling efficiency gains in our customers' businesses and supporting their growth ambitions toward a carbon-neutral society.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Package className="w-12 h-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-bold mb-4">Inventory Management</h3>
            <p className="text-gray-600">
              Advanced inventory tracking systems with real-time monitoring and automated stock level alerts.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Shield className="w-12 h-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-bold mb-4">Security Systems</h3>
            <p className="text-gray-600">
              24/7 surveillance, controlled access, and advanced security protocols to protect your valuable inventory.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Clock className="w-12 h-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-bold mb-4">Real-time Tracking</h3>
            <p className="text-gray-600">
              Live monitoring of inventory movements, shipments, and warehouse operations through our digital platform.
            </p>
          </div>
        </div>

        {/* Warehouse Management Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Warehouse Interior"
              className="rounded-lg shadow-lg w-full h-96 object-cover transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Comprehensive Warehouse Management</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md transform hover:scale-105">
                <Database className="w-6 h-6 text-blue-900 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Inventory Optimization</h3>
                  <p className="text-gray-600">Advanced algorithms for optimal stock levels and placement</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md transform hover:scale-105">
                <Truck className="w-6 h-6 text-blue-900 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Distribution Services</h3>
                  <p className="text-gray-600">Efficient picking, packing, and shipping operations</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md transform hover:scale-105">
                <BarChart3 className="w-6 h-6 text-blue-900 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Analytics & Reporting</h3>
                  <p className="text-gray-600">Detailed insights and performance metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-xl p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8">Additional Warehouse Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Custom pick package solutions",
              "Contract packaging services",
              "E-commerce integration",
              "Real-time inventory tracking",
              "Custom barcoding system",
              "Digital reporting platform",
              "Security monitoring",
              "Climate-controlled storage",
              "Cross-docking services"
            ].map((service, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50 group"
              >
                <div className="w-2 h-2 bg-blue-900 rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="text-gray-700 group-hover:text-blue-900 transition-colors">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Warehouse;