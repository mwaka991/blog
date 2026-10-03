import React from 'react';
import { GalleryImage } from '../types';
import { BannerAd } from './BannerAds';

interface PhotoGalleryPageProps {
  images: GalleryImage[];
}

export const PhotoGalleryPage: React.FC<PhotoGalleryPageProps> = ({ images }) => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 select-none">
      {/* Top Banner Ad */}
      <BannerAd type="top" className="mb-6" />

      {/* Pure Image Gallery: ONLY images, NO frames, NO titles, NO text, NO popups, in different sizes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[260px]">
        {images.map((img, index) => {
          // Determine varied sizes for visual rhythm (some tall, some wide, some standard)
          const isSpanWide = index % 5 === 0;
          const isSpanTall = index % 4 === 1;

          return (
            <div
              key={img.id}
              className={`overflow-hidden bg-slate-200 transition-transform duration-300 hover:scale-[1.01] ${
                isSpanWide ? 'col-span-2' : ''
              } ${isSpanTall ? 'row-span-2' : ''}`}
            >
              <img
                src={img.url}
                alt=""
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover block"
              />
            </div>
          );
        })}
      </div>

      {/* Mid Banner Ad */}
      <BannerAd type="mid" className="my-8" />

      {/* Bottom Banner Ad */}
      <BannerAd type="bottom" className="mt-8" />
    </div>
  );
};
