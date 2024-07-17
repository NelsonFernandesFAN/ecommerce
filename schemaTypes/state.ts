import {defineField, defineType} from 'sanity'
import {EarthAmericasIcon} from '@sanity/icons'

export default defineType({
  name: 'state',
  title: 'States',
  type: 'document',
  icon: EarthAmericasIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'State Name',
      type: 'string',
    }),
    defineField({
      name: 'code',
      title: 'State Code',
      type: 'string',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'array',
      of: [{type: 'sectionWithStatus'}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'code',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle,
        media: null,
      }
    },
  },
})
