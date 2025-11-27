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
  title: 'Tuğcu İnşaat | İstanbul İnşaat Tadilat Emlak | Beylikdüzü Esenyurt',
  description: 'Tuğcu İnşaat - İstanbul Beylikdüzü, Esenyurt, Büyükçekmece\'de 15 yıllık tecrübe ile inşaat, tadilat ve emlak hizmetleri. Ücretsiz keşif için hemen arayın!',
  keywords: 'istanbul inşaat, istanbul tadilat, istanbul gayrimenkul, kağıthane inşaat, alibeyköy tadilat, şişli gayrimenkul, beyoğlu tadilat, küçükçekmece inşaat, büyükçekmece tadilat, beylikdüzü inşaat, esenyurt gayrimenkul, tekirdağ inşaat, tugcu inşaat',
  authors: [{ name: 'TUGCU İnşaat' }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Tuğcu İnşaat | İstanbul İnşaat Tadilat Emlak | Beylikdüzü Esenyurt',
    description: 'Tuğcu İnşaat - İstanbul Beylikdüzü, Esenyurt, Büyükçekmece\'de 15 yıllık tecrübe ile inşaat, tadilat ve emlak hizmetleri. Ücretsiz keşif için hemen arayın!',
    url: 'https://tugcuinsaat.com',
    siteName: 'TUGCU İnşaat, Gayrimenkul ve Tadilat',
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
