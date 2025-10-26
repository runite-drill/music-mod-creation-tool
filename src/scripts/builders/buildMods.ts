import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Game, Mod, MusicTrack } from "../util/types";

export function buildMods(
  mod: Mod,
  games: Game[],
  music: MusicTrack[],
  callbacks: {
    onSuccess: (message: string) => void;
    onError: (message: string) => void;
  }
) {
  const { onSuccess, onError } = callbacks;

  const zip = new JSZip();
  const root = zip.folder(`${mod.filename}`);

  if (!root) {
    onError(
      "Error. Could not create mod folder in zip. Please contact the developer for more information."
    );
    return;
  }

  games.forEach((g) => {
    const gameFolder = root.folder(g.tag.toLowerCase());

    if (!gameFolder) {
      return;
    }

    if (!g.builder) {
      onError(
        `Error. No builder found for ${g.title}. Please contact the developer for more information.`
      );
      return;
    }

    // build mod for game
    g.builder(mod, music, gameFolder);
  });

  //band-aid pseudo-await for the HOI4 images to finish saving
  setTimeout(() => {
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, `${mod.filename}.zip`);
      onSuccess(
        "Mods successfully built! Check your downloads folder for your files."
      );
    });
  }, 1000);
}
