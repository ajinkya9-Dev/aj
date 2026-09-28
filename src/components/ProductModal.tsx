import React, { useState } from 'react';
import { X, Check, ShoppingBag, ShieldCheck, MapPin, Calendar, Award } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FAF6EE] rounded-2xl shadow-2xl border border-[#16352B]/15 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#202522] hover:text-[#B95F3B] bg-[#FAF6EE]/80 rounded-full border border-[#16352B]/10 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left: Product Image & Origin Seal */}
          <div className="md:col-span-5 bg-[#F7F1E5] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#16352B]/10">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-inner bg-white/40 mb-4">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {product.curcuminOrPurity && (
                <div className="absolute top-3 left-3 bg-[#16352B] text-[#FAF6EE] text-[11px] font-semibold px-2.5 py-1 rounded shadow-sm">
                  {product.curcuminOrPurity}
                </div>
              )}
            </div>

            <div className="space-y-2 text-xs text-[#202522]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B95F3B]" />
                <span className="font-semibold text-[#16352B]">Origin:</span>
                <span>{product.origin}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#89977B]" />
                <span className="font-semibold text-[#16352B]">Harvest:</span>
                <span>{product.harvestSeason}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D89B28]" />
                <span className="font-semibold text-[#16352B]">Lab Batch:</span>
                <span className="font-mono text-[10px]">{product.labTestedBatch}</span>
              </div>
            </div>
          </div>

          {/* Right: Product Narrative, Specs & Purchase */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between text-xs text-[#89977B] uppercase tracking-wider font-semibold mb-1">
                <span>{product.categoryLabel}</span>
                <span className="text-[#16352B] flex items-center gap-1 font-mono lowercase tracking-normal">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" /> In Stock
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#16352B] mb-1">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#B95F3B] font-medium mb-4">
                {product.tagline}
              </p>

              {/* Price & Weight */}
              <div className="flex items-baseline gap-3 mb-4 pb-4 border-b border-[#16352B]/10">
                <span className="font-display text-3xl font-bold text-[#16352B] tabular-nums">
                  ₹{product.price}
                </span>
                <span className="text-xs text-[#202522]/60 font-medium">
                  inclusive of all taxes / {product.weight}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#202522]/85 leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Key Benefits */}
              <div className="mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#16352B] mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#D89B28]" /> Key Botanical Benefits
                </h4>
                <ul className="space-y-1.5">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="text-xs text-[#202522]/80 flex items-start gap-2">
                      <span className="text-[#B95F3B] mt-0.5">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingredients */}
              <div className="text-xs text-[#202522]/70 mb-6 bg-[#F7F1E5] p-3 rounded-lg border border-[#16352B]/10">
                <span className="font-semibold text-[#16352B]">Single-Origin Ingredients: </span>
                {product.ingredients.join(', ')}
              </div>
            </div>

            {/* Quantity Selector & Add to Cart Module */}
            <div className="pt-4 border-t border-[#16352B]/10 flex items-center gap-4">
              <div className="flex items-center border border-[#16352B]/20 rounded-lg bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-sm text-[#16352B] hover:bg-[#F7F1E5] transition-colors"
                >
                  -
                </button>
                <span className="px-3 py-2 text-xs font-semibold tabular-nums min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-sm text-[#16352B] hover:bg-[#F7F1E5] transition-colors"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  added
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#16352B] hover:bg-[#20463A] text-[#FAF6EE] shadow-md'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag • ₹{product.price * quantity}</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
