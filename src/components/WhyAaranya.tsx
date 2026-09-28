import React from 'react';
import { Users2, Sparkles, ShieldCheck, Recycle } from 'lucide-react';

export const WhyAaranya: React.FC = () => {
  const cards = [
    {
      num: '01',
      icon: Users2,
      title: 'Farm Direct',
      subtitle: 'Transparent Sourcing Without Middlemen',
      description: 'We work closely with 25+ multigenerational farming communities across Meghalaya, Maharashtra, Rajasthan, and Kerala. Every crop is purchased with pre-harvest minimum support guarantees, shielding farmers from market volatility.',
      tag: 'Fair Trade Certified'
    },
    {
      num: '02',
      icon: Sparkles,
      title: 'Naturally Pure',
      subtitle: 'Cold-Milled Under 40°C Temperatures',
      description: 'Minimal, intentional processing. Our cold-pressed oils are extracted in traditional slow wooden ghanis (Vaagai wood); our turmeric is stone-pulverized in chill-jacketed mills. No high-heat deodorizing, no chemical hexane solvents.',
      tag: 'Zero Synthetic Additives'
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'Quality First',
      subtitle: 'Third-Party NABL Accredited Lab Testing',
      description: 'Every harvest batch undergoes rigorous spectroscopic analysis for heavy metals (lead, arsenic, cadmium), pesticide residues, moisture content, and active botanical markers like curcumin and withanolides.',
      tag: 'Batch QR on Every Jar'
    },
    {
      num: '04',
      icon: Recycle,
      title: 'Sustainably Made',
      subtitle: '100% Plastic-Free Food Contact',
      description: 'Packaged in recyclable apothecary amber glass jars, food-grade metal caddies, and unbleached kraft paper with plant-based soy inks. Thoughtfully designed to safeguard both human vitality and Indian biodiversity.',
      tag: 'Eco-Conscious Packaging'
    }
  ];

  return (
    <section id="why-aaranya" className="py-24 bg-[#F7F1E5] border-t border-[#16352B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B95F3B] block mb-2">
            The Aaranya Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16352B] tracking-tight [text-wrap:balance]">
            Why Aaranya Organics
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#202522]/75">
            Designed for health-conscious families and discerning kitchens seeking honest, unadulterated Indian agricultural excellence.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF6EE] rounded-2xl p-7 border border-[#16352B]/10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#B95F3B]/30"
              >
                <div>
                  {/* Top: Editorial Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-2xl font-bold text-[#B95F3B]/60 tabular-nums">
                      {card.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#16352B]/5 flex items-center justify-center text-[#16352B]">
                      <Icon className="w-5 h-5 text-[#16352B]" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-2xl font-bold text-[#16352B] mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#89977B] mb-4">
                    {card.subtitle}
                  </p>

                  {/* Body description */}
                  <p className="text-xs sm:text-sm text-[#202522]/80 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-4 border-t border-[#16352B]/10 flex items-center justify-between text-[11px] text-[#16352B] font-semibold">
                  <span>{card.tag}</span>
                  <span className="text-[#D89B28]">✓</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
