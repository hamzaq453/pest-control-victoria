import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text'
        }
      ]
    }),
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Bio',
      description: 'Short biography'
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role',
      description: 'Job title or role'
    }),
    defineField({
      name: 'social',
      type: 'object',
      title: 'Social Media',
      fields: [
        {
          name: 'twitter',
          type: 'url',
          title: 'Twitter'
        },
        {
          name: 'linkedin',
          type: 'url',
          title: 'LinkedIn'
        },
        {
          name: 'github',
          type: 'url',
          title: 'GitHub'
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
})
