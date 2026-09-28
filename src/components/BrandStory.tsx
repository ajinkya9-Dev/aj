import React from 'react';
import { Quote, Sparkles, MapPin, HeartHandshake, Trees } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-[#FAF6EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Farmer Photography & Pull Quote */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#16352B]/10">
              <img
                src="/src/assets/images/farmer_harvest_story_1790607418428.jpg"
                alt="Ramesh Patil, partner organic farmer in Maharashtra"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
              
              {/* Dark subtle overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Attribution on photo */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#D89B28]">
                  Partner Farmer Collective · Solapur, Maharashtra
                </p>
                <p className="text-sm font-medium mt-1 text-white/90">
                  Ramesh Patil & 14 multigenerational dryland farming families
                </p>
              </div>
            </div>

            {/* Overlapping Pull Quote Badge */}
            <div className="relative lg:-mt-10 lg:ml-8 mx-4 sm:mx-6 bg-[#F7F1E5] p-6 rounded-xl border border-[#16352B]/15 shadow-xl">
              <Quote className="w-6 h-6 text-[#B95F3B] mb-2" />
              <p className="font-display text-base sm:text-lg italic text-[#16352B] leading-snug">
                “When Aaranya pays us above the mandi rate before sowing, we don’t have to cut corners with chemical urea. The soil breathes again.”
              </p>
              <p className="text-xs text-[#202522]/60 mt-3 font-semibold uppercase tracking-wider">
                — Patil Agro-Ecology Guild, Partnered since 2022
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Quantified Impact */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Section Tag */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B95F3B]">
              <Sparkles className="w-3.5 h-3.5 text-[#B95F3B]" />
              <span>Pune Roots, Pan-India Impact</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16352B] tracking-tight leading-[1.15] [text-wrap:balance]">
              From Indian Soil to Your Kitchen
            </h2>

            {/* Editorial Copy */}
            <p className="text-sm sm:text-base text-[#202522]/80 leading-relaxed">
              Aaranya Organics was founded in Pune with a simple, resolute conviction: 
              India’s centuries-old culinary wisdom was never broken, but industrial manufacturing compromised it. 
              Modern high-speed roller mills and solvent chemicals stripped the soul, aroma, and medicinal bioavailability from everyday staples.
            </p>

            <p className="text-sm sm:text-base text-[#202522]/80 leading-relaxed">
              We partner directly with smallholder farmers across India—from the fog-drenched slopes of Meghalaya for high-curcumin Lakadong haldi, 
              to the arid Deccan plateau of Maharashtra for heirloom millets and cold-pressed oils. By pairing ancient wood-crushing techniques with 
              modern microbiological batch testing, we deliver pure Indian wellness that fits effortlessly into modern everyday life.
            </p>

            {/* Quantified Statistics Grid (Claim-to-Proof adjacency) */}
            <div className="pt-6 border-t border-[#16352B]/10 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#16352B] tabular-nums">₹1.4 Cr+</p>
                <p className="text-xs text-[#202522]/70 mt-1 font-medium">Direct Premiums to Farmers</p>
              </div>

              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#16352B] tabular-nums">25+</p>
                <p className="text-xs text-[#202522]/70 mt-1 font-medium">Regenerative Partner Farms</p>
              </div>

              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#16352B] tabular-nums">0%</p>
                <p className="text-xs text-[#202522]/70 mt-1 font-medium">Solvents, Hexane or Palm Oil</p>
              </div>
            </div>

            {/* Pune Dispatch Guarantee */}
            <div className="p-4 rounded-xl bg-[#16352B]/5 border border-[#16352B]/10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#16352B] text-[#FAF6EE]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs text-[#202522]/80">
                <span className="font-bold text-[#16352B] block">Freshly Packed in Pune, Maharashtra</span>
                Cold-stored in climate-controlled temperature to prevent nutrient oxidization before reaching your door.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
