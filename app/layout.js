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
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Zupply - Software para operadores logísticos de última milla',
    description:
      'Gestioná toda tu última milla desde un solo lugar. Centralizá envíos, organizá choferes y hacé seguimiento en tiempo real.',
    url: 'https://zupply.tech',
    siteName: 'Zupply',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zupply - Software para la última milla',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zupply - Software para la última milla',
    description:
      'Centralizá envíos, organizá choferes y hacé seguimiento en tiempo real.',
    images: ['/og-image.png'],
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
