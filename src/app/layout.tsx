import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://portfolio-naingminoo.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Naing Min Oo — Senior Product Manager',
  description:
    'Naing Min Oo is a Senior Product Manager & Technical Delivery Manager with 7+ years across fintech, prop-tech, and consulting. Engineering roots, product mindset. Based in Cambridge, UK.',
  keywords: [
    'Naing Min Oo',
    'NMO',
    'product manager',
    'senior product manager',
    'technical delivery manager',
    'fintech',
    'agile',
    'Cambridge',
    'United Kingdom',
    'portfolio',
  ],
  authors: [{ name: 'Naing Min Oo', url: siteUrl }],
  creator: 'Naing Min Oo',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Naing Min Oo — Senior Product Manager',
    description:
      'Naing Min Oo is a Senior PM & Technical Delivery Manager with 7+ years across fintech, prop-tech, and consulting.',
    siteName: 'Naing Min Oo',
  },
  twitter: {
    card: 'summary',
    title: 'Naing Min Oo — Senior Product Manager',
    description:
      'Senior PM & Technical Delivery Manager with 7+ years across fintech, prop-tech, and consulting.',
    creator: '@naingminoo',
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Naing Min Oo',
  url: siteUrl,
  jobTitle: 'Senior Product Manager',
  description:
    'Senior Product Manager & Technical Delivery Manager with 7+ years across fintech, prop-tech, and consulting.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cambridge',
    addressCountry: 'GB',
  },
  sameAs: [
    'https://www.linkedin.com/in/naingminoo',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} grain antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
