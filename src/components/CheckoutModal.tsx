import React, { useState } from 'react';
import { X, Check, ShieldCheck, Truck, CreditCard, Smartphone, Banknote, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  discount: number;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  discount,
  onOrderSuccess
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    landmark: '',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411004',
    paymentMethod: 'upi'
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * discount);
  const shippingFee = subtotal >= 799 ? 0 : 80;
  const total = subtotal - discountAmount + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `AAR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setOrderPlaced(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Fallback
    }

    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF6EE] rounded-2xl shadow-2xl border border-[#16352B]/15 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#16352B]/10 flex items-center justify-between bg-[#F7F1E5]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#16352B]" />
            <h3 className="font-display text-lg font-bold text-[#16352B]">
              {orderPlaced ? 'Order Confirmed' : 'Pan-India Delivery & Checkout'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#202522] hover:text-[#B95F3B] transition-colors rounded-full"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderPlaced ? (
          /* Order Confirmation View */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#B95F3B] font-bold">
                Order Successful
              </p>
              <h2 className="font-display text-3xl font-bold text-[#16352B] mt-1">
                Dhanyavaad! Your order is placed.
              </h2>
              <p className="text-xs sm:text-sm text-[#202522]/80 mt-2 max-w-md mx-auto">
                We are preparing your small-batch organic harvest at our Pune dispatch facility. A confirmation SMS and WhatsApp update has been sent.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-[#F7F1E5] rounded-xl p-5 border border-[#16352B]/10 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between font-mono text-[11px] pb-2 border-b border-[#16352B]/10">
                <span className="text-[#89977B]">Order Reference:</span>
                <span className="font-bold text-[#16352B]">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Destination:</span>
                <span className="font-semibold text-[#16352B]">{formData.city}, {formData.state} - {formData.pincode}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery:</span>
                <span className="font-semibold text-[#16352B]">2 to 4 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Mode:</span>
                <span className="font-semibold uppercase text-[#16352B]">{formData.paymentMethod}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#16352B]/10 text-sm font-bold text-[#16352B]">
                <span>Total Paid:</span>
                <span className="tabular-nums">₹{total}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#16352B] text-[#FAF6EE] text-xs font-semibold rounded-lg hover:bg-[#20463A] transition-colors"
            >
              Continue Exploring Products
            </button>
          </div>
        ) : (
          /* Address & Payment Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Recipient Details */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#16352B] mb-3">
                1. Delivery Address (India)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[11px] font-semibold text-[#202522] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#16352B]/15 rounded-lg text-xs focus:outline-none focus:border-[#16352B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#202522] mb-1">
                    Mobile Phone (+91) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#16352B]/15 rounded-lg text-xs focus:outline-none focus:border-[#16352B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-semibold text-[#202522] mb-1">
                    Street Address & House / Flat No. *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Flat 402, Anand Vihar, Prabhat Road"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#16352B]/15 rounded-lg text-xs focus:outline-none focus:border-[#16352B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#202522] mb-1">
                    City / District *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#16352B]/15 rounded-lg text-xs focus:outline-none focus:border-[#16352B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#202522] mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#16352B]/15 rounded-lg text-xs focus:outline-none focus:border-[#16352B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#202522] mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#16352B]/15 rounded-lg text-xs focus:outline-none focus:border-[#16352B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#202522] mb-1">
                    Email for Lab QR & Invoice
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#16352B]/15 rounded-lg text-xs focus:outline-none focus:border-[#16352B]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#16352B] mb-3">
                2. Select Payment Method
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <label className={`p-3 rounded-lg border text-xs flex items-center gap-2 cursor-pointer transition-colors ${
                  formData.paymentMethod === 'upi' ? 'bg-[#16352B] text-white border-[#16352B]' : 'bg-white border-[#16352B]/15 text-[#202522]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="sr-only"
                  />
                  <Smartphone className="w-4 h-4" />
                  <span className="font-semibold">UPI / GPay / QR</span>
                </label>

                <label className={`p-3 rounded-lg border text-xs flex items-center gap-2 cursor-pointer transition-colors ${
                  formData.paymentMethod === 'cards' ? 'bg-[#16352B] text-white border-[#16352B]' : 'bg-white border-[#16352B]/15 text-[#202522]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cards"
                    checked={formData.paymentMethod === 'cards'}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="sr-only"
                  />
                  <CreditCard className="w-4 h-4" />
                  <span className="font-semibold">Debit / Cards</span>
                </label>

                <label className={`p-3 rounded-lg border text-xs flex items-center gap-2 cursor-pointer transition-colors ${
                  formData.paymentMethod === 'cod' ? 'bg-[#16352B] text-white border-[#16352B]' : 'bg-white border-[#16352B]/15 text-[#202522]'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="sr-only"
                  />
                  <Banknote className="w-4 h-4" />
                  <span className="font-semibold">Cash on Delivery</span>
                </label>
              </div>
            </div>

            {/* Bottom Total & Submit */}
            <div className="pt-4 border-t border-[#16352B]/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#202522]/60 block">Total Payable</span>
                <span className="font-display text-2xl font-bold text-[#16352B] tabular-nums">
                  ₹{total}
                </span>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-[#16352B] hover:bg-[#20463A] text-[#FAF6EE] text-xs font-semibold rounded-lg flex items-center gap-2 shadow-md cursor-pointer transition-colors"
              >
                <span>Confirm & Place Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
