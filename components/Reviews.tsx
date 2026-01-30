import React, { useRef, useState, useEffect } from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const offsetWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: offsetWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const handleNext = () => scrollToIndex(Math.min(REVIEWS.length - 1, activeIndex + 1));

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="stage relative overflow-hidden flex flex-col justify-center" id="stories">
      <img
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-5 vivid-img pointer-events-none"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGmTs10ULqovZXpmAZbhrmiDWogL_ONeD9YpffgE7uppcBDwux3d59DinE21r7XDw4Lwf2M31ZSbzfH2J20XvM1iBRPXq0n-IkhMrEMUWWSVhdPhWCg4ActDUPLlcQxMkhtmPE6ThuO8eFe7NuysNNv6bnYwlkOzujWjAoPbazAGV8M0ITvkWDtcfsCGozoTwyRuG7UauHKHRrwqmExNDf0ZEySCe0i69TdIpJPPswHoC8cohsY3kk8f1Qwfksk5OTLy39wbrkTwIj"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background-light via-background-light/95 to-background-light pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full pt-16 pb-24">
        <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Traveler Voices</span>
        <h2 className="font-display text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-charcoal">
          Travelers' Stories
        </h2>
        <p className="text-muted-gray mb-12 text-lg font-bold">Real feedback from people we've welcomed.</p>
        
        <div className="relative group max-w-6xl mx-auto">
          <button 
            onClick={handlePrev}
            className="absolute -left-4 lg:-left-20 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-charcoal hover:bg-brand-red hover:text-white transition-all hidden md:flex"
            aria-label="Previous Review"
          >
            <span className="material-symbols-outlined font-black">chevron_left</span>
          </button>
          
          <button 
             onClick={handleNext}
             className="absolute -right-4 lg:-right-20 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-charcoal hover:bg-brand-red hover:text-white transition-all hidden md:flex"
             aria-label="Next Review"
          >
            <span className="material-symbols-outlined font-black">chevron_right</span>
          </button>

          <div ref={scrollRef} className="carousel-container flex gap-8 overflow-x-auto pb-12 pt-4 px-4 scroll-smooth snap-x snap-mandatory">
            {REVIEWS.map((review) => (
              <div key={review.id} className="carousel-item flex-shrink-0 w-full md:w-[85%] lg:w-[80%] snap-center">
                <div className="bg-white rounded-[40px] p-8 md:p-10 text-left shadow-2xl border border-slate-50 flex flex-col md:flex-row gap-8 items-center h-full">
                  <div className="w-full md:w-64 h-80 shrink-0 rounded-3xl overflow-hidden shadow-inner bg-slate-100">
                    <img alt={review.author} className="w-full h-full object-cover vivid-img" src={review.image} />
                  </div>
                  <div className="flex flex-col justify-between h-full w-full">
                    <div>
                      <div className="flex gap-0.5 text-brand-red mb-4">
                        {[1, 2, 3, 4, 5].map((s) => (
                           <span key={s} className="material-symbols-outlined star-filled text-[20px]">star</span>
                        ))}
                      </div>
                      <p className="text-lg md:text-xl font-bold mb-6 italic text-charcoal leading-relaxed">
                        "{review.text}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white font-black text-xs">
                        {review.initials}
                      </div>
                      <div>
                        <div className="text-[11px] font-black tracking-widest uppercase text-charcoal">{review.author}</div>
                        <div className="text-[9px] font-bold text-muted-gray uppercase tracking-widest">{review.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-3 mt-4">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIndex === i ? 'bg-brand-red scale-125' : 'bg-slate-300 hover:bg-brand-red/50'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <a className="bg-slate-100 text-charcoal px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-slate-200" href="#about">
            Back
          </a>
          <a className="bg-brand-red text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all" href="#contact">
            Ready to Plan? ➔
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
