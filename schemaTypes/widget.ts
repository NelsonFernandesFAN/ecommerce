import {defineField, defineType} from 'sanity'

export enum ComponentType {
  SHOWCASE_CARD = 'showcase-card',
  AGGREGATE_CARD = 'aggregate-card',
  CAROUSEL = 'carousel',
  ACCOUNT_BALANCE = 'account-balance',
}

export default defineType({
  name: 'widget',
  title: 'Widgets',
  type: 'document',
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
      name: 'games',
      title: 'Select games',
      type: 'array',
      of: [{type: 'reference', to: {type: 'games'}}],
      hidden: ({parent}) =>
        parent?.widget_type !== ComponentType.CAROUSEL &&
        parent?.widget_type !== ComponentType.AGGREGATE_CARD,
    }),
  ],
})
