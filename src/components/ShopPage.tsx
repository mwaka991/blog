import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/shop';

interface ShopPageProps {
  onNavigateHome: () => void;
}

export const ShopPage: React.FC<ShopPageProps> = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAgiza = (product: Product) => {
    const message = `Habari, nahitaji kuagiza: ${product.title} (Bei: $${product.price})`;
    const whatsappUrl = `https://wa.me/255623709042?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 select-none">
      {/* Header Banner - No Ads in Shop */}
      <div className="bg-white p-6 sm:p-10 border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-condensed">
            MagazineSpare Store
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Curated print anthologies, all-access digital memberships, photojournalism optics, and field travel essentials. Bofya <strong>AGIZA</strong> kutuma oda yako moja kwa moja kupitia WhatsApp (0623709042).
          </p>
        </div>

        {/* Quick WhatsApp Contact Button */}
        <a
          href="https://wa.me/255623709042?text=Habari,%20nahitaji%20maelezo%20kuhusu%20bidhaa%20za%20dukani"
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 flex items-center gap-2.5 transition-colors shadow-sm self-start md:self-auto shrink-0"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
          </svg>
          <span>WhatsApp Help (0623709042)</span>
        </a>
      </div>

      {/* Products Grid without categories & without ads */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-slate-200 shadow-xs flex flex-col group overflow-hidden hover:border-slate-300 transition-all"
          >
            {/* Image */}
            <div 
              onClick={() => setSelectedProduct(product)}
              className="relative aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {product.originalPrice && (
                <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs">
                  Save ${(product.originalPrice - product.price).toFixed(0)}
                </span>
              )}
            </div>

            {/* Product Body */}
            <div className="p-5 flex-1 flex flex-col">
              {/* Rating */}
              <div className="flex items-center gap-1.5 text-xs text-amber-500 mb-1.5">
                <span>{'★'.repeat(Math.floor(product.rating))}</span>
                <span className="text-slate-500 text-[11px] font-semibold">
                  {product.rating} ({product.reviewsCount} reviews)
                </span>
              </div>

              {/* Title */}
              <h3 
                onClick={() => setSelectedProduct(product)}
                className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors cursor-pointer leading-snug line-clamp-2 font-condensed mb-2"
              >
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                {product.description}
              </p>

              {/* Key Features Bullet points */}
              <ul className="text-[11px] text-slate-500 space-y-1 mb-5 border-t border-slate-100 pt-3">
                {product.features.slice(0, 2).map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="truncate">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Price & AGIZA button */}
              <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-extrabold text-slate-950 font-condensed">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-emerald-600 font-semibold block">
                    In Stock · WhatsApp Delivery
                  </span>
                </div>

                {/* AGIZA button directly opening WhatsApp */}
                <button
                  onClick={() => handleAgiza(product)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 transition-colors cursor-pointer rounded-xs shadow-xs flex items-center gap-1.5"
                  title="Agiza kupitia WhatsApp 0623709042"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                  </svg>
                  <span>AGIZA</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="w-full max-w-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 text-xl font-mono"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] bg-slate-100 rounded-xs overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-slate-900 font-condensed mt-1 mb-2">
                  {selectedProduct.title}
                </h2>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-extrabold text-slate-900 font-condensed">
                    ${selectedProduct.price.toFixed(2)}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      ${selectedProduct.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {selectedProduct.description}
                </p>

                <h4 className="text-xs font-bold uppercase text-slate-800 mb-2 font-condensed">
                  Specifications & Inclusions:
                </h4>
                <ul className="text-xs text-slate-600 space-y-1.5 mb-6">
                  {selectedProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleAgiza(selectedProduct)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 transition-colors cursor-pointer mt-auto flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                  </svg>
                  <span>AGIZA SASA KUPITIA WHATSAPP (0623709042)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
