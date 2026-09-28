import React from 'react';
import { Leaf, Users, ShieldAlert, Award, CheckCircle2 } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      icon: Leaf,
      title: '100% Natural Ingredients',
      description: 'Zero chemical fertilizers, synthetic preservatives, or artificial food colorants. Every crop is grown naturally.',
      proof: 'Third-party heavy metal tested'
    },
    {
      icon: Users,
      title: 'Direct Farmer Sourcing',
      description: 'We eliminate agricultural brokers, paying 20–35% above mandi rates straight to women collectives & smallholders.',
      proof: 'Direct fair-trade contracts'
    },
    {
      icon: ShieldAlert,
      title: 'No Artificial Preservatives',
      description: 'Unbleached, unrefined, and non-irradiated. Bottled in amber glass to shield delicate volatile botanical compounds.',
      proof: 'Zero hexane solvent extraction'
    },
    {
      icon: Award,
      title: '25+ Partner Farms',
      description: 'Cultivating heritage heirloom seeds across distinct bio-regions: Meghalaya, Maharashtra, Kerala, Rajasthan, and Karnataka.',
      proof: 'Regenerative organic practices'
    }
  ];

  return (
    <section className="py-16 bg-[#FAF6EE] border-y border-[#16352B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B95F3B] mb-2">
            The Aaranya Standard
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#16352B] tracking-tight [text-wrap:balance]">
            Good Ingredients. Honest Origins.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#202522]/75">
            Real food does not need artificial enhancement. We honor Indian agricultural wisdom by preserving what nature perfected.
          </p>
        </div>

        {/* 4 Trust Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F1E5] rounded-xl p-6 border border-[#16352B]/10 transition-all hover:-translate-y-1 hover:border-[#B95F3B]/30 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-[#16352B]/5 flex items-center justify-center text-[#16352B] mb-4">
                  <Icon className="w-5 h-5 text-[#16352B]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#16352B] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#202522]/80 leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <div className="pt-3 border-t border-[#16352B]/10 flex items-center gap-1.5 text-xs text-[#89977B] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B95F3B]" />
                  <span>{pillar.proof}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certification Logos & Verification Bar */}
        <div className="mt-12 pt-8 border-t border-[#16352B]/10 flex flex-wrap items-center justify-between gap-6 text-xs text-[#202522]/70">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#16352B]">Lab Verification:</span>
            <span>Batch reports published per harvest</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-medium text-[#16352B]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D89B28]" />
              <span>Jaivik Bharat Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#16352B]" />
              <span>NPOP Organic Standard</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#B95F3B]" />
              <span>ISO 22000 Certified Quality</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#89977B]" />
              <span>FSSAI License Compliant</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
