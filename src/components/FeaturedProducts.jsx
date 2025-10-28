import React from 'react';

const products = [
  {
    id: 1,
    name: 'Textured Linen Shirt',
    price: '₹4,990',
    image: 'https://images.unsplash.com/photo-1721098122816-61155953ec0c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZXh0dXJlZCUyMExpbmVuJTIwU2hpcnR8ZW58MHwwfHx8MTc2MTYzNjg4N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'New',
  },
  {
    id: 2,
    name: 'Minimal Leather Tote',
    price: '₹8,450',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1400&auto=format&fit=crop',
    tag: 'Bestseller',
  },
  {
    id: 3,
    name: 'Pleated Midi Skirt',
    price: '₹5,990',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Premium White Sneakers',
    price: '₹6,990',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop',
  },
];

const FeaturedProducts = () => {
  return (
    <section id="featured" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900" style={{ fontFamily: 'Gotham, Mona Sans, Inter, system-ui, sans-serif' }}>
            Featured Picks
          </h2>
          <a href="#shop-all" className="text-sm text-gray-700 hover:text-black">Shop all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <a key={product.id} href={`#product-${product.id}`} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {product.tag && (
                  <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-black/80 text-white text-xs px-2.5 py-1">
                    {product.tag}
                  </span>
                )}
                <div className="p-4">
                  <h3 className="text-gray-900 font-medium truncate">{product.name}</h3>
                  <p className="mt-1 text-gray-700">{product.price}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
