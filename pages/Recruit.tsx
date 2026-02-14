
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Recruit: React.FC = () => {
  const navigate = useNavigate();
  const positions = [
    { id: 'account-manager', title: 'アカウントマネージャー', dept: 'SALES', type: '正社員', desc: 'クライアントのビジネス課題を解決するための提案営業。長期的な信頼関係の構築。' },
    { id: 'frontend-engineer', title: 'Frontend Engineer', dept: 'ENGINEERING', type: '正社員', desc: 'モダンなWeb技術を用いたUI/UXの実装。React/Vue.jsを用いた開発経験者歓迎。' },
    { id: 'uiux-designer', title: 'UI/UX Designer', dept: 'DESIGN', type: '業務委託', desc: 'ユーザー中心設計に基づいたプロダクトデザイン。ブランドの世界観を体現するクリエイティブ制作。' },
  ];

  return (
    <div className="w-full bg-black">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 grayscale scale-105"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        <div className="relative z-10 text-center px-6">
          <span className="text-primary font-display text-2xl tracking-[0.5em] mb-4 block italic">Join Our Mission</span>
          <h1 className="text-white text-7xl md:text-[10rem] font-display tracking-tighter mb-8 italic">RECRUIT</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm md:text-lg font-medium tracking-widest leading-relaxed">
              未知の領域へ。共に世界を驚かせるプロダクトを創り出す、情熱を持ったプロフェッショナルを求めています。
            </p>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-40 bg-black">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-12 mb-20 gap-8">
            <div className="max-w-md">
              <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase block mb-4">Open Positions</span>
              <h2 className="text-6xl font-display tracking-tight">CAREERS</h2>
            </div>
            <p className="text-gray-500 text-xs tracking-widest uppercase">Currently recruiting for {positions.length} roles</p>
          </div>

          <div className="space-y-6">
            {positions.map(p => (
              <div 
                key={p.id} 
                onClick={() => navigate(`/recruit/${p.id}`)}
                className="group relative bg-neutral-900/50 p-12 border border-white/5 hover:border-primary/50 transition-all flex flex-col md:flex-row items-center justify-between gap-12 cursor-pointer"
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-8">
                    <span className="px-6 py-1.5 glass text-primary text-[10px] font-black tracking-widest uppercase">{p.dept}</span>
                    <span className="text-gray-500 text-[10px] font-black tracking-widest uppercase">{p.type}</span>
                  </div>
                  <h3 className="text-4xl font-display group-hover:text-primary transition-colors tracking-wider">{p.title}</h3>
                  <p className="text-gray-400 text-sm tracking-widest leading-relaxed max-w-2xl">{p.desc}</p>
                </div>
                <div className="flex items-center gap-6">
                   <span className="text-primary text-[10px] font-black opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all uppercase tracking-[0.3em]">View Detail</span>
                   <div className="size-16 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                    <span className="material-symbols-outlined text-2xl">arrow_forward_ios</span>
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

export default Recruit;
