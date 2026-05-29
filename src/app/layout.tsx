import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { PAGE_TITLES, SITE_CONFIG, COMPANY } from '@/config/details';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: PAGE_TITLES.home.title,
  description: PAGE_TITLES.home.description,
  keywords: ['luxury interior design', 'modular kitchen', 'home interior', 'bedroom design', 'living room', 'office interior'],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: PAGE_TITLES.home.title,
    description: PAGE_TITLES.home.description,
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLES.home.title,
    description: PAGE_TITLES.home.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: { index: true, follow: true },
  manifest: '/manifest.json',
  themeColor: SITE_CONFIG.themeColor,
  viewport: 'width=device-width, initial-scale=1.0',
  colorScheme: 'dark light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}