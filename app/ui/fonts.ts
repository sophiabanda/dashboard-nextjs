import { Inter, Lusitana } from 'next/font/google';

//Chosen fonts are optimized in the app when  using the next/font module. It downloads font files at build time and hosts them with the other static assets

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});
