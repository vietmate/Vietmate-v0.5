import React from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 backdrop-blur-[20px] bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-0">
            <div className="h-10 w-10 bg-[#D91B1B] flex items-center justify-center rounded-l-md">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,20 h35 a5,5 0 0 1 5,5 v5 a5,5 0 0 1 -5,5 h-15 l20,45 l25,-60 h15 l-35,80 h-10 l-35,-80 z"></path>
              </svg>
            </div>
            <div className="h-10 flex items-center bg-[#D91B1B] px-3 rounded-r-md">
              <span className="text-xl font-black tracking-tighter text-white">VIETMATE.COM</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-6 text-[11px] font-black tracking-widest uppercase">
            {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                    <a
                        key={item.id}
                        className={`flex items-center gap-2 transition-opacity ${isActive ? 'text-brand-red opacity-100' : 'text-charcoal opacity-60 hover:opacity-100'}`}
                        href={`#${item.id}`}
                    >
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-brand-red' : 'bg-charcoal'}`}></span>
                        {item.label}
                    </a>
                )
            })}
          </div>

          <div className="flex items-center gap-4">
            <a className="bg-brand-red text-white px-6 py-2.5 text-xs rounded-full font-black hover:scale-105 transition-all tracking-widest uppercase shadow-lg shadow-red-600/30" href="#contact">
              Plan Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
