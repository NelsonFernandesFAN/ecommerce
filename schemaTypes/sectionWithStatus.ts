import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sectionWithStatus',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: 'status',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'reference',
      to: {type: 'section'},
    }),
  ],
  preview: {
    select: {
      title: 'section.title',
    },
  },
})
