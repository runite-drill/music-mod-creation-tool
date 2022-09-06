export function validations(modName, selectedGames, files, rejectedFiles) {
  return {
    title: modTitleValidation(modName),
    selection: gameSelectionValidation(selectedGames),
    files: musicFileValidation(files, rejectedFiles),
  }
}

function modTitleValidation(modName) {
  if (modName.length < 3) {
    return {isValid: false, message: "Your mod name must be at least 3 characters long."}
  }
  if (modName.length > 32) {
    return {isValid: false, message: "Your mod name must be less than 32 characters long."}
  }
  if (/[^\w-]/.test(modName)) {
    return {isValid: false, message: "Your mod name must only consist of letters, numbers or underscores."}
  }
  return {isValid: true, message: "success"}
}

function gameSelectionValidation(selectedGames) {
  if (selectedGames.length < 1) {
    return {isValid: false, message: "You must choose at least one game to create a mod for."}
  }
  return {isValid: true, message: "success"}
}

function musicFileValidation(files, rejectedFiles) {
  if (files.length < 1) {
    return {isValid: false, message: "You must upload at least one music track."}
  }
  // currently done in file uploader
  if (rejectedFiles.length > 0) {
    return {isValid: false, message: "You have an error with an uploaded file."}
  }
  return {isValid: true, message: "success"}
}