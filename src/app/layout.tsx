import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Ticker from '@/components/Ticker'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Aryam's Jewelry — Elegance in Every Detail",
  description:
    "Fine gold and silver jewelry in Houston, Texas. Family owned and operated. Serving the community from birthdays to weddings. Insured shipping across the United States.",
  openGraph: {
    title: "Aryam's Jewelry",
    description: 'Fine gold and silver jewelry. Houston, TX.',
    siteName: "Aryam's Jewelry",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body>
        <Ticker />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
