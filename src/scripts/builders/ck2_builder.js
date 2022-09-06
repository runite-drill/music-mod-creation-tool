export function ck2_builder(mod, files, gameFolder) {
  /*
  # MUSIC MOD CREATION TOOL (MMCT) for Crusader Kings 2

  # This is a script that creates the required .asset file and a basic .txt file for your Crusader Kings 2 Music Mod based on the .ogg files passed into it.
  
  # The script will skip over any file called "maintheme" as this only replaces the loading music and is not shown in-game by the audio engine.
  # You are strongly encouraged to hop into the generated files and check that everything has been created properly. In particular, you may wish to add to the conditions in the .txt file that affect the chances of the music playing.
  
  # This script is open-source and was created by community composer Runite Drill / Utopia for ease in publishing music mods.
  # Feel free to join their music modding community and ask any questions: https://discord.gg/SdQhfBM
  
  # For more info/guide on music modding, please visit the EU4 wiki: https://ck2.paradoxwikis.com/Music_modding
  */

  console.log('CK2!')
  const musicFolder = gameFolder.folder("music")

  //Create .txt file
  const text = [textHeader]
  files.forEach((f) => {
    if (f.name.split(".")[0] !== "maintheme") {
      text.push(textDef(f))
    }
    musicFolder.file(f.name, f)
  })
  musicFolder.file(`${mod}_MMCT.txt`, text.join('\n'));

  return gameFolder
}

const textHeader = `#This file was automatically generated by the Music Mod Creation Tool (MMCT), created by Runite Drill / Utopia.
#Consider joining the music modding discord server, Utopia, if you have any questions: https://discord.gg/SdQhfBM.
#Use the Music Mod Creation Tool to generate your own music mods for all Paradox Interactive games: <link tba>
  
#Please confirm the output is as expected before testing in-game.

#In this file you can specify the triggers, factors and conditions in which the music will play in-game.
#Consult the music modding page on the CK2 wiki for more info: https://ck2.paradoxwikis.com/Music_modding.
`

function textDef(file) {
  return `song = {
    name = "${file.name}"
    song_name = "${file.name.split(".")[0]}" 
    volume = 0.48
    chance = {
      modifier = { factor = 1 }
      #modifier = { factor = 0 war = yes } #example modifier: music will not play when at war
    }
}\n`
}