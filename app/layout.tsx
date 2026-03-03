import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/lib/auth-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AuthProvider>
            {children}
            <Analytics />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
