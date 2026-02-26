import './globals.css';

export const metadata = {
  title: 'Zupply - Software para operadores logísticos de última milla',
  description:
    'Gestioná toda tu última milla desde un solo lugar. Centralizá envíos, organizá choferes y hacé seguimiento en tiempo real. Integración con MercadoLibre y Tienda Nube.',
  keywords: [
    'logística última milla',
    'software logístico',
    'gestión de envíos',
    'seguimiento de paquetes',
    'operador logístico',
    'MercadoLibre envíos',
    'Tienda Nube envíos',
    'gestión de choferes',
    'última milla Argentina',
  ],
  openGraph: {
    title: 'Zupply - Software para operadores logísticos de última milla',
    description:
      'Gestioná toda tu última milla desde un solo lugar. Centralizá envíos, organizá choferes y hacé seguimiento en tiempo real.',
    url: 'https://zupply.tech',
    siteName: 'Zupply',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zupply - Software para la última milla',
    description:
      'Centralizá envíos, organizá choferes y hacé seguimiento en tiempo real.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
