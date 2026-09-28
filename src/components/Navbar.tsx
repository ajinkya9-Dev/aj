import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenB2B: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cart, onOpenCart, onOpenB2B }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F1E5]/95 backdrop-blur-md shadow-sm border-b border-[#16352B]/10 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16352B] rounded-sm"
          >
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#16352B] transition-colors group-hover:text-[#B95F3B]">
              Aaranya Organics
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#202522]">
            <button
              onClick={() => scrollTo('products')}
              className="hover:text-[#B95F3B] transition-colors cursor-pointer py-1"
            >
              Products
            </button>
            <button
              onClick={() => scrollTo('process')}
              className="hover:text-[#B95F3B] transition-colors cursor-pointer py-1"
            >
              The Process
            </button>
            <button
              onClick={() => scrollTo('story')}
              className="hover:text-[#B95F3B] transition-colors cursor-pointer py-1"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollTo('origins-map')}
              className="hover:text-[#B95F3B] transition-colors cursor-pointer py-1"
            >
              Sourcing Map
            </button>
            <button
              onClick={() => scrollTo('why-aaranya')}
              className="hover:text-[#B95F3B] transition-colors cursor-pointer py-1"
            >
              Why Aaranya
            </button>
            <button
              onClick={onOpenB2B}
              className="hover:text-[#B95F3B] transition-colors cursor-pointer py-1 text-[#89977B]"
            >
              Wholesale / HoReCa
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('products')}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#16352B] bg-[#16352B]/5 hover:bg-[#16352B]/10 rounded-full transition-colors font-medium"
              title="Search products"
            >
              <Search className="w-3.5 h-3.5 text-[#16352B]" />
              <span>Search</span>
            </button>

            <button
              onClick={onOpenCart}
              aria-label="View shopping bag"
              className="relative p-2 text-[#16352B] hover:text-[#B95F3B] transition-colors rounded-full hover:bg-[#16352B]/5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16352B]"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#B95F3B] text-white text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => scrollTo('products')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#F7F1E5] bg-[#16352B] rounded-lg hover:bg-[#20463A] transition-colors whitespace-nowrap shadow-sm"
            >
              <span>Explore Range</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#16352B] rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#202522]/60 backdrop-blur-sm md:hidden">
          <div className="fixed top-16 right-0 left-0 bg-[#F7F1E5] border-b border-[#16352B]/15 p-6 shadow-xl space-y-4">
            <div className="flex flex-col gap-3 font-medium text-base text-[#16352B]">
              <button
                onClick={() => scrollTo('products')}
                className="text-left py-2 border-b border-[#16352B]/10 hover:text-[#B95F3B]"
              >
                Products & Pantry
              </button>
              <button
                onClick={() => scrollTo('process')}
                className="text-left py-2 border-b border-[#16352B]/10 hover:text-[#B95F3B]"
              >
                The Lakadong Process (3D)
              </button>
              <button
                onClick={() => scrollTo('story')}
                className="text-left py-2 border-b border-[#16352B]/10 hover:text-[#B95F3B]"
              >
                Our Story & Farmers
              </button>
              <button
                onClick={() => scrollTo('origins-map')}
                className="text-left py-2 border-b border-[#16352B]/10 hover:text-[#B95F3B]"
              >
                India Sourcing Map
              </button>
              <button
                onClick={() => scrollTo('why-aaranya')}
                className="text-left py-2 border-b border-[#16352B]/10 hover:text-[#B95F3B]"
              >
                Why Aaranya
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenB2B();
                }}
                className="text-left py-2 text-[#B95F3B] font-semibold"
              >
                Wholesale & Restaurant Supply
              </button>
            </div>
            <div className="pt-2">
              <button
                onClick={() => scrollTo('products')}
                className="w-full py-3 bg-[#16352B] text-white text-sm font-semibold rounded-lg text-center"
              >
                Explore Products
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
