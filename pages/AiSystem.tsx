
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
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="AI & System"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-12 w-full">
          <span className="text-primary font-display text-xl tracking-[0.3em] block mb-6 italic">06</span>
          <h1 className="text-white text-6xl md:text-[10rem] font-display tracking-tighter leading-[0.8] mb-8">
            AI &<br /><span className="text-primary">SYSTEM</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed tracking-widest">
            AI・SaaSを活用した業務効率化とデータドリブンなスポーツソリューション。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Vision */}
      <section className="py-32 bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center mb-24">
          <h2 className="text-white text-4xl md:text-6xl font-display tracking-tight mb-8">
            テクノロジーで、<br />スポーツの未来を加速する。
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-loose tracking-wider max-w-3xl mx-auto">
            施設運営の効率化からアスリートのパフォーマンス向上まで、
            AI・IoT・クラウドを駆使してスポーツ産業のDXを推進します。
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-1">
          {[
            { icon: 'smart_toy', label: 'AI / ML' },
            { icon: 'sensors', label: 'IoT' },
            { icon: 'cloud', label: 'Cloud' },
            { icon: 'smartphone', label: 'Mobile' },
          ].map((tech) => (
            <div key={tech.label} className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/[0.07] transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">{tech.icon}</span>
              <p className="text-white text-sm font-black tracking-[0.3em]">{tech.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-primary font-display text-lg tracking-widest mb-4 block text-center">Solutions</span>
          <h2 className="text-white text-4xl md:text-6xl font-display tracking-tight mb-20 text-center">
            ソリューション
          </h2>

          <div className="space-y-1">
            {solutions.map((sol) => (
              <div key={sol.num} className="bg-white/5 border border-white/10 p-8 md:p-12 hover:bg-white/[0.07] transition-colors">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  <div className="flex-shrink-0 flex items-start gap-6">
                    <span className="material-symbols-outlined text-primary text-4xl">{sol.icon}</span>
                    <span className="text-primary font-display text-2xl">{sol.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">{sol.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed tracking-wider mb-6">{sol.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {sol.tags.map((tag) => (
                        <span key={tag} className="px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-wider">
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
      <section className="py-32 bg-black text-center px-6">
        <h2 className="text-white text-3xl md:text-5xl font-display tracking-tight mb-6">
          DX・システム開発のご相談
        </h2>
        <p className="text-gray-400 text-sm tracking-widest mb-12 max-w-xl mx-auto">
          課題のヒアリングから要件定義、開発・運用まで伴走します。
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

export default AiSystem;
