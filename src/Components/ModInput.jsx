import React from 'react'
import { Pane, Link, Small, Text, Card, Heading, Icon, Button, Strong, Checkbox, TextInputField, CodeBlockIcon, TakeActionIcon } from 'evergreen-ui'
import CheckGame from './CheckGame'
import MusicFileUploader from './MusicFileUploader';

export default function ModInput() {
  const [games, setGames] = React.useState([
    {
      title: 'Europa Universalis IV',
      isSelected: false,
    },
    {
      title: 'Crusader Kings III',
      isSelected: false,
    },
    {
      title: 'Crusader Kings II',
      isSelected: false,
    },
    {
      title: 'Hearts of Iron IV',
      isSelected: false,
    },
    {
      title: 'Imperator: Rome',
      isSelected: false,
    },
    {
      title: 'Cities: Skylines',
      isSelected: false,
    },
  ]);

  function setGameSelect(name, selectState) {
    games.find(item => item.title === name).isSelected = selectState;
    setGames(games);
  };

  const gameCheckBoxes = games.map((game, i) => {
    return <CheckGame key={i} game={game.title} setGameSelect={setGameSelect}/>
  });

  return (
    <Pane width={560} display="flex" flexDirection="column" justifyContent="center" border="default" elevation={1} padding={16}>
      <Pane display="flex" justifyContent="space-between">
        <Heading>Music Mod Builder<Icon icon={CodeBlockIcon} marginLeft={8}/></Heading>
        <Text color="muted"><Small><Link href="#">Help</Link></Small></Text>
      </Pane>
      <Card height={8} />

      <Text><Strong>Mod name</Strong></Text>
      <TextInputField
        label=""
        id="modName"
        placeholder="MyAwesomeMusicMod"
        hint="You cannot use spaces or grammar/punctuation."
      />
      <Card height={8} />
      <Pane>
        <Text><Strong>Select games</Strong></Text>
        {gameCheckBoxes}
        <Checkbox disabled label="Stellaris (coming soon!)" />
      </Pane>
      <Card height={8} />
        <Text><Strong>Upload music</Strong></Text>
      <MusicFileUploader />
      <Card height={8} />
      <Pane display="flex" justifyContent="center">
        <Button appearance="primary"><Icon icon={TakeActionIcon} marginRight={8}/>Generate music mod</Button>
      </Pane>
      <Card height={8} />
    </Pane> 
  )
};
