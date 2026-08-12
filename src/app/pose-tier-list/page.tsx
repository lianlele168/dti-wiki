import type { Metadata } from 'next';
import { Award, Star, Sparkles } from 'lucide-react';
import { POSE_PACK_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Dress To Impress Pose Pack Tier List (August 2026) — DTI Poses',
  description: 'Ranking for all Roblox Dress To Impress (DTI) pose packs including K-Pop Idol, Model Walk, and Vintage Hollywood poses.',
};

export default function PoseTierListPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          DTI Pose Pack <span className="text-pink-400">Tier List</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Poses are 50% of your runway vote score! Find out which pose packs give you the highest 5-star rating from judges.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {POSE_PACK_DATA.map((pose) => (
          <div key={pose.name} className="glass-panel p-6 rounded-2xl border border-pink-900/60 space-y-4 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-pink-500/20 text-pink-300 border border-pink-500/40">
                  {pose.tier} Tier
                </span>
                <span className="text-xs text-amber-400 font-mono font-bold">{pose.price}</span>
              </div>
              <h2 className="text-xl font-bold text-white">{pose.name}</h2>
              <p className="text-xs text-slate-300 leading-relaxed">{pose.ratingReason}</p>
            </div>

            <div className="pt-3 border-t border-pink-950 text-xs text-pink-300 font-semibold">
              Best for: {pose.bestForThemes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
