
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const jobData: Record<string, any> = {
  'account-manager': {
    title: 'アカウントマネージャー',
    dept: 'SALES',
    type: '正社員',
    desc: 'クライアントのビジネス課題を解決するための提案営業。長期的な信頼関係の構築。',
    responsibilities: [
      '新規クライアントへのソリューション提案',
      '既存顧客のプロジェクトマネジメント',
      '市場調査および戦略立案',
      '社内クリエイティブチームとの連携'
    ],
    requirements: [
      '法人営業経験 3年以上',
      '優れたコミュニケーション能力',
      '論理的思考力とプレゼンテーション能力',
      'スポーツまたはエンタメ業界への興味'
    ]
  },
  'frontend-engineer': {
    title: 'Frontend Engineer',
    dept: 'ENGINEERING',
    type: '正社員',
    desc: 'モダンなWeb技術を用いたUI/UXの実装。React/Vue.jsを用いた開発経験者歓迎。',
    responsibilities: [
      'Reactを用いたWebアプリケーション開発',
      'デザイナーと連携したUIコンポーネントの実装',
      'パフォーマンス改善およびコードのリファクタリング',
      '新規プロジェクトの技術選定支援'
    ],
    requirements: [
      'TypeScript/Reactを用いた実務経験 3年以上',
      'Tailwind CSS等を用いたレスポンシブデザインの知識',
      'Gitフローを用いたチーム開発経験',
      'Web標準およびアクセシビリティへの理解'
    ]
  },
  'facility-engineer': {
    title: '施工管理・設備エンジニア',
    dept: 'ENGINEERING',
    type: '正社員',
    desc: 'スポーツ施設の設備設計から施工管理まで。プール・トレーニング施設の専門知識を活かせます。',
    responsibilities: [
      'スポーツ施設の設備設計・施工管理',
      'プール関連設備の導入計画策定',
      '協力会社との工程管理・品質管理',
      '施設メンテナンス計画の立案・実施'
    ],
    requirements: [
      '施工管理の実務経験 2年以上',
      '建築・設備関連の資格保有者歓迎',
      'スポーツ施設への関心',
      'チームワークを大切にできる方'
    ]
  },
  'uiux-designer': {
    title: 'UI/UX Designer',
    dept: 'DESIGN',
    type: '業務委託',
    desc: 'ユーザー中心設計に基づいたプロダクトデザイン。ブランドの世界観を体現するクリエイティブ制作。',
    responsibilities: [
      'WebおよびモバイルアプリのUIデザイン',
      'UXリサーチに基づくワイヤーフレーム制作',
      'ブランドガイドラインの策定と更新',
      'プロトタイピングによるユーザーテスト'
    ],
    requirements: [
      'UI/UXデザインの実務経験 2年以上',
      'Figma / Adobe XD の高度なスキル',
      '視覚的なデザイン（グラフィック）の基礎能力',
      'ビジネス要件をデザインに落とし込む力'
    ]
  }
};

const JobDetail: React.FC = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobId ? jobData[jobId] : null;

  if (!job) return <div className="py-40 text-center text-white bg-black min-h-screen">Job not found</div>;

  return (
    <div className="min-h-screen bg-black pt-24 md:py-24 md:pt-40">
      <div className="mx-auto max-w-4xl px-5 py-6 md:px-6 md:py-0">
        <button 
          onClick={() => navigate('/recruit')}
          className="mb-4 flex items-center gap-2 text-[11px] font-bold text-gray-500 transition-colors hover:text-primary md:mb-12 md:text-base"
        >
          <span className="material-symbols-outlined text-base md:text-2xl">arrow_back</span>
          BACK TO POSITIONS
        </button>

        <div className="border border-white/10 bg-neutral-900 p-5 md:p-16">
          <div className="mb-4 flex flex-wrap items-center gap-2 md:mb-8 md:gap-4">
            <span className="bg-primary px-3 py-1 text-[9px] font-black uppercase tracking-widest text-black md:px-4 md:text-[10px]">{job.dept}</span>
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 md:text-xs">{job.type}</span>
          </div>
          
          <h1 className="mb-4 text-2xl font-black tracking-tight text-white md:mb-10 md:text-5xl">{job.title}</h1>
          <p className="mb-6 border-b border-white/10 pb-6 text-xs leading-relaxed text-gray-300 md:mb-16 md:pb-16 md:text-xl md:leading-loose">
            {job.desc}
          </p>

          <div className="grid gap-6 md:grid-cols-1 md:gap-12">
            <div>
              <h2 className="mb-4 flex items-center gap-3 text-base font-black text-white md:mb-8 md:gap-4 md:text-2xl">
                <span className="h-0.5 w-5 bg-primary md:h-1 md:w-8"></span>
                主な業務内容
              </h2>
              <ul className="space-y-2 md:space-y-4">
                {job.responsibilities.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 md:gap-4">
                    <span className="material-symbols-outlined mt-0.5 text-base text-primary md:mt-1 md:text-xl">check_circle</span>
                    <span className="text-xs leading-relaxed md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 md:mt-12">
              <h2 className="mb-4 flex items-center gap-3 text-base font-black text-white md:mb-8 md:gap-4 md:text-2xl">
                <span className="h-0.5 w-5 bg-primary md:h-1 md:w-8"></span>
                応募要件
              </h2>
              <ul className="space-y-2 md:space-y-4">
                {job.requirements.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 md:gap-4">
                    <span className="material-symbols-outlined mt-0.5 text-base text-primary md:mt-1 md:text-xl">verified</span>
                    <span className="text-xs leading-relaxed md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center border-t border-white/10 pt-6 md:mt-20 md:pt-16">
            <Link to="/contact" className="w-full transform bg-white px-8 py-3 text-center text-[11px] font-black uppercase tracking-widest text-black transition-all hover:scale-105 hover:bg-primary md:w-auto md:px-20 md:py-5 md:text-base">
              この職種に応募する
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
