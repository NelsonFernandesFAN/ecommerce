import React, {useCallback} from 'react'
import {Card, Radio, Text, Inline, Label} from '@sanity/ui'
import {InputProps, set} from 'sanity'

function EnvironmentRadioInput(props: InputProps) {
  const {onChange} = props
  const options = props.schemaType?.options?.list

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget.value === 'prod') {
        const confirm = window.confirm('Do you really want to push to Production?')
        if (!confirm) return
      }

      const nextValue = event.currentTarget.value
      onChange(set(nextValue))
    },
    [onChange],
  )

  return (
    <Card padding={4}>
      <Inline space={4}>
        {options.map((option: {title: string; value: string}) => {
          return (
            <Label key={option.value}>
              <Inline space={2}>
                <Radio
                  checked={props.value == option.value}
                  name={option.title}
                  value={option.value}
                  onChange={handleChange}
                  label={option.title}
                />
                <Text size={1}>{option.title}</Text>
              </Inline>
            </Label>
          )
        })}
      </Inline>
    </Card>
  )
}

export default EnvironmentRadioInput
