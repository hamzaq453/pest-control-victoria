import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Brief description of the category'
    }),
    defineField({
      name: 'color',
      type: 'string',
      title: 'Color',
      description: 'Category color for UI display',
      options: {
        list: [
          {title: 'Purple', value: 'purple'},
          {title: 'Blue', value: 'blue'},
          {title: 'Green', value: 'green'},
          {title: 'Orange', value: 'orange'},
          {title: 'Red', value: 'red'},
          {title: 'Pink', value: 'pink'},
        ]
      },
      initialValue: 'purple'
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon',
      description: 'Icon name for the category'
    })
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description'
    }
  }
})
