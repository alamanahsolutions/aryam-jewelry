'use client'

import { useEffect, useState } from 'react'
import type { GoldPriceData } from '@/app/api/gold-price/route'

export default function Ticker() {
  const [prices, setPrices] = useState<GoldPriceData | null>(null)

  useEffect(() => {
    async function fetchPrices() {
      try {
        const res = await fetch('/api/gold-price')
        if (res.ok) setPrices(await res.json())
      } catch {
        // silently fail — ticker just won't show
      }
    }

    fetchPrices()
    // Refresh every 15 minutes
    const interval = setInterval(fetchPrices, 15 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  function formatChange(change: number) {
    if (change === 0) return null
    const sign = change > 0 ? '+' : ''
    return (
      <span style={{ color: change > 0 ? '#6a8a5a' : '#a04040', fontSize: '10px' }}>
        {sign}${Math.abs(change).toFixed(2)}
      </span>
    )
  }

  if (!prices || (prices.gold.price === 0 && prices.silver.price === 0)) return null

  return (
    <div
      style={{
        background: '#130e1c',
        padding: '6px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        fontSize: '10px',
      }}
    >
      <span style={{ color: '#5a4858', letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
        Spot prices
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        {/* Gold */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <span style={{ color: '#7a6068' }}>Gold</span>
          <span style={{ color: '#b8906a', fontWeight: 500, fontSize: '11px' }}>
            ${prices.gold.price.toLocaleString('en-US', { minimumFractionDigits: 2 })} / oz
          </span>
          {formatChange(prices.gold.change)}
        </div>

        <div style={{ width: '0.5px', height: '12px', background: '#2e1e3a' }} />

        {/* Silver */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <span style={{ color: '#7a6068' }}>Silver</span>
          <span style={{ color: '#b8906a', fontWeight: 500, fontSize: '11px' }}>
            ${prices.silver.price.toFixed(2)} / oz
          </span>
          {formatChange(prices.silver.change)}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#6a8a5a' }} />
        <span style={{ color: '#4a3858', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '9px', whiteSpace: 'nowrap' }}>
          Kitco · 15 min delay · USD
        </span>
      </div>
    </div>
  )
}
