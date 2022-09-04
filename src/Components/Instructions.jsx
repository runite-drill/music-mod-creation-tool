import React from 'react'
import { Pane, Text, Card, StatusIndicator, Strong, ManualIcon } from 'evergreen-ui'
import HideableCard from './HideableCard';
import { games } from '../data/games';

export default function Instructions() {
  const gameList = games.map((game, i) => {
    return game.isSupported ? (
        <StatusIndicator key={i} color={game.color}>{game.title}</StatusIndicator>
      ) : null
  })
  const content = (
    <Pane>
      <Text>This easy-to-use tool creates all the necessary files to add music your mods. Currently, the tool works for the following Paradox Interactive Games:</Text>
      <Card height={8} />
      <Pane display="flex" flexDirection="column">
        {gameList}
      </Pane>
      <Card height={8} />
      <Text>To use the tool, simply enter the name of your mod in the box below, select which games you want to generate files for and then upload your <Strong>.ogg</Strong> music files.</Text>
      <Text>When the tool has done its hard work, a button will appear for you to download a <Strong>.zip</Strong> file with a music folder that you can copy into your mod.</Text>
      <Card height={8} />
      <Text>Yep. It's that easy!</Text>
    </Pane>
  )

  return (
    <Pane width={560} display="flex" flexDirection="column" justifyContent="center" border="default" elevation={1} padding={16} paddingBottom={8}>
      <HideableCard title="Instructions" icon={ManualIcon} content={content} />
    </Pane> 
  )
}
