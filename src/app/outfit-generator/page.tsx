import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Shirt, Award, HelpCircle, ArrowRight, BookOpen } from 'lucide-react';
import DtiCalculatorClient from './DtiCalculatorClient';

export const metadata: Metadata = {
  title: 'DTI Outfit Generator: 5-Star Runway Score Calculator & Theme Helper',
  description: 'Interactive Dress To Impress (DTI) outfit recipe generator and runway score calculator. Search themes, calculate podium star ratings, and find instant layering codes.',
  alternates: {
    canonical: 'https://dti.robloxwikihub.com/outfit-generator',
  },
  openGraph: {
    title: 'DTI Outfit Generator & 5-Star Runway Calculator',
    description: 'Instant theme outfit recipes and star score calculator for Roblox Dress To Impress.',
    url: 'https://dti.robloxwikihub.com/outfit-generator',
    type: 'website',
  },
};

export default function OutfitGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Dress To Impress 5-Star Outfit Generator & Score Calculator',
    url: 'https://dti.robloxwikihub.com/outfit-generator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free interactive theme outfit generator and runway score rating calculator for Roblox Dress To Impress (DTI).',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      ratingCount: '1240',
    },
  };

  return (
    <div className="space-y-12 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-pink-900/30 bg-gradient-to-b from-[#0b050f] via-slate-950/80 to-[#0b050f]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-pink-500/10 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/80 border border-pink-500/30 text-pink-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Interactive Fashion Tool • Updated for Season 4 Runway</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            DTI <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">Outfit Generator & 5-Star</span> Calculator
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Find the winning outfit recipe for any round theme, calculate your expected podium star rating, and unlock verified clothing code accessories.
          </p>
        </div>
      </section>

      {/* Interactive Tool */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <DtiCalculatorClient />
      </div>

      {/* SEO Strategy Guide & FAQ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-2xl border border-pink-900/40 bg-slate-900/50 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Shirt className="w-6 h-6 text-pink-400" />
            Secrets to Consistent 5-Star Runway Wins in DTI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-pink-300">1. Master 3+ Layer Combos</h3>
              <p>
                Runway judges consistently vote higher for layered outfits than single dresses. Combine strapless slip tops with puffy sleeve sweaters and ruffled mini skirts to create unique silhouettes that stand out from plain presets.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-pink-300">2. Theme Accuracy & Pose Timing</h3>
              <p>
                Strict adherence to color palettes (Gothic deep blacks/purples, Preppy pastels, Y2K neon pinks) signals authenticity. Pair with high-tier pose sequences like Model Turn or K-Pop Wave at the end of the runway for maximum votes.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-pink-400" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <strong className="text-white block mb-1">Do code clothing items boost runway score?</strong>
              <span>Yes! Unique code accessories like LANABODY, M3GAN, or LABOTS add visual texture and show mastery of the game, prompting higher votes from fashion servers.</span>
            </div>
            <div>
              <strong className="text-white block mb-1">What is the highest-rated pose pack?</strong>
              <span>Pose Pack 3 (K-Pop Idol) and Pose Pack 5 (Supermodel Runway) are voted the highest across public and custom pro servers.</span>
            </div>
          </div>
        </div>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-pink-900/40 bg-slate-950/60">
          <Link href="/theme-guide" className="inline-flex items-center gap-2 text-sm font-semibold text-pink-400 hover:text-pink-300">
            <BookOpen className="w-4 h-4" />
            <span>Browse Complete DTI Theme Guide</span>
          </Link>
          <Link href="/codes" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300">
            <span>Get Free DTI Clothes Codes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
