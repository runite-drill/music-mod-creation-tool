import JSZip from 'jszip'
import { saveAs } from 'file-saver';
import { builders } from "./builders";
import { Alert } from 'evergreen-ui';

export function buildMods(mName, games, files, setStatusAlert) {
  const zip = new JSZip();
  const root = zip.folder(`${mName}_MMCT`)

  games.forEach(g => {
    let gameFolder = root.folder(g.tag.toLowerCase())
    gameFolder = buildMod(mName, g, files, gameFolder, setStatusAlert)
  })

  //band-aid pseudo-await for the HOI4 images to finish saving
  setTimeout(() => {
    zip.generateAsync({type:"blob"})
    .then(function(content) {
      saveAs(content, `${mName}_MMCT.zip`);
      setStatusAlert(
        <Alert
          intent="success"
          title="Mods successfully built! Check your downloads folder for your files."
          marginTop={16}
        />
      )
    })
  }, 1000)
}

function buildMod(mName, game, files, gameFolder, setStatusAlert) {
  const builder = builders[`${game.tag.toLowerCase()}_builder`]
  if (!builder) { 
    setStatusAlert(
    <Alert
      intent="danger"
      title={`Error. Mod builder for ${game.title} not found. Please contact the developer for more information.`}
      marginTop={16}
    />
    )
  }
  
  return builder(mName, files, gameFolder)
}

