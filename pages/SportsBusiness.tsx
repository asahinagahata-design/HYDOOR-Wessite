
import React from 'react';

const SportsBusiness: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* Hero - Cinematic Tech */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70 grayscale-0 contrast-100 scale-100"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000")` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-12 w-full">
          <div className="max-w-4xl">
            <span className="text-primary font-display text-2xl tracking-[0.3em] block mb-8 italic">Engineering Excellence</span>
            <h1 className="text-white text-8xl md:text-[12rem] font-display font-black tracking-tighter mb-10 leading-[0.8] italic">
              SPORTS<br/><span className="text-primary not-italic">TECHNOLOGY</span>
            </h1>
            <p className="text-gray-100 text-lg md:text-2xl font-medium max-w-2xl leading-relaxed tracking-widest drop-shadow-xl">
              アスリートの身体は、最も精密なマシンである。<br />
              そのポテンシャルを1%でも引き出すために、私たちはミリ単位の精度に命を吹き込む。
            </p>
          </div>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="py-40 bg-black">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-start mb-40">
            <div className="space-y-16">
              <h2 className="text-7xl font-display tracking-tight leading-none uppercase text-white">
                THE CORE OF <br/><span className="text-primary italic">INNOVATION</span>
              </h2>
              <div className="space-y-10 border-l border-white/10 pl-12">
                <p className="text-gray-400 text-xl leading-relaxed tracking-widest">
                  トップアスリートの要求は、常に想像を超えてくる。私たちは、彼らの微細な感覚をデータと技術で翻訳し、最高水準のスポーツウェアへと昇華させます。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                  {[
                    { title: 'BIO-MECHANICS', desc: '人体の動きを解析し、最適な可動域を確保。', icon: 'settings_accessibility' },
                    { title: 'MATERIAL TECH', desc: '水の抵抗を最小化する独自の高機能素材選定。', icon: 'science' },
                    { title: 'PRECISION FIT', desc: 'ミリ単位のデジタルパターンメイキング。', icon: 'architecture' },
                    { title: 'EXTREME DURABILITY', desc: '過酷な環境に耐えうる、最高品質の縫製。', icon: 'verified' }
                  ].map(feat => (
                    <div key={feat.title} className="group p-10 glass hover:bg-primary transition-all duration-500 rounded-sm">
                      <span className="material-symbols-outlined text-4xl text-primary group-hover:text-black mb-6 block">{feat.icon}</span>
                      <h4 className="font-display text-2xl text-white group-hover:text-black mb-4 tracking-wider">{feat.title}</h4>
                      <p className="text-gray-400 text-xs tracking-widest group-hover:text-black/70 leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="sticky top-40">
              <div className="relative aspect-square w-full rounded-sm overflow-hidden shadow-2xl bg-neutral-900">
                 <img 
                    src="https://images.unsplash.com/photo-1530549387074-d56223594191?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-full object-cover grayscale-0 opacity-90 hover:opacity-100 transition-all duration-1000" 
                    alt="Engineering Precision"
                  />
                  <div className="absolute top-10 right-10 text-right">
                    <p className="text-primary font-display text-6xl leading-none drop-shadow-lg">0.01mm</p>
                    <p className="text-[10px] text-white font-black tracking-widest uppercase drop-shadow-md">Tolerance limit</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsBusiness;
