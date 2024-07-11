import {defineField, defineType} from 'sanity'
import EnvironmentRadioInput from '../components/environment-radio-input/environment-radio-input'

export default defineType({
  name: 'stateWidgets',
  title: 'Environment for widgets',
  type: 'object',
  fields: [
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
  preview: {
    select: {
      title: 'widget.widget_title',
      env: 'widget_env',
    },
    prepare(selection) {
      const {title, env} = selection
      return {
        title: `${title} (${env})`,
      }
    },
  },
})
