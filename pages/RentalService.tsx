
import React from 'react';
import { Link } from 'react-router-dom';

const painPoints = [
  {
    icon: 'moving',
    title: '会場までの搬入が負担に',
    body: '敷物や寝具を自前で運ぶと、人手・送料・時間がかさみがちです。大会当日の動線も圧迫しやすくなります。',
  },
  {
    icon: 'sick',
    title: '薄い敷物では体がつらい',
    body: '床に近い寝心地は肩や腰への負担が大きく、コンディションに影響しかねません。本番前の休息は質を上げたいところです。',
  },
  {
    icon: 'cleaning_services',
    title: 'ブルーシートや毛布は後始末も課題',
    body: '片付けの手間に加え、衛生面も気になります。当社のレンタル品は返却後、湿熱や高濃度エタノールなどによる除菌・クリーニングを行います。',
  },
];

const rentalProducts: {
  name: string;
  sub?: string;
  price: string;
  desc: string;
  size: string;
  featured?: boolean;
  icon: string;
}[] = [
  {
    name: 'ストレッチマットレス',
    sub: '「SPACE」',
    price: '¥3,980',
    desc: '体圧を分散し、身体をやさしく支えます。長い待機時間や移動日でも、休息の質を高めたい方向けの一枚です。',
    size: '198 × 68 × 3 cm（1枚単位）',
    featured: true,
    icon: 'bed',
  },
  {
    name: 'ドライ用ヨガマット',
    price: '¥500',
    desc: '厚み4mmで安定感のある表面。折りたたみやすく、バッグへの収納も想定したコンパクト設計です。',
    size: '61 × 173 × 0.4 cm',
    icon: 'self_improvement',
  },
  {
    name: 'トリガーポイント グリップファームローラー',
    price: '¥500',
    desc: '筋膜へのアプローチでコリをほぐし、血流を促すセルフケア向け。移動や試合前後のメンテナンスに。',
    size: '直径 14 × 長さ 33 cm',
    icon: 'fitness_center',
  },
  {
    name: 'ストレッチポール EX',
    price: '¥1,000',
    desc: '姿勢や筋のバランスを整えるための基本アイテム。ストレッチの土台として幅広く活用できます。',
    size: '長さ 約 98 cm × 直径 約 15 cm',
    icon: 'straighten',
  },
  {
    name: 'リクライニングチェア',
    price: '¥500',
    desc: '4段階のリクライニングに対応。ドリンク用のカップホルダー付きで、控え室や屋外ブースでも使いやすいタイプです。',
    size: '（折りたたみ式）',
    icon: 'chair',
  },
  {
    name: '着替えテント',
    price: '¥1,000',
    desc: 'ワンタッチ式で設営が短時間。プールサイドや仮設エリアでの着替えスペースとして。',
    size: '120 × 120 × 高さ 190 cm',
    icon: 'camping',
  },
  {
    name: 'マッサージベッド',
    sub: 'カルロス 70',
    price: '¥9,000',
    desc: '施術・ケア用の高さ調整が可能なベッド。実際のカラーはメディブルーです。',
    size: '幅 70 × 長さ 183 cm、高さ 45〜65 cm（7段階）',
    icon: 'spa',
  },
];

const RentalService: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* Hero */}
      <section className="relative flex h-[55vh] items-end overflow-hidden md:h-auto md:min-h-[85vh] md:items-center md:pt-40 md:pb-20">
        <img
          src="/images/rental-hero.png?v=20260415"
          alt="マッサージベッド・フォームローラー・ストレッチ用品を置いたレンタル用ウェルネス空間"
          className="absolute inset-0 h-full w-full object-cover object-right opacity-70 md:object-left md:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 md:bg-gradient-to-r md:from-black md:via-black/50 md:to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-6 md:px-12 md:pb-0">
          <span className="mb-3 inline-block border border-primary/60 bg-primary/10 px-3 py-1 text-[9px] font-black tracking-[0.3em] text-primary md:mb-4 md:px-4 md:py-1.5 md:text-[10px] md:tracking-[0.35em]">
            FOR ATHLETES · FOR RENT
          </span>
          <span className="mb-2 block font-display text-xs italic tracking-[0.3em] text-primary md:mb-6 md:text-xl">04</span>
          <h1 className="mb-3 font-display text-5xl leading-[0.85] tracking-tighter text-white md:mb-8 md:text-[6rem] md:leading-[0.8] lg:text-[7.5rem]">
            RENTAL
            <br />
            <span className="text-primary">SERVICE</span>
          </h1>
          <p className="max-w-2xl text-xs leading-relaxed tracking-wider text-gray-200 md:text-xl">
            大会・合宿・遠征の現場で、休む・整える・着替えるを支えるレンタル。会場周辺での受け渡しにも対応し、アスリートの動線を軽くします。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black to-transparent md:h-32" />
      </section>

      {/* Service overview */}
      <section className="border-b border-white/10 bg-black py-10 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <h2 className="mb-3 font-display text-base leading-tight tracking-normal text-white [word-break:break-word] sm:text-2xl md:mb-6 md:text-5xl md:tracking-tight">
            <span className="block">会場直送のレンタルで、</span>
            <span className="block">競技日の負担を減らす</span>
          </h2>
          <p className="mb-3 text-[10px] font-black tracking-[0.3em] text-primary md:mb-6 md:text-xs md:tracking-[0.35em]">
            マットレスレンタル · 大会会場エリアでの受取・返却（要予約）
          </p>
          <p className="mb-5 text-xs leading-relaxed tracking-wider text-gray-400 md:mb-10 md:text-lg md:leading-loose">
            水泳・アーティスティックスイミングなどの大会をはじめ、スポーツイベント参加者向けに、マットレスを中心としたコンディショニング用品をレンタル提供しています。
            期間中は<span className="text-white">品目ごとの定額（税別）</span>でご利用いただけます。
          </p>
          <div className="grid gap-1 border border-primary/30 bg-white/5 p-4 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:p-8">
            <div>
              <p className="mb-1 text-[10px] font-black tracking-[0.3em] text-primary md:mb-2 md:text-xs">受取・返却（例）</p>
              <p className="text-xs text-white md:text-lg">
                競技場内の特設ブースなど、大会会場エリアでの受け渡しが可能です。
                <span className="mt-1 block text-[11px] text-gray-400 md:mt-2 md:text-sm">※要事前予約。開催・会場により異なります。</span>
              </p>
            </div>
            <div className="border-t border-white/10 pt-3 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="text-[10px] font-black tracking-wider text-gray-500 md:text-xs">マットレス「SPACE」大会期間中</p>
              <p className="font-display text-2xl text-primary md:text-4xl">¥3,980</p>
              <p className="text-[10px] text-gray-500 md:text-xs">税別 · 1枚単位 · 数量限定・先着順</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-black py-10 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <span className="mb-2 block text-center font-display text-xs tracking-widest text-primary md:mb-4 md:text-lg">Why Rent</span>
          <h2 className="mb-6 text-center font-display text-2xl tracking-tight text-white md:mb-16 md:text-5xl">
            こんなお悩みに、レンタルで応えます
          </h2>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
            {painPoints.map((p) => (
              <div key={p.title} className="border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/[0.07] md:p-8">
                <span className="material-symbols-outlined mb-3 block text-2xl text-primary md:mb-6 md:text-4xl">{p.icon}</span>
                <h3 className="mb-2 text-sm font-bold text-white md:mb-4 md:text-lg">{p.title}</h3>
                <p className="text-[11px] leading-relaxed tracking-wider text-gray-400 md:text-sm">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product lineup */}
      <section className="border-t border-white/10 bg-neutral-950 py-10 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <span className="mb-2 block text-center font-display text-xs tracking-widest text-primary md:mb-4 md:text-lg">Lineup</span>
          <h2 className="mb-3 text-center font-display text-2xl tracking-tight text-white md:mb-6 md:text-6xl">
            レンタル品目・料金
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-center text-xs tracking-wider text-gray-400 md:mb-20 md:text-sm">
            表示価格はすべて税別です。在庫・会場・日程によりご用意できない場合があります。
          </p>

          <div className="grid grid-cols-2 gap-1 md:grid-cols-1">
            {rentalProducts.map((p) => (
              <div
                key={p.name + (p.sub ?? '')}
                className={`flex flex-col gap-2 border p-3 transition-colors md:grid md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10 md:p-8 ${
                  p.featured
                    ? 'border-primary/40 bg-primary/5 hover:bg-primary/[0.08]'
                    : 'border-white/10 bg-white/5 hover:bg-white/[0.07]'
                }`}
              >
                <span className="material-symbols-outlined text-xl text-primary md:mt-1 md:text-3xl">{p.icon}</span>
                <div>
                  <div className="mb-1 flex flex-wrap items-baseline gap-1.5 md:mb-2 md:gap-3">
                    <h3 className="text-xs font-bold leading-tight text-white md:text-2xl">{p.name}</h3>
                    {p.sub && <span className="text-[10px] font-black tracking-wider text-primary md:text-sm">{p.sub}</span>}
                    {p.featured && (
                      <span className="rounded-sm bg-primary/20 px-1.5 py-0.5 text-[8px] font-black tracking-widest text-primary md:px-2 md:text-[9px]">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <p className="mb-2 text-[10px] leading-relaxed tracking-wider text-gray-300 md:mb-3 md:text-sm">{p.desc}</p>
                  <p className="text-[9px] tracking-wider text-gray-500 md:text-xs">サイズ {p.size}</p>
                </div>
                <div className="mt-auto text-left md:text-right">
                  <p className="font-display text-lg text-white md:text-3xl">{p.price}</p>
                  <p className="text-[9px] text-gray-500 md:text-xs">税別</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-6 space-y-2 border border-white/10 bg-black/40 p-4 text-[11px] text-gray-400 md:mt-16 md:space-y-3 md:p-8 md:text-sm">
            <li className="flex gap-2">
              <span className="text-primary">※</span>
              ご予約・お申し込みは先着順です。品切れの際はご容赦ください。
            </li>
            <li className="flex gap-2">
              <span className="text-primary">※</span>
              返却品は除菌・クリーニングのうえで次のお客様へ回します。
            </li>
            <li className="flex gap-2">
              <span className="text-primary">※</span>
              画像のない品目は、お問い合わせ時に仕様・参考画像をご案内します。
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-5 py-10 text-center md:px-6 md:py-32">
        <h2 className="mb-3 font-display text-xl tracking-tight text-white md:mb-6 md:text-5xl">ご予約・お見積り</h2>
        <p className="mx-auto mb-6 max-w-xl text-xs tracking-wider text-gray-400 md:mb-12 md:text-sm">
          大会名、希望品目・数量、利用日をお知らせください。担当より折り返しご連絡します。
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white px-8 py-3 font-black text-[10px] tracking-[0.3em] text-black transition-all hover:scale-105 hover:bg-primary md:px-16 md:py-5"
        >
          お問い合わせ
        </Link>
      </section>
    </div>
  );
};

export default RentalService;
