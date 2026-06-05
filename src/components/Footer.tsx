import Link from 'next/link'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=6400+Southwest+Fwy+Houston+TX+77074'

const WHATSAPP_URL =
  'https://wa.me/18327627620?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20jewelry%20collection.'

const hours = [
  { day: 'Monday',    time: '10 AM – 7 PM' },
  { day: 'Tuesday',   time: '10 AM – 7 PM' },
  { day: 'Wednesday', time: '10 AM – 7 PM' },
  { day: 'Thursday',  time: '10 AM – 7 PM' },
  { day: 'Friday',    time: '10 AM – 7 PM' },
  { day: 'Saturday',  time: '10:30 AM – 6 PM' },
  { day: 'Sunday',    time: '10:30 AM – 6 PM' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#130e1c', padding: '36px 24px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', marginBottom: '28px' }}>

          {/* Brand + contact */}
          <div>
            <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '15px', color: '#b8906a', letterSpacing: '0.16em', marginBottom: '4px' }}>
              ARYAM&apos;S JEWELRY
            </p>
            <p style={{ fontSize: '8px', color: '#6a4858', letterSpacing: '0.2em', marginBottom: '16px' }}>
              ELEGANCE IN EVERY DETAIL
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', fontSize: '11px', color: '#7a5868', lineHeight: 2, textDecoration: 'none', transition: 'color 0.2s' }}
            >
              6400 Southwest Fwy<br />Houston, TX 77074
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', fontSize: '11px', color: '#7a5868', lineHeight: 2, textDecoration: 'none', marginTop: '4px' }}
            >
              (832) 762-7620 · WhatsApp
            </a>
          </div>

          {/* Hours */}
          <div>
            <p style={{ fontSize: '9px', color: '#b8906a', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Hours
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {hours.map((h) => (
                <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                  <span style={{ fontSize: '11px', color: '#7a5868' }}>{h.day}</span>
                  <span style={{ fontSize: '11px', color: '#9a7880' }}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: '9px', color: '#b8906a', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Explore
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { href: '/catalog', label: 'Catalog' },
                { href: '/catalog?category=Bridal+Sets', label: 'Bridal Collection' },
                { href: '/catalog?category=Coins+%26+Bars', label: 'Coins & Bars' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ fontSize: '11px', color: '#7a5868', textDecoration: 'none' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontSize: '9px', color: '#b8906a', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Follow us
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { href: 'https://www.instagram.com/aryamjewelry0/', label: 'Instagram' },
                { href: 'https://www.tiktok.com/@aryamjewelry0', label: 'TikTok' },
                { href: WHATSAPP_URL, label: 'WhatsApp' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '11px', color: '#7a5868', textDecoration: 'none' }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '0.5px solid #2c1e34', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '10px', color: '#4a3448' }}>© {new Date().getFullYear()} Aryam&apos;s Jewelry · Houston, TX</span>
          <span style={{ fontSize: '10px', color: '#4a3448' }}>Insured shipping across the United States</span>
        </div>
      </div>
    </footer>
  )
}
