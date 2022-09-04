import React from 'react'
import { Checkbox } from 'evergreen-ui'

export default function CheckGame(props) {
  const [checked, setChecked] = React.useState(false)
  return (
    <Checkbox 
      label={props.game}
      checked={checked}
      onChange={(e) => {
        setChecked(e.target.checked)
        props.setGameSelect(props.game, e.target.checked)
      }}
    />
  )
}
