import {defineField, defineType} from 'sanity'
//import ProductSelector from '../components/ProductSelector'
import {JoystickIcon} from '@sanity/icons'

export default defineType({
  name: 'draw',
  title: 'Draw',
  type: 'document',
  groups: [
    {
      name: 'SEO',
    },
    {
      name: 'Provided',
    },
  ],
  icon: JoystickIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Game Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      group: ['SEO'],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      group: ['SEO'],
    }),
    defineField({
      name: 'prize',
      title: 'Prize',
      type: 'number',
      group: ['SEO'],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      group: ['SEO'],
    }),
    defineField({
      title: 'Logo',
      name: 'logo',
      type: 'image',
      group: ['SEO'],
    }),
    defineField({
      title: 'Feature Image',
      name: 'featureImage',
      type: 'image',
      group: ['SEO'],
    }),
    defineField({
      name: 'gameColor',
      title: 'Color',
      type: 'color',
      group: ['SEO'],
    }),
    defineField({
      name: 'drawDate',
      title: 'Draw Date',
      type: 'datetime',
      group: ['SEO'],
    }),
  ],
})
