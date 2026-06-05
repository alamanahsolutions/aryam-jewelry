import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/sanity'
import { featuredProductsQuery } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'

const CATEGORIES = [
  { name: 'Rings',        sub: 'Gold · Silver' },
  { name: 'Necklaces',    sub: 'Gold · Silver' },
  { name: 'Bangles',      sub: 'Gold · Silver' },
  { name: 'Bridal Sets',  sub: 'Complete collections' },
  { name: 'Bracelets',    sub: 'Gold · Silver' },
  { name: 'Coins & Bars', sub: 'Investment gold' },
  { name: 'Earrings',     sub: 'Gold · Silver' },
  { name: 'Silver',       sub: 'Jewelry · Bullion' },
]

export const revalidate = 60

export default async function HomePage() {
  const featured = await client.fetch(featuredProductsQuery).catch(() => [])

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--parchment)', padding: 'clamp(48px, 8vw, 80px) 24px', textAlign: 'center', borderBottom: '0.5px solid var(--divider)', position: 'relative', overflow: 'hidden' }}>
        {/* Corner ornaments */}
        <svg style={{ position: 'absolute', top: 16, left: 16, opacity: 0.2 }} width="36" height="36" viewBox="0 0 36 36"><path d="M2,2 L2,18 M2,2 L18,2" stroke="#b8906a" strokeWidth="1.2" fill="none"/></svg>
        <svg style={{ position: 'absolute', bottom: 16, right: 16, opacity: 0.2, transform: 'rotate(180deg)' }} width="36" height="36" viewBox="0 0 36 36"><path d="M2,2 L2,18 M2,2 L18,2" stroke="#b8906a" strokeWidth="1.2" fill="none"/></svg>

        <div className="ornament" style={{ marginBottom: '24px' }}>
          <div className="ornament-line" />
          <div className="ornament-diamond" />
          <div className="ornament-line" />
        </div>

        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: 300, color: 'var(--text-dark)', lineHeight: 1.2, marginBottom: '16px' }}>
          Elegance in<br />Every Detail
        </h1>

        <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '360px', margin: '0 auto 32px', letterSpacing: '0.02em' }}>
          Fine gold and silver jewelry rooted in Middle Eastern tradition. Visit our Houston showroom or shop with insured shipping across the US.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/catalog"
            style={{ background: 'var(--rose-gold)', color: 'var(--parchment)', border: 'none', fontSize: '11px', padding: '13px 30px', letterSpacing: '0.16em', textDecoration: 'none', display: 'inline-block' }}
          >
            BROWSE COLLECTION
          </Link>
          <Link
            href="/contact"
            style={{ fontSize: '12px', color: 'var(--text-subtle)', letterSpacing: '0.06em', textDecoration: 'none', borderBottom: '0.5px solid #c8a888', paddingBottom: '1px' }}
          >
            Find us in store →
          </Link>
        </div>
      </section>

      {/* Category Grid */}
      <section style={{ background: 'var(--cream)', padding: '52px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-heading">Shop by Category</h2>
          <div className="section-rule" />
          <div style={{ height: '28px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '10px' }}>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                href={`/catalog?category=${encodeURIComponent(cat.name)}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{ background: 'var(--parchment)', border: '0.5px solid var(--divider)', borderRadius: '6px', padding: '20px 10px 16px', textAlign: 'center', transition: 'border-color 0.2s' }}>
                  <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '13px', color: '#3a1a28', letterSpacing: '0.1em', fontWeight: 500 }}>
                    {cat.name.toUpperCase()}
                  </p>
                  <p style={{ fontSize: '10px', color: '#a08878', marginTop: '3px' }}>{cat.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured / New Arrivals */}
      {featured.length > 0 && (
        <section style={{ padding: '52px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="section-heading">New Arrivals</h2>
            <div className="section-rule" />
            <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-subtle)', letterSpacing: '0.06em', marginBottom: '28px' }}>
              Recently added to our collection
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
              {featured.map((product: any) => (
                <div key={product._id} style={{ background: '#fff', border: '0.5px solid var(--divider)', borderRadius: '6px', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', height: '220px', background: '#f0e8dc' }}>
                    {product.images?.[0] && (
                      <Image
                        src={urlFor(product.images[0]).width(440).height(440).url()}
                        alt={product.images[0].alt ?? product.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                    <span style={{ position: 'absolute', top: 10, left: 10, background: '#b8906a', color: '#fdf8f2', fontSize: '9px', padding: '3px 8px', letterSpacing: '0.08em', borderRadius: '2px' }}>
                      New
                    </span>
                  </div>
                  <div style={{ padding: '12px 14px' }}>
                    <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '15px', color: 'var(--text-dark)', marginBottom: '3px' }}>
                      {product.name}
                    </p>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{product.category}</p>
                    {product.karat && (
                      <p style={{ fontSize: '11px', color: 'var(--rose-gold)', marginTop: '4px' }}>{product.karat}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <Link
                href="/catalog"
                style={{ fontSize: '11px', color: 'var(--text-subtle)', letterSpacing: '0.1em', textDecoration: 'none', borderBottom: '0.5px solid var(--divider)', paddingBottom: '2px' }}
              >
                VIEW FULL COLLECTION →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Trust strip */}
      <div style={{ background: '#1c1228', padding: '28px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', textAlign: 'center' }}>
          {[
            { val: '22K & 24K', label: 'Certified Gold' },
            { val: 'Houston', label: 'SW Freeway Showroom' },
            { val: '7 Days', label: 'Open Every Day' },
            { val: 'Insured Shipping', label: 'Across the United States' },
          ].map((t) => (
            <div key={t.val}>
              <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '20px', color: '#b8906a' }}>{t.val}</p>
              <p style={{ fontSize: '10px', color: '#7a5868', marginTop: '4px', letterSpacing: '0.1em' }}>{t.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
