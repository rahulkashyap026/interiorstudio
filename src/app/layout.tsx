import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Interior studio — Luxury Interior Design | Crafting Spaces Beyond Imagination',
  description:
    'Award-winning luxury interior design studio. Bespoke modular kitchens, living rooms, bedrooms, and full home interiors crafted with timeless elegance.',
  keywords: ['luxury interior design', 'modular kitchen', 'home interior', 'bedroom design', 'living room', 'office interior'],
  openGraph: {
    title: 'Interior studio — Crafting Spaces Beyond Imagination',
    description: 'Bespoke luxury interiors that redefine elegance.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}