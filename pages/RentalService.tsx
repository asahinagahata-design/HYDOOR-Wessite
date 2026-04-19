
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
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <img
          src="/images/rental-hero.png?v=20260415"
          alt="マッサージベッド・フォームローラー・ストレッチ用品を置いたレンタル用ウェルネス空間"
          className="absolute inset-0 h-full w-full object-cover object-left opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-8 md:px-12">
          <span className="mb-4 inline-block border border-primary/60 bg-primary/10 px-4 py-1.5 text-[10px] font-black tracking-[0.35em] text-primary">
            FOR ATHLETES · FOR RENT
          </span>
          <span className="text-primary font-display mb-6 block text-xl tracking-[0.3em] italic">04</span>
          <h1 className="mb-8 font-display text-6xl leading-[0.8] tracking-tighter text-white md:text-[8rem]">
            RENTAL
            <br />
            <span className="text-primary">SERVICE</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed tracking-wider text-gray-200 md:text-xl">
            大会・合宿・遠征の現場で、休む・整える・着替えるを支えるレンタル。
            会場周辺での受け渡しにも対応し、アスリートの動線を軽くします。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Service overview */}
      <section className="border-b border-white/10 bg-black py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 whitespace-nowrap font-display text-2xl tracking-tight text-white sm:text-3xl md:text-5xl">
            会場直送のレンタルで、競技日の負担を減らす
          </h2>
          <p className="mb-6 text-xs font-black tracking-[0.35em] text-primary">
            マットレスレンタル · 大会会場エリアでの受取・返却（要予約）
          </p>
          <p className="mb-10 text-base leading-loose tracking-wider text-gray-400 md:text-lg">
            水泳・アーティスティックスイミングなどの大会をはじめ、スポーツイベント参加者向けに、マットレスを中心としたコンディショニング用品をレンタル提供しています。
            期間中は<span className="text-white">品目ごとの定額（税別）</span>でご利用いただけます。
          </p>
          <div className="grid gap-1 border border-primary/30 bg-white/5 p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
            <div>
              <p className="mb-2 text-xs font-black tracking-[0.3em] text-primary">受取・返却（例）</p>
              <p className="text-white md:text-lg">
                競技場内の特設ブースなど、大会会場エリアでの受け渡しが可能です。
                <span className="mt-2 block text-sm text-gray-400">※要事前予約。開催・会場により異なります。</span>
              </p>
            </div>
            <div className="border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="text-xs font-black tracking-wider text-gray-500">マットレス「SPACE」大会期間中</p>
              <p className="font-display text-3xl text-primary md:text-4xl">¥3,980</p>
              <p className="text-xs text-gray-500">税別 · 1枚単位 · 数量限定・先着順</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-black py-32">
        <div className="mx-auto max-w-6xl px-6">
          <span className="mb-4 block text-center font-display text-lg tracking-widest text-primary">Why Rent</span>
          <h2 className="mb-16 text-center font-display text-4xl tracking-tight text-white md:text-5xl">
            こんなお悩みに、レンタルで応えます
          </h2>
          <div className="grid gap-1 md:grid-cols-3">
            {painPoints.map((p) => (
              <div key={p.title} className="border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/[0.07]">
                <span className="material-symbols-outlined mb-6 block text-4xl text-primary">{p.icon}</span>
                <h3 className="mb-4 text-lg font-bold text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed tracking-wider text-gray-400">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product lineup */}
      <section className="border-t border-white/10 bg-neutral-950 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <span className="mb-4 block text-center font-display text-lg tracking-widest text-primary">Lineup</span>
          <h2 className="mb-6 text-center font-display text-4xl tracking-tight text-white md:text-6xl">
            レンタル品目・料金
          </h2>
          <p className="mx-auto mb-20 max-w-2xl text-center text-sm tracking-wider text-gray-400">
            表示価格はすべて税別です。在庫・会場・日程によりご用意できない場合があります。
          </p>

          <div className="space-y-1">
            {rentalProducts.map((p) => (
              <div
                key={p.name + (p.sub ?? '')}
                className={`grid gap-6 border p-8 transition-colors md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10 ${
                  p.featured
                    ? 'border-primary/40 bg-primary/5 hover:bg-primary/[0.08]'
                    : 'border-white/10 bg-white/5 hover:bg-white/[0.07]'
                }`}
              >
                <span className="material-symbols-outlined text-3xl text-primary md:mt-1">{p.icon}</span>
                <div>
                  <div className="mb-2 flex flex-wrap items-baseline gap-3">
                    <h3 className="text-xl font-bold text-white md:text-2xl">{p.name}</h3>
                    {p.sub && <span className="text-sm font-black tracking-wider text-primary">{p.sub}</span>}
                    {p.featured && (
                      <span className="rounded-sm bg-primary/20 px-2 py-0.5 text-[9px] font-black tracking-widest text-primary">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <p className="mb-3 text-sm leading-relaxed tracking-wider text-gray-300">{p.desc}</p>
                  <p className="text-xs tracking-wider text-gray-500">サイズ {p.size}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="font-display text-3xl text-white">{p.price}</p>
                  <p className="text-xs text-gray-500">税別</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-16 space-y-3 border border-white/10 bg-black/40 p-8 text-sm text-gray-400">
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
      <section className="bg-black py-32 text-center px-6">
        <h2 className="mb-6 font-display text-3xl tracking-tight text-white md:text-5xl">ご予約・お見積り</h2>
        <p className="mx-auto mb-12 max-w-xl text-sm tracking-wider text-gray-400">
          大会名、希望品目・数量、利用日をお知らせください。担当より折り返しご連絡します。
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white px-16 py-5 font-black text-[10px] tracking-[0.3em] text-black transition-all hover:scale-105 hover:bg-primary"
        >
          お問い合わせ
        </Link>
      </section>
    </div>
  );
};

export default RentalService;
