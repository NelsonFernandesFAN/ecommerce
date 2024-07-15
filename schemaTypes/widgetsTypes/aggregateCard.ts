import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aggregate_card',
  title: 'Aggregate Fields',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'games',
      title: 'Select games',
      type: 'array',
      of: [{type: 'reference', to: {type: 'games'}}],
    }),
  ],
})
