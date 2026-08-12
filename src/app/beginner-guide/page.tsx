import type { Metadata } from 'next';
import { BookOpen, Star, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dress To Impress 5-Star Runway Guide (August 2026) — Win #1 Podium',
  description: 'Pro runway voting tips and theme matching strategies to place 1st on the podium in Roblox Dress To Impress (DTI).',
};

export default function BeginnerGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          DTI 5-Star <span className="text-pink-400">Runway Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          How to get voted 5 stars by other players and secure 1st place podium every match.
        </p>
      </div>

      <div className="space-y-6">
        <section className="glass-panel p-6 rounded-2xl space-y-3 border border-pink-900/50">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400" />
            <span>1. Match the Theme 100% Accurately</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Players vote 1 star if an outfit has zero connection to the drawn theme. Always use our Theme Guide to get the exact color palette and item vibe right.
          </p>
        </section>

        <section className="glass-panel p-6 rounded-2xl space-y-3 border border-pink-900/50">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span>2. Layer at Least 3 Clothing Items</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Single-item dresses look plain and lazy. Layering corsets over skirts, gloves, and code accessories shows effort and guarantees 4-star and 5-star votes.
          </p>
        </section>

        <section className="glass-panel p-6 rounded-2xl space-y-3 border border-pink-900/50">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-pink-400" />
            <span>3. Cycle Through 3 Poses on the Runway</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            When it is your turn to walk the runway, do not stand still! Click 3 different pose animations (e.g. Model Walk 1 ➔ Pose 4 ➔ Turn) to showcase your back hair and dress details.
          </p>
        </section>
      </div>
    </div>
  );
}
