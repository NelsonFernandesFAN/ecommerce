import {defineField, defineType} from 'sanity'
import WidgetsInput from '../components/widgets-input/widgets-input'

export default defineType({
  name: 'state',
  title: 'States',
  type: 'document',

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
})
