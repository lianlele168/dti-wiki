import Link from 'next/link';
import { Gift, Shirt, Layers, Award, Sparkles, CheckCircle2, ArrowRight, Heart } from 'lucide-react';
import { ACTIVE_CODES } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';
import ThemeOutfitHelper from '@/components/ThemeOutfitHelper';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are active Dress To Impress (DTI) codes for August 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Active DTI codes include LANABODY, M3GAN, LABOTS, TEARS, and LANA. Redeem them for free dresses, doll hair, cyber boots, and crying glitter makeup.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you score 5 stars on Dress To Impress runway?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To get voted 5 stars in DTI, match the exact theme color palette, use clothing layering hacks to make custom dresses, use code accessories, and equip top-tier pose packs like K-Pop Idol or Model Walk.',
        },
      },
    ],
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-pink-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-950/30 via-slate-950/80 to-[#0b050f] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-pink-900/40 text-pink-300 border border-pink-700/50 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Updated for August 2026 Runway Update</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Dress To Impress <br />
            <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
              Codes & 5-Star Theme Helper
            </span>
          </h1>

          <p className="text-pink-100/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Your ultimate fashion assistant for <strong className="text-pink-300">Roblox Dress To Impress (DTI)</strong>. Instant 5-minute theme outfit recipes, verified clothing codes, and pro layering hacks.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-pink-300">400K+</div>
              <div className="text-[11px] text-slate-400">Monthly Searches</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-emerald-400">8 Active</div>
              <div className="text-[11px] text-slate-400">Clothes Codes</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-amber-300">30+ Themes</div>
              <div className="text-[11px] text-slate-400">Outfit Combos</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-rose-400">5 Stars</div>
              <div className="text-[11px] text-slate-400">Runway Guides</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/codes"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 shadow-xl shadow-pink-950/80 hover:scale-[1.02] transition-all"
            >
              <Gift className="w-4 h-4 text-pink-200" />
              <span>Get Active Codes (8)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/theme-guide"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-pink-800/40 hover:border-pink-600 transition-all"
            >
              <Shirt className="w-4 h-4 text-pink-400" />
              <span>Runway Theme Guide</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Tool Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ThemeOutfitHelper />
      </section>

      {/* Codes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Gift className="w-6 h-6 text-pink-400" />
              <span>Active DTI Clothing & Makeup Codes</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">Copy free dresses, accessories, and makeup</p>
          </div>
          <Link href="/codes" className="text-xs font-semibold text-pink-400 hover:text-pink-300 flex items-center gap-1">
            <span>View All Codes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACTIVE_CODES.slice(0, 8).map((item) => (
            <div
              key={item.code}
              className="glass-panel p-4 rounded-xl flex items-center justify-between border border-pink-900/50 hover:border-pink-600/60 transition-all shadow-md"
            >
              <div className="space-y-1">
                <div className="font-mono text-base font-extrabold text-pink-200 tracking-wide flex items-center gap-2">
                  <span>{item.code}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-sans border border-emerald-500/30">
                    {item.itemType}
                  </span>
                </div>
                <div className="text-xs text-slate-300 leading-tight">{item.reward}</div>
              </div>
              <CopyButton textToCopy={item.code} />
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/theme-guide" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-pink-950/80 border border-pink-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shirt className="w-6 h-6 text-pink-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                Runway Theme Guide
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Outfit recipes for Y2K, Gothic Romance, Coquette, Met Gala, and Dark Academia.
              </p>
            </div>
          </Link>

          <Link href="/layering-hacks" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-pink-950/80 border border-pink-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6 text-pink-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                Clothing Layering Hacks
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Learn how to combine corsets, skirts, and hats to create custom designer dresses.
              </p>
            </div>
          </Link>

          <Link href="/pose-tier-list" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-pink-950/80 border border-pink-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-pink-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                Pose Pack Tier List
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Ranking for K-Pop Idol Poses, Model Walk, and Vintage Hollywood.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
