# Zupply Landing Page

Landing page para [Zupply](https://zupply.tech) - Software para operadores logísticos de última milla.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion** (Container Scroll Animation)
- **Lucide React** (Iconos)

## Setup local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Deploy en Vercel

1. Subir este repo a GitHub
2. Ir a [vercel.com](https://vercel.com) y conectar el repo
3. Vercel detecta Next.js automáticamente
4. Configurar dominio personalizado: `zupply.tech`

## Estructura

```
├── app/
│   ├── globals.css       # Estilos globales + Tailwind
│   ├── layout.js         # Layout root con SEO metadata
│   └── page.js           # Página principal
├── components/
│   ├── ContainerScroll.jsx  # Efecto scroll 3D (Framer Motion)
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Problem.jsx
│   ├── HowItWorks.jsx
│   ├── Features.jsx
│   ├── Integrations.jsx
│   ├── Stats.jsx
│   ├── Pricing.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── public/
│   └── dashboard.png     # Screenshot del sistema
```

## Notas

- Colocar la captura del dashboard como `public/dashboard.png`
- Los colores de marca están definidos en `tailwind.config.js`
- SEO metadata en `app/layout.js`
