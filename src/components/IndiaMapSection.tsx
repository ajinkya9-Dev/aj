import React, { useState } from 'react';
import { MapPin, Mountain, Sprout, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { SOURCING_REGIONS } from '../data/regions';
import { SourcingRegion } from '../types';

interface IndiaMapSectionProps {
  onSelectRegionProducts?: (category: string) => void;
}

export const IndiaMapSection: React.FC<IndiaMapSectionProps> = ({ onSelectRegionProducts }) => {
  const [selectedRegion, setSelectedRegion] = useState<SourcingRegion>(SOURCING_REGIONS[0]);

  // Map coordinates scaled to an 800x800 SVG canvas:
  // Meghalaya: (660, 310)
  // Maharashtra: (270, 480)
  // Kerala: (280, 710)
  // Rajasthan: (210, 290)
  // Karnataka: (280, 600)
  const pinCoordinates: Record<string, { x: number; y: number }> = {
    meghalaya: { x: 670, y: 310 },
    maharashtra: { x: 270, y: 480 },
    kerala: { x: 270, y: 720 },
    rajasthan: { x: 210, y: 290 },
    karnataka: { x: 280, y: 610 }
  };

  const getCategoryForRegion = (regionId: string): string => {
    switch (regionId) {
      case 'meghalaya':
        return 'turmeric';
      case 'maharashtra':
        return 'millets';
      case 'kerala':
        return 'oils';
      case 'rajasthan':
        return 'oils';
      case 'karnataka':
        return 'herbal';
      default:
        return 'all';
    }
  };

  return (
    <section id="origins-map" className="py-24 bg-[#FAF6EE] border-t border-[#16352B]/10 relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D89B28]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B95F3B] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B95F3B]" />
            <span>Terroir & Traceability</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16352B] tracking-tight [text-wrap:balance]">
            Where India Grows Her Best
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#202522]/75 max-w-xl mx-auto">
            We don’t buy from industrial aggregators. Explore the 5 native bio-zones across India where Aaranya partners with family farms.
          </p>
        </div>

        {/* Interactive Map & Sourcing Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Interactive Stylized Map of India */}
          <div className="lg:col-span-7 bg-[#F7F1E5] rounded-2xl border border-[#16352B]/15 p-6 sm:p-8 shadow-lg relative">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#16352B]/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16352B] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#B95F3B]" />
                Interactive India Terroir Map
              </span>
              <span className="text-[11px] text-[#202522]/60 font-medium">Click any glowing pin</span>
            </div>

            {/* SVG Canvas for India Map */}
            <div className="relative aspect-[4/4] max-w-[550px] mx-auto flex items-center justify-center">
              <svg
                viewBox="0 0 800 800"
                className="w-full h-full drop-shadow-md select-none"
                style={{ filter: 'drop-shadow(0 4px 12px rgba(22, 53, 43, 0.08))' }}
              >
                {/* Stylized geometric geographical outline of India */}
                <path
                  d="M 280 80 
                     L 320 80 
                     L 340 110 
                     L 380 130 
                     L 430 180 
                     L 480 200 
                     L 540 220 
                     L 580 230 
                     L 640 240 
                     L 720 230 
                     L 760 270 
                     L 750 310 
                     L 680 340 
                     L 660 380 
                     L 630 360 
                     L 590 320 
                     L 540 330 
                     L 500 370 
                     L 460 390 
                     L 430 440 
                     L 420 510 
                     L 390 580 
                     L 340 680 
                     L 300 760 
                     L 280 770 
                     L 260 740 
                     L 240 680 
                     L 240 600 
                     L 230 520 
                     L 200 480 
                     L 160 440 
                     L 140 380 
                     L 160 320 
                     L 180 280 
                     L 210 240 
                     L 240 180 
                     L 250 120 
                     Z"
                  fill="#EFE7D7"
                  stroke="#16352B"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  className="transition-colors"
                />

                {/* Internal topographic contour ridges */}
                <path
                  d="M 280 140 Q 340 200 440 220 T 600 280"
                  fill="none"
                  stroke="#D89B28"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  opacity="0.6"
                />
                <path
                  d="M 220 380 Q 320 420 440 460"
                  fill="none"
                  stroke="#89977B"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  opacity="0.5"
                />
                <path
                  d="M 240 540 Q 290 620 310 720"
                  fill="none"
                  stroke="#B95F3B"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  opacity="0.5"
                />

                {/* Sourcing Region Pins */}
                {SOURCING_REGIONS.map((region) => {
                  const coords = pinCoordinates[region.id] || region.svgCoordinates;
                  const isSelected = selectedRegion.id === region.id;

                  return (
                    <g
                      key={region.id}
                      className="cursor-pointer group"
                      onClick={() => setSelectedRegion(region)}
                    >
                      {/* Outer animated radar pulse ring for selected */}
                      {isSelected && (
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r="26"
                          fill="none"
                          stroke={region.accentColor}
                          strokeWidth="2"
                          opacity="0.6"
                          className="animate-ping origin-center"
                        />
                      )}

                      {/* Halo background */}
                      <circle
                        cx={coords.x}
                        cy={coords.y}
                        r={isSelected ? "14" : "10"}
                        fill={region.accentColor}
                        opacity={isSelected ? "0.3" : "0.2"}
                        className="transition-all duration-300"
                      />

                      {/* Core pin circle */}
                      <circle
                        cx={coords.x}
                        cy={coords.y}
                        r={isSelected ? "7" : "5"}
                        fill={region.accentColor}
                        stroke="#FAF6EE"
                        strokeWidth="2"
                        className="transition-all duration-300 group-hover:scale-125"
                      />

                      {/* Region Label Tag on map */}
                      <text
                        x={coords.x}
                        y={coords.y - 12}
                        textAnchor="middle"
                        fill="#16352B"
                        fontSize={isSelected ? "12" : "10"}
                        fontWeight={isSelected ? "700" : "600"}
                        fontFamily="sans-serif"
                        className="transition-all"
                      >
                        {region.name}
                      </text>
                      <text
                        x={coords.x}
                        y={coords.y + 18}
                        textAnchor="middle"
                        fill="#B95F3B"
                        fontSize="9"
                        fontWeight="600"
                        fontFamily="sans-serif"
                      >
                        {region.ingredient.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Quick Sourcing Selector Bar */}
            <div className="mt-4 pt-4 border-t border-[#16352B]/10 flex flex-wrap items-center gap-2 justify-center">
              {SOURCING_REGIONS.map((r) => {
                const active = r.id === selectedRegion.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRegion(r)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      active
                        ? 'bg-[#16352B] text-[#FAF6EE] shadow-sm'
                        : 'bg-[#FAF6EE] text-[#16352B] hover:bg-white border border-[#16352B]/10'
                    }`}
                  >
                    {r.name} · {r.ingredient.split('&')[0]}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right: Sourcing Dossier for Selected Region */}
          <div className="lg:col-span-5 bg-[#FAF6EE] rounded-2xl border border-[#16352B]/15 p-6 sm:p-8 shadow-xl">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#89977B] mb-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B95F3B]" />
                {selectedRegion.name}, India
              </span>
              <span className="text-[#D89B28] font-bold">
                {selectedRegion.curcuminOrKeyMetric}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-3xl font-bold text-[#16352B] mb-1">
              {selectedRegion.ingredient}
            </h3>
            <p className="text-xs text-[#B95F3B] font-semibold mb-4">
              {selectedRegion.productType}
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#202522]/85 leading-relaxed mb-6">
              {selectedRegion.description}
            </p>

            {/* Terroir & Agronomic Specs Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6 bg-[#F7F1E5] p-4 rounded-xl border border-[#16352B]/10 text-xs">
              <div>
                <span className="text-[#89977B] block font-medium flex items-center gap-1">
                  <Mountain className="w-3 h-3 text-[#16352B]" /> Elevation
                </span>
                <span className="font-semibold text-[#16352B]">{selectedRegion.elevation}</span>
              </div>
              <div>
                <span className="text-[#89977B] block font-medium flex items-center gap-1">
                  <Sprout className="w-3 h-3 text-[#16352B]" /> Soil Profile
                </span>
                <span className="font-semibold text-[#16352B]">{selectedRegion.soil}</span>
              </div>
              <div className="col-span-2 pt-2 border-t border-[#16352B]/10">
                <span className="text-[#89977B] block font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#16352B]" /> Harvest Window
                </span>
                <span className="font-semibold text-[#16352B]">{selectedRegion.harvestMonth}</span>
              </div>
            </div>

            {/* Farmer Collective note */}
            <div className="mb-6 text-xs text-[#202522]/75 border-l-2 border-[#D89B28] pl-3 py-1">
              <span className="font-bold text-[#16352B] block">Partner Collective:</span>
              {selectedRegion.farmerGroup}
            </div>

            {/* CTA to view products from this region */}
            <button
              onClick={() => {
                if (onSelectRegionProducts) {
                  onSelectRegionProducts(getCategoryForRegion(selectedRegion.id));
                }
                const pEl = document.getElementById('products');
                if (pEl) pEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3 px-4 bg-[#16352B] hover:bg-[#20463A] text-[#FAF6EE] text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Explore Products from {selectedRegion.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
