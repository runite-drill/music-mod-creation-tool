import JSZip from "jszip";
import { saveAs } from "file-saver";
import { builders } from "./builders";
import { Alert } from "evergreen-ui";

export function buildMods(mod, games, files, setStatusAlert) {
  const zip = new JSZip();
  const root = zip.folder(`${mod.filename}`);

  games.forEach((g) => {
    const gameFolder = root.folder(g.tag.toLowerCase());
    buildMod(mod, g, files, gameFolder, setStatusAlert);
  });

  //band-aid pseudo-await for the HOI4 images to finish saving
  setTimeout(() => {
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, `${mod.filename}.zip`);
      setStatusAlert(
        <Alert
          intent="success"
          title="Mods successfully built! Check your downloads folder for your files."
          marginTop={16}
        />
      );
    });
  }, 1000);
}

function buildMod(mod, game, files, gameFolder, setStatusAlert) {
  const builder = builders[`${game.tag.toLowerCase()}_builder`];
  if (!builder) {
    setStatusAlert(
      <Alert
        intent="danger"
        title={`Error. Mod builder for ${game.title} not found. Please contact the developer for more information.`}
        marginTop={16}
      />
    );
  }

  return builder(mod, files, gameFolder);
}
