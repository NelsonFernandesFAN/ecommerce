import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'showcard_card',
  title: 'Aggregate Fields',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'games',
      title: 'Select game',
      type: 'games',
    }),
  ],
})
