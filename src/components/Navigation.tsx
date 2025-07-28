import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navBgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-gray-100' : 'text-gray-700';
  const hoverTextColor = isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-900';
  const brandColor = isDarkMode ? 'text-blue-400' : 'text-blue-900';
  const mobileMenuBg = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const hoverBgColor = isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50';

  return (
    <nav className={`${navBgColor} shadow-sm fixed w-full z-50 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className={`text-2xl font-bold ${brandColor}`}>
              <span className="text-3xl">O</span>M.TLLLC
            </Link>
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`${textColor} ${hoverTextColor} focus:outline-none`}
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${textColor} ${hoverTextColor} focus:outline-none`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${textColor} ${hoverTextColor}`}>Home</Link>
            <Link to="/ocean-freight" className={`${textColor} ${hoverTextColor}`}>Ocean Freight</Link>
            <Link to="/road-freight" className={`${textColor} ${hoverTextColor}`}>Road Freight</Link>
            <Link to="/rail-transport" className={`${textColor} ${hoverTextColor}`}>Rail Transport</Link>
            <Link to="/warehouse" className={`${textColor} ${hoverTextColor}`}>Warehouse</Link>
            <Link to="/tank-terminal" className={`${textColor} ${hoverTextColor}`}>Tank Terminal</Link>
            <Link to="/hseq" className={`${textColor} ${hoverTextColor}`}>HSEQ</Link>
            <Link to="/contact" className={`${textColor} ${hoverTextColor}`}>Contact Us</Link>
            
            {/* Desktop Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`${textColor} ${hoverTextColor} focus:outline-none`}
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`fixed inset-0 ${mobileMenuBg} z-40 md:hidden transition-colors duration-300`}>
          <div className="flex justify-between items-center p-4">
            <Link to="/" className={`text-2xl font-bold ${brandColor}`}>
              <span className="text-3xl">O</span>M.TLLLC
            </Link>
            <button
              onClick={closeMenu}
              className={`${textColor} ${hoverTextColor} focus:outline-none`}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-2">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${textColor} ${hoverTextColor} ${hoverBgColor}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/ocean-freight" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${textColor} ${hoverTextColor} ${hoverBgColor}`}
              onClick={closeMenu}
            >
              Ocean Freight
            </Link>
            <Link 
              to="/road-freight" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${textColor} ${hoverTextColor} ${hoverBgColor}`}
              onClick={closeMenu}
            >
              Road Freight
            </Link>
            <Link 
              to="/rail-transport" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${textColor} ${hoverTextColor} ${hoverBgColor}`}
              onClick={closeMenu}
            >
              Rail Transport
            </Link>
            <Link 
              to="/warehouse" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${textColor} ${hoverTextColor} ${hoverBgColor}`}
              onClick={closeMenu}
            >
              Warehouse
            </Link>
            <Link 
              to="/tank-terminal" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${textColor} ${hoverTextColor} ${hoverBgColor}`}
              onClick={closeMenu}
            >
              Tank Terminal
            </Link>
            <Link 
              to="/hseq" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${textColor} ${hoverTextColor} ${hoverBgColor}`}
              onClick={closeMenu}
            >
              HSEQ
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${textColor} ${hoverTextColor} ${hoverBgColor}`}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;