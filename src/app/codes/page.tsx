import type { Metadata } from 'next';
import { Gift, ShieldCheck, AlertCircle, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';

export const metadata: Metadata = {
  title: 'Dress To Impress Codes (August 2026) — Free Clothes & Accessories',
  description: 'All active Roblox Dress To Impress (DTI) codes for free dresses, doll hair, cyber boots, and crying makeup. Updated daily.',
};

export default function CodesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Verified Active in Roblox DTI: August 12, 2026</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Dress To Impress Codes <span className="text-pink-400">(August 2026)</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Redeem these official Roblox Dress To Impress (DTI) codes to unlock exclusive dresses, designer handbags, crying makeup, and free Pink Cash.
        </p>
      </div>

      {/* Active Codes List */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-pink-900/40 pb-3">
          <Gift className="w-5 h-5 text-pink-400" />
          <span>Active Clothes & Accessory Codes ({ACTIVE_CODES.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.map((item) => (
            <div
              key={item.code}
              className="glass-panel p-4 rounded-xl flex items-center justify-between border border-pink-900/60 hover:border-pink-500/80 transition-all shadow-lg"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-base font-extrabold text-pink-200">{item.code}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-sans border border-emerald-500/30">
                    {item.itemType}
                  </span>
                </div>
                <div className="text-xs text-slate-300">{item.reward}</div>
                {item.addedDate && <div className="text-[10px] text-slate-500">Added: {item.addedDate}</div>}
              </div>
              <CopyButton textToCopy={item.code} />
            </div>
          ))}
        </div>
      </section>

      {/* How to Redeem Step-by-Step */}
      <section className="glass-panel p-8 rounded-2xl space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-pink-900/40 pb-4">
          <HelpCircle className="w-6 h-6 text-pink-400" />
          <span>How to Redeem Codes in Dress To Impress</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-pink-950/40 border border-pink-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-pink-900/80 text-pink-300 font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h3 className="text-sm font-bold text-white">Join DTI Dressing Room</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Launch Roblox Dress To Impress and enter the main dressing room lobby.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-pink-950/40 border border-pink-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-pink-900/80 text-pink-300 font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h3 className="text-sm font-bold text-white">Click Pink Bag Icon</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              On the left side of your screen, click the pink handbag / code button.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-pink-950/40 border border-pink-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-pink-900/80 text-pink-300 font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h3 className="text-sm font-bold text-white">Type Code & Checkmark</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Type or paste your active code into the box and click the checkmark to unlock your item immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Expired Codes List */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-400 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-slate-500" />
          <span>Expired Codes ({EXPIRED_CODES.length})</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {EXPIRED_CODES.map((item) => (
            <div key={item.code} className="p-3 rounded-lg bg-slate-950/60 border border-slate-900 flex justify-between items-center text-xs opacity-60">
              <span className="font-mono text-slate-400 line-through">{item.code}</span>
              <span className="text-[10px] text-rose-400/80">Expired</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
