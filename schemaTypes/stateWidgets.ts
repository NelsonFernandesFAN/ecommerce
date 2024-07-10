import {defineField, defineType} from 'sanity'
import EnvironmentRadioInput from '../components/environment-radio-input/environment-radio-input'

export default defineType({
  name: 'stateWidgets',
  title: 'Lobby Content',
  type: 'document',
  fields: [
    defineField({
      name: 'widget_field_name',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'widget_env',
      title: 'Environment',
      type: 'string',
      options: {
        list: [
          {title: 'Development', value: 'dev'},
          {title: 'Staging', value: 'stage'},
          {title: 'Production', value: 'prod'},
        ],
      },
      components: {
        input: EnvironmentRadioInput,
      },
      initialValue: 'dev',
    }),
    defineField({
      name: 'widget',
      type: 'reference',
      to: {type: 'widget'},
    }),
  ],
})
