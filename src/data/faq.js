export const FAQ = [
  {
    q: "Why can't I use punctuation like @#$%! in my mod name?",
    a: "Paradox's modding tools generally don't like symbols appearing in file names and text.",
  },
  {
    q: "Can I use the same mod name as someone else?",
    a: "Yes. But if you run the two mods together the game engine may get a little confused.",
  },
  {
    q: "How much code does this tool generate for each game?",
    a: "Enough code to get your music playing in-game. You will need to add modifiers and update any default artwork yourself.",
  },
  {
    q: "Why is _____ game not supported?",
    a: "All games have different structures to their mods and music. A game can only be supported once this structure has been studied and specific code written to recreate that structure with your music in it.",
  },
  {
    q: "Does this tool create an entire mod from scratch?",
    a: "No. This tool only generates files relating to music. You will need to create the base mod and .mod files yourself.",
  },
  {
    q: "Why am I limited to only .ogg files?",
    a: "Paradox uses .ogg files for all of their music needs. The audio engine will not accept any other audio file type.",
  },
  {
    q: "There something wrong with my music when it plays ingame, what happened?",
    a: "Please make sure your audio files have 32 bits, a 44.1kHz frequency and a 192KB/s bit frequency. These are technical requirements imposed by Paradox.",
  },
  {
    q: "Does this tool let me change the main theme of the game?",
    a: "Yes. If you upload an audio file named 'maintheme.ogg' the tool will handle it as a special case such that it plays only during the game's loading screen. Note this currently only works for EU4, CK2 & I:R.",
  },
  {
    q: "What do I do with the .zip file this tool generates?",
    a: "Inside the .zip file you will find folders for each game. Copy the folders and files inside to your mod and you're done!",
  },
  {
    q: "How do I change my radio station thumbnail in Hearts of Iron IV?",
    a: "You will need to create a new .dds file in the gfx folder from the template .png provided. Open the template in an image editing program and layer it over two copies of your radio station artwork; one centred on each frame. Remember to save it as a .dds file.",
  },
  {
    q: "Is this tool tracking me or saving my data?",
    a: "No. This tool operates entirely within your browser and no data is retained. If you refresh this page before downloading your files, you will need to start again.",
  },
  {
    q: "Why doesn't this tool work on my browser?",
    a: "This tool runs on JSZip and FileSaver.js, which don't always work with the architecture of older web browsers. Try using it on the latest version of Chrome, Firefox or Safari.",
  },
]