import JSZip from 'jszip'
import { saveAs } from 'file-saver';
import { builders } from "./builders";

export function buildMods(mName, games, files) {
  const zip = new JSZip();
  const root = zip.folder(`${mName}MusicMods`)

  games.forEach(g => {
    let gameFolder = root.folder(g.tag.toLowerCase())
    gameFolder = buildMod(mName, g, files, gameFolder)
  })

  zip.generateAsync({type:"blob"})
  .then(function(content) {
    saveAs(content, `${mName}_MusicMods.zip`);
  })

  return {isError: false, message: "Mods successfully built! Your files have been automatically downloaded."}
}

function buildMod(mName, game, files, gameFolder) {
  const builder = builders[`${game.tag.toLowerCase()}_builder`]
  if (!builder) { return console.log(`Error. Mod builder for ${game.title} not found.`) }
  
  return builder(mName, files, gameFolder)
}

