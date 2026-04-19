
import React from 'react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    num: '01',
    title: '施設管理DX',
    desc: 'プールの水質・水温、空調、入退館をリアルタイムに監視・制御するIoTプラットフォーム。',
    icon: 'monitoring',
    tags: ['IoT', 'ダッシュボード', 'アラート通知'],
  },
  {
    num: '02',
    title: 'パフォーマンス分析AI',
    desc: '映像解析とセンサーデータを統合し、アスリートの動作・コンディションを数値化。',
    icon: 'analytics',
    tags: ['映像AI', 'バイオメカニクス', 'レポート自動生成'],
  },
  {
    num: '03',
    title: '業務効率化SaaS',
    desc: '予約管理・スタッフシフト・会員管理など、施設運営のバックオフィスをクラウド化。',
    icon: 'cloud_sync',
    tags: ['SaaS', '予約管理', '会員DB'],
  },
  {
    num: '04',
    title: 'カスタム開発',
    desc: '既存のパッケージでは対応できない、お客様固有の課題に合わせたシステムをスクラッチ開発。',
    icon: 'code',
    tags: ['Web / Mobile', 'API連携', 'スクラッチ開発'],
  },
];

const AiSystem: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* Hero */}
      <section className="relative flex h-[55vh] items-center overflow-hidden md:h-[70vh]">
        <img
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="AI & System"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-12">
          <span className="mb-3 block font-display text-xs italic tracking-[0.3em] text-primary md:mb-6 md:text-xl">06</span>
          <h1 className="mb-4 font-display text-5xl leading-[0.85] tracking-tighter text-white md:mb-8 md:text-[10rem] md:leading-[0.8]">
            AI &<br /><span className="text-primary">SYSTEM</span>
          </h1>
          <p className="max-w-2xl text-xs leading-relaxed tracking-wider text-gray-200 md:text-xl md:tracking-widest">
            AI・SaaSを活用した業務効率化とデータドリブンなスポーツソリューション。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black to-transparent md:h-32" />
      </section>

      {/* Vision */}
      <section className="bg-black py-10 md:py-32">
        <div className="mx-auto mb-6 max-w-5xl px-5 text-center md:mb-24 md:px-6">
          <h2 className="mb-3 font-display text-2xl leading-tight tracking-tight text-white md:mb-8 md:text-6xl">
            テクノロジーで、<br />スポーツの未来を加速する。
          </h2>
          <p className="mx-auto max-w-3xl text-xs leading-relaxed tracking-wider text-gray-400 md:text-lg md:leading-loose">
            施設運営の効率化からアスリートのパフォーマンス向上まで、
            AI・IoT・クラウドを駆使してスポーツ産業のDXを推進します。
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-4 gap-1 px-5 md:px-6">
          {[
            { icon: 'smart_toy', label: 'AI / ML' },
            { icon: 'sensors', label: 'IoT' },
            { icon: 'cloud', label: 'Cloud' },
            { icon: 'smartphone', label: 'Mobile' },
          ].map((tech) => (
            <div key={tech.label} className="border border-white/10 bg-white/5 p-3 text-center transition-colors hover:bg-white/[0.07] md:p-8">
              <span className="material-symbols-outlined mb-2 block text-2xl text-primary md:mb-4 md:text-4xl">{tech.icon}</span>
              <p className="text-[10px] font-black tracking-[0.2em] text-white md:text-sm md:tracking-[0.3em]">{tech.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-neutral-950 py-10 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <span className="mb-2 block text-center font-display text-xs tracking-widest text-primary md:mb-4 md:text-lg">Solutions</span>
          <h2 className="mb-6 text-center font-display text-2xl tracking-tight text-white md:mb-20 md:text-6xl">
            ソリューション
          </h2>

          <div className="grid grid-cols-2 gap-1 md:grid-cols-1">
            {solutions.map((sol) => (
              <div key={sol.num} className="flex flex-col border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/[0.07] md:p-12">
                <div className="flex flex-col gap-2 md:flex-row md:gap-12">
                  <div className="flex flex-shrink-0 items-center gap-2 md:items-start md:gap-6">
                    <span className="material-symbols-outlined text-xl text-primary md:text-4xl">{sol.icon}</span>
                    <span className="font-display text-base text-primary md:text-2xl">{sol.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-sm font-bold leading-tight text-white md:mb-4 md:text-3xl">{sol.title}</h3>
                    <p className="mb-2 text-[11px] leading-relaxed tracking-wider text-gray-300 md:mb-6 md:text-sm">{sol.desc}</p>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {sol.tags.map((tag) => (
                        <span key={tag} className="border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-primary md:px-4 md:py-1.5 md:text-xs">
                          {tag}
                        </span>
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
          DX・システム開発のご相談
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-xs tracking-wider text-gray-400 md:mb-12 md:text-sm md:tracking-widest">
          課題のヒアリングから要件定義、開発・運用まで伴走します。
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

export default AiSystem;
