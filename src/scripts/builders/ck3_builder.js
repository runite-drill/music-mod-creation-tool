export function ck3_builder(mod, files, gameFolder) {
  console.log('CK3!')
  console.log(files)
  const songNames = files.map(f => {
    return f.name.split(".")[0]
  })

  const musicFolder = gameFolder.folder("music")
  musicFolder.file("nice.txt", "lol\n");
  return gameFolder
}