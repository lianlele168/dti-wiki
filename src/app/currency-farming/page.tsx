import type { Metadata } from 'next';
import Link from 'next/link';
import { Coins, Sparkles, Zap, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: '/currency-farming',
  },

  title: 'Dress To Impress Cash Farming Guide — Fast Cash',
  description: 'How to earn Cash fast in Roblox Dress To Impress (DTI) to buy pose packs like the Editorial Pose Pack (2,500 Cash) and other shop items.',
};

export default function CurrencyFarmingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Cash <span className="text-pink-400">Farming Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          The in-game currency in Dress To Impress is simply called <strong className="text-pink-300">Cash</strong>. Earn it in matches to buy pose packs and shop items — no Robux required.
        </p>
      </div>

      <div className="space-y-6">
        <section className="glass-panel p-6 rounded-2xl border border-pink-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Coins className="w-5 h-5 text-pink-400" />
            <span>1. Collect Cash Around the Lobby</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            While you style your outfit during the customization round, Cash bills and coins spawn around the lobby — on counters, floors, and near activity stations. Walk over them to collect a small amount of Cash every single round. It adds up quickly if you collect on autopilot while dressing.
          </p>
        </section>

        <section className="glass-panel p-6 rounded-2xl border border-pink-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-pink-400" />
            <span>2. Place Top 3 on the Runway</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Finishing high on the podium awards the largest Cash payouts. Exact amounts per placement are not officially documented, but top-3 finishes consistently pay out the most. Use our{' '}
            <Link href="/theme-guide" className="text-pink-400 hover:text-pink-300 underline underline-offset-2">
              Theme Guide
            </Link>{' '}
            outfit combos and the{' '}
            <Link href="/outfit-generator" className="text-pink-400 hover:text-pink-300 underline underline-offset-2">
              5-Star Score Calculator
            </Link>{' '}
            to place #1 consistently.
          </p>
        </section>

        <section className="glass-panel p-6 rounded-2xl border border-pink-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span>3. Spend Cash on Pose Packs, Save Robux Decisions</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Cash buys real gameplay items in the Shop — for example the <strong>Editorial Pose Pack (2,500 Cash)</strong> and the <strong>Summer Pose Pack (4,300 Cash)</strong>. VIP exclusive poses come from the <strong>VIP Game Pass (799 Robux one-time, or 399 Robux/month)</strong>, which is a Robux purchase, not Cash. Limited events also sell items with their own currencies (such as Seashells during the Summer 2025 update).
          </p>
          <p className="text-xs text-slate-400">
            Tip: redemption codes in DTI grant clothing and accessories, not Cash — see our{' '}
            <Link href="/codes" className="text-pink-400 hover:text-pink-300 underline underline-offset-2">
              active codes list
            </Link>{' '}
            for free items.
          </p>
        </section>

        <section className="glass-panel p-6 rounded-2xl border border-pink-900/50 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-pink-400" />
            <span>Sources</span>
          </h2>
          <ul className="text-xs sm:text-sm text-slate-300 leading-relaxed list-disc list-inside space-y-1">
            <li>
              <a href="https://dti-dress-to-impress.fandom.com/wiki/Shop" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 underline underline-offset-2">
                DTI Wiki — Shop
              </a>{' '}
              (pose pack prices, VIP Game Pass pricing)
            </li>
            <li>
              <a href="https://www.ign.com/wikis/dress-to-impress/Dress_to_Impress_Summer_Update_2025_(Part_1)_-_All_Details_and_Patch_Notes" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 underline underline-offset-2">
                IGN — DTI Summer Update 2025 patch notes
              </a>{' '}
              (Summer Pose Pack, Seashells event currency)
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
