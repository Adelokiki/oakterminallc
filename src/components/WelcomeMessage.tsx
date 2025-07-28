import { Link } from 'react-router-dom';

function WelcomeMessage() {
  return (
    <div className="text-center relative z-10 px-4">
      <div className="mb-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Welcome to Oakmar_Terminalllc
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
          Logistics and Shipping Solutions
        </p>
      </div>

      <Link to="/contact">
        <button className="bg-blue-900 text-white font-bold py-4 px-10 rounded-lg hover:bg-blue-800 transition-colors shadow-lg text-lg">
          CONTACT NOW
        </button>
      </Link>
    </div>
  );
}

export default WelcomeMessage;