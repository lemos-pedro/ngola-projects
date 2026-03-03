import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://nprojects.vercel.app'),

  title: 'Ngola Suite - Gestão de Projetos Profissional',
  description:
    'Plataforma completa de gestão de projetos para equipes e empresas angolanas',

  openGraph: {
    title: 'Ngola Suite - Gestão de Projetos Profissional',
    description:
      'Plataforma completa de gestão de projetos para equipes e empresas angolanas',
    url: 'https://nprojects.vercel.app',
    siteName: 'Ngola Suite',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_AO',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ngola Projects - Gestão de Projetos Profissional',
    description:
      'Gestão de projetos inteligente para empresas modernas.',
    images: ['/og-image.png'],
  },

  icons: {
    shortcut: '/favicon.ico',
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}