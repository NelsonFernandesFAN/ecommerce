import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Sliders Content',
  name: 'sliderContent',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'sliderTitle',
      title: 'Title',
    }),
    defineField({
      type: 'image',
      name: 'featureImage',
      title: 'Header Image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'products_list',
      title: 'Products',
      type: 'array',
      of: [{type: 'reference', to: {type: 'products'}}],
    }),
  ],
})
