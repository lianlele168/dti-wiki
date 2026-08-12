import type { Metadata } from 'next';
import { Layers, Sparkles, Lightbulb, CheckCircle2 } from 'lucide-react';
import { LAYERING_HACKS } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Dress To Impress Clothing Layering Hacks (August 2026) — DTI Tips',
  description: 'Pro outfit layering hacks for Roblox Dress To Impress (DTI). Learn how to layer corsets, skirts, and dresses to build custom runway gowns.',
};

export default function LayeringHacksPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          DTI Clothing <span className="text-pink-400">Layering Hacks</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          The secret to winning 1st place podium in Dress To Impress is combining basic clothes into unique, custom designer gowns that nobody else has on the server.
        </p>
      </div>

      {/* List */}
      <div className="space-y-6">
        {LAYERING_HACKS.map((hack, idx) => (
          <div key={idx} className="glass-panel p-6 sm:p-8 rounded-2xl border border-pink-900/60 space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-pink-950 pb-3">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-6 h-6 text-pink-400" />
                <span>{hack.title}</span>
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-950 text-pink-300 border border-pink-700/50">
                {hack.category}
              </span>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Items Needed to Layer:</div>
              <div className="flex flex-wrap gap-2">
                {hack.itemsNeeded.map((item, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-950 text-pink-200 border border-pink-900/60">
                    + {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{hack.resultDescription}</p>

            <div className="p-3.5 rounded-xl bg-pink-950/40 border border-pink-900/50 flex items-start gap-2.5 text-xs text-pink-200">
              <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">Pro Coloring Tip:</strong> {hack.proTip}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
