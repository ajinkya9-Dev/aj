import React, { useState } from 'react';
import { ShoppingBag, Eye, MapPin, Sparkles, Check } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface ProductShowcaseProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Essentials' },
    { id: 'turmeric', label: 'Turmeric' },
    { id: 'oils', label: 'Cold-Pressed Oils' },
    { id: 'millets', label: 'Ancient Millets' },
    { id: 'herbal', label: 'Herbal Blends' },
    { id: 'snacks', label: 'Healthy Snacks' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="products" className="py-20 bg-[#F7F1E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#16352B]/10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B95F3B] block mb-2">
              Sourced Across Indian Terroirs
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16352B] tracking-tight">
              Rooted in Nature
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#202522]/70 max-w-md">
            Small-batch, single-origin essentials produced without synthetic pesticides or high-heat industrial refining.
          </p>
        </div>

        {/* Interactive Filter Controls (Segmented bar allowed by frontend constitution) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#16352B] text-[#FAF6EE] shadow-sm'
                    : 'bg-[#FAF6EE] text-[#202522]/80 hover:bg-[#FAF6EE]/80 border border-[#16352B]/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isAdded = addedId === product.id;
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group bg-[#FAF6EE] rounded-xl border border-[#16352B]/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#16352B]/25 cursor-pointer relative"
              >
                {/* Visual Section (65%-70% height) */}
                <div className="relative aspect-[4/3] bg-[#EFE9DC] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Curcumin / Purity Marker */}
                  {product.curcuminOrPurity && (
                    <div className="absolute top-3 left-3 bg-[#FAF6EE]/95 text-[#16352B] text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-[#16352B]/10 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#D89B28]" />
                      <span>{product.curcuminOrPurity}</span>
                    </div>
                  )}

                  {/* Quick View Button on Hover */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-[11px] font-semibold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded flex items-center gap-1">
                      <Eye className="w-3 h-3" /> Quick View
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata: Category · Origin */}
                    <div className="flex items-center gap-1.5 text-[11px] text-[#89977B] font-medium mb-1.5">
                      <span className="uppercase tracking-wider font-semibold text-[#B95F3B]">
                        {product.categoryLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate flex items-center gap-0.5">
                        <MapPin className="w-2.5 h-2.5 shrink-0" />
                        {product.origin.split(',')[0]}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-[#16352B] group-hover:text-[#B95F3B] transition-colors leading-snug line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#202522]/70 mt-1 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Bottom: Price baseline & Add to Cart button */}
                  <div className="mt-4 pt-3 border-t border-[#16352B]/10 flex items-center justify-between">
                    <div>
                      <span className="font-display text-lg font-bold text-[#16352B] tabular-nums">
                        ₹{product.price}
                      </span>
                      <span className="text-[11px] text-[#202522]/60 ml-1">/ {product.weight}</span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(product, e)}
                      aria-label={`Add ${product.name} to cart`}
                      className={`p-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#16352B] text-[#FAF6EE] hover:bg-[#20463A]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
