import JSZip from "jszip";

export type Mod = {
  name: string;
  filename: string;
};

export type Game = {
  title: string;
  tag: string;
  color: string;
  isSupported: boolean;
  builder?: (mod: Mod, songs: MusicTrack[], gameFolder: JSZip) => void;
};

export type MusicTrack = {
  name: string;
  key: string;
  file: File;
};

export function mapFileToMusicTrack(file: File): MusicTrack {
  const baseName = file.name.replace(/\.[^/.]+$/, "");
  const name = baseName.replace(/_/g, " ");
  const key = baseName + "_MMCT";

  return {
    name,
    key,
    file,
  };
}
