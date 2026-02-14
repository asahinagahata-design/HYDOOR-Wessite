
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EventBusiness from './pages/EventBusiness';
import SportsBusiness from './pages/SportsBusiness';
import Recruit from './pages/Recruit';
import JobDetail from './pages/JobDetail';
import Contact from './pages/Contact';
import VideoGen from './pages/VideoGen';
import AIChatConcierge from './components/AIChatConcierge';

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
            <Route path="/contact" element={<Contact />} />
            <Route path="/animate" element={<VideoGen />} />
          </Routes>
        </main>
        <Footer />
        <AIChatConcierge />
      </div>
    </Router>
  );
};

export default App;
