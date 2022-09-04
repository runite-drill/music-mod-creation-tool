import React from 'react'
import { Pane, Text, Card, Heading, Icon, StatusIndicator, Strong, ManualIcon } from 'evergreen-ui'

export default function Instructions() {
  return (
    <Pane width={560} display="flex" flexDirection="column" justifyContent="center" border="default" elevation={1} padding={16}>
      <Heading>Instructions<Icon icon={ManualIcon} marginLeft={8}/></Heading>

      <Text>This easy-to-use tool creates all the necessary files to add music your mods. Currently, the tool works for the following Paradox Interactive Games:</Text>
      <Card height={8} />
      <Pane display="flex" flexDirection="column">
        <StatusIndicator color="#8a7753">Europa Universalis IV</StatusIndicator>
        <StatusIndicator color="#720e13">Crusader Kings III</StatusIndicator>
        <StatusIndicator color="#23415d">Crusader Kings II</StatusIndicator>
        <StatusIndicator color="#515c50">Hearts of Iron IV</StatusIndicator>
        <StatusIndicator color="#99662e">Imperator: Rome</StatusIndicator>
        <StatusIndicator color="#4fb8ee">Cities: Skylines</StatusIndicator>
      </Pane>
      <Card height={8} />
      <Text>To use the tool, simply enter the name of your mod in the box below, select which games you want to generate files for and then upload your <Strong>.ogg</Strong> music files.</Text>
      <Text>When the tool has done its hard work, a button will appear for you to download a <Strong>.zip</Strong> file with a music folder that you can copy into your mod.</Text>
      <Card height={8} />
      <Text>Yep. It's that easy!</Text>
    </Pane> 
  )
}
