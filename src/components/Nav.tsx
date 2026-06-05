'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/catalog', label: 'Catalog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{ background: '#1c1228', padding: '14px 24px', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '16px', fontWeight: 500, color: '#b8906a', letterSpacing: '0.18em' }}>
            ARYAM&apos;S JEWELRY
          </div>
          <div style={{ fontSize: '8px', color: '#7a5a68', letterSpacing: '0.22em', marginTop: '2px' }}>
            ELEGANCE IN EVERY DETAIL
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: '28px' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: '11px',
                letterSpacing: '0.08em',
                textDecoration: 'none',
                color: pathname === l.href ? '#b8906a' : '#c8b8c0',
                borderBottom: pathname === l.href ? '0.5px solid #b8906a' : 'none',
                paddingBottom: pathname === l.href ? '2px' : '0',
                transition: 'color 0.2s',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Language toggle + mobile menu button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', border: '0.5px solid #3a2840', borderRadius: '20px', overflow: 'hidden' }}>
            <span style={{ fontSize: '10px', padding: '4px 10px', background: '#b8906a', color: '#1c1228', fontWeight: 500, cursor: 'pointer' }}>EN</span>
            <span style={{ fontSize: '10px', padding: '4px 10px', color: '#6a4858', cursor: 'pointer' }}>عربي</span>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
            aria-label="Toggle menu"
          >
            <div style={{ width: '20px', height: '1.5px', background: '#b8906a', margin: '4px 0' }} />
            <div style={{ width: '20px', height: '1.5px', background: '#b8906a', margin: '4px 0' }} />
            <div style={{ width: '20px', height: '1.5px', background: '#b8906a', margin: '4px 0' }} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{ maxWidth: '1200px', margin: '12px auto 0', paddingTop: '12px', borderTop: '0.5px solid #2e1e3a' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                fontSize: '13px',
                letterSpacing: '0.1em',
                color: pathname === l.href ? '#b8906a' : '#c8b8c0',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '0.5px solid #2e1e3a',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
