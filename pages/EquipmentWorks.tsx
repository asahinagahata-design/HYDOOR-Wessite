
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
      <section className="relative flex h-[55vh] items-center overflow-hidden md:h-[70vh]">
        <img
          src="/images/pool-facility.jpeg"
          alt="Pool Facility"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-12">
          <span className="mb-3 block font-display text-xs italic tracking-[0.3em] text-primary md:mb-6 md:text-xl">05</span>
          <h1 className="mb-4 font-display text-5xl leading-[0.85] tracking-tighter text-white md:mb-8 md:text-[9rem] md:leading-[0.8]">
            EQUIPMENT<br /><span className="text-primary">& WORKS</span>
          </h1>
          <p className="max-w-2xl text-xs leading-relaxed tracking-wider text-gray-200 md:text-xl md:tracking-widest">
            施設の備品調達から設備工事まで、スポーツ環境をトータルにサポート。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black to-transparent md:h-32" />
      </section>

      {/* Concept */}
      <section className="bg-black py-10 md:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-6">
          <h2 className="mb-3 font-display text-2xl leading-tight tracking-tight text-white md:mb-8 md:text-6xl">
            最高の環境が、<br />最高のパフォーマンスを生む。
          </h2>
          <p className="mx-auto max-w-3xl text-xs leading-relaxed tracking-wider text-gray-400 md:text-lg md:leading-loose">
            アスリートが本領を発揮するには、トレーニング環境そのものが高水準でなければなりません。
            HYDOORは備品調達・設備工事・保守まで、スポーツ施設の「裏方」をワンストップで担います。
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-neutral-950 py-10 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <span className="mb-2 block text-center font-display text-xs tracking-widest text-primary md:mb-4 md:text-lg">Services</span>
          <h2 className="mb-6 text-center font-display text-2xl tracking-tight text-white md:mb-20 md:text-6xl">
            サービス領域
          </h2>

          <div className="space-y-1">
            {services.map((svc) => (
              <div key={svc.num} className="border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/[0.07] md:p-12">
                <div className="flex flex-col gap-3 md:flex-row md:gap-12">
                  <div className="flex flex-shrink-0 items-center gap-3 md:items-start md:gap-6">
                    <span className="material-symbols-outlined text-2xl text-primary md:text-4xl">{svc.icon}</span>
                    <span className="font-display text-lg text-primary md:text-2xl">{svc.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-base font-bold text-white md:mb-4 md:text-3xl">{svc.title}</h3>
                    <p className="mb-3 text-[11px] leading-relaxed tracking-wider text-gray-300 md:mb-6 md:text-sm">{svc.desc}</p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-3">
                      {svc.details.map((d) => (
                        <div key={d} className="flex items-center gap-2 md:gap-3">
                          <span className="material-symbols-outlined text-sm text-primary md:text-base">check</span>
                          <span className="text-[11px] tracking-wider text-gray-400 md:text-sm">{d}</span>
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
      <section className="bg-black px-5 py-10 text-center md:px-6 md:py-32">
        <h2 className="mb-3 font-display text-xl tracking-tight text-white md:mb-6 md:text-5xl">
          施設づくりのご相談はこちら
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-xs tracking-wider text-gray-400 md:mb-12 md:text-sm md:tracking-widest">
          備品選定から設備工事、保守まで、まずはお気軽にご相談ください。
        </p>
        <Link
          to="/contact"
          className="inline-block transform bg-white px-8 py-3 text-[10px] font-black tracking-[0.3em] text-black transition-all hover:scale-105 hover:bg-primary md:px-16 md:py-5"
        >
          お問い合わせ
        </Link>
      </section>
    </div>
  );
};

export default EquipmentWorks;
