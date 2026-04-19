
import React from 'react';
import { Link } from 'react-router-dom';

const EventBusiness: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <img
          src="/images/aqua-magic-hero.png?v=3"
          alt="夕景の中でヨガを行うシルエット"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-12 w-full">
          <span className="text-primary font-display text-xl tracking-[0.3em] block mb-6 italic">03 — RAIKA ENTERTAINMENT</span>
          <h1 className="text-white text-6xl md:text-[10rem] font-display tracking-tighter leading-[0.8] mb-8">
            AQUA<br /><span className="text-primary drop-shadow-[0_0_40px_rgba(242,185,13,0.4)]">MAGIC</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl max-w-2xl leading-relaxed tracking-widest">
            水と光が織りなす、最高峰のエンターテインメント。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* The Power of the Authentic */}
      <section className="py-32 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-primary font-display text-lg tracking-widest mb-4 block text-center">The Power of the Authentic</span>
          <h2 className="text-white text-4xl md:text-6xl font-display tracking-tight mb-20 text-center">
            本物とは何か
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-16">
            <div className="md:col-span-2 bg-white/5 border border-white/10 p-8 md:p-10 text-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">sports_gymnastics</span>
              <p className="text-primary text-[10px] font-black tracking-[0.4em] mb-3">SKILL</p>
              <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
                オリンピック級の<br />圧倒的技術
              </p>
            </div>

            <div className="flex justify-center">
              <span className="text-primary text-4xl font-display">×</span>
            </div>

            <div className="md:col-span-2 bg-white/5 border border-white/10 p-8 md:p-10 text-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">auto_stories</span>
              <p className="text-primary text-[10px] font-black tracking-[0.4em] mb-3">STORY</p>
              <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
                独創的な<br />ストーリーテリング
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-[1px] w-20 bg-primary/40" />
            <span className="text-primary text-3xl font-display">=</span>
            <span className="h-[1px] w-20 bg-primary/40" />
          </div>

          <div className="bg-white/5 border border-primary/30 p-10 md:p-14 max-w-xl mx-auto text-center mb-20">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 block">favorite</span>
            <p className="text-white text-2xl md:text-3xl font-bold leading-relaxed">
              人の心を動かす<br />「本物」の感動
            </p>
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-loose tracking-wider text-center max-w-3xl mx-auto">
            近年、無気力・無関心・無感動が叫ばれる社会において、
            私たちは「本物のシンクロ」を通じて感情のスイッチを入れます。
            ただ観るだけでなく、五感を刺激し、もう一度「夢」を持つことの素晴らしさを肌で感じていただく。
            それが RAIKA ENTERTAINMENT の使命です。
          </p>
        </div>
      </section>

      {/* Beyond the Pool */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-primary font-display text-lg tracking-widest mb-4 block text-center">Beyond the Pool</span>
          <h2 className="text-white text-4xl md:text-6xl font-display tracking-tight mb-6 text-center">
            水中を超えたインスピレーション
          </h2>
          <p className="text-gray-400 text-sm tracking-widest text-center mb-20 max-w-2xl mx-auto">
            プールの外でも感動を届ける、多彩なパフォーマンスとプログラム
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="bg-white/5 border border-white/10 p-10 md:p-12 hover:bg-white/[0.07] transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">mic</span>
              <h3 className="text-white text-2xl font-bold mb-4">トークショー・講演会</h3>
              <p className="text-gray-300 text-sm leading-relaxed tracking-wider mb-6">
                藤井来夏によるオリンピックでの経験談や、目標達成に向けたマインドセット。本物のオリンピックメダルの披露も可能。
              </p>
              <span className="text-gray-500 text-xs tracking-wider">約15〜60分</span>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 md:p-12 hover:bg-white/[0.07] transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">music_note</span>
              <h3 className="text-white text-2xl font-bold mb-4">ダンス＆コラボレーション</h3>
              <p className="text-gray-300 text-sm leading-relaxed tracking-wider">
                ヒップホップをはじめとするプロダンスチームの単独ショーや、陸上でのシンクロナイズドスイミングとの異次元コラボレーション。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Experiences */}
      <section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-primary font-display text-lg tracking-widest mb-4 block text-center">Interactive Experiences</span>
          <h2 className="text-white text-4xl md:text-6xl font-display tracking-tight mb-6 text-center">
            「本物」に触れる、体験する
          </h2>
          <p className="text-gray-400 text-sm tracking-widest text-center mb-20 max-w-2xl mx-auto">
            観るだけでなく、自ら参加して感動を体験できるプログラム
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              {
                icon: 'pool',
                title: 'シンクロ体験会',
                sub: 'リズム水泳',
                time: '約90分',
                target: '泳げない方も参加可能',
                desc: '基本的な泳ぎ方や技を練習し、最後は一つの演技を完成。圧倒的な一体感と達成感を味わえます。',
              },
              {
                icon: 'face_retouching_natural',
                title: 'シンクロ変身',
                sub: 'ヘアメイク体験',
                time: '約60分',
                target: '',
                desc: 'シンクロ独特の本格的なヘアメイクを体験。あっという間にプロスイマーの世界へ没入できます。',
              },
              {
                icon: 'waves',
                title: 'オーダーメイド水泳教室',
                sub: 'パーソナルレッスン',
                time: '約60分',
                target: '初心者〜上級者',
                desc: 'ニーズに合わせた水泳指導や、多彩な水中プログラムを提供。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 hover:bg-white/[0.07] transition-colors flex flex-col">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">{item.icon}</span>
                <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-primary text-xs font-black tracking-[0.3em] mb-4">{item.sub}</p>
                <p className="text-gray-300 text-sm leading-relaxed tracking-wider mb-6 flex-1">{item.desc}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs tracking-wider">{item.time}</span>
                  {item.target && (
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs tracking-wider">{item.target}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Pedigree */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-primary font-display text-lg tracking-widest mb-4 block text-center">The Pedigree</span>
          <h2 className="text-white text-4xl md:text-6xl font-display tracking-tight mb-6 text-center">
            世界を知るトップスイマーたち
          </h2>
          <p className="text-gray-400 text-sm tracking-widest text-center mb-20 max-w-2xl mx-auto">
            日本唯一のプロシンクロナイズドスイミングチーム「RAIKA ENTERTAINMENT」主宰 — 藤井来夏
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-8">
              {[
                { year: '1996', event: 'アトランタオリンピック', result: 'チーム銅メダル獲得' },
                { year: '2000', event: 'シドニーオリンピック', result: 'チーム銀メダル獲得' },
                { year: 'Now', event: 'RAIKA ENTERTAINMENT', result: '国内外のトップスイマーを結集' },
              ].map((item) => (
                <div key={item.year} className="bg-white/5 border border-white/10 p-8 text-center hover:bg-white/[0.07] transition-colors">
                  <span className="text-primary font-display text-4xl md:text-5xl block mb-4">{item.year}</span>
                  <p className="text-white text-base font-bold mb-2">{item.event}</p>
                  <p className="text-gray-400 text-xs tracking-wider">{item.result}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-primary/30 p-6 text-center">
              <p className="text-white text-base md:text-lg font-bold tracking-wider">
                競技歴18年 ／ ナショナルチーム歴10年
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Track Record */}
      <section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-primary font-display text-lg tracking-widest mb-4 block text-center">Proven Track Record</span>
          <h2 className="text-white text-4xl md:text-6xl font-display tracking-tight mb-6 text-center">
            映像・メディアを彩る振付と演出
          </h2>
          <p className="text-gray-400 text-sm tracking-widest text-center mb-20 max-w-3xl mx-auto">
            単なるパフォーマーにとどまらず、映像作品の振付・指導・演出まで、クリエイティブの最前線で実績を残しています。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {[
              { icon: 'local_fire_department', category: '地方創生バズ', detail: 'おんせん県大分「シンフロ」CM・動画出演・振付' },
              { icon: 'diamond', category: 'ナショナルブランド', detail: 'DOVE モイスチャーケアオイルクレンジング CM出演' },
              { icon: 'local_shipping', category: 'インフラ・物流', detail: 'BBIQ CM振付 / ヤマトホールディングス「ラッピングトラック」' },
              { icon: 'live_tv', category: 'バラエティ特番', detail: '日本テレビ「世界の果てまでイッテQ！」「ウルトラマンDASH」出演・振付・指導' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 md:p-10 hover:bg-white/[0.07] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                  <span className="text-primary text-xs font-black tracking-[0.3em]">【{item.category}】</span>
                </div>
                <p className="text-white text-base md:text-lg font-bold leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-neutral-950 text-center px-6">
        <h2 className="text-white text-4xl md:text-6xl font-display tracking-tight mb-6 leading-tight">
          次のイベントに、<br />本物の感動を。
        </h2>
        <p className="text-gray-400 text-base md:text-lg tracking-wider mb-12 max-w-2xl mx-auto">
          Let's Create Authentic Emotions Together.
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

export default EventBusiness;
