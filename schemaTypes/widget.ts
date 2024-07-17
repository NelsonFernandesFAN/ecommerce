import {ComponentType} from '@fanduel/nv-lottery-shared-types'

import {defineField, defineType} from 'sanity'
import {ProjectsIcon} from '@sanity/icons'

export default defineType({
  name: 'widget',
  title: 'Widgets',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'widget_title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'widget_type',
      title: 'Widget Type',
      type: 'string',
      options: {
        list: Object.values(ComponentType),
      },
    }),
    defineField({
      name: 'game',
      title: 'Select game',
      type: 'reference',
      to: {type: 'games'},
      hidden: ({parent}) => parent?.widget_type !== ComponentType.SHOWCASE_CARD,
    }),
    defineField({
      name: 'aggregate_card',
      title: 'Multi game fields',
      type: 'aggregate_card',
      hidden: ({parent}) =>
        parent?.widget_type !== ComponentType.CAROUSEL &&
        parent?.widget_type !== ComponentType.AGGREGATE_CARD,
    }),
  ],
})
