import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.scss';
import Providers from '@/redux/Provider';
import Header from './components/header';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Smart Tool Web - Convertor de Texto',
  description:
    'Smart Case Text é uma ferramenta web para converter textos em letrasMaiúsculas, Minúscula e todas as primeiras letras de cadas palavra Maiúsculaconverta seus textos para Mercado Livre, YouTube, entre outros serviços',
  keywords:
    'convert case, maiúscula, minúcula, uppercase, lowercase, capitalize',
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
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
