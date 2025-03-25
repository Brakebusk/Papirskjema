import '@/styling/globals.scss';
import '@fontsource/besley/400.css';
import '@fontsource/besley/600.css';
import '@fontsource/besley/700.css';

import type { Metadata } from 'next';

import Link from '@/components/Link';

export const metadata: Metadata = {
  title: 'Papirskjema',
  description: 'Gjør ditt Nettskjema om til et papirskjema',
};

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body>
        <div className="content-container">
          <div className="content">
            <header>
              <h1>Papirskjema</h1>{' '}
              <p className="tagline">
                Gjør ditt{' '}
                <Link href="https://nettskjema.no" target="_blank">
                  Nettskjema
                </Link>{' '}
                om til et skjema for den virkelige verden
              </p>
            </header>
            <main>{children}</main>
            <footer>
              <p>En Papirskjema™️-tjeneste</p>
            </footer>
          </div>
        </div>
        <div id="pdf-root" />
      </body>
    </html>
  );
}
