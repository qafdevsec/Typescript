import * as fs from 'fs';

function saveUserInputToFile(userInput: string, filename: string): void {
  try {
    // WARNING: This code saves user input to a file without proper validation!
    fs.writeFileSync(filename, userInput, 'utf-8');
    console.log('User input saved to file.');
  } catch (error) {
    console.error('Error saving user input to file:', error.message);
  }
}

function executeSavedCodeFromFile(filename: string): void {
  try {
    // WARNING: This code executes the content of the file without proper validation!
    const fileContent = fs.readFileSync(filename, 'utf-8');
    eval(fileContent); // Execute the content of the file (unsafe)
  } catch (error) {
    console.error('Error executing saved code from file:', error.message);
  }
}

// Example usage
const maliciousCode = 'alert("This is a malicious script!")';
const fileName = 'user_input.js';

// Save user input to a file
saveUserInputToFile(maliciousCode, fileName);

// Execute the saved code from the file
executeSavedCodeFromFile(fileName);
