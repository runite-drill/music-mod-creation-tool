import React from 'react'
import { Pane, Link, Small, Text, Card, Heading, Icon, Button, Strong, TextInputField, CodeBlockIcon, TakeActionIcon, Alert, HelpIcon } from 'evergreen-ui'
import CheckGame from './CheckGame'
import MusicFileUploader from './MusicFileUploader';
import { validations } from '../scripts/util/validations';
import { games } from '../data/games';

export default function ModInput() {
  const [modName, setModName] = React.useState('')
  const [selectedGames, setSelectedGames] = React.useState([])
  const [files, setFiles] = React.useState([])
  const [errorAlert, setErrorAlert] = React.useState(null)
  const [errors, setErrors] = React.useState({
    title: {
      isValid: true,
    },
    selection: {
      isValid: true,
    },
    files: {
      isValid: true,
    },
  })

  function setGameSelect(game, isSelected) {
    const selectedGamesArray = selectedGames.filter(v => v.tag !== game.tag)

    if (isSelected) {
      selectedGamesArray.push(game)
    }

    setSelectedGames(selectedGamesArray);
  };

  const gameCheckBoxes = games.map((game, i) => {
    return <CheckGame key={`${game.tag}-${i}`} game={game} setGameSelect={setGameSelect}/>
  });

  function setValidFiles(f) {
    console.log(f)
    setFiles(f)
  }

  function runScripts() {
    const errs = validations(modName, selectedGames, files)
    const isFormValid = errs.title.isValid && errs.selection.isValid && errs.files.isValid
    setErrors(errs)
    setErrorAlert(!isFormValid ? (
      <Alert intent="danger" 
      title="Validation failed"
      >
        <Small>{!errs.title.isValid ? errs.title.message : null}</Small>
        <Pane height={0} />
        <Small>{!errs.selection.isValid ? errs.selection.message : null}</Small>
        <Pane height={0} />
        <Small>{!errs.files.isValid ? errs.files.message : null}</Small>
      </Alert>
    ) : null)

    if (isFormValid) {
      selectedGames.forEach(g => {
        console.log(g.title)
      })
    }
  }

  return (
    <Pane width={560} display="flex" flexDirection="column" justifyContent="center" border="default" elevation={1} padding={16}>
      <Pane display="flex" justifyContent="space-between">
        <Pane display="flex" alignItems="center">
          <Heading>Music Mod Builder</Heading>
          <Icon icon={CodeBlockIcon} marginLeft={8}/>
        </Pane>
        <Button appearance="minimal">
          <Pane display="flex" flexDirection="column" alignItems="center">
            <Icon icon={HelpIcon}></Icon>
          </Pane>
        </Button>
      </Pane>
      <Card height={8} />

      <Text><Strong>Mod name</Strong></Text>
      <TextInputField
        label=""
        id="modName"
        isInvalid={!errors.title.isValid}
        placeholder="MyAwesomeMusicMod"
        hint="Minimum 3 characters. You cannot use spaces or grammar/punctuation."
        value={modName}
        onChange={e => setModName(e.target.value)}
      />
      <Card height={8} />
      <Pane>
        <Text><Strong>Select games</Strong></Text>
        <Pane paddingLeft={8} border={!errors.selection.isValid ? 'default' : undefined} borderColor="#D14343" borderRadius={4}>
          {gameCheckBoxes}
        </Pane>
      </Pane>
      <Card height={8} />
        <Text><Strong>Upload music</Strong></Text>
      <MusicFileUploader setValidFiles={setValidFiles}/>
      <Card height={8} />
      <Pane display="flex" justifyContent="center">
        <Button appearance="primary" onClick={() => {runScripts()}}>
          <Icon icon={TakeActionIcon} marginRight={8}/>
          Generate music mod
        </Button>
      </Pane>
      <Card height={8} />
      {errorAlert}
    </Pane> 
  )
};