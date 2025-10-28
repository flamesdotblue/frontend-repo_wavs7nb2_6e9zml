import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] sm:h-[85vh] lg:h-[90vh] overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (non-interactive so Spline remains usable) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <div className="max-w-3xl">
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight"
              style={{ fontFamily: 'Gotham, Mona Sans, Inter, system-ui, sans-serif' }}
            >
              Elevate your everyday style with modern luxury essentials
            </h1>
            <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-2xl">
              Discover curated collections inspired by global trends. Meticulous craftsmanship,
              premium materials, and timeless silhouettes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#featured"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-900 transition"
              >
                Shop Featured
              </a>
              <a
                href="#new"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-gray-900/20 text-gray-900 text-sm font-medium hover:border-gray-900/40 hover:bg-gray-900/5 transition"
              >
                New Arrivals
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
