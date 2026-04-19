
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EventBusiness from './pages/EventBusiness';
import SportsBusiness from './pages/SportsBusiness';
import Recruit from './pages/Recruit';
import JobDetail from './pages/JobDetail';
import Contact from './pages/Contact';
import ProductDesign from './pages/ProductDesign';
import RentalService from './pages/RentalService';
import EquipmentWorks from './pages/EquipmentWorks';
import AiSystem from './pages/AiSystem';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<EventBusiness />} />
            <Route path="/sports" element={<SportsBusiness />} />
            <Route path="/recruit" element={<Recruit />} />
            <Route path="/recruit/:jobId" element={<JobDetail />} />
            <Route path="/product-design" element={<ProductDesign />} />
            <Route path="/space-design" element={<Navigate to="/product-design" replace />} />
            <Route path="/rental" element={<RentalService />} />
            <Route path="/equipment" element={<EquipmentWorks />} />
            <Route path="/ai-system" element={<AiSystem />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
