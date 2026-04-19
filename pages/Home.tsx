
import React from 'react';
import { Link } from 'react-router-dom';

const MAIN_VIDEO = '/videos/hydoor-main.mp4';

const Home: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* Dynamic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover opacity-60 contrast-110 scale-100"
            autoPlay
            loop
            muted
            playsInline
            aria-label="HYDOOR メインビジュアル"
          >
            <source src={MAIN_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 px-6 pt-28 text-center md:pt-0">
          <div className="mb-8 opacity-0 animate-in fade-in duration-700 delay-200 fill-mode-forwards">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-primary/50 bg-black/40 px-6 py-3 text-[10px] font-black tracking-[0.25em] uppercase text-primary hover:bg-primary hover:text-black transition-all"
            >
              お問い合わせはこちらから
              <span className="material-symbols-outlined text-base">north_east</span>
            </Link>
          </div>
          <div className="overflow-hidden mb-6">
            <h2 className="text-primary text-[10px] md:text-xs font-black tracking-[1.5em] uppercase animate-in slide-in-from-bottom duration-1000">
              Forging the Future of Performance
            </h2>
          </div>
          <h1 className="mb-12 flex flex-col items-center font-display leading-[0.8] tracking-tighter text-white text-[clamp(3.5rem,13vw,5.25rem)] md:text-[9rem] lg:text-[12rem] xl:text-[14rem]">
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
              <span className="relative z-10">PERFORMANCE GEAR</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link to="/contact" className="px-16 py-5 border border-white/40 text-white font-black text-[10px] tracking-[0.3em] rounded-sm hover:border-primary hover:text-primary transition-all backdrop-blur-sm">
              お問い合わせ
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
      <section id="services" className="relative bg-black py-24 md:py-40">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 md:px-12">
          <div className="mb-24 flex flex-col gap-6 text-left md:gap-8">
            <div className="max-w-4xl">
              <span className="mb-4 block font-display text-2xl italic tracking-widest text-primary">Our Domains</span>
              <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-white sm:text-6xl md:text-8xl">
                HYDOOR FOR ALL ATHLETES.
              </h2>
            </div>
            <p className="max-w-2xl text-left text-sm leading-relaxed tracking-wide text-gray-400">
              ヒュドールはアスリートの一番近くで最高のパフォーマンスが発揮できるようサポートします。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
            {[
              {
                id: '01',
                title: 'PERFORMANCE GEAR',
                label: 'TECHNOLOGY',
                desc: 'トレーニング用品・水着・競泳用品など、アスリートの身体に最適化されたプロダクトを提供。',
                img: '/images/performance-gear.png?v=20260419',
                link: '/sports',
              },
              {
                id: '02',
                title: 'PRODUCT DESIGN',
                label: 'OEM / DESIGN',
                desc: 'スケッチから試作・量産まで。アスリート向けギアとブランドのプロダクトを設計します。',
                img: '/images/product-design.jpeg?v=2',
                link: '/product-design',
              },
              {
                id: '03',
                title: 'AQUA MAGIC',
                label: 'ARTISTRY',
                desc: 'アーティスティックスイミングをベースとした、水と光によるイマーシブ・エクスペリエンス。',
                img: '/images/aqua-magic-hero.png?v=3',
                link: '/event',
              },
              {
                id: '04',
                title: 'RENTAL SERVICE',
                label: 'RENTAL',
                desc: 'マット・機材など、スポーツ施設運営に必要な備品のレンタルサービス。',
                img: '/images/rental-space.png?v=20260412',
                link: '/rental',
              },
              {
                id: '05',
                title: 'EQUIPMENT & WORKS',
                label: 'CONSTRUCTION',
                desc: '施設の備品調達から設備工事まで、スポーツ環境をトータルにサポート。',
                img: '/images/pool-facility.jpeg',
                link: '/equipment',
              },
              {
                id: '06',
                title: 'AI & SYSTEM',
                label: 'DIGITAL',
                desc: 'AI・SaaSを活用した業務効率化とデータドリブンなスポーツソリューション。',
                img: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200',
                link: '/ai-system',
              },
            ].map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/5] min-h-[220px] min-w-0 overflow-hidden border border-white/5 bg-neutral-900 md:aspect-[3/4] md:min-h-0"
              >
                <img
                  src={item.img}
                  className="absolute inset-0 h-full w-full scale-100 object-cover opacity-70 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100"
                  alt={item.title}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/10 to-transparent p-5 sm:p-6 md:p-5 lg:p-8">
                  <span className="mb-2 font-display text-xl text-primary drop-shadow-lg md:text-lg lg:text-2xl">{item.id}</span>
                  <p className="mb-1 text-[10px] font-black tracking-[0.35em] text-primary drop-shadow-md md:text-[9px] md:tracking-[0.3em] lg:text-xs lg:tracking-[0.4em]">
                    {item.label}
                  </p>
                  <h3 className="mb-2 font-display text-2xl leading-none tracking-tight text-white drop-shadow-2xl md:text-xl lg:text-3xl xl:text-4xl">
                    {item.title}
                  </h3>
                  <div className="max-h-0 overflow-hidden transition-all duration-700 group-hover:max-h-40">
                    <p className="mb-4 text-[11px] leading-relaxed tracking-wider text-gray-200 drop-shadow-lg sm:text-xs sm:tracking-widest">
                      {item.desc}
                    </p>
                    <Link
                      to={item.link}
                      className="inline-block border-b border-primary pb-1 text-[9px] font-black uppercase tracking-widest text-white transition-colors hover:text-primary"
                    >
                      Learn More
                    </Link>
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
