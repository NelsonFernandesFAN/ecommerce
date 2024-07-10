import {defineField, defineType} from 'sanity'

export enum ComponentType {
  SHOWCASE_CARD = 'showcase-card',
  AGGREGATE_CARD = 'aggregate-card',
  CAROUSEL = 'carousel',
  ADD_FUNDS = 'add-funds',
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
      name: 'product',
      title: 'Select product',
      type: 'reference',
      to: {type: 'products'},
      hidden: ({parent}) => parent?.widget_type !== ComponentType.SHOWCASE_CARD,
    }),
    defineField({
      name: 'products',
      title: 'Select products',
      type: 'array',
      of: [{type: 'reference', to: {type: 'products'}}],
      hidden: ({parent}) =>
        parent?.widget_type !== ComponentType.CAROUSEL &&
        parent?.widget_type !== ComponentType.AGGREGATE_CARD,
    }),
  ],
})
