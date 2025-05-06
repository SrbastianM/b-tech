import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from './presentation/components/organism/nav-bar/NavBar';
import { navItems } from '@/data/navItems';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'B-tech',
  description: 'Blog created with NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full bg-neutral-100 text-black">
          <NavBar items={navItems} />
        </nav>
        {children}
      </body>
    </html>
  );
}
