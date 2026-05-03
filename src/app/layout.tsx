import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Naing Min Oo — Senior Product Manager',
  description:
    'Senior PM & Technical Delivery Manager with 7+ years across fintech, prop-tech, and consulting. Engineering roots, product mindset.',
  keywords: ['product manager', 'product owner', 'technical delivery manager', 'fintech', 'agile', 'portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} grain antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
