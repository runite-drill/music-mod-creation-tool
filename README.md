# Music Mod Creation Tool

## For Paradox Interactive Games

This tool assists users with adding music to Paradox Interactive games by generating the neccessary folders and scripts and bundling it into a single `.zip` file.

The tool can be freely used at https://runite-drill.github.io/music-mod-creation-tool/.

Note: This tool works best on Chrome and is unsupported on Safari and Internet Explorer.

### How to use this tool

Creating music mod files with this tool is very easy.

On the form provided, enter name for your mod according to the following rules:
- Your mod name must be at least 3 characters long, and up to a maximum of 32 characters.
- Your mod name can only consist of letters, numbers, underscores and hyphens.

Once you have a chosen a name, select at least one game to generate music mod files for. If you select multiple games, files will be generated for all of them. Note that some options are greyed out, either because they are being worked on or are actively planned for the future.

Finally, use the file uploader to upload all the music files you wish to include in your mod. You can upload mulitple files at once. The following rules apply to uploading files:
- Files must be in .ogg format, as required by Paradox Interactive.
- You must upload at least one file. The maximum limit is 100.
- Individual files cannot be larger than 100MB in size.
- Files must have a unique name from each other.
- File names cannot include spaces ` ` or periods `.`.

It is also recommended that you format your files with 32 bits, a 44.1kHz frequency and a 192KB/s bit frequency to avoid any distortion or nonfunctionality of your music.

Once you have done this you can generate the code for your music mods!

When the code generation has completed a download should automatically start and a `.zip` file will appear in your downloads folder. Inside the zip you will find a folder for each game selected and inside the game folders you will find all the folders, code and assets needed to add music to the game. Simply copy all the folders within the game folder to the root folder of your mod and you're done!


### Compatibilities

Currently, this tool works for:
- Europa Universalis IV
- Crusader Kings III
- Crusader Kings II
- Hearts of Iron IV
- Imperator: Rome

Support for Stellaris, Cities: Skylines and Victoria 3 is planned.

This tool also has support for replacing the main theme for Europa Universalis IV. To do so, simply name your music file `maintheme.ogg`. This feature is planned for the other games and as such `maintheme.ogg` is a reserved file name and will be skipped over by the tool for these games.

### Limitations

This tool generates code based on the inputs you provide it, however, it is limited in its capabilities. 

Most importantly, this tool does not generate a whole new mod (e.g. the `.mod` and `descriptor` files). It only generates the relevant files needed to implement music within an existing mod. As such you may need to create a new mod to add the generated files into.

This tool is intended to provide you with a simple, working, framework from which you can further customise as you wish. As such, this tool does not generate code that implements modifiers or alters the chances of your music playing in-game. For example, if you wish for your music to only play for a specific country you will have to go into the script and add this yourself. However, to assist with this the code does generate an example of a modifier implementation, but this is commented out of the script. 

Additionally, for relevant games (CK3 / I:R) the tool only implements background/mood music and does not implement triggered/event music. This is something that you will also need add yourself.

Finally, for games that implement radio stations (HOI4) the tool provides a default image to use as the radio station cover. The template radio station cover is provided, and you are encouraged to create your own cover to replace the default image.

For more information on music modding, consult the game's respective Paradox Wiki (e.g. the [music modding](https://eu4.paradoxwikis.com/Music_modding) page for EU4).

### Framework

This tool is powered by [React](https://reactjs.org). The user interface is built from [Evergeen UI](https://evergreen.segment.com). File management and zip services are provided by [FileSaver](https://github.com/eligrey/FileSaver.js) and [JSZip](https://stuk.github.io/jszip/).

### Other

This tool is only a free utility intended to assist people in their creative projects. The creator of this tool claims no liability, for any  use of this tool. Additionally, the creator claims no ownership of any mod or music created using this tool (this tool does not retain any data). Users of this tool are reminded to respect international copyrights in place for artist's music as well as the terms and conditions of Paradox Interactive's modding policies.

Otherwise, enjoy the tool!

## Contact

This tool was created by Runite Drill / Utopia Music. If you have questions or need assistance, you can contact them on [Discord](https://discord.gg/SdQhfBM) or through their [website](www.utopiamusic.net/contact).

Utopia is well-known for composing various pieces of original music for EU4 mods. If you're interested in exanding your collection of in-game music, you can check out some of their creations below:

- [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=2240429843)
- [Youtube](https://www.youtube.com/channel/UCKfQv7M94LPdACI2e4AmVww)
- [Spotify](https://open.spotify.com/artist/0mfgyFocLTW5Piqx811ZUv)
- [Bandcamp](https://utopiamusicnz.bandcamp.com)

If you wish, you're welcome to [support](https://www.buymeacoffee.com/utopia) the creator/tool.
