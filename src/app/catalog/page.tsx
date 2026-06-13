'use client'

import { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import { client } from '@/lib/sanity'
import { allProductsQuery } from '@/lib/queries'

const CATEGORIES = ['All', 'Rings', 'Necklaces', 'Bangles', 'Bracelets', 'Bridal Sets', 'Earrings', 'Coins & Bars', 'Silver']

type Product = {
  _id: string
  name: string
  category: string
  karat?: string
  available: boolean
  publishedAt: string
  images?: { url: string; alt?: string }[]
}

function ProductCard({ product }: { product: Product }) {
  const [imgIndex, setImgIndex] = useState(0)
  const images = product.images ?? []

  return (
    <div
      style={{
        background: '#fff',
        border: '0.5px solid var(--divider)',
        borderRadius: '6px',
        overflow: 'hidden',
        opacity: product.available ? 1 : 0.72,
      }}
    >
      {/* Image area */}
      <div style={{ position: 'relative', height: '200px', background: product.available ? '#f0e8dc' : '#e8e0d4' }}>
        {images[imgIndex] && (
          <Image
            src={images[imgIndex].url}
            alt={images[imgIndex].alt ?? product.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 640px) 50vw, 33vw"
          />
        )}

        {/* Sold overlay */}
        {!product.available && <div className="sold-overlay" />}

        {/* Badge */}
        <span style={{
          position: 'absolute', top: 10, left: 10,
          background: product.available ? '#1c1228' : '#3a1828',
          color: product.available ? '#b8906a' : '#dcc0a0',
          fontSize: '9px', padding: '3px 8px', letterSpacing: '0.08em', borderRadius: '2px',
        }}>
          {product.available ? (product.karat ?? 'Gold') : 'Sold'}
        </span>

        {/* Carousel dots */}
        {images.length > 1 && (
          <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '4px' }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                style={{
                  width: '5px', height: '5px', borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer',
                  background: i === imgIndex ? '#b8906a' : '#c8b8a8',
                }}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '12px 14px 14px' }}>
        <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '15px', color: product.available ? 'var(--text-dark)' : '#7a5868', marginBottom: '3px', lineHeight: 1.3 }}>
          {product.name}
        </p>
        <p style={{ fontSize: '10px', color: '#a08878', letterSpacing: '0.06em' }}>{product.category}</p>
        {product.karat && (
          <p style={{ fontSize: '10px', color: product.available ? 'var(--rose-gold)' : '#c8a888', marginTop: '4px' }}>
            {product.karat}
          </p>
        )}
      </div>
    </div>
  )
}

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(allProductsQuery)
      .then(setProducts)
      .catch(() => setProducts([]))
      .finally(() => setLoading(false))
  }, [])

  const filtered = useMemo(() => {
    const base = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory)
    const available = base.filter(p => p.available)
    const sold = base.filter(p => !p.available)
    return { available, sold }
  }, [products, activeCategory])

  const totalAvailable = filtered.available.length
  const totalSold = filtered.sold.length

  return (
    <div style={{ minHeight: '60vh' }}>
      {/* Page header */}
      <div style={{ background: 'var(--parchment)', padding: '36px 24px 28px', textAlign: 'center', borderBottom: '0.5px solid var(--divider)' }}>
        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(26px, 5vw, 34px)', fontWeight: 300, color: 'var(--text-dark)', marginBottom: '8px' }}>
          Our Collection
        </h1>
        <div className="ornament"><div className="ornament-line" /><div className="ornament-diamond" /><div className="ornament-line" /></div>
      </div>

      {/* Filter bar */}
      <div style={{ background: 'var(--cream)', borderBottom: '0.5px solid var(--divider)', padding: '0 20px', position: 'sticky', top: '57px', zIndex: 40 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '4px', padding: '10px 0', overflowX: 'auto', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontSize: '10px',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '0.5px solid',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  letterSpacing: '0.06em',
                  transition: 'all 0.15s',
                  background: activeCategory === cat ? 'var(--rose-gold)' : 'transparent',
                  color: activeCategory === cat ? 'var(--parchment)' : '#7a5848',
                  borderColor: activeCategory === cat ? 'var(--rose-gold)' : '#d4c0a8',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <span style={{ fontSize: '10px', color: 'var(--text-subtle)', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Newest first
          </span>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 20px 48px' }}>

        {loading && (
          <p style={{ textAlign: 'center', color: 'var(--text-subtle)', padding: '60px 0', fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '18px' }}>
            Loading collection…
          </p>
        )}

        {!loading && totalAvailable === 0 && totalSold === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--text-subtle)', padding: '60px 0', fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '18px' }}>
            No pieces found in this category.
          </p>
        )}

        {!loading && (
          <>
            {/* Count */}
            <p style={{ fontSize: '11px', color: 'var(--text-subtle)', marginBottom: '18px', letterSpacing: '0.04em' }}>
              {totalAvailable} {totalAvailable === 1 ? 'piece' : 'pieces'} available
              {totalSold > 0 && ` · ${totalSold} sold`}
            </p>

            {/* Available products */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px' }}>
              {filtered.available.map(p => <ProductCard key={p._id} product={p} />)}
            </div>

            {/* Sold section */}
            {filtered.sold.length > 0 && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '32px 0 16px' }}>
                  <div style={{ flex: 1, height: '0.5px', background: 'var(--divider)' }} />
                  <span style={{ fontSize: '10px', color: '#a08878', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>Sold pieces</span>
                  <div style={{ flex: 1, height: '0.5px', background: 'var(--divider)' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px' }}>
                  {filtered.sold.map(p => <ProductCard key={p._id} product={p} />)}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
