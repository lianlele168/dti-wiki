'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Gift, Shirt, Layers, Award, Coins, BookOpen, ExternalLink, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Codes', href: '/codes', icon: Gift },
    { name: 'Theme Guide', href: '/theme-guide', icon: Shirt },
    { name: 'Layering Hacks', href: '/layering-hacks', icon: Layers },
    { name: 'Pose Tier List', href: '/pose-tier-list', icon: Award },
    { name: 'Pink Cash', href: '/currency-farming', icon: Coins },
    { name: '5-Star Guide', href: '/beginner-guide', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-pink-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg shadow-pink-950/80 group-hover:scale-105 transition-transform border border-pink-400/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white group-hover:text-pink-300 transition-colors">
                DTI <span className="text-pink-400">WIKI</span>
              </span>
              <span className="block text-[10px] text-pink-400/80 font-mono -mt-1 uppercase tracking-widest">
                Dress To Impress Guides
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-pink-950/50 border border-transparent hover:border-pink-800/50 transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-pink-400" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Play Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.roblox.com/games/15001162588/Dress-To-Impress"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 shadow-lg shadow-pink-950/80 border border-pink-400/30 hover:scale-[1.02] transition-all"
            >
              <span>Play DTI on Roblox</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-pink-950/50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-pink-900/40 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-pink-950/60 hover:text-white"
              >
                <Icon className="w-4 h-4 text-pink-400" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
