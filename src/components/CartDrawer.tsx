import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, Tag, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: (appliedDiscount: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponMessage, setCouponMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 799;
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = subtotal > 0 && !isFreeShipping ? 80 : 0;
  const total = subtotal - discountAmount + shippingFee;
  const neededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'AARANYA10') {
      setAppliedDiscount(0.1);
      setCouponMessage('10% Indian Heritage discount applied!');
    } else {
      setCouponMessage('Invalid code. Try "AARANYA10" for 10% off.');
      setTimeout(() => setCouponMessage(null), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6EE] shadow-2xl flex flex-col border-l border-[#16352B]/10 animate-in slide-in-from-right duration-300">
          
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-[#16352B]/10 flex items-center justify-between bg-[#F7F1E5]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#16352B]" />
              <h2 className="font-display text-xl font-bold text-[#16352B]">
                Your Organic Pantry Bag
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#202522] hover:text-[#B95F3B] transition-colors rounded-full hover:bg-black/5"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#FAF6EE] px-6 py-3 border-b border-[#16352B]/10 text-xs">
            {isFreeShipping ? (
              <p className="text-emerald-800 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D89B28]" />
                Congratulations! You’ve unlocked Free Pan-India Delivery.
              </p>
            ) : (
              <div>
                <p className="text-[#202522]/80 font-medium mb-1.5">
                  Add <span className="font-bold text-[#16352B] tabular-nums">₹{neededForFreeShipping}</span> more for <span className="text-[#B95F3B] font-semibold">Free Pan-India Delivery</span>
                </p>
                <div className="w-full bg-[#16352B]/10 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#16352B] h-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#16352B]/10">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-[#16352B]/5 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-[#89977B]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#16352B] mb-1">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#202522]/60 max-w-xs mb-6">
                  Explore our small-batch Lakadong turmeric, wood-pressed oils, and ancient grains.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#16352B] text-[#FAF6EE] text-xs font-semibold rounded-lg hover:bg-[#20463A] transition-colors"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-4 items-center">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-18 h-18 object-cover rounded-lg border border-[#16352B]/10 bg-white shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-base font-bold text-[#16352B] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-[#89977B] font-medium">
                      {item.product.weight} · <span className="tabular-nums font-semibold text-[#16352B]">₹{item.product.price}</span>
                    </p>

                    {/* Stepper Controls */}
                    <div className="flex items-center gap-3 mt-2.5">
                      <div className="flex items-center border border-[#16352B]/20 rounded-md bg-white overflow-hidden text-xs">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-[#16352B] hover:bg-[#F7F1E5]"
                        >
                          -
                        </button>
                        <span className="px-2 py-1 font-semibold tabular-nums min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-[#16352B] hover:bg-[#F7F1E5]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-xs text-[#B95F3B] hover:underline flex items-center gap-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-display text-base font-bold text-[#16352B] tabular-nums">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Subtotal, Coupon & Checkout */}
          {cart.length > 0 && (
            <div className="px-6 py-5 border-t border-[#16352B]/10 bg-[#F7F1E5] space-y-4">
              
              {/* Promo code input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-[#89977B] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Coupon code (Try: AARANYA10)"
                    className="w-full pl-8 pr-3 py-2 bg-white border border-[#16352B]/15 rounded-lg text-xs placeholder:text-[#202522]/40 focus:outline-none focus:border-[#16352B]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#16352B] text-white text-xs font-semibold rounded-lg hover:bg-[#20463A] transition-colors"
                >
                  Apply
                </button>
              </form>

              {couponMessage && (
                <p className="text-[11px] text-[#B95F3B] font-medium">{couponMessage}</p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#202522]/80 pt-2 border-t border-[#16352B]/10">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold tabular-nums text-[#16352B]">₹{subtotal}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-semibold">
                    <span>Aaranya Heritage Discount (10%)</span>
                    <span className="tabular-nums">-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Pan-India Delivery</span>
                  <span className="font-semibold tabular-nums text-[#16352B]">
                    {shippingFee === 0 ? <span className="text-emerald-800">FREE</span> : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#16352B] pt-2 border-t border-[#16352B]/10">
                  <span className="font-display">Total Due</span>
                  <span className="font-display tabular-nums">₹{total}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={() => {
                  onProceedToCheckout(appliedDiscount);
                }}
                className="w-full py-3.5 px-4 bg-[#16352B] hover:bg-[#20463A] text-[#FAF6EE] text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#202522]/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>UPI, Cards & Cash on Delivery Accepted</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
