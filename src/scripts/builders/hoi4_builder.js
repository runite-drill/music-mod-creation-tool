import stationTemplate from "../../data/radio_station_cover_template.png";
import stationCover from "../../data/hoi4_radio_station.dds";

export async function hoi4_builder(mod, files, gameFolder) {
  /*
  # MUSIC MOD CREATION TOOL (MMCT) for Hearts of Iron 4

  # This is a script that creates a the required .asset file and a .txt files to implement music into the game for your Hearts of Iron 4 Music Mod based on the .ogg files passed into it, as well as the gfx, interface and localisation files needed to create and display music within an in-game radio station. Note the radio station thumbnail generated is a placeholder - you should remember to create your own before publishing your mod. 
  
  # The script will skip over any file called "maintheme" as this only replaces the loading music and is not shown in-game by the audio engine.
  # You are strongly encouraged to hop into the generated files and check that everything has been created properly. In particular, you may wish to add to the conditions in the .txt file that affect the chances of the music playing.
  
  # This script is open-source and was created by community composer Runite Drill / Utopia for ease in publishing music mods.
  # Feel free to join their music modding community and ask any questions: https://discord.gg/SdQhfBM
  
  # For more info/guide on music modding, please visit the HOI4 wiki: https://hoi4.paradoxwikis.com/Music_modding
  */

  const gfxFolder = gameFolder.folder("gfx");
  const interfaceFolder = gameFolder.folder("interface");
  const localisationFolder = gameFolder.folder("localisation");
  const musicFolder = gameFolder.folder("music");

  const stationName = `${mod.filename}`;

  //Create gfx files
  downloadData(stationTemplate, `radio_station_cover_template.png`, gfxFolder);
  downloadData(
    stationCover,
    `radio_station_cover_${stationName}.dds`,
    gfxFolder
  );

  //Create interface files
  interfaceFolder.file(`${stationName}.gfx`, gfxDef(stationName));
  interfaceFolder.file(`${stationName}.gui`, guiDef(stationName));

  //Create localisation files
  const loc = locDef(files, mod, stationName);
  localisationFolder.file(
    `music_station_${stationName}_l_english.yml`,
    loc.join("\n")
  );

  //Create music files
  const modMusicFolder = musicFolder.folder(stationName);

  //.asset file
  const asset = [assetHeader];
  files.forEach((f) => {
    if (f.name.split(".")[0] !== "maintheme") {
      asset.push(assetDef(f));
    }
    modMusicFolder.file(f.name, f);
  });
  modMusicFolder.file(`${mod.filename}.asset`, asset.join("\n"));

  //.txt file
  const text = [textHeader, `music_station = "${stationName}"`];
  files.forEach((f) => {
    if (f.name.split(".")[0] !== "maintheme") {
      text.push(textDef(f));
    }
  });
  modMusicFolder.file(`${mod.filename}.txt`, text.join("\n"));
}

async function downloadData(filepath, filename, zipFolder) {
  const imageBlob = await fetch(filepath).then((response) => response.blob());
  const imgData = new File([imageBlob], filename);
  zipFolder.file(filename, imgData, { base64: true });
}

function gfxDef(stationName) {
  return `spriteTypes = {
    spriteType = {
      name = "GFX_radio_station_cover_${stationName}"
      textureFile = "gfx/radio_station_cover_${stationName}.dds"
      noOfFrames = 2
    }
}`;
}

function guiDef(stationName) {
  return `guiTypes = {
    containerWindowType = {
        name = "${stationName}_faceplate"
        position = { x=0 y=0 }
        size = { width = 590 height = 46 }
  
        iconType ={
            name ="musicplayer_header_bg"
            spriteType = "GFX_musicplayer_header_bg"
            position = { x= 0 y = 0 }
            alwaystransparent = yes
        }
        
        instantTextboxType = {
            name = "track_name"
            position = { x = 72 y = 20 }
            font = "hoi_18b"
            text = "Roger Pontare - Nar vindarna viskar mitt namn"
            maxWidth = 450
            maxHeight = 25
            format = center
        }
    
        instantTextboxType = {
            name = "track_elapsed"
            position = { x = 124 y = 30 }
            font = "hoi_18b"
            text = "00:00"
            maxWidth = 50
            maxHeight = 25
            format = center
        }
    
        instantTextboxType = {
            name = "track_duration"
            position = { x = 420 y = 30 }
            font = "hoi_18b"
            text = "02:58"
            maxWidth = 50
            maxHeight = 25
            format = center
        }
  
        buttonType = {
            name = "prev_button"
            position = { x = 220 y = 20 }
            quadTextureSprite ="GFX_musicplayer_previous_button"
            buttonFont = "Main_14_black"
            Orientation = "LOWER_LEFT"
            clicksound = click_close
            pdx_tooltip = "MUSICPLAYER_PREV"
        }
    
        buttonType = {
            name = "play_button"
            position = { x = 263 y = 20 }
            quadTextureSprite ="GFX_musicplayer_play_pause_button"
            buttonFont = "Main_14_black"
            Orientation = "LOWER_LEFT"
            clicksound = click_close
        }
    
        buttonType = {
            name = "next_button"
            position = { x = 336 y = 20 }
            quadTextureSprite ="GFX_musicplayer_next_button"
            buttonFont = "Main_14_black"
            Orientation = "LOWER_LEFT"
            clicksound = click_close
            pdx_tooltip = "MUSICPLAYER_NEXT"
        }
    
        extendedScrollbarType = {
            name = "volume_slider"
            position = { x = 100 y = 45}
            size = { width = 75 height = 18 }
            tileSize = { width = 12 height = 12}
            maxValue =100
            minValue =0
            stepSize =1
            startValue = 50
            horizontal = yes
            orientation = lower_left
            origo = lower_left
            setTrackFrameOnChange = yes
    
            slider = {
                name = "Slider"	
                quadTextureSprite = "GFX_scroll_drager"
                position = { x=0 y = 1 }
                pdx_tooltip = "MUSICPLAYER_ADJUST_VOL"
            }
    
            track = {
                name = "Track"
                quadTextureSprite = "GFX_volume_track"
                position = { x=0 y = 3 }
                alwaystransparent = yes
                pdx_tooltip = "MUSICPLAYER_ADJUST_VOL"
            }
        }
  
        buttonType = {
            name = "shuffle_button"
            position = { x = 425 y = 20 }
            quadTextureSprite ="GFX_toggle_shuffle_buttons"
            buttonFont = "Main_14_black"
            Orientation = "LOWER_LEFT"
            clicksound = click_close
        }
    }
  
    containerWindowType={
        name = "${stationName}_stations_entry"
        size = { width = 162 height = 130 }
        
        checkBoxType = {
            name = "select_station_button"
            position = { x = 0 y = 0 }
            quadTextureSprite = "GFX_radio_station_cover_${stationName}"
            clicksound = decisions_ui_button
        }
    }
}`;
}

function locDef(files, mod, stationName) {
  const text = [
    "\uFEFF",
    `l_english:
 ${stationName}_TITLE:0 "${mod.name} Radio"`,
  ];
  files.forEach((f) => {
    text.push(` ${f.name.split(".")[0]}_MMCT:0 "${f.name.split(".")[0]}"`);
  });

  return text;
}

const assetHeader = `#This file was automatically generated by the Music Mod Creation Tool (MMCT), created by Runite Drill / Utopia.
#Consider joining the music modding discord server, Utopia, if you have any questions: https://discord.gg/SdQhfBM.
#Use the Music Mod Creation Tool to generate your own music mods for all Paradox Interactive games: https://runite-drill.github.io/music-mod-creation-tool/
  
#Please confirm the output is as expected before testing in-game.
#And remember to change the .dds of your radio station thumbnail in the gfx folder!
`;

function assetDef(file) {
  return `music = {
    name = "${file.name.split(".")[0]}_MMCT"
    file = "${file.name}"
    volume = 0.65
}\n`;
}

const textHeader =
  assetHeader +
  `
#In this file you can specify the triggers, factors and conditions in which the music will play in-game.
#Please also remember to change your radio station image by creating a new .dds file. The template .png has been provided in the gfx folder for your convenience.
#You may also with to fix up some of the localisation of the songs / radio station. You can do this by editing the .yml in the localisation folder.

#Consult the music modding page on the HOI4 wiki for more info: https://hoi4.paradoxwikis.com/Music_modding.
`;

function textDef(file) {
  return `music = {
    song = "${file.name.split(".")[0]}_MMCT"
    chance = {
      modifier = { factor = 1 }
      #modifier = { factor = 0 has_war = yes } #example modifier: music will not play when at war
    }
}\n`;
}
