/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ProductShowcase } from './components/ProductShowcase';
import { ProductModal } from './components/ProductModal';
import { IngredientJourney3D } from './components/IngredientJourney3D';
import { BrandStory } from './components/BrandStory';
import { WhyAaranya } from './components/WhyAaranya';
import { IndiaMapSection } from './components/IndiaMapSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { B2BModal } from './components/B2BModal';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data/products';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 } // Preloaded with Lakadong Turmeric for immediate engagement
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isB2BOpen, setIsB2BOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${quantity}x ${product.name} to bag`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleProceedToCheckout = (discount: number) => {
    setAppliedDiscount(discount);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCart([]);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#202522] selection:bg-[#D89B28]/25 selection:text-[#16352B]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#16352B] text-[#FAF6EE] px-4 py-3 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2 border border-white/10 animate-in fade-in slide-in-from-bottom duration-200">
          <span className="w-2 h-2 rounded-full bg-[#D89B28]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenB2B={() => setIsB2BOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero */}
        <Hero
          onExploreProducts={() => scrollTo('products')}
          onExploreStory={() => scrollTo('story')}
        />

        {/* 2. Trust Section */}
        <TrustSection />

        {/* 3. Product Showcase */}
        <ProductShowcase
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={handleAddToCart}
        />

        {/* 4. Brand Story */}
        <BrandStory />

        {/* 5. Interactive Ingredient Section (The WOW Section) */}
        <IngredientJourney3D />

        {/* 6. Why Aaranya */}
        <WhyAaranya />

        {/* 7. Interactive India Map */}
        <IndiaMapSection
          onSelectRegionProducts={() => scrollTo('products')}
        />

        {/* 8. Final CTA */}
        <FinalCTA
          onShopClick={() => scrollTo('products')}
          onOpenB2B={() => setIsB2BOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={() => scrollTo('products')}
        onOpenB2B={() => setIsB2BOpen(true)}
      />

      {/* Overlays & Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        discount={appliedDiscount}
        onOrderSuccess={handleOrderSuccess}
      />

      <B2BModal
        isOpen={isB2BOpen}
        onClose={() => setIsB2BOpen(false)}
      />
    </div>
  );
}
