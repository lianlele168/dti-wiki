import type { Metadata } from 'next';
import { Coins, Sparkles, Zap, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dress To Impress Pink Cash Farming Guide (August 2026) — Fast Cash',
  description: 'How to farm Pink Cash fast in Roblox Dress To Impress (DTI) to buy pose packs, VIP hair, and Lana lore items.',
};

export default function CurrencyFarmingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Pink Cash <span className="text-pink-400">Farming Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Unlock all DTI pose packs and shop accessories fast with these Pink Cash farming strategies.
        </p>
      </div>

      <div className="space-y-6">
        <section className="glass-panel p-6 rounded-2xl border border-pink-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Coins className="w-5 h-5 text-pink-400" />
            <span>1. Collect Cash Money Stacks Around Lobby</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            During the 5-minute outfit customization round, pink cash bills spawn randomly on top of tanning beds, makeup counters, and behind the VIP room curtain. Pick them up to earn +15 to +50 Pink Cash instantly per round!
          </p>
        </section>

        <section className="glass-panel p-6 rounded-2xl border border-pink-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-pink-400" />
            <span>2. Win Top 3 Runway Placement</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Placing 1st place awards 100 Pink Cash, 2nd place awards 75 Pink Cash, and 3rd place awards 50 Pink Cash. Use our Theme Guide outfit combos to place #1 consistently.
          </p>
        </section>

        <section className="glass-panel p-6 rounded-2xl border border-pink-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span>3. Redeem Active Cash Codes</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Don't forget to redeem code <strong>FASHION2026</strong> on our Codes page for 1,500 free Pink Cash immediately!
          </p>
        </section>
      </div>
    </div>
  );
}
