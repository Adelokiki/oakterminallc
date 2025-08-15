import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Ship, Truck, Warehouse as WarehouseIcon, Tangent as Tank, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { isDarkMode } = useTheme();

  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-900';
  const textColor = 'text-white';
  const mutedTextColor = isDarkMode ? 'text-gray-400' : 'text-gray-400';
  const hoverTextColor = isDarkMode ? 'hover:text-blue-400' : 'hover:text-white';
  const iconColor = isDarkMode ? 'text-blue-400' : 'text-blue-400';

  return (
    <footer className={`${bgColor} ${textColor} py-12 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <h2 className={`text-2xl font-bold ${iconColor}`}>
                Oakmar Terminal
              </h2>
            </Link>
            <p className={`${mutedTextColor} text-sm leading-relaxed`}>
              Oakmar Terminal LLC - A major petroleum tank farm storage company and leading international liquid bulk storage provider. We operate 32 petroleum storage terminals with 497 tanks across Houston, Rotterdam, and major ports worldwide, serving the energy transition with innovative logistics solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className={`${mutedTextColor} ${hoverTextColor} transition-colors`}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={`${mutedTextColor} ${hoverTextColor} transition-colors`}>About Us</Link>
              </li>
              <li>
                <Link to="/hseq" className={`${mutedTextColor} ${hoverTextColor} transition-colors`}>HSEQ</Link>
              </li>
              <li>
                <Link to="/contact" className={`${mutedTextColor} ${hoverTextColor} transition-colors`}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Ship className={`w-4 h-4 ${iconColor}`} />
                <Link to="/ocean-freight" className={`${mutedTextColor} ${hoverTextColor} transition-colors`}>Ocean Freight</Link>
              </li>
              <li className="flex items-center space-x-2">
                <Truck className={`w-4 h-4 ${iconColor}`} />
                <Link to="/road-freight" className={`${mutedTextColor} ${hoverTextColor} transition-colors`}>Road Freight</Link>
              </li>
              <li className="flex items-center space-x-2">
                <WarehouseIcon className={`w-4 h-4 ${iconColor}`} />
                <Link to="/warehouse" className={`${mutedTextColor} ${hoverTextColor} transition-colors`}>Warehouse</Link>
              </li>
              <li className="flex items-center space-x-2">
                <Tank className={`w-4 h-4 ${iconColor}`} />
                <Link to="/tank-terminal" className={`${mutedTextColor} ${hoverTextColor} transition-colors`}>Tank Terminal</Link>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className={`w-4 h-4 ${iconColor}`} />
                <Link to="/hseq" className={`${mutedTextColor} ${hoverTextColor} transition-colors`}>HSEQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-1`} />
                <span className={mutedTextColor}>
                  2353 North State Highway D, Hayti MO, 63851, Pemiscot County
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className={`w-5 h-5 ${iconColor}`} />
                <div className={mutedTextColor}>
                  <p>Netherlands: +31 10 899 0688</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className={`w-5 h-5 ${iconColor}`} />
                <a href="mailto:info@oakmar-terminalllc.com" className={`${mutedTextColor} ${hoverTextColor} transition-colors`}>
                  info@oakmar-terminalllc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={mutedTextColor}>
              © {new Date().getFullYear()} Oakmar Terminal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className={`${mutedTextColor} ${hoverTextColor} text-sm transition-colors`}>
                Privacy Policy
              </Link>
              <Link to="/terms" className={`${mutedTextColor} ${hoverTextColor} text-sm transition-colors`}>
                Terms of Service
              </Link>
              <Link to="/cookies" className={`${mutedTextColor} ${hoverTextColor} text-sm transition-colors`}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;