import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dress To Impress Codes & Theme Guide (August 2026) — Roblox DTI Wiki',
  description: 'Updated Roblox Dress To Impress (DTI) codes for free clothes & makeup. Explore runway theme outfit combos, clothing layering hacks, and 5-star guides.',
  keywords: [
    'dress to impress codes',
    'dti codes',
    'dress to impress theme guide',
    'dti themes combos',
    'dress to impress layering hacks',
    'dti codes august 2026'
  ],
  authors: [{ name: 'DTI Wiki Team' }],
  openGraph: {
    title: 'Dress To Impress Codes & Runway Theme Helper — Roblox DTI Wiki',
    description: 'Get active DTI codes, theme outfit recipes, clothing layering hacks, and 5-star runway tips.',
    url: 'https://dti-wiki.vercel.app',
    siteName: 'DTI Wiki',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dress To Impress Codes & Theme Helper — Roblox Wiki',
    description: 'Instant 5-minute theme outfit recipes and verified DTI codes.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0b050f] text-pink-50 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
