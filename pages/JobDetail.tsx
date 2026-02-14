
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

  if (!job) return <div className="py-40 text-center">Job not found</div>;

  return (
    <div className="bg-background-subtle py-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={() => navigate('/recruit')}
          className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 font-bold"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          BACK TO POSITIONS
        </button>

        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <span className="px-4 py-1 bg-black text-white text-[10px] font-black tracking-widest uppercase rounded-full">{job.dept}</span>
            <span className="text-primary text-xs font-black tracking-widest uppercase">{job.type}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">{job.title}</h1>
          <p className="text-gray-600 text-xl leading-loose mb-16 pb-16 border-b border-gray-100">
            {job.desc}
          </p>

          <div className="grid md:grid-cols-1 gap-12">
            <div>
              <h2 className="text-2xl font-black mb-8 flex items-center gap-4">
                <span className="w-8 h-1 bg-primary"></span>
                主な業務内容
              </h2>
              <ul className="space-y-4">
                {job.responsibilities.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-gray-600">
                    <span className="material-symbols-outlined text-primary text-xl mt-1">check_circle</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-black mb-8 flex items-center gap-4">
                <span className="w-8 h-1 bg-primary"></span>
                応募要件
              </h2>
              <ul className="space-y-4">
                {job.requirements.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-gray-600">
                    <span className="material-symbols-outlined text-primary text-xl mt-1">verified</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-gray-100 flex flex-col items-center">
            <Link to="/contact" className="w-full md:w-auto px-20 py-5 bg-black hover:bg-neutral-800 text-white font-black rounded-2xl shadow-xl transition-all transform hover:scale-105 text-center tracking-widest uppercase">
              この職種に応募する
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
