
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Artistry', path: '/event' },
    { name: 'Technology', path: '/sports' },
    { name: 'VEO LAB', path: '/animate' },
    { name: 'Careers', path: '/recruit' },
  ];

  return (
    <header 
      className={`fixed top-0 z-[100] w-full transition-all duration-700 ${
        isScrolled ? 'bg-black/80 py-4 backdrop-blur-xl border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <h1 className="text-white text-4xl font-display tracking-wider leading-none group-hover:text-primary transition-colors">HYDOOR</h1>
          <span className="text-[8px] text-gray-500 font-bold tracking-[0.6em] uppercase mt-1">For Exceptional Athletes</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-14">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-black tracking-[0.3em] transition-all duration-300 uppercase relative group ${
                location.pathname === link.path ? 'text-primary' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
          <Link to="/contact">
            <button className="bg-white hover:bg-primary text-black text-[10px] font-black tracking-[0.2em] px-10 py-4 transition-all transform hover:scale-105 rounded-sm">
              GET IN TOUCH
            </button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-8 flex flex-col gap-1.5 items-end">
            <span className={`h-0.5 bg-white transition-all ${mobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
            <span className={`h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
            <span className={`h-0.5 bg-white transition-all ${mobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-3'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[90] bg-black flex flex-col items-start justify-center px-12 gap-12 animate-in fade-in slide-in-from-right duration-500">
          <div className="space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-6xl font-display text-white hover:text-primary tracking-tight transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-primary font-black tracking-widest text-lg border-b-2 border-primary pb-2"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
