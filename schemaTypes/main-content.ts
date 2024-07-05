import {defineField, defineType} from 'sanity'
import {MasterDetailIcon} from '@sanity/icons'

export default defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  groups: [
    {
      name: 'SEO',
    },
  ],
  icon: MasterDetailIcon,

  fields: [
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'productId',
      title: 'Product Id',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'productName',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'productPrice',
      title: 'Current price',
      type: 'number',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      group: ['seo'],
    }),
  ],
})
