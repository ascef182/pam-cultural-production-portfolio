import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});
const _sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pamascef.com.br'),
  title: 'Pâm Ascef Cazarini — Produtora Cultural & Tradutora Audiovisual',
  description: 'Produção cultural, coordenação de festivais de cinema, teatro e circo. Tradução e legendagem audiovisual para cinema e artes cênicas.',
  icons: {
    icon: '/fotos/PamAscef.jpeg',
    apple: '/fotos/PamAscef.jpeg',
  },
  openGraph: {
    title: 'Pâm Ascef Cazarini',
    description: 'Produtora Cultural & Tradutora Audiovisual. Quatro anos de experiência em festivais de cinema, teatro e circo no Brasil.',
    images: [
      {
        url: '/fotos/PamAscef.jpeg',
        width: 800,
        height: 800,
        alt: 'Pâm Ascef Cazarini - Produtora Cultural',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pâm Ascef Cazarini — Produtora Cultural',
    description: 'Produção cultural e tradução audiovisual para festivais de cinema, teatro e circo.',
    images: ['/fotos/PamAscef.jpeg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${_playfair.variable} ${_sourceSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
