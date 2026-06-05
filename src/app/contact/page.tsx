import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Visit Us — Aryam's Jewelry",
  description: 'Find Aryam\'s Jewelry at 6400 Southwest Fwy, Houston, TX. Open 7 days a week. Message us on WhatsApp.',
}

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=6400+Southwest+Fwy+Houston+TX+77074'
const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.9!2d-95.5!3d29.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6400+Southwest+Fwy%2C+Houston%2C+TX+77074!5e0!3m2!1sen!2sus!4v1'
const WHATSAPP_URL = 'https://wa.me/18327627620?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20jewelry%20collection.'

const hours = [
  { day: 'Monday',    time: '10 AM – 7 PM' },
  { day: 'Tuesday',   time: '10 AM – 7 PM' },
  { day: 'Wednesday', time: '10 AM – 7 PM' },
  { day: 'Thursday',  time: '10 AM – 7 PM' },
  { day: 'Friday',    time: '10 AM – 7 PM' },
  { day: 'Saturday',  time: '10:30 AM – 6 PM' },
  { day: 'Sunday',    time: '10:30 AM – 6 PM' },
]

export default function ContactPage() {
  return (
    <div>
      {/* Page header */}
      <div style={{ background: 'var(--parchment)', padding: '36px 24px 28px', textAlign: 'center', borderBottom: '0.5px solid var(--divider)' }}>
        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(26px, 5vw, 34px)', fontWeight: 300, color: 'var(--text-dark)', marginBottom: '8px' }}>
          Visit Us
        </h1>
        <div className="ornament"><div className="ornament-line" /><div className="ornament-diamond" /><div className="ornament-line" /></div>
      </div>

      {/* Contact body */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)', minHeight: '500px' }} className="contact-grid">
        {/* Left panel */}
        <div style={{ padding: '36px 32px', borderRight: '0.5px solid var(--divider)', display: 'flex', flexDirection: 'column', gap: '28px', background: 'var(--parchment)' }}>

          {/* WhatsApp CTA */}
          <div>
            <p style={{ fontSize: '9px', color: 'var(--rose-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Send an enquiry</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#1c1228', padding: '14px 18px', borderRadius: '3px', textDecoration: 'none' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.09-1.35A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="#25D366" opacity="0.9"/>
                <path d="M17 14.8c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.5-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="#fdf8f2"/>
              </svg>
              <div>
                <div style={{ fontSize: '11px', color: '#b8906a', letterSpacing: '0.1em', fontWeight: 500 }}>MESSAGE US ON WHATSAPP</div>
                <div style={{ fontSize: '10px', color: '#7a5848', marginTop: '2px' }}>(832) 762-7620 · tap to open a chat</div>
              </div>
            </a>
          </div>

          {/* Address */}
          <div>
            <p style={{ fontSize: '9px', color: 'var(--rose-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Find us</p>
            <p style={{ fontSize: '12px', color: 'var(--text-mid)', lineHeight: 1.8 }}>6400 Southwest Fwy, Houston, TX 77074</p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="subtle-link" style={{ marginTop: '4px' }}>
              Open in Google Maps →
            </a>
          </div>

          {/* Phone */}
          <div>
            <p style={{ fontSize: '9px', color: 'var(--rose-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Call us</p>
            <p style={{ fontSize: '12px', color: 'var(--text-mid)', lineHeight: 1.8 }}>(832) 762-7620</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="subtle-link" style={{ marginTop: '4px' }}>
              Also on WhatsApp →
            </a>
          </div>

          {/* Hours */}
          <div>
            <p style={{ fontSize: '9px', color: 'var(--rose-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Store hours</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {hours.map((h, i) => (
                <div key={h.day}>
                  {i === 5 && <div style={{ height: '0.5px', background: 'var(--divider)', margin: '4px 0' }} />}
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                    <span style={{ fontSize: '12px', color: '#7a5848' }}>{h.day}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-mid)' }}>{h.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p style={{ fontSize: '9px', color: 'var(--rose-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Follow us</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/aryamjewelry0/' },
                { label: 'TikTok', href: 'https://www.tiktok.com/@aryamjewelry0' },
                { label: 'WhatsApp', href: WHATSAPP_URL },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '10px', color: '#7a5848', border: '0.5px solid #d4c0a8', padding: '5px 12px', borderRadius: '20px', textDecoration: 'none', letterSpacing: '0.06em' }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Google Maps embed */}
        <div style={{ position: 'relative', minHeight: '500px' }}>
          <iframe
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', minHeight: '500px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aryam's Jewelry location"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-grid > div:first-child {
            border-right: none !important;
            border-bottom: 0.5px solid var(--divider);
          }
        }
      `}</style>
    </div>
  )
}
