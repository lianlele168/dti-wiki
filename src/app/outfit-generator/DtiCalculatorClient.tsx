'use client';

import { useState, useMemo } from 'react';
import { DTI_THEMES, DtiThemeItem } from '@/data/wikiData';
import { Sparkles, Search, Shirt, Palette, Award, Copy, Check, Star, Heart, CheckCircle2 } from 'lucide-react';

export default function DtiCalculatorClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<DtiThemeItem>(DTI_THEMES[0]);

  // Score Calculator Settings
  const [layersCount, setLayersCount] = useState(3);
  const [colorAccuracy, setColorAccuracy] = useState<'perfect' | 'good' | 'average'>('perfect');
  const [poseTier, setPoseTier] = useState<'top' | 'mid' | 'default'>('top');
  const [hasCodeItems, setHasCodeItems] = useState(true);
  const [hasVipGears, setHasVipGears] = useState(false);

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredThemes = useMemo(() => {
    return DTI_THEMES.filter(
      (t) =>
        t.themeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.vibe.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const scoreCalculation = useMemo(() => {
    let baseScore = 12; // Out of 25 stars
    if (layersCount >= 4) baseScore += 5;
    else if (layersCount === 3) baseScore += 3.5;
    else if (layersCount === 2) baseScore += 2;

    if (colorAccuracy === 'perfect') baseScore += 4;
    else if (colorAccuracy === 'good') baseScore += 2.5;

    if (poseTier === 'top') baseScore += 2.5;
    else if (poseTier === 'mid') baseScore += 1.5;

    if (hasCodeItems) baseScore += 1.5;
    if (hasVipGears) baseScore += 1.0;

    const finalStars = Math.min(25, +baseScore.toFixed(1));
    const winRate = Math.min(98, Math.round((finalStars / 25) * 100));

    let tierVerdict = 'Top 1-3 Podium Finish (High 5-Star Vote)';
    let tierColor = 'text-pink-300';
    if (finalStars >= 23) {
      tierVerdict = '👑 1st Place Champion Lock!';
      tierColor = 'text-amber-300';
    } else if (finalStars < 18) {
      tierVerdict = '⚠️ Mid-tier (Needs 1 More Clothing Layer)';
      tierColor = 'text-slate-300';
    }

    return {
      stars: finalStars,
      winRate,
      tierVerdict,
      tierColor,
    };
  }, [layersCount, colorAccuracy, poseTier, hasCodeItems, hasVipGears]);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* 5-Star Runway Score Predictor */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-pink-900/40 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-pink-900/40 pb-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Runway 5-Star Score Predictor</span>
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Calculate your anticipated peer star rating based on outfit complexity and theme accuracy.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-amber-300 flex items-center gap-1">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              {scoreCalculation.stars} / 25
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Layers Count */}
          <div className="space-y-2 p-3 rounded-2xl bg-slate-950 border border-slate-800">
            <label className="text-xs font-semibold text-slate-300 block">
              Layered Pieces: <strong className="text-pink-300">{layersCount} Items</strong>
            </label>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setLayersCount(num)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                    layersCount === num
                      ? 'bg-pink-600 text-white border-pink-400 shadow-md shadow-pink-600/30'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Color Palette Accuracy */}
          <div className="space-y-2 p-3 rounded-2xl bg-slate-950 border border-slate-800">
            <label className="text-xs font-semibold text-slate-300 block">Color Adherence</label>
            <select
              value={colorAccuracy}
              onChange={(e) => setColorAccuracy(e.target.value as any)}
              aria-label="Color Adherence"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-white focus:border-pink-500"
            >
              <option value="perfect">Exact Match (+4 Stars)</option>
              <option value="good">Complementary (+2.5 Stars)</option>
              <option value="average">Basic Mono (+1 Star)</option>
            </select>
          </div>

          {/* 3. Pose Sequence */}
          <div className="space-y-2 p-3 rounded-2xl bg-slate-950 border border-slate-800">
            <label className="text-xs font-semibold text-slate-300 block">Pose Pack Quality</label>
            <select
              value={poseTier}
              onChange={(e) => setPoseTier(e.target.value as any)}
              aria-label="Pose Pack Quality"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-white focus:border-pink-500"
            >
              <option value="top">K-Pop / Supermodel (+2.5 Stars)</option>
              <option value="mid">Standard Pack (+1.5 Stars)</option>
              <option value="default">Default Walk (0 Bonus)</option>
            </select>
          </div>

          {/* 4. Code & VIP Toggles */}
          <div className="space-y-2 p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-center">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
              <input
                type="checkbox"
                checked={hasCodeItems}
                onChange={(e) => setHasCodeItems(e.target.checked)}
                className="rounded border-slate-700 text-pink-500 focus:ring-pink-500"
              />
              <span>Includes Code Clothing</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
              <input
                type="checkbox"
                checked={hasVipGears}
                onChange={(e) => setHasVipGears(e.target.checked)}
                className="rounded border-slate-700 text-pink-500 focus:ring-pink-500"
              />
              <span>VIP Room Items</span>
            </label>
          </div>
        </div>

        {/* Prediction Rating Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-pink-950/30 border border-pink-900/30">
          <span className={`text-sm font-bold ${scoreCalculation.tierColor}`}>
            {scoreCalculation.tierVerdict}
          </span>
          <span className="text-xs font-semibold text-pink-300">
            Estimated Podium Probability: <strong className="text-white">{scoreCalculation.winRate}%</strong>
          </span>
        </div>
      </div>

      {/* Theme Outfit Recipe Browser */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-pink-900/30 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-pink-900/40 pb-4">
          <div>
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span>Theme Outfit Recipe Generator</span>
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Select your current game round theme to get verified 5-star layer recipes and accessory codes.
            </p>
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-pink-400" />
            <input
              type="text"
              placeholder="Search theme (e.g. Y2K, Gothic)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search theme"
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-pink-800/60 text-xs text-white placeholder-slate-400 focus:border-pink-500"
            />
          </div>
        </div>

        {/* Theme Pill Buttons */}
        <div className="flex flex-wrap gap-2">
          {filteredThemes.slice(0, 12).map((theme) => (
            <button
              key={theme.themeName}
              type="button"
              onClick={() => setSelectedTheme(theme)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                selectedTheme.themeName === theme.themeName
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-400 shadow-md shadow-pink-500/30'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-pink-800/60'
              }`}
            >
              {theme.themeName}
            </button>
          ))}
        </div>

        {/* Selected Theme Recipe Detail Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-950/40 via-slate-950 to-slate-950 border border-pink-800/50 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-pink-900/30 pb-4">
            <div>
              <span className="text-[11px] font-bold text-pink-400 uppercase tracking-wider block">Round Theme</span>
              <h4 className="text-2xl font-black text-white">{selectedTheme.themeName}</h4>
              <p className="text-xs text-pink-200/80 mt-0.5">Vibe: {selectedTheme.vibe}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-bold rounded-lg bg-pink-950 text-pink-300 border border-pink-700/50">
                Recommended Poses: {selectedTheme.bestPosePack}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {/* Essential Layers */}
            <div className="space-y-2">
              <span className="font-bold text-slate-200 flex items-center gap-1.5 text-sm">
                <Shirt className="w-4 h-4 text-pink-400" />
                <span>Layering Combo</span>
              </span>
              <ul className="space-y-1.5 text-slate-300">
                {selectedTheme.essentialItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-pink-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colors Palette */}
            <div className="space-y-2">
              <span className="font-bold text-slate-200 flex items-center gap-1.5 text-sm">
                <Palette className="w-4 h-4 text-pink-400" />
                <span>Optimal Color Palette</span>
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedTheme.colorPalette.map((color, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-pink-200">
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Codes to Equip */}
            <div className="space-y-2">
              <span className="font-bold text-slate-200 flex items-center gap-1.5 text-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Code Accessories to Equip</span>
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedTheme.recommendedCodes.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => handleCopy(code)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-950/80 border border-pink-700/60 text-pink-200 hover:text-white hover:border-pink-500 transition-all font-mono font-bold"
                  >
                    <span>{code}</span>
                    {copiedCode === code ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
