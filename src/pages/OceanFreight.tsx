import React, { useState } from 'react';
import { Plus } from 'lucide-react';

function OceanFreight() {
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
          backgroundImage: "url('https://ibb.co/6RdbKZFC')",
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
                <h1 className="text-6xl font-bold mb-6">Ocean Freight</h1>
                <p className="text-xl mb-8 text-gray-200">Global Maritime Solutions for Your Cargo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <img 
              src="https://raw.githubusercontent.com/Adelokiki/tank-oil/refs/heads/main/OAK%20TERMINAL%205.jpeg
              "
              alt="Ocean Freight Services"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Ocean Freight</h2>
            <p className="text-gray-700 mb-4">
              SERES SHIPPING is one of the largest global freight forwarders operating within a worldwide network. Tailor-made solutions for your specific ocean freight requirements form the core of our services.
            </p>
            <p className="text-gray-700 mb-4">
              Our extensive and long-standing relationships with shipping companies mean that we can provide you with access to a global carrier portfolio covering key ports, with the best transit times, fully flexible planning, and space protection agreements to meet your individual shipping needs.
            </p>
            <p className="text-gray-700">
              SERES SHIPPING can offer a flexible range of ocean freight and ocean freight services for both Less-than-Container Load (LCL) and Full-Container Load (FCL) shipments. These are supported by extensive sea and ocean freight management services and breakbulk, project forwarding, partial, and full charter services.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Full Container Load</h2>
          <p className="text-gray-700 mb-8">
            Our team of ocean freight experts offers professional consultation and tailor-made solutions; they use their in-depth knowledge of the nuances of cargo flows to meet the needs of ocean freight. We negotiate competitive cargo space agreements with the world's leading shipping companies and pass on the benefits to all our customers.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "The key elements of our FCL service",
                content: "Global coverage, competitive rates, reliable schedules, and dedicated customer service"
              },
              {
                title: "Leading Shipping Company in Crude Oil and Oil Products Transportation",
                content: "Specialized in handling and transporting crude oil and refined petroleum products"
              },
              {
                title: "Innovative LNG Vessels",
                content: "State-of-the-art LNG carriers with advanced technology and safety features"
              },
              {
                title: "Advanced Handysize Vessels",
                content: "Versatile fleet of Handysize vessels for flexible cargo operations"
              },
              {
                title: "Technologically Advanced Aframax Tankers",
                content: "Modern Aframax tankers equipped with the latest maritime technology"
              },
              {
                title: "Commitment to VLCCs and Environmental Protection",
                content: "Operating eco-friendly VLCCs with focus on environmental sustainability"
              }
            ].map((section) => (
              <div key={section.title} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 bg-gray-800 text-white flex justify-between items-center hover:bg-gray-700 transition-colors"
                  onClick={() => toggleSection(section.title)}
                >
                  <span>{section.title}</span>
                  <Plus className={`transform transition-transform ${expandedSection === section.title ? 'rotate-45' : ''}`} />
                </button>
                {expandedSection === section.title && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700">{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OceanFreight;