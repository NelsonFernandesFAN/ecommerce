import {defineField, defineType} from 'sanity'
//import ProductSelector from '../components/ProductSelector'
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
      title: 'Image',
      name: 'productImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
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
      name: 'description',
      title: 'Description',
      type: 'string',
      group: ['SEO'],
    }),
  ],
})
