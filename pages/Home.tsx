
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* Dynamic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Swimming background"
            className="w-full h-full object-cover opacity-60 contrast-110 scale-100"
          />
          {/* Grain Overlay */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="overflow-hidden mb-6">
            <h2 className="text-primary text-[10px] md:text-xs font-black tracking-[1.5em] uppercase animate-in slide-in-from-bottom duration-1000">
              Forging the Future of Performance
            </h2>
          </div>
          <h1 className="text-white text-7xl md:text-[14rem] font-display leading-[0.8] tracking-tighter mb-12 flex flex-col items-center">
            <span className="block animate-in slide-in-from-right duration-1000 delay-200">BEYOND THE</span>
            <span className="block text-primary text-glow animate-in slide-in-from-left duration-1000 delay-500">SURFACE</span>
          </h1>
          
          <div className="max-w-xl mx-auto mb-16 opacity-0 animate-in fade-in duration-1000 delay-1000 fill-mode-forwards">
            <p className="text-gray-200 text-sm md:text-base font-medium tracking-widest leading-relaxed drop-shadow-xl">
              限界を超え、新たな高みへ。アスリートの情熱と最先端テクノロジーが交差する。
              HYDOORは、水面下で磨かれた真のパフォーマンスを、世界へ解き放つ。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000 fill-mode-forwards">
            <Link to="/sports" className="group relative px-16 py-5 bg-primary text-black font-black text-[10px] tracking-[0.3em] rounded-sm overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10">CORE TECHNOLOGY</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link to="/animate" className="px-16 py-5 border border-white/40 text-white font-black text-[10px] tracking-[0.3em] rounded-sm hover:border-primary hover:text-primary transition-all backdrop-blur-sm">
              VEO LAB (AI MOTION)
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-12 hidden md:block opacity-40">
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-20 bg-primary"></span>
            <span className="font-display text-xl tracking-widest text-primary">SCROLL TO DISCOVER</span>
          </div>
        </div>
      </section>

      {/* Expertise Section - High Contrast Grid */}
      <section className="py-40 bg-black relative">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-display text-2xl tracking-widest mb-4 block italic">Our Domains</span>
              <h2 className="text-6xl md:text-8xl font-display leading-[0.9] tracking-tight text-white">PRECISION<br/>& ARTISTRY</h2>
            </div>
            <p className="text-gray-400 text-sm tracking-widest uppercase max-w-xs text-right hidden md:block">
              We specialize in creating tools and experiences for those who demand excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              {
                id: '01',
                title: 'PERFORMANCE GEAR',
                label: 'TECHNOLOGY',
                desc: 'アスリートのポテンシャルをミリ単位で最適化する、最高峰のOEMソリューション。',
                img: 'https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1200'
              },
              {
                id: '02',
                title: 'AQUA THEATER',
                label: 'ARTISTRY',
                desc: 'アーティスティックスイミングをベースとした、水と光によるイマーシブ・エクスペリエンス。',
                img: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1200'
              },
              {
                id: '03',
                title: 'SPACE DESIGN',
                label: 'PRODUCTION',
                desc: 'ブランドの本質を空間全体で体現する、クリエイティブ・プロダクション。',
                img: 'https://images.pexels.com/photos/159376/construction-site-build-construction-work-159376.jpeg?auto=compress&cs=tinysrgb&w=1200'
              }
            ].map((item) => (
              <div key={item.id} className="group relative aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/5">
                <img 
                  src={item.img} 
                  className="absolute inset-0 w-full h-full object-cover grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-1000 scale-100 group-hover:scale-110" 
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent p-12 flex flex-col justify-end">
                  <span className="text-primary font-display text-3xl mb-4 drop-shadow-lg">{item.id}</span>
                  <p className="text-primary text-[9px] font-black tracking-[0.4em] mb-2 drop-shadow-md">{item.label}</p>
                  <h3 className="text-white text-5xl font-display mb-6 tracking-tight leading-none drop-shadow-2xl">{item.title}</h3>
                  <div className="max-h-0 group-hover:max-h-32 transition-all duration-700 overflow-hidden">
                    <p className="text-gray-200 text-xs tracking-widest leading-relaxed mb-8 drop-shadow-lg">{item.desc}</p>
                    <Link to={item.id === '01' ? '/sports' : '/event'} className="text-white text-[9px] font-black tracking-widest uppercase border-b border-primary pb-1 inline-block hover:text-primary transition-colors">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
