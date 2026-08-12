'use client';

import { useState } from 'react';
import { Search, Sparkles, Shirt, Palette, Gift, Award, Copy, Check } from 'lucide-react';
import { DTI_THEMES, DtiThemeItem } from '@/data/wikiData';

export default function ThemeOutfitHelper() {
  const [selectedTheme, setSelectedTheme] = useState<DtiThemeItem>(DTI_THEMES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredThemes = DTI_THEMES.filter(
    (t) =>
      t.themeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.vibe.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-pink-500/30 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-pink-900/40 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-pink-500/20 text-pink-300 border border-pink-500/40 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Interactive Runway Tool</span>
          </div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <span>DTI 5-Minute Theme Outfit Helper</span>
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            In a match right now? Search your round theme below for instant 5-star outfit combos & color codes!
          </p>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-pink-400" />
          <input
            type="text"
            placeholder="Search theme (e.g. Y2K, Gothic)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950/80 border border-pink-800/60 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-pink-500"
          />
        </div>
      </div>

      {/* Theme Pill Buttons */}
      <div className="flex flex-wrap gap-2">
        {filteredThemes.map((theme) => (
          <button
            key={theme.themeName}
            onClick={() => setSelectedTheme(theme)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
              selectedTheme.themeName === theme.themeName
                ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white border-pink-400 shadow-lg shadow-pink-950/80 scale-105'
                : 'bg-slate-950/60 text-slate-300 border-pink-950 hover:border-pink-800/60 hover:text-white'
            }`}
          >
            {theme.themeName}
          </button>
        ))}
      </div>

      {/* Selected Theme Details Box */}
      <div className="p-6 rounded-2xl bg-slate-950/80 border border-pink-800/40 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-pink-950 pb-4">
          <div>
            <span className="text-xs text-pink-400 font-mono uppercase tracking-wider font-semibold">
              Selected Theme
            </span>
            <h3 className="text-2xl font-black text-white">{selectedTheme.themeName}</h3>
            <p className="text-xs text-slate-300 italic mt-0.5">Vibe: {selectedTheme.vibe}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Difficulty:</span>
            <span
              className={`px-2.5 py-0.5 rounded text-xs font-bold border ${
                selectedTheme.difficulty === 'Easy'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : selectedTheme.difficulty === 'Medium'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
              }`}
            >
              {selectedTheme.difficulty}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Item Recipe */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
              <Shirt className="w-4 h-4 text-pink-400" />
              <span>Essential Clothing Layering Combo</span>
            </h4>
            <div className="space-y-2">
              {selectedTheme.essentialItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-900/90 border border-pink-900/30 text-xs text-slate-200 flex items-center gap-2"
                >
                  <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-300 font-bold text-[10px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Colors & Codes */}
          <div className="space-y-4">
            {/* Color Palette */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
                <Palette className="w-4 h-4 text-pink-400" />
                <span>Recommended Color Swatches</span>
              </h4>
              <div className="flex items-center gap-3">
                {selectedTheme.colorPalette.map((hex, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <div
                      className="w-10 h-10 rounded-xl border border-white/20 shadow-md transform hover:scale-110 transition-transform"
                      style={{ backgroundColor: hex }}
                    />
                    <span className="text-[10px] font-mono text-slate-400">{hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Codes to include */}
            <div className="space-y-2 pt-2 border-t border-pink-950">
              <h4 className="text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-pink-400" />
                <span>Codes to Wear for this Theme</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedTheme.recommendedCodes.map((code) => (
                  <button
                    key={code}
                    onClick={() => handleCopy(code)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-pink-950 text-pink-300 border border-pink-700/60 hover:bg-pink-900 transition-colors"
                  >
                    <span>{code}</span>
                    {copiedCode === code ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-pink-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Pose Pack */}
            <div className="pt-2 border-t border-pink-950 flex items-center gap-2 text-xs text-slate-300">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Best Runway Pose:</strong> {selectedTheme.bestPosePack}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
