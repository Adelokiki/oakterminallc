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
          backgroundImage: "url('https://raw.githubusercontent.com/Adelokiki/tank-oil/refs/heads/main/OAK%20TERMINAL%20ROAD%20IMAGE.jpg')",
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
                <h1 className="text-6xl font-bold mb-6">Road Freight</h1>
                <p className="text-xl mb-8 text-gray-200">Reliable Ground Transportation Solutions</p>
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
              src="https://raw.githubusercontent.com/Adelokiki/tank-oil/refs/heads/main/OAK%20TERMINAL%20ROAD%20IMAGE.jpg"
              alt="Ocean Freight Services"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Ocean Freight</h2>
            <h2 className="text-3xl font-bold mb-6">Road Freight</h2>
            <p className="text-gray-700 mb-4">
              OM.TLLLC provides comprehensive road freight solutions across North America and Europe. Our extensive network of trusted carriers and advanced logistics management ensures your cargo reaches its destination safely and on time.
            </p>
            <p className="text-gray-700 mb-4">
              With real-time tracking, flexible scheduling, and specialized equipment for various cargo types, we deliver tailored road transport solutions that meet your specific requirements and budget.
            </p>
            <p className="text-gray-700">
              From LTL (Less Than Truckload) to FTL (Full Truckload) services, our road freight solutions include temperature-controlled transport, hazardous materials handling, and expedited delivery options.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Road Freight Services</h2>
          <p className="text-gray-700 mb-8">
            Our experienced road freight team provides comprehensive ground transportation solutions with a focus on reliability, safety, and cost-effectiveness. We leverage our extensive carrier network to provide competitive rates and flexible service options.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Full Truckload (FTL) Services",
                content: "Dedicated truck capacity for large shipments with direct delivery and enhanced security"
              },
              {
                title: "Less Than Truckload (LTL) Solutions",
                content: "Cost-effective shipping for smaller loads with consolidated transportation"
              },
              {
                title: "Temperature-Controlled Transport",
                content: "Refrigerated and climate-controlled vehicles for sensitive cargo"
              },
              {
                title: "Expedited Delivery Services",
                content: "Time-critical shipping with priority handling and faster transit times"
              },
              {
                title: "Specialized Equipment",
                content: "Flatbeds, lowboys, and specialized trailers for oversized and heavy cargo"
              },
              {
                title: "Real-Time Tracking and Monitoring",
                content: "Advanced GPS tracking and communication systems for complete shipment visibility"
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