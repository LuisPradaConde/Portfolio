import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Premium CV Portfolio',
  description: 'Portfolio profesional bilingue construido con Next.js y React.'
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
