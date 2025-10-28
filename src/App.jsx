import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoryShowcase from './components/CategoryShowcase';
import FeaturedProducts from './components/FeaturedProducts';
import SiteFooter from './components/SiteFooter';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <CategoryShowcase />
        <FeaturedProducts />
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
