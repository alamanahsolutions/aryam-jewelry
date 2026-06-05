import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Rings',
          'Necklaces',
          'Bangles',
          'Bracelets',
          'Bridal Sets',
          'Earrings',
          'Coins & Bars',
          'Silver',
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'karat',
      title: 'Karat',
      type: 'string',
      options: {
        list: ['18K', '21K', '22K', '24K', 'Silver'],
      },
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            }),
          ],
        },
      ],
      validation: (r) => r.min(1),
    }),
    defineField({
      name: 'available',
      title: 'Available',
      type: 'boolean',
      description: 'Uncheck to mark this piece as Sold',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured on homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'images.0',
    },
  },
})
