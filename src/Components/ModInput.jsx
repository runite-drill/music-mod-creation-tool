import React from "react";
import {
  Pane,
  Popover,
  Small,
  Text,
  Card,
  Heading,
  Link,
  Icon,
  Button,
  Strong,
  TextInputField,
  Position,
  CodeBlockIcon,
  TakeActionIcon,
  Alert,
  HelpIcon,
  Tooltip,
} from "evergreen-ui";
import CheckGame from "./CheckGame";
import MusicFileUploader from "./MusicFileUploader";
import { validations } from "../scripts/util/validations";
import { games } from "../data/games";
import { buildMods } from "../scripts/builders/buildMods";

export default function ModInput() {
  const [modName, setModName] = React.useState("");
  const [selectedGames, setSelectedGames] = React.useState([]);
  const [files, setFiles] = React.useState([]);
  const [rejectedFiles, setRejectedFiles] = React.useState([]);
  const [statusAlert, setStatusAlert] = React.useState(null);
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
  });

  const isFormComplete = modName.trim() && selectedGames.length && files.length;

  function setGameSelect(game, isSelected) {
    const selectedGamesArray = selectedGames.filter((v) => v.tag !== game.tag);

    if (isSelected) {
      selectedGamesArray.push(game);
    }

    setSelectedGames(selectedGamesArray);
  }

  const gameCheckBoxes = games.map((game, i) => {
    return (
      <CheckGame
        key={`${game.tag}-${i}`}
        game={game}
        setGameSelect={setGameSelect}
      />
    );
  });

  function setValidFiles(f) {
    setFiles(f);
  }

  function setInvalidFiles(f) {
    setRejectedFiles(f);
  }

  function runScripts() {
    setStatusAlert(
      <Alert
        intent="none"
        title="Generating music mods. Please wait..."
        marginTop={16}
      />
    );
    const trimmedModName = modName.trim();
    setModName(trimmedModName);
    const errs = validations(
      trimmedModName,
      selectedGames,
      files,
      rejectedFiles
    );
    const isFormValid =
      errs.title.isValid && errs.selection.isValid && errs.files.isValid;
    setErrors(errs);

    if (isFormValid) {
      const mod = {
        name: trimmedModName,
        filename: `${trimmedModName.split(" ").join("")}_MMCT`,
      };
      buildMods(mod, selectedGames, files, setStatusAlert);
    } else {
      setStatusAlert(
        <Alert intent="danger" title="Validation failed" marginTop={16}>
          <Small>{!errs.title.isValid ? errs.title.message : null}</Small>
          <Pane height={0} />
          <Small>
            {!errs.selection.isValid ? errs.selection.message : null}
          </Small>
          <Pane height={0} />
          <Small>{!errs.files.isValid ? errs.files.message : null}</Small>
        </Alert>
      );
    }
  }

  return (
    <Card
      width={560}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      border="default"
      elevation={1}
      padding={16}
      backgroundColor="white"
    >
      <Pane display="flex" justifyContent="space-between">
        <Pane display="flex" alignItems="center">
          <Heading>Music mod builder</Heading>
          <Icon icon={CodeBlockIcon} marginLeft={8} />
        </Pane>
        <Popover
          position={Position.BOTTOM_RIGHT}
          content={({ close }) => (
            <Pane
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              padding={16}
            >
              <Text>For assistance, please see the FAQ</Text>
              <Card height={0} />
              <Text>
                or drop a message on my{" "}
                <Link href="https://discord.gg/SdQhfBM">Discord</Link>!
              </Text>
            </Pane>
          )}
        >
          <Tooltip content="Help">
            <Button appearance="minimal">
              <Pane display="flex" flexDirection="column" alignItems="center">
                <Icon icon={HelpIcon}></Icon>
              </Pane>
            </Button>
          </Tooltip>
        </Popover>
      </Pane>
      <Card height={8} />

      <Text>
        <Strong>Mod name</Strong>
      </Text>
      <TextInputField
        label=""
        id="modName"
        isInvalid={!errors.title.isValid}
        placeholder="My Awesome Music Mod"
        hint="Minimum 3 characters."
        value={modName}
        onChange={(e) => setModName(e.target.value)}
      />
      <Card height={8} />
      <Pane>
        <Text>
          <Strong>Select games</Strong>
        </Text>
        <Pane
          width={"50%"}
          paddingLeft={8}
          border={!errors.selection.isValid ? "default" : undefined}
          borderColor="#D14343"
          borderRadius={4}
        >
          {gameCheckBoxes}
        </Pane>
      </Pane>
      <Card height={8} />
      <Text>
        <Strong>Upload music</Strong>
      </Text>
      <Pane
        border={!errors.files.isValid ? "default" : undefined}
        borderColor="#D14343"
        borderRadius={4}
      >
        <MusicFileUploader
          setValidFiles={setValidFiles}
          setInvalidFiles={setInvalidFiles}
        />
      </Pane>
      <Card height={8} />
      <Pane display="flex" flexDirection="column">
        <Pane display="flex" justifyContent="center">
          <Button
            appearance="primary"
            disabled={!isFormComplete}
            onClick={() => {
              runScripts();
            }}
          >
            <Icon icon={TakeActionIcon} marginRight={8} />
            Generate music mod
          </Button>
        </Pane>
        {!isFormComplete && (
          <Pane display="flex" justifyContent="center">
            <Text size={300} width={222} textAlign="center">
              You must enter a name, select a game and upload a file to generate
              a mod.
            </Text>
          </Pane>
        )}
      </Pane>
      <Card height={8} />
      {statusAlert}
    </Card>
  );
}
