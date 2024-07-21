import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.scss';
import Providers from '@/redux/Provider';
import Header from './components/header';

export const metadata: Metadata = {
  title: 'Convert Case - Convertor de Texto',
  description:
    'Converta seus texto em diversos formatos, Maiúscula, minúscola de manaeira rápida, simples e eficiênte',
  keywords: 'convert case, maiúscula, minúcula, uppercase, lowercase',
  icons: {
    icon: ['./logo.png'],
    apple: ['./logo.png'],
    shortcut: ['./logo.png'],
  },
};

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  weight: ['100', '300', '500', '900'],
  style: ['italic', 'normal'],
  variable: '--font-montserrat',
});
const roboto = Roboto({
  subsets: ['cyrillic'],
  weight: ['100', '300', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${montserrat.variable}, ${roboto.variable}`}>
      <body>
        <Providers>
          <Header />
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
