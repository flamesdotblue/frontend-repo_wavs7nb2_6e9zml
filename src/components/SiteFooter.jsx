import React from 'react';

const SiteFooter = () => {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Gotham, Mona Sans, Inter, system-ui, sans-serif' }}>About</h4>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Ninelooks brings curated fashion from emerging and established designers,
              blending contemporary aesthetics with everyday comfort.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Gotham, Mona Sans, Inter, system-ui, sans-serif' }}>Help</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-black" href="#shipping">Shipping & Returns</a></li>
              <li><a className="hover:text-black" href="#size">Size Guide</a></li>
              <li><a className="hover:text-black" href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Gotham, Mona Sans, Inter, system-ui, sans-serif' }}>Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-black" href="#about">Our Story</a></li>
              <li><a className="hover:text-black" href="#careers">Careers</a></li>
              <li><a className="hover:text-black" href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Gotham, Mona Sans, Inter, system-ui, sans-serif' }}>Newsletter</h4>
            <p className="mt-3 text-sm text-gray-600">Get updates about new drops and offers.</p>
            <form className="mt-3 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
              />
              <button
                type="submit"
                className="rounded-r-md bg-black text-white px-4 text-sm font-medium hover:bg-gray-900"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-black/5 pt-6 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Ninelooks. All rights reserved.</p>
          <p>Designed with a modern minimalist aesthetic.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
