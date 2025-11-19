import type { Metadata } from 'next'
import { Raleway, Orbitron } from 'next/font/google'
import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

const horizon = Orbitron({
  subsets: ['latin'],
  variable: '--font-horizon',
  display: 'swap',
  weight: ['700', '900'],
})

export const metadata: Metadata = {
  title: 'TUĞCU İnşaat ve Tadilat | Beylikdüzü, Esenyurt, İstanbul - Satılık Ev, Tadilat, İnşaat',
  description: 'Beylikdüzü, Esenyurt, Büyükçekmece, Küçükçekmece, Silivri ve Halkalı\'da profesyonel inşaat, tadilat ve emlak hizmetleri. Beylikdüzü satılık ev, ev tadilatı, bina inşaatı. 15 yıllık deneyim, 70+ tamamlanmış proje.',
  keywords: 'beylikdüzü satılık ev, beylikdüzü tadilat, esenyurt tadilat, istanbul tadilat, küçükçekmece tadilat, büyükçekmece inşaat, silivri tadilat, halkalı inşaat, tugcu inşaat, ev tadilatı istanbul, beylikdüzü emlak, esenyurt inşaat, istanbul inşaat firması',
  authors: [{ name: 'Tuğcu İnşaat' }],
  openGraph: {
    title: 'TUĞCU İnşaat ve Tadilat | Beylikdüzü Satılık Ev, Tadilat, İnşaat',
    description: 'Beylikdüzü, Esenyurt, Büyükçekmece, Küçükçekmece, Silivri, Halkalı ve tüm İstanbul\'da inşaat, tadilat ve emlak hizmetleri. Hayalinizdeki eve uygun fiyatlarla kavuşun.',
    url: 'https://tugcuinsaat.com',
    siteName: 'TUĞCU İnşaat ve Tadilat',
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code', // Google Search Console'dan alınacak
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://tugcuinsaat.com" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="İstanbul" />
        <meta name="geo.position" content="41.015137;28.979530" />
        <meta name="ICBM" content="41.015137, 28.979530" />
      </head>
      <body className={`${raleway.variable} ${horizon.variable}`}>{children}</body>
    </html>
  )
}
