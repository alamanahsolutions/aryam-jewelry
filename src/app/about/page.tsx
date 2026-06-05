import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "About — Aryam's Jewelry",
  description: "A family owned and operated jewelry store serving Houston and beyond. Fine gold and silver pieces for every occasion.",
}

const WHATSAPP_URL = 'https://wa.me/18327627620?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20jewelry%20collection.'

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--parchment)' }}>
      {/* Page header */}
      <div style={{ padding: '36px 24px 28px', textAlign: 'center', borderBottom: '0.5px solid var(--divider)' }}>
        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(26px, 5vw, 34px)', fontWeight: 300, color: 'var(--text-dark)', marginBottom: '8px' }}>
          About Us
        </h1>
        <div className="ornament"><div className="ornament-line" /><div className="ornament-diamond" /><div className="ornament-line" /></div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: 'clamp(40px, 6vw, 72px) 24px' }}>

        <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(13px, 2vw, 15px)', color: '#7a5848', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '24px', textAlign: 'center' }}>
          Elegance in Every Detail
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.9 }}>
          <p>
            We are a family owned and operated jewelry store, proud to serve Houston and the communities that call it home. For those who cannot visit us in person, we offer insured shipping across the United States, so our collection is never out of reach.
          </p>

          <p>
            From the moment you walk through our doors, you are not a customer. You are a guest.
          </p>

          <p>
            Our collection spans generations of craft: fine gold and silver pieces for the bride preparing for the most important day of her life, the mother marking a milestone, the father searching for something that says what words cannot. From birthdays to weddings and everything in between, we believe every occasion deserves to be honored with something beautiful.
          </p>

          <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 300, color: 'var(--text-dark)', lineHeight: 1.5, textAlign: 'center', padding: '12px 0' }}>
            Because every day is a blessing, and every blessing deserves to be worn.
          </p>

          <p>
            We carry 18, 21, 22, and 24 karat gold jewelry alongside silver pieces and investment gold, all selected with care for quality and craftsmanship. Visit us at our showroom on Southwest Freeway, or reach out on WhatsApp. We are always happy to help you find exactly what you are looking for.
          </p>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '48px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/catalog"
            style={{ background: 'var(--rose-gold)', color: 'var(--parchment)', fontSize: '11px', padding: '13px 28px', letterSpacing: '0.16em', textDecoration: 'none' }}
          >
            BROWSE COLLECTION
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '12px', color: 'var(--text-subtle)', letterSpacing: '0.06em', textDecoration: 'none', borderBottom: '0.5px solid #c8a888', paddingBottom: '1px', alignSelf: 'center' }}
          >
            Message us on WhatsApp →
          </a>
        </div>
      </div>
    </div>
  )
}
