import type { Metadata } from 'next';
import { Besley } from 'next/font/google';
import './globals.scss';

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
        <h1>Papirskjema</h1>
        {children}
      </body>
    </html>
  );
}
