import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.scss';
import Providers from '@/redux/Provider';
import Header from './_components/header';
import Footer from './_components/footer';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
export const metadata: Metadata = {
  title: 'Smart Tool Web - Convertor de Texto',
  description:
    'Smart Case Text é uma ferramenta web para converter textos em letras Maiúsculas, Minúscula e todas as primeiras letras de cadas palavra Maiúsculaconverta seus textos para Mercado Livre, YouTube, entre outros serviços',
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
      <head>
        <meta
          name="google-site-verification"
          content="gyZyuWhHUqK5ioosV8ubuh-IENbhgJm3_IzZGqvnyN0"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZR91CKDYN4"
        ></Script>
        <Script id="script google">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZR91CKDYN4');
          `}
        </Script>
      </head>
      <body>
        <Providers>
          <Header />
          <div>{children}</div>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
