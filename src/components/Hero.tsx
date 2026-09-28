import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onExploreStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onExploreStory }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F7F1E5] via-[#F4ECE0] to-[#F7F1E5]">
      {/* Subtle background ambient botanical glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D89B28]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#16352B]/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Clean unboxed brand kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B95F3B] uppercase">
              <span>Purely Indian</span>
              <span aria-hidden="true">·</span>
              <span>Naturally Better</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-[#89977B] normal-case tracking-normal font-medium">
                <MapPin className="w-3 h-3 text-[#B95F3B]" /> Pune, Maharashtra
              </span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#16352B] font-bold leading-[1.08] tracking-tight [text-wrap:balance]">
              India&apos;s Ancient Ingredients. <br />
              <span className="italic font-normal text-[#B95F3B]">Made for Modern Living.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#202522]/80 leading-relaxed max-w-xl font-normal">
              Organic foods and wellness products sourced directly from Indian farms and crafted with care. 
              From the 7.8% curcumin hills of Meghalaya to traditional cold-press stone ghanis in Maharashtra.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProducts}
                className="group px-6 py-3.5 bg-[#16352B] text-[#F7F1E5] text-sm font-semibold rounded-lg hover:bg-[#20463A] transition-all flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={onExploreStory}
                className="px-6 py-3.5 border border-[#16352B]/30 text-[#16352B] text-sm font-semibold rounded-lg hover:bg-[#16352B]/5 transition-colors cursor-pointer"
              >
                Our Story
              </button>
            </div>

            {/* Micro Trust Proof Markers */}
            <div className="pt-6 border-t border-[#16352B]/10 grid grid-cols-3 gap-4">
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-[#16352B] tabular-nums">7.8%</p>
                <p className="text-xs text-[#202522]/70 font-medium">Native Curcumin</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-[#16352B] tabular-nums">&lt;35°C</p>
                <p className="text-xs text-[#202522]/70 font-medium">Wood-Pressed Oils</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-[#16352B] tabular-nums">25+</p>
                <p className="text-xs text-[#202522]/70 font-medium">Partner Family Farms</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D89B28]/30 via-transparent to-[#16352B]/20 rounded-2xl blur-sm" />
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#16352B]/15 bg-[#16352B]">
                <img
                  src="/src/assets/images/hero_organic_ingredients_1790607365501.jpg"
                  alt="Aaranya Organics harvest of turmeric, cold pressed oils, and ancient spices"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/10] object-cover hover:scale-102 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient scrim for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating bottom label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs backdrop-blur-md bg-black/40 px-4 py-2.5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D89B28]" />
                    <span className="font-medium">100% Certified Direct Sourcing</span>
                  </div>
                  <span className="text-white/80 tabular-nums font-mono text-[11px]">Lab Verified Batch 2026</span>
                </div>
              </div>

              {/* Floating Accent Card: Lakadong highlight */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#FAF6EE] p-4 rounded-xl border border-[#16352B]/10 shadow-xl max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#D89B28]" />
                  <span className="text-[11px] font-bold text-[#16352B] uppercase tracking-wider">Lakadong Haldi</span>
                </div>
                <p className="text-xs text-[#202522]/80 leading-snug">
                  Zero chemical polish. Sun-dried in bamboo racks at Jaintia Hills.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
