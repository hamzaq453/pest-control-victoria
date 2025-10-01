import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    // Basic content
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required().max(100)
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 96)
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Short Description',
      description: 'Brief description for blog listing (150 characters max)',
      validation: Rule => Rule.max(150)
    }),
    defineField({
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: Rule => Rule.required()
        }
      ]
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              validation: Rule => Rule.required()
            },
            {
              name: 'layout',
              type: 'string',
              title: 'Image Layout',
              options: {
                list: [
                  {title: 'Default', value: 'default'},
                  {title: 'Full Width', value: 'full-width'},
                  {title: 'Left Aligned', value: 'left'},
                  {title: 'Right Aligned', value: 'right'},
                  {title: 'Centered', value: 'center'},
                ]
              },
              initialValue: 'default'
            },
            {
              name: 'caption',
              type: 'text',
              title: 'Caption'
            }
          ]
        },
        {
          type: 'object',
          name: 'callout',
          title: 'Callout Box',
          fields: [
            {
              name: 'type',
              type: 'string',
              title: 'Callout Type',
              options: {
                list: [
                  {title: 'Tip', value: 'tip'},
                  {title: 'Warning', value: 'warning'},
                  {title: 'Highlight', value: 'highlight'},
                  {title: 'Info', value: 'info'},
                ]
              },
              initialValue: 'info'
            },
            {
              name: 'title',
              type: 'string',
              title: 'Callout Title'
            },
            {
              name: 'content',
              type: 'array',
              title: 'Callout Content',
              of: [{ type: 'block' }]
            }
          ],
          preview: {
            select: {
              title: 'title',
              type: 'type'
            },
            prepare({ title, type }) {
              return {
                title: title || `${type} Callout`,
                subtitle: `${type} callout box`
              }
            }
          }
        },
        {
          type: 'object',
          name: 'imageGallery',
          title: 'Image Gallery',
          fields: [
            {
              name: 'images',
              type: 'array',
              title: 'Images',
              of: [
                {
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alt Text',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'caption',
                      type: 'text',
                      title: 'Caption'
                    }
                  ]
                }
              ],
              validation: Rule => Rule.min(2).max(6)
            },
            {
              name: 'layout',
              type: 'string',
              title: 'Gallery Layout',
              options: {
                list: [
                  {title: 'Grid 2x2', value: 'grid-2x2'},
                  {title: 'Grid 3x2', value: 'grid-3x2'},
                  {title: 'Horizontal Scroll', value: 'horizontal'},
                ]
              },
              initialValue: 'grid-2x2'
            }
          ]
        }
      ]
    }),

    // Metadata
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' }]
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'category' }]
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'readingTime',
      type: 'number',
      title: 'Reading Time (minutes)',
      description: 'Estimated reading time in minutes'
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Post',
      description: 'Mark as featured post',
      initialValue: false
    }),

    // SEO Metadata
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'string',
          title: 'Meta Title',
          description: 'Title for search engines (50-60 characters)',
          validation: Rule => Rule.max(60).warning('Longer titles may be truncated by search engines')
        },
        {
          name: 'metaDescription',
          type: 'text',
          title: 'Meta Description',
          description: 'Description for search engines (150-160 characters)',
          validation: Rule => Rule.max(160).warning('Longer descriptions may be truncated by search engines')
        },
        {
          name: 'keywords',
          type: 'array',
          title: 'Keywords',
          of: [{ type: 'string' }],
          description: 'Keywords for SEO'
        },
        {
          name: 'canonicalUrl',
          type: 'url',
          title: 'Canonical URL',
          description: 'Canonical URL if different from the page URL'
        }
      ]
    }),

    // Social Media Metadata
    defineField({
      name: 'social',
      type: 'object',
      title: 'Social Media Settings',
      fields: [
        {
          name: 'socialTitle',
          type: 'string',
          title: 'Social Title',
          description: 'Title for social media sharing (different from SEO title)'
        },
        {
          name: 'socialDescription',
          type: 'text',
          title: 'Social Description',
          description: 'Description for social media sharing'
        },
        {
          name: 'socialImage',
          type: 'image',
          title: 'Social Image',
          description: 'Image for social media sharing (1200x630px recommended)',
          options: {
            hotspot: true
          }
        }
      ]
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage'
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    }
  },

  orderings: [
    {
      title: 'Publication Date, New',
      name: 'publishedAtDesc',
      by: [
        { field: 'publishedAt', direction: 'desc' }
      ]
    },
    {
      title: 'Publication Date, Old',
      name: 'publishedAtAsc',
      by: [
        { field: 'publishedAt', direction: 'asc' }
      ]
    },
    {
      title: 'Title',
      name: 'titleAsc',
      by: [
        { field: 'title', direction: 'asc' }
      ]
    }
  ]
})
