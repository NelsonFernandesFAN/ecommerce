import {defineField, defineType} from 'sanity'
//import ProductSelector from '../components/ProductSelector'
import {MasterDetailIcon} from '@sanity/icons'

export default defineType({
  name: 'games',
  title: 'Games',
  type: 'document',
  groups: [
    {
      name: 'SEO',
    },
  ],
  icon: MasterDetailIcon,

  fields: [
    defineField({
      name: 'game_name',
      title: 'Game Name',
      type: 'string',
    }),
    defineField({
      title: 'Image',
      name: 'game_image',
      type: 'image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),
    defineField({
      name: 'game_slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'game_name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'game_price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'game_prize',
      title: 'Prize',
      type: 'number',
    }),
    defineField({
      name: 'game_description',
      title: 'Description',
      type: 'string',
      group: ['SEO'],
    }),
  ],
})
