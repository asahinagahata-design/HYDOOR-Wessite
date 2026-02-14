
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="group mb-10">
              <h2 className="text-3xl font-black tracking-tighter italic uppercase">HYDOOR <span className="text-primary not-italic">INC.</span></h2>
            </Link>
            <p className="text-gray-500 text-sm leading-loose max-w-xs font-bold uppercase tracking-widest">
              Crafting Innovation <br />Opening Possibilities
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-black text-[10px] uppercase tracking-[0.5em] text-primary mb-10 opacity-60">Services</h4>
            <ul className="space-y-6 text-sm font-black tracking-widest">
              <li><Link to="/event" className="hover:text-primary transition-colors">EVENT ART</Link></li>
              <li><Link to="/sports" className="hover:text-primary transition-colors">OEM SOLUTION</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">BRANDING</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-black text-[10px] uppercase tracking-[0.5em] text-primary mb-10 opacity-60">Company</h4>
            <ul className="space-y-6 text-sm font-black tracking-widest">
              <li><Link to="/recruit" className="hover:text-primary transition-colors">CAREERS</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">SUPPORT</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">PRIVACY</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-black text-[10px] uppercase tracking-[0.5em] text-primary mb-10 opacity-60">Headquarters</h4>
            <div className="space-y-8 text-sm font-bold text-gray-400">
              <p className="leading-relaxed">〒577-0066 大阪府 東大阪市<br/>高井田本通 7-6-15</p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-white text-lg font-black tracking-tighter">06-6789-6676</p>
                <p className="text-xs text-gray-500 mt-2 italic font-black break-all">shopmaster@speedojpn.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-40">
          <p className="text-[9px] font-black tracking-[0.5em] uppercase italic">© 2024 HYDOOR INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            {['facebook', 'instagram', 'youtube'].map(s => (
              <span key={s} className="material-symbols-outlined text-xl hover:text-primary cursor-pointer transition-colors">public</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
