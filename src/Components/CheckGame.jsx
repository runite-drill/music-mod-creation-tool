import React from 'react'
import { Checkbox } from 'evergreen-ui'

export default function CheckGame(props) {
  const [checked, setChecked] = React.useState(false)
  return (
    <Checkbox 
      label={props.game.isSupported ? props.game.title : `${props.game.title} (coming soon!)`}
      checked={checked}
      disabled={!props.game.isSupported}
      onChange={(e) => {
        setChecked(e.target.checked)
        props.setGameSelect(props.game, e.target.checked)
      }}
    />
  )
}
