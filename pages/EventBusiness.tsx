
import React from 'react';
import { Link } from 'react-router-dom';

const EventBusiness: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* Hero */}
      <section className="relative flex h-[55vh] items-center overflow-hidden md:h-auto md:min-h-[90vh] md:pt-40 md:pb-20">
        <img
          src="/images/aqua-magic-hero.png?v=3"
          alt="夕景の中でヨガを行うシルエット"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-12">
          <span className="mb-3 block font-display text-xs italic tracking-[0.3em] text-primary md:mb-6 md:text-xl">03 — RAIKA ENTERTAINMENT</span>
          <h1 className="mb-4 font-display text-5xl leading-[0.85] tracking-tighter text-white md:mb-8 md:text-[6rem] md:leading-[0.8] lg:text-[8rem]">
            AQUA<br /><span className="text-primary drop-shadow-[0_0_40px_rgba(242,185,13,0.4)]">MAGIC</span>
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed tracking-wider text-gray-200 md:text-2xl md:tracking-widest">
            水と光が織りなす、最高峰のエンターテインメント。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black to-transparent md:h-32" />
      </section>

      {/* The Power of the Authentic */}
      <section className="bg-black py-10 md:py-32">
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <span className="mb-2 block text-center font-display text-xs tracking-widest text-primary md:mb-4 md:text-lg">The Power of the Authentic</span>
          <h2 className="mb-6 text-center font-display text-2xl tracking-tight text-white md:mb-20 md:text-6xl">
            本物とは何か
          </h2>

          <div className="mb-8 grid grid-cols-5 items-center gap-2 md:mb-16 md:gap-4">
            <div className="col-span-2 border border-white/10 bg-white/5 p-3 text-center md:p-10">
              <span className="material-symbols-outlined mb-2 block text-2xl text-primary md:mb-4 md:text-4xl">sports_gymnastics</span>
              <p className="mb-1 text-[8px] font-black tracking-[0.3em] text-primary md:mb-3 md:text-[10px] md:tracking-[0.4em]">SKILL</p>
              <p className="text-xs font-bold leading-snug text-white md:text-xl md:leading-relaxed">
                オリンピック級の<br />圧倒的技術
              </p>
            </div>

            <div className="col-span-1 flex justify-center">
              <span className="font-display text-2xl text-primary md:text-4xl">×</span>
            </div>

            <div className="col-span-2 border border-white/10 bg-white/5 p-3 text-center md:p-10">
              <span className="material-symbols-outlined mb-2 block text-2xl text-primary md:mb-4 md:text-4xl">auto_stories</span>
              <p className="mb-1 text-[8px] font-black tracking-[0.3em] text-primary md:mb-3 md:text-[10px] md:tracking-[0.4em]">STORY</p>
              <p className="text-xs font-bold leading-snug text-white md:text-xl md:leading-relaxed">
                独創的な<br />ストーリーテリング
              </p>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-center gap-3 md:mb-12 md:gap-4">
            <span className="h-[1px] w-10 bg-primary/40 md:w-20" />
            <span className="font-display text-2xl text-primary md:text-3xl">=</span>
            <span className="h-[1px] w-10 bg-primary/40 md:w-20" />
          </div>

          <div className="mx-auto mb-8 max-w-xl border border-primary/30 bg-white/5 p-5 text-center md:mb-20 md:p-14">
            <span className="material-symbols-outlined mb-2 block text-2xl text-primary md:mb-4 md:text-4xl">favorite</span>
            <p className="text-base font-bold leading-snug text-white md:text-3xl md:leading-relaxed">
              人の心を動かす<br />「本物」の感動
            </p>
          </div>

          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed tracking-wider text-gray-400 md:text-base md:leading-loose">
            近年、無気力・無関心・無感動が叫ばれる社会において、
            私たちは「本物のシンクロ」を通じて感情のスイッチを入れます。
            ただ観るだけでなく、五感を刺激し、もう一度「夢」を持つことの素晴らしさを肌で感じていただく。
            それが RAIKA ENTERTAINMENT の使命です。
          </p>
        </div>
      </section>

      {/* Beyond the Pool */}
      <section className="bg-neutral-950 py-10 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <span className="mb-2 block text-center font-display text-xs tracking-widest text-primary md:mb-4 md:text-lg">Beyond the Pool</span>
          <h2 className="mb-3 text-center font-display text-2xl tracking-tight text-white md:mb-6 md:text-6xl">
            水中を超えたインスピレーション
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-center text-xs tracking-wider text-gray-400 md:mb-20 md:text-sm md:tracking-widest">
            プールの外でも感動を届ける、多彩なパフォーマンスとプログラム
          </p>

          <div className="grid grid-cols-2 gap-1">
            <div className="border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/[0.07] md:p-12">
              <span className="material-symbols-outlined mb-3 block text-2xl text-primary md:mb-6 md:text-4xl">mic</span>
              <h3 className="mb-2 text-sm font-bold text-white md:mb-4 md:text-2xl">トークショー・講演会</h3>
              <p className="mb-3 text-[11px] leading-relaxed tracking-wider text-gray-300 md:mb-6 md:text-sm">
                藤井来夏によるオリンピックでの経験談や、目標達成に向けたマインドセット。本物のオリンピックメダルの披露も可能。
              </p>
              <span className="text-[10px] tracking-wider text-gray-500 md:text-xs">約15〜60分</span>
            </div>

            <div className="border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/[0.07] md:p-12">
              <span className="material-symbols-outlined mb-3 block text-2xl text-primary md:mb-6 md:text-4xl">music_note</span>
              <h3 className="mb-2 text-sm font-bold text-white md:mb-4 md:text-2xl">ダンス＆コラボレーション</h3>
              <p className="text-[11px] leading-relaxed tracking-wider text-gray-300 md:text-sm">
                ヒップホップをはじめとするプロダンスチームの単独ショーや、陸上でのシンクロナイズドスイミングとの異次元コラボレーション。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Experiences */}
      <section className="bg-black py-10 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <span className="mb-2 block text-center font-display text-xs tracking-widest text-primary md:mb-4 md:text-lg">Interactive Experiences</span>
          <h2 className="mb-3 text-center font-display text-2xl tracking-tight text-white md:mb-6 md:text-6xl">
            「本物」に触れる、体験する
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-center text-xs tracking-wider text-gray-400 md:mb-20 md:text-sm md:tracking-widest">
            観るだけでなく、自ら参加して感動を体験できるプログラム
          </p>

          <div className="grid grid-cols-3 gap-1">
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
              <div key={i} className="flex flex-col border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/[0.07] md:p-10">
                <span className="material-symbols-outlined mb-2 text-2xl text-primary md:mb-6 md:text-4xl">{item.icon}</span>
                <h3 className="mb-1 text-xs font-bold leading-tight text-white md:text-xl">{item.title}</h3>
                <p className="mb-2 text-[9px] font-black tracking-[0.2em] text-primary md:mb-4 md:text-xs md:tracking-[0.3em]">{item.sub}</p>
                <p className="mb-3 flex-1 text-[10px] leading-relaxed tracking-wider text-gray-300 md:mb-6 md:text-sm">{item.desc}</p>
                <div className="mt-auto flex flex-wrap gap-1 md:gap-3">
                  <span className="border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] tracking-wider text-gray-400 md:px-3 md:py-1 md:text-xs">{item.time}</span>
                  {item.target && (
                    <span className="border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] tracking-wider text-gray-400 md:px-3 md:py-1 md:text-xs">{item.target}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Pedigree */}
      <section className="bg-neutral-950 py-10 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <span className="mb-2 block text-center font-display text-xs tracking-widest text-primary md:mb-4 md:text-lg">The Pedigree</span>
          <h2 className="mb-3 text-center font-display text-2xl tracking-tight text-white md:mb-6 md:text-6xl">
            世界を知るトップスイマーたち
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-center text-xs tracking-wider text-gray-400 md:mb-20 md:text-sm md:tracking-widest">
            日本唯一のプロシンクロナイズドスイミングチーム「RAIKA ENTERTAINMENT」主宰 — 藤井来夏
          </p>

          <div className="mx-auto max-w-3xl">
            <div className="mb-3 grid grid-cols-3 gap-1 md:mb-8">
              {[
                { year: '1996', event: 'アトランタオリンピック', result: 'チーム銅メダル獲得' },
                { year: '2000', event: 'シドニーオリンピック', result: 'チーム銀メダル獲得' },
                { year: 'Now', event: 'RAIKA ENTERTAINMENT', result: '国内外のトップスイマーを結集' },
              ].map((item) => (
                <div key={item.year} className="border border-white/10 bg-white/5 p-3 text-center transition-colors hover:bg-white/[0.07] md:p-8">
                  <span className="mb-1 block font-display text-xl text-primary md:mb-4 md:text-5xl">{item.year}</span>
                  <p className="mb-1 text-[11px] font-bold leading-tight text-white md:mb-2 md:text-base">{item.event}</p>
                  <p className="text-[9px] tracking-wider text-gray-400 md:text-xs">{item.result}</p>
                </div>
              ))}
            </div>

            <div className="border border-primary/30 bg-white/5 p-3 text-center md:p-6">
              <p className="text-xs font-bold tracking-wider text-white md:text-lg">
                競技歴18年 ／ ナショナルチーム歴10年
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Track Record */}
      <section className="bg-black py-10 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <span className="mb-2 block text-center font-display text-xs tracking-widest text-primary md:mb-4 md:text-lg">Proven Track Record</span>
          <h2 className="mb-3 text-center font-display text-2xl tracking-tight text-white md:mb-6 md:text-6xl">
            映像・メディアを彩る振付と演出
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-center text-xs tracking-wider text-gray-400 md:mb-20 md:text-sm md:tracking-widest">
            単なるパフォーマーにとどまらず、映像作品の振付・指導・演出まで、クリエイティブの最前線で実績を残しています。
          </p>

          <div className="grid grid-cols-2 gap-1">
            {[
              { icon: 'local_fire_department', category: '地方創生バズ', detail: 'おんせん県大分「シンフロ」CM・動画出演・振付' },
              { icon: 'diamond', category: 'ナショナルブランド', detail: 'DOVE モイスチャーケアオイルクレンジング CM出演' },
              { icon: 'local_shipping', category: 'インフラ・物流', detail: 'BBIQ CM振付 / ヤマトホールディングス「ラッピングトラック」' },
              { icon: 'live_tv', category: 'バラエティ特番', detail: '日本テレビ「世界の果てまでイッテQ！」「ウルトラマンDASH」出演・振付・指導' },
            ].map((item, i) => (
              <div key={i} className="border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/[0.07] md:p-10">
                <div className="mb-2 flex items-center gap-2 md:mb-4 md:gap-3">
                  <span className="material-symbols-outlined text-base text-primary md:text-2xl">{item.icon}</span>
                  <span className="text-[9px] font-black tracking-[0.2em] text-primary md:text-xs md:tracking-[0.3em]">【{item.category}】</span>
                </div>
                <p className="text-xs font-bold leading-snug text-white md:text-lg md:leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 px-5 py-10 text-center md:px-6 md:py-32">
        <h2 className="mb-3 font-display text-2xl leading-tight tracking-tight text-white md:mb-6 md:text-6xl">
          次のイベントに、<br />本物の感動を。
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-xs tracking-wider text-gray-400 md:mb-12 md:text-lg">
          Let's Create Authentic Emotions Together.
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

export default EventBusiness;
