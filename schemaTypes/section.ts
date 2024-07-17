import {ComponentType} from '@fanduel/nv-lottery-shared-types'

import {defineField, defineType} from 'sanity'
import {ProjectsIcon} from '@sanity/icons'

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: Object.values(ComponentType),
      },
    }),
    defineField({
      name: 'draw',
      title: 'Select draw game',
      type: 'reference',
      to: {type: 'draw'},
      hidden: ({parent}) => parent?.type !== ComponentType.SHOWCASE_CARD,
    }),
    defineField({
      name: 'draws',
      title: 'Select draw games',
      type: 'array',
      of: [{type: 'reference', to: {type: 'draw'}}],
      hidden: ({parent}) =>
        parent?.type !== ComponentType.AGGREGATE_CARD || parent?.type !== ComponentType.CAROUSEL,
    }),
  ],
})
