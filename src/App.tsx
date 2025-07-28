import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ImagePreloader from './components/ImagePreloader';
import Home from './pages/Home';
import OceanFreight from './pages/OceanFreight';
import RoadFreight from './pages/RoadFreight';
import RailTransport from './pages/RailTransport';
import Warehouse from './pages/Warehouse';
import TankTerminal from './pages/TankTerminal';
import HSEQ from './pages/HSEQ';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <ImagePreloader />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ocean-freight" element={<OceanFreight />} />
              <Route path="/road-freight" element={<RoadFreight />} />
              <Route path="/rail-transport" element={<RailTransport />} />
              <Route path="/warehouse" element={<Warehouse />} />
              <Route path="/tank-terminal" element={<TankTerminal />} />
              <Route path="/hseq" element={<HSEQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;