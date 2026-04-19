
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ホーム', path: '/', anchor: '' },
    { name: '事業内容', path: '/', anchor: 'services' },
    { name: '採用情報', path: '/recruit', anchor: '' },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    if (link.anchor) {
      if (location.pathname === '/') {
        document.getElementById(link.anchor)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById(link.anchor)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(link.path);
    }
  };

  const isActive = (link: typeof navLinks[0]) => {
    if (link.anchor) return false;
    return location.pathname === link.path;
  };

  return (
    <header 
      className={`fixed top-0 z-[100] w-full transition-all duration-700 ${
        isScrolled ? 'bg-black/80 py-4 backdrop-blur-xl border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <h1 className="text-white text-4xl font-display tracking-wider leading-none group-hover:text-primary transition-colors">HYDOOR</h1>
          <span className="text-[8px] text-gray-500 font-bold tracking-[0.6em] uppercase mt-1">For All Athletes</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-14">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`text-[10px] font-black tracking-[0.3em] transition-all duration-300 uppercase relative group ${
                isActive(link) ? 'text-primary' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full ${isActive(link) ? 'w-full' : ''}`}></span>
            </button>
          ))}
          <Link to="/contact">
            <button className="bg-white hover:bg-primary text-black text-[10px] font-black tracking-[0.2em] px-10 py-4 transition-all transform hover:scale-105 rounded-sm">
              お問い合わせ
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

      {/* Mobile Menu — コンパクトなドロップダウン（全画面オーバーレイではない） */}
      {mobileMenuOpen && (
        <>
          <button
            type="button"
            aria-label="メニューを閉じる"
            className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-4 top-[4.5rem] z-[95] w-[min(calc(100vw-2rem),17rem)] animate-in fade-in zoom-in-95 duration-200 lg:hidden">
            <div className="rounded-lg border border-white/15 bg-neutral-950/95 py-3 shadow-2xl backdrop-blur-xl">
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleNavClick(link)}
                    className="px-5 py-3 text-left text-[11px] font-black tracking-[0.25em] text-white transition-colors hover:bg-white/10 hover:text-primary"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
              <div className="mx-3 border-t border-white/10" />
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-5 py-3 text-[11px] font-black tracking-[0.2em] text-primary transition-colors hover:bg-primary/10"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
