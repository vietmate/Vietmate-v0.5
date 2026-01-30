import React, { useState } from 'react';

const TOUR_STYLES = [
  { id: 'culinary', icon: 'restaurant', label: 'Culinary Focus' },
  { id: 'luxury', icon: 'diamond', label: 'Luxury & Comfort' },
  { id: 'adventure', icon: 'hiking', label: 'Adventure' },
  { id: 'cultural', icon: 'temple_buddhist', label: 'Cultural Immersion' },
  { id: 'family', icon: 'family_restroom', label: 'Family Friendly' },
  { id: 'secrets', icon: 'map', label: 'Local Secrets' },
];

const Contact: React.FC = () => {
    const [selectedStyle, setSelectedStyle] = useState<string>("");

  return (
    <section className="stage texture-overlay overflow-y-auto" id="contact" style={{ background: 'linear-gradient(135deg, rgba(217, 27, 27, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="bg-white flex flex-col lg:flex-row shadow-2xl rounded-[40px] overflow-hidden border-4 border-white">
          <div className="lg:w-1/4 p-10 text-white flex flex-col justify-between relative overflow-hidden bg-charcoal">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/30 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="font-display text-2xl lg:text-3xl font-black mb-6 uppercase tracking-tight leading-tight">Plan Your Journey 👋</h2>
              <p className="text-white/80 mb-10 text-sm lg:text-base font-semibold leading-relaxed">
                Tell us about your dream trip. Every detail helps us craft a journey as unique as you.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-brand-red">📍</span>
                  <div>
                    <p className="font-black text-xs uppercase tracking-tight">Direct Local Access</p>
                    <p className="text-white/50 text-[9px] tracking-widest uppercase mt-1">Based in Vietnam</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl text-brand-red">⏱️</span>
                  <div>
                    <p className="font-black text-xs uppercase tracking-tight">24h Response</p>
                    <p className="text-white/50 text-[9px] tracking-widest uppercase mt-1">Personal Trip Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/4 p-10 lg:p-12 bg-white texture-overlay">
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-muted-gray mb-3">Full Name</label>
                  <input className="w-full bg-slate-50 border-2 border-slate-100 focus:border-brand-red focus:ring-0 focus:outline-none rounded-2xl p-4 placeholder:text-slate-300 text-sm font-medium transition-colors" placeholder="e.g. John Doe" type="text" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-muted-gray mb-3">Email Address</label>
                  <input className="w-full bg-slate-50 border-2 border-slate-100 focus:border-brand-red focus:ring-0 focus:outline-none rounded-2xl p-4 placeholder:text-slate-300 text-sm font-medium transition-colors" placeholder="name@email.com" type="email" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-muted-gray mb-3">Phone Number</label>
                  <input className="w-full bg-slate-50 border-2 border-slate-100 focus:border-brand-red focus:ring-0 focus:outline-none rounded-2xl p-4 placeholder:text-slate-300 text-sm font-medium transition-colors" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-muted-gray mb-3">Potential Travelers</label>
                    <input className="w-full bg-slate-50 border-2 border-slate-100 focus:border-brand-red focus:ring-0 focus:outline-none rounded-2xl p-4 placeholder:text-slate-300 text-sm font-medium transition-colors" placeholder="e.g. 2" type="number" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-muted-gray mb-3">Number of Days</label>
                    <input className="w-full bg-slate-50 border-2 border-slate-100 focus:border-brand-red focus:ring-0 focus:outline-none rounded-2xl p-4 placeholder:text-slate-300 text-sm font-medium transition-colors" placeholder="e.g. 14" type="number" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-muted-gray mb-4">Style of Tour (Select one that fits best)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {TOUR_STYLES.map(style => (
                         <label key={style.id} className="cursor-pointer group relative">
                         <input 
                            className="hidden" 
                            name="style" 
                            type="radio" 
                            value={style.id} 
                            checked={selectedStyle === style.id}
                            onChange={() => setSelectedStyle(style.id)}
                         />
                         <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center text-center gap-2 
                             ${selectedStyle === style.id 
                                ? 'bg-brand-red border-brand-red text-white shadow-xl shadow-red-500/30 -translate-y-1' 
                                : 'bg-slate-50 border-slate-100 group-hover:border-slate-200 text-charcoal'
                             }`}>
                           <span className={`material-symbols-outlined text-2xl transition-colors ${selectedStyle === style.id ? 'text-white' : 'text-brand-red'}`}>{style.icon}</span>
                           <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${selectedStyle === style.id ? 'text-white' : ''}`}>{style.label}</span>
                         </div>
                       </label>
                    ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-muted-gray mb-3">Your Vision</label>
                <textarea className="w-full bg-slate-50 border-2 border-slate-100 focus:border-brand-red focus:ring-0 focus:outline-none rounded-2xl p-6 placeholder:text-slate-300 text-sm font-medium min-h-[140px] transition-colors" placeholder="Tell us more about your preferences, special interests, or any must-see spots..."></textarea>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                <button className="w-full md:w-auto px-12 py-5 bg-brand-red text-white font-black text-sm uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-all shadow-xl shadow-red-600/30">
                    SEND TRIP REQUEST
                </button>
                <p className="text-[10px] font-bold text-muted-gray/50 uppercase tracking-widest">Usually responds within 24 hours</p>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-8 text-center pb-12">
            <a className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity" href="#stories">
                Back to Stories
            </a>
        </div>
      </div>
      
      <footer className="w-full bg-charcoal text-white py-8 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.3em] font-black text-white/30 gap-4">
          <p>© 2026 VIETMATE.COM ALL RIGHTS RESERVED. ✨</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="#">PRIVACY</a>
            <a className="hover:text-white transition-colors" href="#">TERMS</a>
            <a className="hover:text-white transition-colors" href="#">INSTAGRAM</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
