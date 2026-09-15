import React from 'react';

interface AuthorCardProps {
  authorName?: string;
  role?: string;
  experience?: string;
  patchVersion?: string;
  lastUpdated?: string;
  editorialNote?: string;
}

export default function AuthorCard({
  authorName = 'Chloe Sinclair',
  role = 'Top Model & Runway Styling Strategist',
  experience = 'Top 50 Runway Rank & 1,200+ Podiums',
  patchVersion = 'The Baddie & Brat Runway Update Verified',
  lastUpdated = 'September 2026',
  editorialNote = 'All theme palettes, VIP clipping layering combos, and pose animation frame ratings are tested in competitive public and pro lobbies.',
}: AuthorCardProps) {
  return (
    <div className="w-full rounded-2xl bg-slate-900/70 border border-pink-500/20 p-4 sm:p-5 backdrop-blur-md my-6 text-left shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-pink-950/60">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold text-lg shadow-inner">
            {authorName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-white text-sm sm:text-base">{authorName}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-pink-500/10 text-pink-400 border border-pink-500/20">
                ✓ Runway Verified
              </span>
            </div>
            <p className="text-xs text-pink-200/70 mt-0.5">
              {role} • <span className="text-slate-300 font-medium">{experience}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-pink-500/10 text-pink-300 border border-pink-500/20">
            ✨ {patchVersion}
          </span>
          <span className="text-xs text-slate-400">
            Updated: <strong className="text-slate-200">{lastUpdated}</strong>
          </span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-pink-200/80 mt-3 leading-relaxed italic">
        "{editorialNote}"
      </p>
    </div>
  );
}
