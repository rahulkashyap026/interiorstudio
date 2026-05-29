import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { PAGE_TITLES } from '@/config/details';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: PAGE_TITLES.home.title,
  description: PAGE_TITLES.home.description,
  keywords: ['luxury interior design', 'modular kitchen', 'home interior', 'bedroom design', 'living room', 'office interior'],
  openGraph: {
    title: PAGE_TITLES.home.title,
    description: PAGE_TITLES.home.description,
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