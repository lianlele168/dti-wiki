import type { Metadata } from 'next';
import { Shirt, Palette, Gift, Award } from 'lucide-react';
import { DTI_THEMES } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Dress To Impress Theme Outfit Guide (August 2026) — DTI Combos',
  description: 'Complete Roblox Dress To Impress (DTI) theme outfit combinations guide for Y2K, Gothic Romance, Met Gala, Coquette, and Dark Academia.',
};

export default function ThemeGuidePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          DTI Runway <span className="text-pink-400">Theme Outfit Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Never panic during the 5-minute dressing round! Here are exact clothing item recipes, color swatches, and active codes for every official DTI theme.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DTI_THEMES.map((theme) => (
          <div
            key={theme.themeName}
            className="glass-panel p-6 rounded-2xl border border-pink-900/60 hover:border-pink-500/80 transition-all space-y-5 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-pink-950 pb-3">
              <div>
                <h2 className="text-2xl font-black text-white">{theme.themeName}</h2>
                <p className="text-xs text-pink-300 italic">{theme.vibe}</p>
              </div>
              <span
                className={`px-2.5 py-1 rounded text-xs font-bold border ${
                  theme.difficulty === 'Easy'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : theme.difficulty === 'Medium'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                }`}
              >
                {theme.difficulty}
              </span>
            </div>

            {/* Items */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-pink-400 uppercase tracking-wider flex items-center gap-1.5">
                <Shirt className="w-3.5 h-3.5" />
                <span>Essential Items Recipe</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {theme.essentialItems.map((item, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-slate-950/80 border border-pink-950 text-xs text-slate-200">
                    • {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Colors & Poses */}
            <div className="flex items-center justify-between pt-2 border-t border-pink-950 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Palette className="w-3.5 h-3.5 text-pink-400" />
                <div className="flex gap-1.5">
                  {theme.colorPalette.map((hex, idx) => (
                    <div key={idx} className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: hex }} />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1 font-semibold text-pink-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{theme.bestPosePack}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
