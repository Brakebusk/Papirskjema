import './globals.scss';

import type { Metadata } from 'next';
import { Besley } from 'next/font/google';

const besley = Besley({
  variable: '--font-besley',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Papirskjema',
  description: 'Gjør ditt Nettskjema om til et papirskjema',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body className={`${besley.variable} ${besley.variable}`}>
        <div className="content">
          <header>
            <h1>Papirskjema</h1>{' '}
            <p className="tagline">
              Gjør ditt Nettskjema om til et skjema for den virkelige verden
            </p>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
