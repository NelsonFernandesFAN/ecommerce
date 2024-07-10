import {ArrayOfObjectsMember, ArrayOfObjectsInputProps, ArrayOfObjectsItem} from 'sanity'

function CustomStateWidgetsInput(props: any) {
  console.log(props)
  return <div>This is a widget!</div>
}

function WidgetsInput(props: ArrayOfObjectsInputProps) {
  console.log(props)

  const {members} = props

  //   if (members.length > 0) {
  //     return (
  //       <div>
  //         {members.map((member: ArrayOfObjectsMember) => {
  //           if (member.kind === 'item') {
  //             return <ArrayOfObjectsItem {...props} key={member.key} member={member} />
  //             //return <CustomStateWidgetsInput {...props} key={member.key} member={member} />
  //           }
  //         })}
  //       </div>
  //     )
  //   }

  return props.renderDefault(props)
}

export default WidgetsInput
