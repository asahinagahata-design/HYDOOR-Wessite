
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    num: '01',
    title: '備品調達・選定',
    desc: '施設の規模・用途に応じた最適な備品を国内外のサプライヤーから調達。コスト最適化と品質を両立します。',
    icon: 'inventory_2',
    details: ['競泳用タッチパネル・計時システム', 'トレーニングマシン・器具', 'プールサイド備品・安全設備', '照明・音響機器'],
  },
  {
    num: '02',
    title: '設備工事・施工',
    desc: 'プール設備から空調・給排水まで、スポーツ施設に特化した設備工事をワンストップで提供。',
    icon: 'construction',
    details: ['プール循環ろ過装置', '空調・換気システム', '給排水設備工事', '電気・照明工事'],
  },
  {
    num: '03',
    title: 'メンテナンス・保守',
    desc: '設備の安定稼働を維持する定期メンテナンスと、緊急時の迅速対応。',
    icon: 'build',
    details: ['水質管理・ろ過システム点検', '機械設備の定期保守', '法定点検対応', '緊急トラブル対応'],
  },
];

const EquipmentWorks: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <img
          src="/images/pool-facility.jpeg"
          alt="Pool Facility"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-12 w-full">
          <span className="text-primary font-display text-xl tracking-[0.3em] block mb-6 italic">05</span>
          <h1 className="text-white text-6xl md:text-[9rem] font-display tracking-tighter leading-[0.8] mb-8">
            EQUIPMENT<br /><span className="text-primary">& WORKS</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed tracking-widest">
            施設の備品調達から設備工事まで、スポーツ環境をトータルにサポート。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Concept */}
      <section className="py-32 bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center mb-24">
          <h2 className="text-white text-4xl md:text-6xl font-display tracking-tight mb-8">
            最高の環境が、<br />最高のパフォーマンスを生む。
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-loose tracking-wider max-w-3xl mx-auto">
            アスリートが本領を発揮するには、トレーニング環境そのものが高水準でなければなりません。
            HYDOORは備品調達・設備工事・保守まで、スポーツ施設の「裏方」をワンストップで担います。
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { value: '50+', label: '納入施設数' },
            { value: '24h', label: '緊急対応体制' },
            { value: '100%', label: '法定点検達成率' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 p-10 text-center">
              <p className="text-primary font-display text-5xl mb-3">{stat.value}</p>
              <p className="text-gray-400 text-xs font-black tracking-[0.3em] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-primary font-display text-lg tracking-widest mb-4 block text-center">Services</span>
          <h2 className="text-white text-4xl md:text-6xl font-display tracking-tight mb-20 text-center">
            サービス領域
          </h2>

          <div className="space-y-1">
            {services.map((svc) => (
              <div key={svc.num} className="bg-white/5 border border-white/10 p-8 md:p-12 hover:bg-white/[0.07] transition-colors">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  <div className="flex-shrink-0 flex items-start gap-6">
                    <span className="material-symbols-outlined text-primary text-4xl">{svc.icon}</span>
                    <span className="text-primary font-display text-2xl">{svc.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">{svc.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed tracking-wider mb-6">{svc.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {svc.details.map((d) => (
                        <div key={d} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary text-base">check</span>
                          <span className="text-gray-400 text-sm tracking-wider">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-center px-6">
        <h2 className="text-white text-3xl md:text-5xl font-display tracking-tight mb-6">
          施設づくりのご相談はこちら
        </h2>
        <p className="text-gray-400 text-sm tracking-widest mb-12 max-w-xl mx-auto">
          備品選定から設備工事、保守まで、まずはお気軽にご相談ください。
        </p>
        <Link
          to="/contact"
          className="inline-block px-16 py-5 bg-white hover:bg-primary text-black font-black text-[10px] tracking-[0.3em] transition-all transform hover:scale-105"
        >
          お問い合わせ
        </Link>
      </section>
    </div>
  );
};

export default EquipmentWorks;
