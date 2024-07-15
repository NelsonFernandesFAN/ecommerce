import {defineField, defineType} from 'sanity'
import WidgetsInput from '../components/widgets-input/widgets-input'
import {EarthAmericasIcon} from '@sanity/icons'

export default defineType({
  name: 'state',
  title: 'States',
  type: 'document',
  icon: EarthAmericasIcon,
  fields: [
    defineField({
      name: 'state_name',
      title: 'State Name',
      type: 'string',
    }),
    defineField({
      name: 'state_code',
      title: 'state_code',
      type: 'string',
    }),
    defineField({
      name: 'lobby',
      type: 'array',
      of: [{type: 'stateWidgets'}],
      components: {
        input: WidgetsInput,
      },
    }),
  ],
  preview: {
    select: {
      title: 'state_name',
      subtitle: 'state_code',
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
