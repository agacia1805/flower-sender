import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Flower sender',
  description: 'Flower sender app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} flex min-h-screen flex-col text-white`}
      >
        <Header />
        <div className='flex flex-grow flex-col justify-center px-8'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
