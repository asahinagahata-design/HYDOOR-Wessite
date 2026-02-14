
import React from 'react';

const EventBusiness: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* Hero - Artistic Swimming */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-100 opacity-80"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000")` 
          }}
        />
        <div className="relative z-10 text-center px-6">
          <span className="inline-block px-8 py-3 bg-primary/20 backdrop-blur-xl border border-primary/50 text-primary rounded-full text-xs font-black tracking-[0.5em] uppercase mb-10 shadow-2xl">
            SYNCHRONIZED ARTISTRY
          </span>
          <h1 className="text-white text-6xl md:text-[10rem] font-display tracking-tighter mb-10 leading-none italic uppercase">
            AQUA <br/><span className="not-italic text-primary drop-shadow-[0_0_40px_rgba(242,185,13,0.4)]">MAGIC</span>
          </h1>
          <p className="text-white text-xl md:text-3xl font-bold leading-relaxed max-w-4xl mx-auto drop-shadow-2xl">
            静寂と躍動がシンクロする、究極の水上芸術。<br />
            トップアスリートによる身体表現が、空間を魔法に変える。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative group aspect-square md:aspect-auto md:h-[600px]">
            <div className="absolute -inset-10 bg-primary/10 blur-[120px] rounded-full group-hover:bg-primary/20 transition-all"></div>
            <img 
              src="https://images.unsplash.com/photo-1530549387074-d56223594191?auto=format&fit=crop&q=80&w=1200" 
              className="relative rounded-[3rem] shadow-2xl transition-all duration-1000 bg-neutral-800 w-full h-full object-cover opacity-100" 
              alt="Aqua performance" 
            />
          </div>
          <div className="space-y-10">
            <h2 className="text-5xl md:text-7xl font-display italic tracking-tighter uppercase leading-none">THE <span className="text-primary not-italic">VISION</span></h2>
            <p className="text-gray-300 text-xl leading-loose tracking-widest">
              元オリンピック選手・藤井来夏のディレクションのもと、水という媒体を最大限に活かしたエンターテインメントを提供。無重力のような浮遊感と力強いアスレティシズムが融合する、唯一無二のステージ。
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="border-l-2 border-primary pl-6">
                <p className="text-5xl font-display mb-2">25+</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Years of expertise</p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <p className="text-5xl font-display mb-2">100+</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Global Shows</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventBusiness;
