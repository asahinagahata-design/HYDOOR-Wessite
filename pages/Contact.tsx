
import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="w-full bg-black min-h-screen pt-40">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-20">
        <div className="mb-32">
          <span className="text-primary font-display text-2xl tracking-[0.5em] block mb-6 italic">Connect With Us</span>
          <h1 className="text-7xl md:text-[12rem] font-display leading-[0.8] tracking-tighter italic uppercase">GET IN <span className="text-primary not-italic">TOUCH</span></h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-24">
          {/* Form */}
          <div className="flex-grow glass p-12 md:p-16 border border-white/5 shadow-2xl">
            <form className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Your Name</label>
                  <input type="text" placeholder="FULL NAME" className="w-full bg-neutral-900/50 border-white/10 text-white p-5 text-xs tracking-widest focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-none" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Company</label>
                  <input type="text" placeholder="ORGANIZATION" className="w-full bg-neutral-900/50 border-white/10 text-white p-5 text-xs tracking-widest focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-none" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Email Address</label>
                <input type="email" placeholder="EMAIL@EXAMPLE.COM" className="w-full bg-neutral-900/50 border-white/10 text-white p-5 text-xs tracking-widest focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-none" />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Message</label>
                <textarea rows={6} placeholder="HOW CAN WE ASSIST YOU?" className="w-full bg-neutral-900/50 border-white/10 text-white p-5 text-xs tracking-widest focus:ring-1 focus:ring-primary focus:border-primary transition-all rounded-none" />
              </div>

              <button className="w-full py-8 bg-white text-black font-black text-[10px] tracking-[0.5em] hover:bg-primary transition-all flex items-center justify-center gap-6 group">
                SUBMIT INQUIRY
                <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="lg:w-96 space-y-16">
            <div className="p-12 glass border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px]"></div>
              <h3 className="font-display text-3xl mb-12 flex items-center gap-6 tracking-widest">
                <span className="w-10 h-[1px] bg-primary"></span>
                OFFICE
              </h3>
              <div className="space-y-12">
                <div className="space-y-4">
                  <p className="text-[9px] text-primary font-black tracking-[0.4em] uppercase">Location</p>
                  <p className="text-gray-300 text-sm leading-loose tracking-widest">〒577-0066<br/>大阪府 東大阪市 高井田本通 7-6-15</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[9px] text-primary font-black tracking-[0.4em] uppercase">Phone</p>
                  <p className="text-3xl font-display text-white tracking-widest">06-6789-6676</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[9px] text-primary font-black tracking-[0.4em] uppercase">Contact</p>
                  <p className="text-xs text-gray-500 font-bold tracking-widest break-all">shopmaster@speedojpn.com</p>
                </div>
              </div>
            </div>

            {/* Office Image Visual */}
            <div className="group relative h-96 overflow-hidden border border-white/5 bg-neutral-900">
              <a href="https://www.google.com/maps/search/?api=1&query=大阪府東大阪市高井田本通7-6-15" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" 
                  alt="Corporate Office"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="glass px-10 py-5 text-[10px] font-black tracking-[0.3em] text-white uppercase">
                    Open Map
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
