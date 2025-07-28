import React from 'react';
import { Train, Leaf, Shield } from 'lucide-react';

function RailTransport() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative flex content-center items-center justify-center"
        style={{
          minHeight: "80vh",
          backgroundImage: "url('https://raw.githubusercontent.com/Adelokiki/tank-oil/refs/heads/main/Screenshot%202025-07-28%20131237.png')",
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
                <h1 className="text-6xl font-bold mb-6">Rail Transport</h1>
                <p className="text-xl mb-8 text-gray-200">Efficient and Sustainable Rail Freight Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Rail Transport</h2>
            <p className="text-gray-700 mb-4">
              OM.TLLLC offers universal services for the transport of goods by rail throughout the USA in trains (including baggage cars), gondola cars, and ISO containers. We also work with railway operators to provide access to the USA and Europe by rail for companies and producers in Europe.
            </p>
            <p className="text-gray-700">
              Rail transport can be ordered as a separate service or integrated into the multimodal supply chain. The long-term relationships and direct contracts with European railway structures enable OM.TLLLC to exercise the advantages of the first forwarder and to make competitive offers for rail freight from the USA to European countries.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1535535112387-56ffe8db21ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Rail Transport"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Train className="w-12 h-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-bold mb-4">Solutions Linked to Railway Services</h3>
            <p className="text-gray-600">
              OM.TLLLC Logistics offers inland rail transport services in the USA and Europe, based on its extensive worldwide networks. OM.TLLLC Logistics also offers high-quality services and competitive prices based on the know-how it has built for years.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Leaf className="w-12 h-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-bold mb-4">Safety and Compliance</h3>
            <p className="text-gray-600">
              With each round trip by rail, we save 55,300 liters of diesel fuel and reduce carbon emissions by 145.20 tons compared to road vehicle use of Euro 5 and 6. We will continue our efforts to create a better world by saving 40.5 million liters of diesel and producing 67,300 tons less carbon dioxide every year.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-xl p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Rail Transport Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Door-to-door delivery",
              "Temperature-controlled containers",
              "Real-time tracking",
              "Customs clearance",
              "Multimodal solutions",
              "24/7 customer support",
              "Competitive rates",
              "Express delivery options",
              "Eco-friendly transport"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blue-900" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RailTransport;