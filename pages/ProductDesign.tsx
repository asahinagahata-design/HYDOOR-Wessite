
import React from 'react';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    num: '01',
    title: 'ヒアリング・コンセプトスケッチ',
    desc: 'ご要望や使用シーン、ブランドの方向性をうかがい、ラフスケッチやムードボードで方向性のたたき台をご提示します。',
    icon: 'draw',
  },
  {
    num: '02',
    title: '試作・評価',
    desc: 'サンプルを実際にお手に取っていただき、素材感・縫製・装着感・耐久性をその場で確認。フィードバックを反映しながら仕様を詰めていきます。ここに最も時間をかける工程です。',
    icon: 'science',
  },
  {
    num: '03',
    title: '量産・品質・納品',
    desc: '工場連携・品質基準の設定まで伴走。ロット管理やリピート生産・リニューアルにも対応します。',
    icon: 'precision_manufacturing',
  },
];

const ProductDesign: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* Hero */}
      <section className="relative flex h-[55vh] items-center overflow-hidden md:h-[70vh]">
        <img
          src="/images/product-design.jpeg?v=2"
          alt="プロダクトデザイン・制作の様子"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-12">
          <span className="mb-3 block font-display text-xs italic tracking-[0.3em] text-primary md:mb-6 md:text-xl">02</span>
          <h1 className="mb-4 font-display text-5xl leading-[0.85] tracking-tighter text-white md:mb-8 md:text-[10rem]">
            PRODUCT
            <br />
            <span className="text-primary">DESIGN</span>
          </h1>
          <p className="max-w-2xl text-xs leading-relaxed tracking-wider text-gray-200 md:text-xl md:tracking-widest">
            スポーツウェア・ギア・水着のOEMと共同開発に対応。アイデアを形にし、競技とブランドの両方に耐えるプロダクトへ、デザインから伴走します。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black to-transparent md:h-32" />
      </section>

      {/* Concept */}
      <section className="bg-black py-10 md:py-32">
        <div className="mx-auto mb-8 max-w-5xl px-5 text-center md:mb-24 md:px-6">
          <h2 className="mb-3 font-display text-2xl leading-tight tracking-tight text-white md:mb-8 md:text-6xl">
            触れるデザインで、
            <br />
            パフォーマンスを伝える。
          </h2>
          <p className="mx-auto max-w-3xl text-xs leading-relaxed tracking-wider text-gray-400 md:text-lg md:leading-loose">
            HYDOORのプロダクトデザインは、見た目だけでなく素材選定・構造・量産性まで見据えます。
            アスリートの身体と現場の条件に根ざしたモノづくりで、ブランドの約束を製品に落とし込みます。
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-px border border-white/10 bg-white/10 px-5 md:px-6">
          {[
            { value: '200+', label: 'プロジェクト実績' },
            { value: '95%', label: '顧客満足度' },
            { value: 'END TO END', label: '企画〜量産まで一貫' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-[4rem] flex-col items-center justify-center bg-white/5 px-1 py-3 text-center md:min-h-[7rem] md:p-6"
            >
              <p className="mb-0.5 font-display text-base leading-none text-primary sm:text-3xl md:mb-2 md:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="text-[8px] font-black uppercase leading-tight tracking-[0.15em] text-gray-400 sm:text-[10px] sm:tracking-[0.25em] md:text-xs md:tracking-[0.3em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* OEM受付について */}
        <div className="mx-auto mt-8 max-w-3xl px-5 md:mt-20 md:px-6">
          <h3 className="mb-2 font-display text-lg tracking-tight text-white md:mb-4 md:text-3xl">OEM受付について</h3>
          <p className="mb-4 text-xs leading-relaxed tracking-wider text-gray-400 md:mb-8 md:text-base">
            スポーツウェア・ギア・水着を中心に、OEMおよび共同開発を承っています。
            企画段階のご相談から、既存ラインのリニューアル、ロット数や納期のご相談まで、まずはお気軽にお問い合わせください。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-black text-[10px] tracking-[0.3em] text-black transition-all hover:bg-white hover:border-white md:gap-3 md:px-10 md:py-4"
          >
            お問い合わせはこちら
            <span className="material-symbols-outlined text-sm md:text-base">north_east</span>
          </Link>
        </div>
      </section>

      {/* 対応領域 — シンプルなメッセージブロック */}
      <section className="border-t border-white/5 bg-neutral-950 py-10 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-6">
          <span className="mb-2 block font-display text-[10px] uppercase tracking-[0.45em] text-primary md:mb-4 md:text-xs">
            Scope
          </span>
          <h2 className="mb-4 font-display text-lg leading-snug tracking-tight text-white sm:text-2xl md:mb-8 md:text-5xl">
            <span className="text-primary">スポーツウェア・ギア・水着</span>に対して、
            <br className="hidden md:block" />
            OEMと共同開発に対応します。
          </h2>
          <p className="mx-auto max-w-2xl text-xs leading-relaxed tracking-wider text-gray-400 md:text-base">
            お客様ブランドのオリジナル商品から、競技用途に合わせた特注品まで。
            企画・デザイン・サンプル製作・量産までを一貫して伴走します。
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/5 bg-black py-10 md:py-32">
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <span className="mb-2 block text-center font-display text-xs tracking-widest text-primary md:mb-4 md:text-lg">Process</span>
          <h2 className="mb-3 text-center font-display text-2xl tracking-tight text-white md:mb-6 md:text-6xl">プロジェクトの流れ</h2>
          <p className="mx-auto mb-6 max-w-2xl text-center text-xs leading-relaxed tracking-wider text-gray-400 md:mb-20 md:text-base">
            企画から量産まで3つのステップで進めます。
            実物のサンプルで感触をご確認いただく<span className="text-white">「試作・評価」</span>に最も時間をかけています。
          </p>

          <div className="space-y-1">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-3 border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/[0.07] md:gap-10 md:p-10"
              >
                <div className="flex flex-shrink-0 items-center gap-2 md:gap-4">
                  <span className="material-symbols-outlined text-xl text-primary md:text-3xl">{step.icon}</span>
                  <span className="font-display text-base text-primary md:text-2xl">{step.num}</span>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-white md:mb-2 md:text-2xl">{step.title}</h3>
                  <p className="text-[11px] leading-relaxed tracking-wider text-gray-300 md:text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 px-5 py-10 text-center md:px-6 md:py-32">
        <h2 className="mb-3 font-display text-xl tracking-tight text-white md:mb-6 md:text-5xl">プロダクトデザインのご相談</h2>
        <p className="mx-auto mb-6 max-w-xl text-xs tracking-wider text-gray-400 md:mb-12 md:text-sm md:tracking-widest">
          企画段階から既存ラインのリニューアルまで、お気軽にご相談ください。
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

export default ProductDesign;
