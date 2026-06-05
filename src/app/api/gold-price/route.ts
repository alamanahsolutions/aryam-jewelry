import { NextResponse } from 'next/server'

// Cached value — refreshes every 15 minutes
let cache: { data: GoldPriceData; timestamp: number } | null = null
const CACHE_TTL = 15 * 60 * 1000 // 15 minutes

export interface GoldPriceData {
  gold: { price: number; change: number }
  silver: { price: number; change: number }
  updatedAt: string
}

export async function GET() {
  // Return cached data if still fresh
  if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
    return NextResponse.json(cache.data)
  }

  try {
    const apiKey = process.env.GOLD_API_KEY

    if (!apiKey) {
      return NextResponse.json(getFallbackData())
    }

    const [goldRes, silverRes] = await Promise.all([
      fetch('https://www.goldapi.io/api/XAU/USD', {
        headers: { 'x-access-token': apiKey, 'Content-Type': 'application/json' },
        next: { revalidate: 900 },
      }),
      fetch('https://www.goldapi.io/api/XAG/USD', {
        headers: { 'x-access-token': apiKey, 'Content-Type': 'application/json' },
        next: { revalidate: 900 },
      }),
    ])

    if (!goldRes.ok || !silverRes.ok) {
      return NextResponse.json(getFallbackData())
    }

    const gold = await goldRes.json()
    const silver = await silverRes.json()

    const data: GoldPriceData = {
      gold: {
        price: Math.round(gold.price * 100) / 100,
        change: Math.round(gold.ch * 100) / 100,
      },
      silver: {
        price: Math.round(silver.price * 100) / 100,
        change: Math.round(silver.ch * 100) / 100,
      },
      updatedAt: new Date().toISOString(),
    }

    cache = { data, timestamp: Date.now() }
    return NextResponse.json(data)
  } catch {
    return NextResponse.json(getFallbackData())
  }
}

function getFallbackData(): GoldPriceData {
  return {
    gold: { price: 0, change: 0 },
    silver: { price: 0, change: 0 },
    updatedAt: new Date().toISOString(),
  }
}
