import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'state',
  title: 'States',
  type: 'document',

  fields: [
    defineField({
      name: 'state_name',
      title: 'State Name',
      type: 'string',
    }),
    defineField({
      name: 'state_code',
      title: 'state_code',
      type: 'string',
    }),
    defineField({
      name: 'widgets',
      type: 'array',
      of: [{type: 'reference', to: {type: 'stateWidgets'}}],
    }),
  ],
})
