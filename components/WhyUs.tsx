import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section className="stage bg-background-warm texture-overlay flex flex-col justify-center" id="why">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-black text-brand-red opacity-[0.03] pointer-events-none hidden lg:block font-display leading-none">
        V
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <h2 className="font-display text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-charcoal">
          LOCALLY DESIGNED. <span className="text-brand-red">PERSONALLY DELIVERED</span>
        </h2>
        <p className="text-muted-gray max-w-2xl mx-auto mb-12 text-lg lg:text-xl font-bold leading-relaxed">
          Every journey is created personally and operated locally, with a focus on quality, clarity, and real connections.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          <div className="p-8 lg:p-12 bg-white border-t-4 border-brand-red rounded-3xl transition-all duration-300 group text-left shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1">
            <h3 className="text-xl lg:text-2xl font-black mb-6 font-display uppercase tracking-tight text-charcoal">Custom Vietnam Tours</h3>
            <p className="text-muted-gray leading-relaxed text-sm lg:text-base font-semibold">
              Every journey is designed <span className="text-brand-red font-extrabold">from the ground up</span> around your interests, pace, and budget. We don’t reuse itineraries — we build them based on what <span className="text-brand-red font-extrabold">actually works</span> on the ground in Vietnam.
            </p>
          </div>
          <div className="p-8 lg:p-12 bg-white border-t-4 border-brand-red rounded-3xl transition-all duration-300 group text-left shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1">
            <h3 className="text-xl lg:text-2xl font-black mb-6 font-display uppercase tracking-tight text-charcoal">Direct Local Access</h3>
            <p className="text-muted-gray leading-relaxed text-sm lg:text-base font-semibold">
              Your trip is designed and <span className="text-brand-red font-extrabold">operated locally</span>, with direct access to trusted guides, drivers, and partners. <span className="text-brand-red font-extrabold">No middlemen</span>, no offshore call centres, just clear communication and better value.
            </p>
          </div>
          <div className="p-8 lg:p-12 bg-white border-t-4 border-brand-red rounded-3xl transition-all duration-300 group text-left shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1">
            <h3 className="text-xl lg:text-2xl font-black mb-6 font-display uppercase tracking-tight text-charcoal">24/7 Local Support</h3>
            <p className="text-muted-gray leading-relaxed text-sm lg:text-base font-semibold">
              Plans change. Weather happens. We’re <span className="text-brand-red font-extrabold">here in Vietnam</span> and available when you need us, day or night, to handle issues <span class="text-brand-red font-extrabold">quickly</span> and keep your trip running smoothly.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center gap-4">
          <a className="bg-white/50 text-charcoal px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all backdrop-blur-sm border border-transparent hover:border-charcoal/10" href="#hero">
            Back
          </a>
          <a className="bg-charcoal text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-brand-red transition-all inline-flex items-center gap-4 group shadow-xl" href="#regions">
            Explore Regions ➔
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
