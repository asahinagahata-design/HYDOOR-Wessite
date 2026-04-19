
import React from 'react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: 'inventory_2',
    title: '幅広いラインナップ',
    desc: 'ウェア・シューズ・水泳用品・トレーニング小物まで、競技と日常のトレーニングをカバーする品揃えをご用意しています。',
  },
  {
    icon: 'person_search',
    title: 'お客様に合ったご案内',
    desc: '種目・レベル・体格・ご予算をうかがい、複数の選択肢の中から用途に合う一品をご提案します。',
  },
  {
    icon: 'sell',
    title: '適正な価格',
    desc: '取引先各社と連携し、できるだけ手の届きやすい価格でご提供できるよう調整しています。',
  },
  {
    icon: 'local_shipping',
    title: '早いお届け',
    desc: '在庫商品はもちろん、お取り寄せの場合もスムーズに手配。必要なタイミングに間に合わせます。',
  },
];

const categories = [
  { icon: 'checkroom', title: 'スポーツウェア', desc: '練習着・ユニフォーム・トレーニングウェア' },
  { icon: 'directions_run', title: 'シューズ', desc: 'ランニング・トレーニング・競技用各種' },
  { icon: 'pool', title: '水泳用品', desc: '競泳水着・ゴーグル・キャップ・小物' },
  { icon: 'fitness_center', title: 'トレーニング用品', desc: 'ウェイト小物・補助具・ケア用品' },
  { icon: 'sports_basketball', title: '競技用具・小物', desc: '各競技に応じた周辺アイテム' },
  { icon: 'group', title: 'チーム用品', desc: '揃えのウェア・備品のまとめ手配' },
];

const flow = [
  {
    no: '01',
    title: 'ご相談',
    desc: '競技・用途・人数・ご予算・ご希望時期をお聞かせください。',
  },
  {
    no: '02',
    title: 'ご提案',
    desc: '取扱ブランドの中から、条件に合う商品の組み合わせをご提示します。',
  },
  {
    no: '03',
    title: 'お見積もり',
    desc: '数量や納期に応じた価格でお見積もりします。在庫状況もあわせてご案内します。',
  },
  {
    no: '04',
    title: 'お届け',
    desc: 'ご注文確定後、最短のスケジュールで手配・お届けいたします。',
  },
];

const SportsBusiness: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <img
          src="/images/performance-gear.png?v=20260419"
          alt="スポーツアパレル・パフォーマンスギア"
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-8 md:px-12">
          <div className="max-w-4xl">
            <span className="mb-6 block font-display text-xl italic tracking-[0.3em] text-primary">
              01 — HYDOOR SPORTS
            </span>
            <h1 className="mb-10 font-display text-6xl leading-[0.85] tracking-tighter text-white md:text-[10rem]">
              PERFORMANCE
              <br />
              <span className="text-primary">GEAR</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed tracking-widest text-gray-200 md:text-xl">
              競技に取り組むすべての方へ、スポーツアパレルとギアをお届けします。
              <br className="hidden md:block" />
              豊富なラインナップの中から、用途に合った商品を、お求めやすい価格でスピーディーにお手元へ。
            </p>
          </div>
        </div>
      </section>

      {/* VALUES — 4 core service pillars */}
      <section className="border-t border-white/5 bg-black py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-8 md:px-12">
          <div className="mb-16 max-w-3xl md:mb-20">
            <span className="mb-4 block font-display text-xs uppercase tracking-[0.45em] text-primary">
              Service
            </span>
            <h2 className="mb-8 font-display text-4xl uppercase leading-none tracking-tight text-white md:text-6xl">
              HYDOORが<span className="italic text-primary">大切にすること</span>
            </h2>
            <p className="text-base leading-relaxed tracking-wider text-gray-400 md:text-lg">
              スポーツアパレルの販売店として、お客様に必要なものを、必要なタイミングで、無理のない価格でお届けする。
              そのために、品揃え・ご提案・価格・スピードの4つを大切にしています。
            </p>
          </div>

          <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="bg-black p-10 transition-colors hover:bg-neutral-950 md:p-12">
                <span className="material-symbols-outlined mb-8 block text-4xl text-primary">
                  {v.icon}
                </span>
                <h3 className="mb-4 font-display text-xl leading-snug text-white md:text-2xl">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed tracking-wider text-gray-400">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES — what we carry */}
      <section className="border-t border-white/5 bg-neutral-950 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-8 md:px-12">
          <div className="mb-16 flex flex-col gap-2 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 block font-display text-xs uppercase tracking-[0.45em] text-primary">
                Lineup
              </span>
              <h2 className="font-display text-2xl uppercase leading-none tracking-tight text-white sm:text-3xl md:text-6xl">
                <span className="inline-block whitespace-nowrap [word-break:keep-all]">
                  取り扱い<span className="italic text-primary">アイテム</span>
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed tracking-wider text-gray-500">
              競技用から日常のトレーニング用品まで、幅広くお取り扱いしています。
              <br />
              掲載以外の商品もお気軽にご相談ください。
            </p>
          </div>

          <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c.title} className="bg-neutral-950 p-10 transition-colors hover:bg-black md:p-12">
                <span className="material-symbols-outlined mb-6 block text-3xl text-primary">
                  {c.icon}
                </span>
                <h3 className="mb-3 font-display text-lg leading-snug text-white md:text-xl">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed tracking-wider text-gray-400">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW — how to order */}
      <section className="border-t border-white/5 bg-black py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-8 md:px-12">
          <div className="mb-16 max-w-3xl md:mb-20">
            <span className="mb-4 block font-display text-xs uppercase tracking-[0.45em] text-primary">
              Flow
            </span>
            <h2 className="font-display text-4xl uppercase leading-none tracking-tight text-white md:text-6xl">
              ご利用<span className="italic text-primary">の流れ</span>
            </h2>
          </div>

          <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((step) => (
              <div key={step.no} className="bg-black p-10 md:p-12">
                <div className="mb-8 flex items-baseline gap-4">
                  <span className="font-display text-5xl font-black tracking-tighter text-primary">
                    {step.no}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="mb-4 font-display text-xl leading-snug text-white md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed tracking-wider text-gray-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5 bg-neutral-950 py-24 md:py-36">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/performance-gear.png?v=20260419"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/85 to-black" />

        <div className="relative z-10 mx-auto max-w-[1100px] px-4 text-center sm:px-6 md:px-12">
          <span className="mb-6 block font-display text-xs uppercase tracking-[0.45em] text-primary">
            Contact
          </span>
          <h2 className="mb-8 text-center font-display leading-tight tracking-tight">
            <span className="inline-block whitespace-nowrap text-[clamp(1rem,5.2vw,2.5rem)] lg:text-6xl">
              <span className="text-white">まずは、お気軽に</span>
              <span className="text-primary">ご相談ください。</span>
            </span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed tracking-wider text-gray-400 md:text-lg">
            個人のお買い物から、チーム単位のまとめ発注まで対応いたします。
            ご希望の商品・数量・お届け時期をお聞かせいただければ、最適なご提案をいたします。
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link
              to="/contact"
              className="inline-block border border-primary bg-primary px-12 py-5 font-black text-[10px] tracking-[0.3em] text-black transition-all hover:bg-white hover:border-white"
            >
              お問い合わせ
            </Link>
            <Link
              to="/"
              className="inline-block border border-white/30 px-12 py-5 font-black text-[10px] tracking-[0.3em] text-white transition-all hover:border-primary hover:text-primary"
            >
              事業全体を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsBusiness;
