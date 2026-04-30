import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luis Prada Conde | Portfolio profesional',
  description: 'Portfolio profesional bilingüe de ciberseguridad, ciberinteligencia y DevSecOps.'
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
