import { groq } from 'next-sanity'

export const allProductsQuery = groq`
  *[_type == "product"] | order(available desc, publishedAt desc) {
    _id,
    name,
    category,
    karat,
    available,
    featured,
    publishedAt,
    "images": images[]{
      "url": asset->url,
      alt
    }
  }
`

export const featuredProductsQuery = groq`
  *[_type == "product" && featured == true && available == true] | order(publishedAt desc)[0...3] {
    _id,
    name,
    category,
    karat,
    available,
    "images": images[]{
      "url": asset->url,
      alt
    }
  }
`

export const productsByCategoryQuery = groq`
  *[_type == "product" && category == $category] | order(available desc, publishedAt desc) {
    _id,
    name,
    category,
    karat,
    available,
    publishedAt,
    "images": images[]{
      "url": asset->url,
      alt
    }
  }
`
