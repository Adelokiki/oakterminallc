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
          backgroundImage: "url('/oak-terminal-13.png.jpg')",
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
                <h1 className="text-6xl font-bold mb-6">Tank Terminal</h1>
                <p className="text-xl mb-8 text-gray-200">Advanced Storage and Handling Solutions</p>
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
              src="/oak-terminal-2.png.jpg"
              alt="Tank Terminal Facilities"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Tank Terminal Services</h2>
            <p className="text-gray-700 mb-4">
              Oakmar Terminal LLC is a major petroleum tank farm storage company located in Missouri, USA. We operate 32 petroleum storage terminals with a total of 497 tanks across Houston, Rotterdam, and major international ports, providing comprehensive storage and handling services for petroleum and petrochemical products.
            </p>
            <p className="text-gray-700 mb-4">
              Our terminals range from small gathering sites to large corporation storage units, with tanks ranging in size from 40 to 60 feet high and 150 to 270 feet in diameter, holding anywhere from 57,000 to 575,000 barrels of petroleum products. The size of each tank is determined by the design requirements of pipeline and refinery customers.
            </p>
            <p className="text-gray-700">
              All facilities are strictly regulated and comply with comprehensive transportation requirements governing design, maintenance, tank size, safety measures, containment, air quality, and environmental permitting. Our terminals are staffed by trained employees and feature state-of-the-art systems including radar tank level tracking and mixers to maintain product integrity.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Terminal Capabilities</h2>
          <p className="text-gray-700 mb-8">
            Our comprehensive storage and handling capabilities include connections for barges, ships, trains, and trucks, with flexible operating hours and fast loading/unloading times. We provide specialized services designed to meet exact customer needs with an emphasis on safety and optimal service delivery.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Global Port Network</h3>
            <p className="text-gray-700 mb-4">
              Our geographic focus encompasses all major ports in the Far East, Black Sea, Baltic, and Caspian regions. We offer tank farm storage services for crude oil and refined petroleum products in the following strategic locations:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Port of Bautino",
                "Port of Pavlodar", 
                "Port of Atyrau",
                "Port of Kuryk",
                "Port of Öskemen",
                "Port of Semey",
                "Houston Terminal",
                "Rotterdam Terminal",
                "Qingdao Terminal"
              ].map((port, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span className="text-gray-700 text-sm">{port}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Advanced Storage Systems",
                content: "Floating roofs on storage tanks with primary and secondary seals to contain vapors, located near oil surface to reduce emissions and ignition risk"
              },
              {
                title: "Storage and Handling Services", 
                content: "High-heat and low-temperature products, nitrogen blanketing and purging, vapor return and treatment, filtering, blending (in-tank and in-line), drying and dehydration"
              },
              {
                title: "Transfer Operations",
                content: "Tank-to-tank transfer as well as direct transfer to and from ship, pipeline, barge, truck, or railcar with flexible operating capabilities"
              },
              {
                title: "Safety and Compliance",
                content: "All above-ground storage tanks constructed using quality steel plate engineered to federal codes and national standards, with hydrostatic testing and cathodic protection"
              },
              {
                title: "Quality Assurance",
                content: "State-of-the-art radar tracking systems, routine monitoring, monthly visual inspections by trained personnel, and additional annual inspections"
              },
              {
                title: "Strategic Partnerships",
                content: "Collaborative networking with Kazakhstani main port oil terminals, Houston and Rotterdam ports to expand storage capabilities and optimize trans-shipment"
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