import type { Metadata } from 'next';
import Link from 'next/link';
import { Gift, ShieldCheck, AlertCircle, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';

export const metadata: Metadata = {
  alternates: {
    canonical: '/codes',
  },
  title: 'Dress To Impress Codes — Active Free Clothes & Accessories',
  description:
    'Every active Roblox Dress To Impress (DTI) code for free dresses, boots, bags and hairstyles, plus the full expired list and the zero-versus-O trap that breaks most redemptions.',
};

const FAQS = [
  {
    q: 'How do I redeem codes in Roblox Dress To Impress (DTI)?',
    a: 'Launch Dress To Impress on Roblox, then click the pink handbag icon on the left side of the screen to open the codes menu. Type or paste the code into the "Enter code here" box and press the checkmark button. The item is added to your wardrobe immediately.',
  },
  {
    q: 'Are DTI promo codes permanent once redeemed?',
    a: 'Yes. Once redeemed, clothes, hairstyles, makeup looks and accessories stay permanently in your DTI wardrobe, even after the code itself expires for everyone else.',
  },
  {
    q: 'Why is my DTI code not working?',
    a: 'DTI codes are case-sensitive and several of them mix the number zero with the letter O. CH00P1E_B4CK_AGA1N, S3M_0W3N_Y4Y and C4LLMEHH4LEY all use zeroes, not the letter O. Copy and paste instead of typing, and make sure there are no trailing spaces.',
  },
  {
    q: 'Can I recolour items unlocked by codes?',
    a: 'Yes. Equip the item, then step onto the circular colouring pads in the centre of the salon to change fabric textures and colour hexes, so one code item can be matched to any runway theme.',
  },
];

export default function CodesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{ACTIVE_CODES.length} Active Codes — Checked Against Multiple Trackers</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Dress To Impress Codes
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Redeem these official Roblox Dress To Impress (DTI) codes to unlock exclusive dresses,
          boots, handbags and hairstyles. Copy them rather than typing them — several use zeroes
          instead of the letter O.
        </p>
      </div>

      {/* Active Codes List */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-pink-900/40 pb-3">
          <Gift className="w-5 h-5 text-pink-400" />
          <span>Active Clothes &amp; Accessory Codes ({ACTIVE_CODES.length})</span>
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
              </div>
              <CopyButton textToCopy={item.code} />
            </div>
          ))}
        </div>
      </section>

      {/* Zero vs letter O warning */}
      <section className="glass-panel p-6 rounded-2xl border border-amber-900/50 space-y-2">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-400" />
          <span>The Zero-vs-O Trap</span>
        </h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Most failed DTI redemptions are not expired codes, they are substitution errors. These
          codes use the <strong>number zero</strong> where you would expect the letter O:
        </p>
        <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 leading-relaxed">
          <li><span className="font-mono text-pink-200">CH00P1E_B4CK_AGA1N</span> — Choopie set</li>
          <li><span className="font-mono text-pink-200">S3M_0W3N_Y4Y</span> — staff, scythe and axe</li>
          <li><span className="font-mono text-pink-200">C4LLMEHH4LEY</span> — puffy dress and bear headband</li>
        </ul>
        <p className="text-xs text-slate-400 leading-relaxed">
          Use the copy button on each card instead of retyping, and check for a trailing space if a
          pasted code is rejected.
        </p>
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
            <h3 className="text-sm font-bold text-white">Open the Codes Menu</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Launch Dress To Impress and click the pink handbag icon on the left side of the screen.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-pink-950/40 border border-pink-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-pink-900/80 text-pink-300 font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h3 className="text-sm font-bold text-white">Paste the Code</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Paste the active code into the &quot;Enter code here&quot; box exactly as it appears.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-pink-950/40 border border-pink-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-pink-900/80 text-pink-300 font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h3 className="text-sm font-bold text-white">Hit the Checkmark</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Press the checkmark button and the item lands in your wardrobe instantly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="glass-panel p-8 rounded-2xl space-y-5">
        <h2 className="text-2xl font-bold text-white border-b border-pink-900/40 pb-4">
          Dress To Impress Codes FAQ
        </h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="text-sm font-bold text-pink-300">{f.q}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="glass-panel p-8 rounded-2xl space-y-3">
        <h2 className="text-2xl font-bold text-white">Win the Round After the Freebies</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Code items expand your wardrobe, but votes come from how you put them together.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <Link href="/theme-guide" className="text-pink-300 hover:text-pink-200 font-semibold">
            Theme Guide — what each prompt actually wants
          </Link>
          <Link href="/pose-tier-list" className="text-pink-300 hover:text-pink-200 font-semibold">
            Pose Tier List — poses voters reward
          </Link>
          <Link href="/layering-hacks" className="text-pink-300 hover:text-pink-200 font-semibold">
            Layering Hacks — depth without clutter
          </Link>
          <Link href="/currency-farming" className="text-pink-300 hover:text-pink-200 font-semibold">
            Currency Farming — buy what codes will not give you
          </Link>
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
