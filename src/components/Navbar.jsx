import React from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Ninelooks Logo"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                // Fallback to brand text if logo isn't available yet
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('brand-fallback');
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <span
              id="brand-fallback"
              className="hidden text-xl font-semibold tracking-wide"
              style={{ fontFamily: 'Gotham, Mona Sans, Inter, system-ui, sans-serif' }}
            >
              Ninelooks
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ fontFamily: 'Gotham, Mona Sans, Inter, system-ui, sans-serif' }}>
            <a href="#new" className="text-gray-700 hover:text-black transition">New In</a>
            <a href="#women" className="text-gray-700 hover:text-black transition">Women</a>
            <a href="#men" className="text-gray-700 hover:text-black transition">Men</a>
            <a href="#accessories" className="text-gray-700 hover:text-black transition">Accessories</a>
            <a href="#sale" className="text-red-600 hover:text-red-700 font-medium transition">Sale</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="p-2 hover:bg-black/5 rounded-full transition">
              <Search className="h-5 w-5 text-gray-700" />
            </button>
            <button aria-label="Account" className="p-2 hover:bg-black/5 rounded-full transition">
              <User className="h-5 w-5 text-gray-700" />
            </button>
            <button aria-label="Cart" className="p-2 hover:bg-black/5 rounded-full transition">
              <ShoppingBag className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
