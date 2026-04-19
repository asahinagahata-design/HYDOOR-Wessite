
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
    <footer className="border-t border-white/10 bg-black py-6 text-white md:py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-12">
          {/* Brand */}
          <div className="flex flex-col items-start text-left">
            <Link to="/" className="mb-1 md:mb-2">
              <h2 className="whitespace-nowrap text-base font-black uppercase italic tracking-tighter md:text-xl">
                HYDOOR&nbsp;<span className="not-italic text-primary">Co.,&nbsp;Ltd.</span>
              </h2>
            </Link>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500 md:text-[10px]">
              Crafting Innovation / Opening Possibilities
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-12 md:gap-16">
            <div className="text-left">
              <h4 className="mb-2 text-[9px] font-black uppercase tracking-[0.4em] text-primary opacity-70 md:mb-3">
                Services
              </h4>
              <ul className="flex flex-col gap-1.5 text-[11px] font-black tracking-widest md:gap-2">
                {services.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="transition-colors hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <h4 className="mb-2 text-[9px] font-black uppercase tracking-[0.4em] text-primary opacity-70 md:mb-3">
                Company
              </h4>
              <ul className="flex flex-col gap-1.5 text-[11px] font-black tracking-widest md:gap-2">
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

        <div className="mt-4 flex justify-start border-t border-white/5 pt-3 opacity-40 md:mt-10 md:pt-6">
          <p className="whitespace-nowrap text-[7px] font-black uppercase italic tracking-[0.25em] sm:text-[9px] sm:tracking-[0.5em]">
            © 2025 HYDOOR Co., Ltd. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
