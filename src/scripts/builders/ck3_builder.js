export function ck3_builder(mod, files, gameFolder) {
  /*
  # MUSIC MOD CREATION TOOL (MMCT) for Crusader Kings 3

  # This is a script that creates the required .txt file for your Crusader Kings 3 Music Mod based on the .ogg files passed into it.
  
  # The script will skip over any file called "maintheme" as this only replaces the loading music and is not shown in-game by the audio engine.
  # You are strongly encouraged to hop into the generated files and check that everything has been created properly. In particular, you may wish to add to the conditions in the .txt file that affect the chances of the music playing.
  
  # This script is open-source and was created by community composer Runite Drill / Utopia for ease in publishing music mods.
  # Feel free to join their music modding community and ask any questions: https://discord.gg/SdQhfBM
  
  # For more info/guide on music modding, please visit the CK3 wiki: https://ck3.paradoxwikis.com/Music_modding
  */

  const musicFolder = gameFolder.folder("music");

  //Create .txt file
  const text = [textHeader];
  files.forEach((f) => {
    if (f.name.split(".")[0] !== "maintheme") {
      text.push(textDef(f));
      musicFolder.file(f.name, f);
    } else {
      const mainThemeFolder = musicFolder.folder("main_themes");
      mainThemeFolder.file(`${mod.filename}_maintheme.txt`, textDef(f));
      mainThemeFolder.file(f.name, f);
    };
  });
  musicFolder.file(`${mod.filename}.txt`, text.join('\n'));
};

const textHeader = `#This file was automatically generated by the Music Mod Creation Tool (MMCT), created by Runite Drill / Utopia.
#Consider joining the music modding discord server, Utopia, if you have any questions: https://discord.gg/SdQhfBM.
#Use the Music Mod Creation Tool to generate your own music mods for all Paradox Interactive games: https://runite-drill.github.io/music-mod-creation-tool/
  
#Please confirm the output is as expected before testing in-game.

#In this file you can specify the triggers, factors and conditions in which the music will play in-game.
#'mood' music is background music.
#The 'pause_factor' is a user-defined measure of how "heavy" the music is. When a song is played, its weight is added to a global counter. When that global counter reaches 100 it resets and the game pauses all music for a short period of time. This is give the listener some respite from any chain of potentially oerhwelming music tracks.
#'can_be_interrupted' determines whether the music track can be overriden by other music, such as event-triggered music.
#'is_prioritized_mood' will give the music track a 100% chance of playing the first time it is able to be played. Thereafter, it will be played at random with the same weighting as other mood-type music tracks. "no" disables this behaviour and makes the music track play as normal.

#NOTE: this tool does not generate code for event-triggered music. If you want it, you will need to do this yourself... sorry!
#Consult the music modding page on the CK3 wiki for more info: https://ck3.paradoxwikis.com/Music_modding.
`;

function textDef(file) {
  return `${file.name.split(".")[0]}_MMCT = {
    music = "file:/music/${file.name}"
    pause_factor = 25
    mood = yes
    can_be_interrupted = yes
    is_prioritized_mood = no
    #is_valid = { 
      #is_at_war = no #example modifier: music will not play when at war
    #}
}\n`;
};