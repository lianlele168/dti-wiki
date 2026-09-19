import type { Metadata } from 'next';
import Link from 'next/link';
import { Star, Sparkles, Wand2, Trophy, HelpCircle, Palette, Layers, Zap } from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: '/beginner-guide',
  },

  title: 'Dress To Impress 5-Star Runway Guide — Master Podium Wins & Layering Combos',
  description: 'Pro runway masterclass for Roblox Dress To Impress (DTI). Learn how to layer corsets and skirts, select flawless color palettes, cycle runway poses, and secure 5-star podium wins.',
  keywords: ['dress to impress guide', 'dti 5 star runway', 'dti layering hacks', 'how to win in dti', 'dti podium tips']
};

export default function BeginnerGuidePage() {
  const runwayRules = [
    {
      step: '1',
      title: 'Precision Theme Interpretation & Contextual Styling',
      desc: 'The quickest way to earn 1-star pity votes is failing to follow the drawn theme. In high-ranking pro servers, players demand creative contextual interpretations rather than literal stereotypes. If the theme is "Gothic", do not merely wear an all-black t-shirt; blend deep crimson velvet textures with lace corsets, black lace gloves, and Victorian headwear to convey a coherent narrative.'
    },
    {
      step: '2',
      title: 'The Golden Rule of Layering (Minimum 3+ Pieces)',
      desc: 'Single-piece dresses are instantly penalized by competitive judges as "lazy dressing". High-scoring outfits require combining at least three distinct clothing meshes. Pair the tube top with a structured corset over a ruffled tiered skirt, then accentuate the silhouette with ruffled leg warmers, statement belts, and code-exclusive jewelry items. Layering demonstrates effort and technical mastery.'
    },
    {
      step: '3',
      title: 'Color Theory & Texture Synchronization',
      desc: 'Avoid chaotic color mismatches. Stick to a tight 3-color palette: Primary Base (60%), Accent Complement (30%), and Metallic/Highlight (10%). Utilize the color wheel picker to match fabric saturation precisely. When working with neutral tones like beige or cream, introduce patterned textures (plaid, houndstooth, floral) across accessories to prevent visual flatness.'
    },
    {
      step: '4',
      title: 'Dynamic Runway Choreography & Pose Transitions',
      desc: 'Your presentation on the runway is just as important as your clothing. Never stand completely still during your turn. Execute a structured 3-phase pose sequence: start with a dynamic Walk cycle as you reach center stage, transition immediately into an expressive static pose (Pose 4 or Pose 7) to showcase your dress neckline, and finish with an over-the-shoulder turn right before voting concludes.'
    }
  ];

  const layeringCombos = [
    { name: 'Victorian Ballerina', pieces: 'Lana Tutu + Fitted Bustier + Lace Legwarmers', rating: '5 Stars' },
    { name: 'Cyberpunk Siren', pieces: 'Heeled Boots (code LABOOTS) + Leather Crop Jacket + Metallic Skirt', rating: '5 Stars' },
    { name: 'Couture Princess', pieces: "Pixiiuwu's Iridescent Dress (code PIXIIUWU) + Pearl Handbag (code TEKKYOOZ) + Floral Headscarf", rating: '5 Stars' },
    { name: 'Dark Academia', pieces: 'Sweater Vest + Pleated Tennis Skirt + High Knee Socks', rating: '4.8 Stars' },
  ];

  const faqs = [
    {
      q: 'How do I win 1st place in Dress To Impress without VIP?',
      a: 'VIP is not required to win 1st place consistently. Non-VIP players can easily achieve 5-star ratings by mastering layering hacks (stacking free code items like BELALASLAY and LANABOW over basic skirts) and selecting harmonious color palettes. Free codes are listed on our Codes page.'
    },
    {
      q: 'What should I do if players in the server vote unfairly (farming / friends)?',
      a: 'Unfair voting happens in public beginner lobbies. To guarantee honest evaluation, climb to Trendsetter or Runway Diva rank to unlock access to Pro and Master-exclusive servers where players vote strictly based on theme adherence.'
    },
    {
      q: 'How do you layer multiple hairstyles in DTI?',
      a: 'Click on a primary base hairstyle (such as long flowing waves), then immediately click on a bangs or ponytail accessory. The game engine allows multiple hair meshes to overlap, creating unique custom volume and highlights.'
    },
    {
      q: 'Which pose pack is the best investment in DTI?',
      a: 'The VIP exclusive poses (included with the 799 Robux VIP Game Pass, also available as a 399 Robux/month subscription) and the Editorial Pose Pack (2,500 Cash) offer the cleanest transitions for runway judging. Their fluid motion showcases front accessories and flowing skirts without clipping through the avatar body.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-300 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>Official 5-Star Runway Masterclass</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Dress To Impress <span className="text-pink-400">5-Star Podium Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Unlock consistent 1st-place finishes in Roblox Dress To Impress. Master clothing layering techniques, color harmony guidelines, custom hairstyle combinations, and runway pose sequencing to secure maximum 5-star votes.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/outfit-generator"
            className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-pink-400 transition-colors shadow-lg shadow-pink-500/20"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Open 5-Star Runway Score Calculator</span>
          </Link>
          <Link
            href="/codes"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-200 font-bold rounded-xl text-xs hover:bg-slate-700 transition-colors"
          >
            <Wand2 className="w-3.5 h-3.5 text-pink-400" />
            <span>Claim 23+ Active Clothing Codes</span>
          </Link>
        </div>
      </div>

      {/* 4 Pillars of Runway Victory */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white">4 Mandatory Pillars of 5-Star Voting</h2>
          <p className="text-xs text-slate-400 mt-1">
            Judges evaluate your avatar in less than 8 seconds. Apply these styling protocols to capture immediate attention:
          </p>
        </div>

        <div className="space-y-6">
          {runwayRules.map((r) => (
            <div key={r.step} className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 font-extrabold text-lg shrink-0">
                  {r.step}
                </div>
                <h3 className="text-lg font-bold text-white">{r.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Layering Recipe Showcase */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-pink-400" />
            <span>Top-Tier High Scoring Layering Recipes</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Proven multi-layer combinations guaranteed to earn 4-star and 5-star ratings across public and pro servers:
          </p>
        </div>

        <div className="glass-panel rounded-2xl overflow-x-auto border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 uppercase text-[10px] font-bold text-slate-300 tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Style Archetype</th>
                <th className="p-4">Mesh Layering Composition</th>
                <th className="p-4">Expected Community Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {layeringCombos.map((combo) => (
                <tr key={combo.name} className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 font-bold text-white text-sm">{combo.name}</td>
                  <td className="p-4 text-pink-300">{combo.pieces}</td>
                  <td className="p-4 font-bold text-amber-300">{combo.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-pink-400" />
          <span>Frequently Asked Questions (DTI FAQ)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="glass-panel p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">{f.q}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
