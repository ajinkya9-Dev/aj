import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Sparkles, Building2 } from 'lucide-react';

interface FinalCTAProps {
  onShopClick: () => void;
  onOpenB2B: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onShopClick, onOpenB2B }) => {
  return (
    <section className="py-24 bg-[#16352B] text-[#FAF6EE] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D89B28]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-[#B95F3B]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Unboxed Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D89B28] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D89B28]" />
          <span>Purely Indian · Naturally Better</span>
        </div>

        {/* Display Headline */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF6EE] max-w-3xl mx-auto leading-[1.1] [text-wrap:balance]">
          Bring a Little More Nature Into Your Everyday.
        </h2>

        {/* Subhead */}
        <p className="mt-6 text-base sm:text-lg text-[#FAF6EE]/80 max-w-2xl mx-auto leading-relaxed font-normal">
          Experience the vibrant golden color of 7.8% Lakadong haldi, the rich nutty warmth of wood-pressed oils, 
          and wholesome ancient millets. Sourced with honor from India’s organic soil.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onShopClick}
            className="group px-8 py-4 bg-[#D89B28] hover:bg-[#EBC168] text-[#16352B] text-sm font-bold rounded-xl transition-all flex items-center gap-2.5 shadow-xl hover:shadow-2xl cursor-pointer"
          >
            <span>Shop Aaranya Organics</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onOpenB2B}
            className="px-6 py-4 border border-white/20 hover:border-white/40 text-[#FAF6EE] text-sm font-semibold rounded-xl hover:bg-white/5 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Building2 className="w-4 h-4 text-[#D89B28]" />
            <span>Hotels, Cafes & Retail Supply</span>
          </button>
        </div>

        {/* Micro Guarantees */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#FAF6EE]/75">
          <div className="flex items-center justify-center gap-2">
            <Truck className="w-4 h-4 text-[#D89B28]" />
            <span>Pan-India 2–4 Day Express Shipping</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D89B28]" />
            <span>Apothecary Amber Glass & Zero Plastic Packaging</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D89B28]" />
            <span>Freshly Ground & Cold-Pressed in Small Batches</span>
          </div>
        </div>

      </div>
    </section>
  );
};
