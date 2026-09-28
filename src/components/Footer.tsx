import React, { useState } from 'react';
import { Mail, Check, ArrowRight, MapPin, Phone, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onOpenB2B: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenB2B }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3500);
      setEmail('');
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121915] text-[#FAF6EE] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Ethos */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-display text-3xl font-bold tracking-tight text-[#FAF6EE] block">
              Aaranya Organics
            </span>
            <p className="text-xs uppercase tracking-widest text-[#D89B28] font-semibold">
              “Purely Indian. Naturally Better.”
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              Sourcing organic ingredients directly from farmer collectives across India. 
              Traditional Indian preparation paired with modern laboratory batch transparency.
            </p>

            <div className="pt-2 text-xs text-white/70 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D89B28] shrink-0 mt-0.5" />
                <span>Aaranya Organics Pvt. Ltd., Prabhat Road, Shivaji Nagar, Pune, Maharashtra 411004, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D89B28] shrink-0" />
                <span>+91 20 2567 8901 / care@aaranyaorganics.in</span>
              </div>
            </div>
          </div>

          {/* Sourcing & Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D89B28]">
              Product Pantry
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('turmeric');
                    scrollTo('products');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  High-Curcumin Lakadong Turmeric
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('oils');
                    scrollTo('products');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Wood-Pressed Oils (Groundnut, Sesame, Coconut)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('millets');
                    scrollTo('products');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ancient Unpolished Millets (Foxtail, Little, Bajra)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('herbal');
                    scrollTo('products');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Botanical Blends & Mountain Tulsi
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('snacks');
                    scrollTo('products');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Artisanal Roasted Makhana & Millet Cookies
                </button>
              </li>
            </ul>
          </div>

          {/* Traceability & Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D89B28]">
              The Collective
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <button onClick={() => scrollTo('story')} className="hover:text-white transition-colors cursor-pointer">
                  Farmer Partners
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('origins-map')} className="hover:text-white transition-colors cursor-pointer">
                  India Terroir Map
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('process')} className="hover:text-white transition-colors cursor-pointer">
                  Stone Grinding Science
                </button>
              </li>
              <li>
                <button onClick={onOpenB2B} className="text-[#EBC168] hover:underline cursor-pointer font-medium">
                  Hotels & Retail Wholesale
                </button>
              </li>
              <li>
                <span className="text-white/50">FSSAI Lic: 11524022000842</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Seasonal Harvest Dispatch */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D89B28]">
              Harvest Bulletin
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Receive notifications when fresh seasonal winter Lakadong haldi batches and cold-press oils are bottled.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#D89B28] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#D89B28] hover:bg-[#EBC168] text-[#16352B] font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Subscribed to Harvest Notes!</span>
                  </>
                ) : (
                  <>
                    <span>Join Harvest Circle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Aaranya Organics Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Jaivik Bharat Certified</span>
            <span>·</span>
            <span>NPOP Organic Standard</span>
            <span>·</span>
            <span>Made with Indian Soil & Pride</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
