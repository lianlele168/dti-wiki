import Link from 'next/link';
import { Sparkles, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-pink-900/40 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center border border-pink-400/30">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-black text-white tracking-tight">
              DRESS TO IMPRESS <span className="text-pink-400">WIKI</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-md">
            The premier community hub for Roblox Dress To Impress (DTI). Instant 5-minute theme outfit recipes, verified clothes codes, clothing layering hacks, and 5-star runway guides.
          </p>
          <div className="text-[11px] text-slate-500">
            Disclaimer: DTI Wiki is an unofficial fan resource. Roblox and Dress To Impress are registered trademarks of their respective owners.
          </div>
        </div>

        {/* Wiki Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-pink-300 mb-4">DTI Guides</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/codes" className="hover:text-pink-300 transition-colors">
                DTI Codes (August 2026)
              </Link>
            </li>
            <li>
              <Link href="/theme-guide" className="hover:text-pink-300 transition-colors">
                Runway Theme Outfit Combos
              </Link>
            </li>
            <li>
              <Link href="/layering-hacks" className="hover:text-pink-300 transition-colors">
                Clothing Layering Hacks
              </Link>
            </li>
            <li>
              <Link href="/pose-tier-list" className="hover:text-pink-300 transition-colors">
                Pose Pack Tier List
              </Link>
            </li>
          </ul>
        </div>

        {/* Official Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-pink-300 mb-4">Official Links</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="https://www.roblox.com/games/15001162588/Dress-To-Impress"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-pink-300 transition-colors"
              >
                <span>Play DTI (Roblox)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/dti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-pink-300 transition-colors"
              >
                <span>Official DTI Discord</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>&copy; {new Date().getFullYear()} Dress To Impress Wiki. All rights reserved.</div>
        <div className="flex items-center gap-1">
          <span>Crafted for DTI players with</span>
          <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
        </div>
      </div>
    </footer>
  );
}

