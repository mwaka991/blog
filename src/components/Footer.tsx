import React from 'react';
import { Post, ViewMode } from '../types';
import { CATEGORIES } from '../data/posts';

interface FooterProps {
  posts: Post[];
  onSelectPost: (post: Post) => void;
  onSelectCategory: (category: string) => void;
  onNavigate: (view: ViewMode) => void;
  onOpenSubscribe: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  posts,
  onSelectPost,
  onSelectCategory,
  onNavigate,
  onOpenSubscribe,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const recentPosts = posts.slice(0, 3);

  return (
    <footer className="bg-[#0b0f19] text-slate-300 border-t-4 border-red-600 mt-12 select-none">
      {/* Main Footer Widgets */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About MagazineSpare */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-white font-condensed tracking-tight">
              MagazineSpare
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              MagazineSpare is a high-performance, lightweight Full Site Editing (FSE) child theme for NewSpare, specifically engineered for professional news portals, online magazines, and niche blogs.
            </p>
            <div className="text-xs text-slate-400">
              <strong className="text-slate-200">License:</strong> GNU General Public License v2 or later
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenSubscribe}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-2 transition-colors cursor-pointer"
              >
                Join Newsletter
              </button>
            </div>
          </div>

          {/* Column 2: Recent Posts */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white pb-2 mb-4 border-b-2 border-slate-800 relative after:absolute after:bottom-[-2px] after:left-0 after:w-10 after:h-[2px] after:bg-red-600 font-condensed">
              Recent News
            </h4>
            <div className="space-y-3">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => onSelectPost(post)}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-12 h-12 shrink-0 overflow-hidden bg-slate-800 rounded-xs">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-semibold text-slate-200 group-hover:text-red-500 transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h5>
                    <span className="text-[10px] text-slate-500">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Navigation (no categories) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white pb-2 mb-4 border-b-2 border-slate-800 relative after:absolute after:bottom-[-2px] after:left-0 after:w-10 after:h-[2px] after:bg-red-600 font-condensed">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => onNavigate('home')}
                className="text-left py-1 text-slate-400 hover:text-red-500 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="text-red-600 text-[10px]">›</span>
                <span>Home</span>
              </button>
              <button
                onClick={() => onNavigate('articles')}
                className="text-left py-1 text-slate-400 hover:text-red-500 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="text-red-600 text-[10px]">›</span>
                <span>Articles</span>
              </button>
              <button
                onClick={() => onNavigate('shop')}
                className="text-left py-1 text-slate-400 hover:text-red-500 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="text-red-600 text-[10px]">›</span>
                <span>Shop</span>
              </button>
              <button
                onClick={() => onNavigate('videos')}
                className="text-left py-1 text-slate-400 hover:text-red-500 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="text-red-600 text-[10px]">›</span>
                <span>Videos</span>
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="text-left py-1 text-slate-400 hover:text-red-500 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="text-red-600 text-[10px]">›</span>
                <span>Gallery</span>
              </button>
              <button
                onClick={() => onNavigate('admin')}
                className="text-left py-1 text-slate-400 hover:text-red-500 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="text-red-600 text-[10px]">›</span>
                <span>Admin Panel</span>
              </button>
              <button
                onClick={() => onNavigate('docs')}
                className="text-left py-1 text-slate-400 hover:text-red-500 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="text-red-600 text-[10px]">›</span>
                <span>Docs</span>
              </button>
              <button
                onClick={() => onNavigate('support')}
                className="text-left py-1 text-slate-400 hover:text-red-500 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="text-red-600 text-[10px]">›</span>
                <span>Support</span>
              </button>
            </div>
          </div>

          {/* Column 4: Starter Sites & Performance */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white pb-2 mb-4 border-b-2 border-slate-800 relative after:absolute after:bottom-[-2px] after:left-0 after:w-10 after:h-[2px] after:bg-red-600 font-condensed">
              Starter Sites
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Explore 50+ multipurpose news, magazine, and review starter layouts with one-click import and Gutenberg BlockSpare blocks.
            </p>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xs text-xs space-y-1">
              <div className="text-slate-400 font-mono text-[11px]">Core Web Vitals: 99/100</div>
              <div className="text-slate-400 font-mono text-[11px]">PHP Compatibility: 5.3 - 7.0+</div>
              <div className="text-slate-400 font-mono text-[11px]">Full Site Editing (FSE) v3</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-[#070a10] border-t border-slate-800/80 py-4 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span>MagazineSpare WordPress Theme, Copyright 2026 </span>
            <a
              href="https://afthemes.com/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-200 hover:text-red-500 transition-colors font-semibold"
            >
              AF themes
            </a>
            <span>. Distributed under the terms of GNU GPL v2.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-200 transition-colors"
            >
              Contact
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('docs')}
              className="hover:text-slate-200 transition-colors"
            >
              Documentation
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-xs flex items-center gap-1 transition-colors cursor-pointer"
              title="Back to top"
            >
              <span>↑ Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
