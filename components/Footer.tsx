
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { to: '/sports', label: 'PERFORMANCE GEAR' },
  { to: '/product-design', label: 'PRODUCT DESIGN' },
  { to: '/event', label: 'AQUA MAGIC' },
  { to: '/rental', label: 'RENTAL SERVICE' },
  { to: '/equipment', label: 'EQUIPMENT & WORKS' },
  { to: '/ai-system', label: 'AI & SYSTEM' },
];

const company = [
  { to: '/recruit', label: '採用情報' },
  { to: '/contact', label: 'お問い合わせ' },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white md:py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link to="/" className="mb-2">
              <h2 className="whitespace-nowrap text-xl font-black uppercase italic tracking-tighter">
                HYDOOR&nbsp;<span className="not-italic text-primary">Co.,&nbsp;Ltd.</span>
              </h2>
            </Link>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
              Crafting Innovation / Opening Possibilities
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12 md:gap-16">
            <div className="text-center md:text-left">
              <h4 className="mb-3 text-[9px] font-black uppercase tracking-[0.4em] text-primary opacity-70">
                Services
              </h4>
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-black tracking-widest md:flex-col md:gap-2">
                {services.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="transition-colors hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="mb-3 text-[9px] font-black uppercase tracking-[0.4em] text-primary opacity-70">
                Company
              </h4>
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-black tracking-widest md:flex-col md:gap-2">
                {company.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="transition-colors hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center border-t border-white/5 pt-5 opacity-40 md:mt-10 md:justify-start md:pt-6">
          <p className="whitespace-nowrap text-[8px] font-black uppercase italic tracking-[0.35em] sm:text-[9px] sm:tracking-[0.5em]">
            © 2025 HYDOOR Co., Ltd. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
