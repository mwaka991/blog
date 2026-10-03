import React, { useRef } from 'react';
import { Post } from '../types';

interface TopStoriesTickerProps {
  posts: Post[];
  onSelectPost: (post: Post) => void;
}

export const TopStoriesTicker: React.FC<TopStoriesTickerProps> = ({ posts, onSelectPost }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // We highlight the 4 top stories from the screenshot
  const topStories = posts.filter(
    (p) =>
      p.id === 'how-ai-is-transforming-small-businesses' ||
      p.id === 'inside-the-rise-of-electric-vehicles' ||
      p.id === 'weekend-in-the-mountains-nature-travel' ||
      p.id === 'future-of-remote-work-digital-workforce'
  );

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white border-b border-slate-200 shadow-xs select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-stretch bg-slate-50 border border-slate-200 overflow-hidden">
          {/* Top Stories Red Badge */}
          <div className="bg-[#dc2626] text-white px-5 sm:px-6 py-2.5 flex items-center justify-center font-bold text-xs sm:text-sm tracking-wider uppercase shrink-0 font-condensed">
            Top Stories
          </div>

          {/* Scrolling Items */}
          <div
            ref={scrollContainerRef}
            className="flex-1 flex items-center overflow-x-auto no-scrollbar divide-x divide-slate-200 py-1.5 px-2 gap-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {topStories.map((post) => (
              <div
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="flex items-center gap-3 px-3 min-w-[260px] sm:min-w-[290px] max-w-[340px] shrink-0 cursor-pointer group hover:bg-white transition-colors py-1 rounded"
              >
                {/* Thumbnail */}
                <div className="w-10 h-10 shrink-0 overflow-hidden rounded-xs bg-slate-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Headline */}
                <h4 className="text-xs font-bold text-slate-800 line-clamp-2 leading-tight group-hover:text-red-600 transition-colors">
                  {post.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center px-2 bg-slate-100 border-l border-slate-200 text-slate-500 gap-1 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              className="p-1 hover:text-slate-900 hover:bg-slate-200 rounded transition-colors"
              aria-label="Previous story"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-1 hover:text-slate-900 hover:bg-slate-200 rounded transition-colors"
              aria-label="Next story"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
