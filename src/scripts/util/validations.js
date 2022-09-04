export function validations(modName, selectedGames) {
  return {
    title: modTitleValidation(modName),
    selection: gameSelectionValidation(selectedGames),
    files: musicFileValidation(),
  }
}

function modTitleValidation(modName) {
  if (modName.length < 3) {
    return {isValid: false, message: "Your mod name must be at least 3 characters long."}
  }
  if (modName.length > 32) {
    return {isValid: false, message: "Your mod name must be less than 32 characters long."}
  }
  if (/[^\w\-]/.test(modName)) {
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

function musicFileValidation() {
  // currently done in file uploader
  return {isValid: true, message: "success"}
}