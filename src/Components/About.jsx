import React from 'react'
import { Pane, Link, Small, Text, Button, Card, Heading, Icon, UnorderedList, ListItem, Tooltip, BanCircleIcon, TickCircleIcon, HelpIcon, BuildIcon, CaretUpIcon, CaretDownIcon } from 'evergreen-ui'
import HideableCard from './HideableCard'

export default function About() {
  const heading = (
    <Pane display="flex" justifyContent="space-between">
      <Heading>About this tool<Icon icon={BuildIcon} marginLeft={8}/></Heading>
      <Text color="muted"><Small><Link href="https://github.com/camielvs/music-mod-creation-tool">Source code</Link></Small></Text>
    </Pane>
  )

  const content = (
    <Pane>
      <Text>What this tool does do</Text>
      <UnorderedList icon={TickCircleIcon} iconColor="success">
        <ListItem>
          Create relevant .txt and .asset files.
        </ListItem>
        <ListItem>
          Create radio gfx files for radio stations. 
        </ListItem>
        <ListItem>
          Script music to appear ingame.
        </ListItem>
        <ListItem>
          Create the neccessary folder structure for music to work.
        </ListItem>
        <ListItem>
          Invoke occasional headbanging.
        </ListItem>
      </UnorderedList>
      <Card height={8} />
      <Text>What this tool doesn't do</Text>
      <UnorderedList icon={BanCircleIcon} iconColor="danger">
        <ListItem>
          Alter the chance of your music playing ingame via modifiers.
        </ListItem>
        <ListItem>
          Create a whole new mod from scratch. 
        </ListItem>
        <ListItem>
          Convert music files into the correct format.
        </ListItem>
        <ListItem>
          Save you from any potential copyright issues.
        </ListItem>
      </UnorderedList>
      <Card height={8} />
      <Text>How this tool works</Text>
      <UnorderedList icon={HelpIcon} iconColor="info">
        <ListItem>
          Magic.
        </ListItem>
      </UnorderedList>
      <Card height={16} />
      <Pane display="flex" justifyContent="center">
        <Link href="https://github.com/camielvs/music-mod-creation-tool">
          <Button appearance="minimal">Request a game be added to this builder.</Button>
        </Link>
      </Pane>
    </Pane>
  )

  return (
    <Pane width={560} display="flex" flexDirection="column" justifyContent="center" border="default" elevation={1} padding={16}>
      <HideableCard title="About" content={content} heading={heading}/>
    </Pane> 
  )
}
