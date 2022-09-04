import React from 'react'
import { Pane, Card, Button, Heading, Icon, Tooltip, CaretUpIcon, CaretDownIcon } from 'evergreen-ui'

export default function HideableCard(props) {
  const [isCardHidden, setIsCardHidden] = React.useState(false);

  const minimiseBtn = (
    <Tooltip content={isCardHidden ? `Show ${props.title.toLowerCase()}` : `Hide ${props.title.toLowerCase()}`}>
      <Button appearance="minimal" onClick={() => {
        setIsCardHidden(!isCardHidden)
      }}>
        <Pane display="flex" flexDirection="column" alignItems="center">
          <Icon icon={isCardHidden ? CaretDownIcon : CaretUpIcon}></Icon>
        </Pane>
      </Button>
    </Tooltip>
  )

  return (
    <Pane display="flex" flexDirection="column">
      {props.heading ?? <Heading>{props.title}<Icon icon={props.icon} marginLeft={8}/></Heading>}
      <Card height={8} />
      {!isCardHidden ? (
        props.content
      ) : null}
      <Card height={16} />
      <Card height={1} border="default" />
      <Card height={8} />
      {minimiseBtn}
    </Pane> 
  )
}
