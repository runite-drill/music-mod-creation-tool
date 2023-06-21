export function validations(name, selectedGames, files, rejectedFiles) {
  return {
    title: modTitleValidation(name),
    selection: gameSelectionValidation(selectedGames),
    files: musicFileValidation(files, rejectedFiles),
  };
}

function modTitleValidation(name) {
  if (name.length < 3) {
    return {
      isValid: false,
      message: "Your mod name must be at least 3 characters long.",
    };
  }
  if (name.length > 32) {
    return {
      isValid: false,
      message: "Your mod name must be less than 32 characters long.",
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

function gameSelectionValidation(selectedGames) {
  if (selectedGames.length < 1) {
    return {
      isValid: false,
      message: "You must choose at least one game to create a mod for.",
    };
  }
  return { isValid: true, message: "success" };
}

function musicFileValidation(files, rejectedFiles) {
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
