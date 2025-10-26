import { FileRejection } from "evergreen-ui";
import { Game } from "./types";

export function validations(
  name: string,
  selectedGames: Game[],
  files: File[],
  rejectedFiles: FileRejection[]
) {
  return {
    title: modTitleValidation(name),
    selection: gameSelectionValidation(selectedGames),
    files: musicFileValidation(files, rejectedFiles),
  };
}

const MIN_TITLE_LENGTH = 3;
const MAX_TITLE_LENGTH = 32;

function modTitleValidation(name: string) {
  if (name.length < MIN_TITLE_LENGTH) {
    return {
      isValid: false,
      message: `Your mod name must be at least ${MIN_TITLE_LENGTH} characters long.`,
    };
  }
  if (name.length > MAX_TITLE_LENGTH) {
    return {
      isValid: false,
      message: `Your mod name must be less than ${MAX_TITLE_LENGTH} characters long.`,
    };
  }
  if (/[^\w- ]/.test(name)) {
    return {
      isValid: false,
      message:
        "Your mod name must only consist of letters, numbers, spaces or underscores.",
    };
  }
  return { isValid: true, message: "success" };
}

function gameSelectionValidation(selectedGames: Game[]) {
  if (selectedGames.length < 1) {
    return {
      isValid: false,
      message: "You must choose at least one game to create a mod for.",
    };
  }
  return { isValid: true, message: "success" };
}

function musicFileValidation(files: File[], rejectedFiles: FileRejection[]) {
  if (files.length < 1) {
    return {
      isValid: false,
      message: "You must upload at least one music track.",
    };
  }
  // currently done in file uploader
  if (rejectedFiles.length > 0) {
    return {
      isValid: false,
      message: "You have an error with an uploaded file.",
    };
  }
  return { isValid: true, message: "success" };
}
