import {defineField, defineType} from 'sanity'
import EnvironmentRadioInput from '../components/environment-radio-input/environment-radio-input'

export default defineType({
  name: 'stateWidgets',
  title: 'Widget Title',
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
        direction: 'horizontal',
        layout: 'radio',
      },
      components: {
        input: EnvironmentRadioInput,
      },
      initialValue: 'dev',
    }),
    defineField({
      name: 'sliders',
      type: 'array',
      of: [{type: 'reference', to: {type: 'sliderContent'}}],
    }),
  ],
})
