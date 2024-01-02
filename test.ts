function comparePasswords(userInput: string, storedHashedPassword: string): boolean {
  if (userInput.length !== storedHashedPassword.length) {
    return false;
  }

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] !== storedHashedPassword[i]) {
      return false; // Returns early if a mismatch is found
    }
  }

  return true;
}
