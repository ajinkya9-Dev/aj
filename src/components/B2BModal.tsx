import React, { useState } from 'react';
import { X, Check, Building2, Package, Mail, Phone, FileText } from 'lucide-react';

interface B2BModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const B2BModal: React.FC<B2BModalProps> = ({ isOpen, onClose }) => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('hotel');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [monthlyVolume, setMonthlyVolume] = useState('25-50 kg');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#FAF6EE] rounded-2xl shadow-2xl border border-[#16352B]/15 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-[#16352B]/10 flex items-center justify-between bg-[#F7F1E5]">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#16352B]" />
            <h3 className="font-display text-lg font-bold text-[#16352B]">
              Institutional & HoReCa Supply
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#202522] hover:text-[#B95F3B] transition-colors rounded-full"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="font-display text-2xl font-bold text-[#16352B]">
              Wholesale Sample Kit Requested!
            </h4>
            <p className="text-xs sm:text-sm text-[#202522]/80 max-w-md mx-auto">
              Our B2B Institutional team in Pune will contact {contactName} at {businessName} with our HoReCa price ledger and dispatch a tasting sampler kit within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 text-xs">
            <p className="text-[#202522]/80 leading-relaxed mb-4">
              We supply boutique luxury hotels, farm-to-table restaurants, and organic gourmet grocers with bulk Lakadong turmeric, single-press cold-extracted oils, and unpolished millets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#16352B] mb-1">
                  Business / Establishment Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Taj Heritage / Sula Kitchen"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#16352B]/15 rounded-lg focus:outline-none focus:border-[#16352B]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#16352B] mb-1">
                  Establishment Type *
                </label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#16352B]/15 rounded-lg focus:outline-none focus:border-[#16352B]"
                >
                  <option value="hotel">Boutique Hotel / Resort</option>
                  <option value="restaurant">Farm-to-Table Restaurant / Cafe</option>
                  <option value="grocery">Premium Grocery / Organic Retailer</option>
                  <option value="wellness">Ayurvedic Spa / Wellness Clinic</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#16352B] mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Executive Chef Vikram"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#16352B]/15 rounded-lg focus:outline-none focus:border-[#16352B]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#16352B] mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 00000"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#16352B]/15 rounded-lg focus:outline-none focus:border-[#16352B]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[11px] font-semibold text-[#16352B] mb-1">
                  Official Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="purchasing@company.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#16352B]/15 rounded-lg focus:outline-none focus:border-[#16352B]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[11px] font-semibold text-[#16352B] mb-1">
                  Estimated Monthly Sourcing Volume
                </label>
                <select
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#16352B]/15 rounded-lg focus:outline-none focus:border-[#16352B]"
                >
                  <option value="sampler">Sampler Kit Only (500g each category)</option>
                  <option value="15-30">15 – 30 kg / Litres Monthly</option>
                  <option value="30-100">30 – 100 kg / Litres Monthly</option>
                  <option value="100+">100+ kg Bulk Food Service</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-[#16352B]/10 flex items-center justify-between">
              <span className="text-[11px] text-[#89977B]">
                Direct GST Invoicing & Lab Certificates Included
              </span>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#16352B] hover:bg-[#20463A] text-[#FAF6EE] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Request Sample Kit & Catalog
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
