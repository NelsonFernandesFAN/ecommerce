import React, {useCallback, useState} from 'react'
import {Card, Radio, Stack, Text, Inline, useToast, Label} from '@sanity/ui'

// type RadioInputProps = {
//   value: string
//   options: any
// }

function EnvironmentRadioInput(props: any) {
  const [value, setValue] = useState(props.value)
  const options = props.schemaType?.options?.list
  console.log(options)

  const handleChange = useCallback((event: any) => {
    if (event.currentTarget.value === 'prod') {
      const confirm = window.confirm('Do you really want to push to Production?')

      if (!confirm) return
    }

    setValue(event.currentTarget.value)
  }, [])

  return (
    <Card padding={4}>
      <Inline space={4}>
        {options.map((option: any) => {
          return (
            <Label key={option.value}>
              <Inline space={2}>
                <Radio
                  checked={value === option.value}
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
