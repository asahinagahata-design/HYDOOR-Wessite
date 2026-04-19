
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const positions = [
  { id: 'account-manager', title: 'アカウントマネージャー', dept: 'SALES', deptLabel: '営業', type: '正社員', desc: 'クライアントのビジネス課題を解決するための提案営業。長期的な信頼関係の構築。' },
  { id: 'frontend-engineer', title: 'フロントエンドエンジニア', dept: 'ENGINEERING', deptLabel: 'エンジニア', type: '正社員', desc: 'モダンなWeb技術を用いたUI/UXの実装。React/TypeScriptを用いた開発経験者歓迎。' },
  { id: 'facility-engineer', title: '施工管理・設備エンジニア', dept: 'ENGINEERING', deptLabel: 'エンジニア', type: '正社員', desc: 'スポーツ施設の設備設計から施工管理まで。プール・トレーニング施設の専門知識を活かせます。' },
  { id: 'uiux-designer', title: 'UI/UX デザイナー', dept: 'DESIGN', deptLabel: 'デザイン', type: '業務委託', desc: 'ユーザー中心設計に基づいたプロダクトデザイン。ブランドの世界観を体現するクリエイティブ制作。' },
];

const filters = [
  { key: 'ALL', label: 'すべて' },
  { key: 'SALES', label: '営業' },
  { key: 'ENGINEERING', label: 'エンジニア' },
  { key: 'DESIGN', label: 'デザイン' },
];

const Recruit: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filtered = activeFilter === 'ALL'
    ? positions
    : positions.filter(p => p.dept === activeFilter);

  return (
    <div className="w-full bg-black">
      {/* Hero */}
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden md:h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 grayscale scale-105"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        <div className="relative z-10 px-5 text-center">
          <span className="mb-2 block font-display text-xs italic tracking-[0.4em] text-primary md:mb-4 md:text-2xl md:tracking-[0.5em]">Join Our Mission</span>
          <h1 className="mb-3 font-display text-5xl italic tracking-tighter text-white md:mb-8 md:text-[10rem]">RECRUIT</h1>
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-medium leading-relaxed tracking-wider text-gray-400 md:text-lg md:tracking-widest">
              未知の領域へ。共に世界を驚かせるプロダクトを創り出す、情熱を持ったプロフェッショナルを求めています。
            </p>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="bg-black py-10 md:py-40">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="mb-6 flex flex-col items-start justify-between gap-3 border-b border-white/10 pb-4 md:mb-12 md:flex-row md:items-end md:gap-8 md:pb-12">
            <div className="max-w-md text-left">
              <span className="mb-1 block text-[10px] font-black uppercase tracking-[0.4em] text-primary md:mb-4">Open Positions</span>
              <h2 className="font-display text-3xl tracking-tight md:text-6xl">CAREERS</h2>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 md:text-xs">Currently recruiting for {positions.length} roles</p>
          </div>

          {/* Filter Tabs */}
          <div className="mb-6 flex flex-wrap gap-2 md:mb-16 md:gap-3">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-3 py-2 text-[9px] font-black uppercase tracking-[0.25em] transition-all md:px-8 md:py-3 md:text-[10px] md:tracking-[0.3em] ${
                  activeFilter === f.key
                    ? 'bg-primary text-black'
                    : 'bg-neutral-900 text-gray-400 border border-white/5 hover:border-primary/30 hover:text-white'
                }`}
              >
                {f.label}
                <span className="ml-2 opacity-60 md:ml-3">
                  {f.key === 'ALL' ? positions.length : positions.filter(p => p.dept === f.key).length}
                </span>
              </button>
            ))}
          </div>

          {/* Position List */}
          <div className="space-y-3 md:space-y-6">
            {filtered.map(p => (
              <div 
                key={p.id} 
                onClick={() => navigate(`/recruit/${p.id}`)}
                className="group relative flex cursor-pointer flex-col items-start justify-between gap-4 border border-white/5 bg-neutral-900/50 p-5 transition-all hover:border-primary/50 md:flex-row md:items-center md:gap-12 md:p-12"
              >
                <div className="flex-1 space-y-3 md:space-y-6">
                  <div className="flex flex-wrap items-center gap-3 md:gap-6">
                    <span className="glass px-3 py-1 text-[9px] font-black uppercase tracking-widest text-primary md:px-6 md:py-1.5 md:text-[10px]">{p.deptLabel}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 md:text-[10px]">{p.type}</span>
                  </div>
                  <h3 className="font-display text-lg tracking-wider transition-colors group-hover:text-primary md:text-4xl">{p.title}</h3>
                  <p className="max-w-2xl text-xs leading-relaxed tracking-wider text-gray-400 md:text-sm md:tracking-widest">{p.desc}</p>
                </div>
                <div className="flex w-full items-center justify-end gap-3 md:w-auto md:gap-6">
                   <span className="hidden text-[10px] font-black uppercase tracking-[0.3em] text-primary opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 md:inline md:translate-x-4">詳細を見る</span>
                   <div className="flex size-10 items-center justify-center rounded-full border border-white/10 text-white transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-black md:size-16">
                    <span className="material-symbols-outlined text-base md:text-2xl">arrow_forward_ios</span>
                   </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="py-12 text-center md:py-20">
                <p className="text-xs tracking-widest text-gray-500 md:text-sm">該当する募集は現在ありません</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruit;
