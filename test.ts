import * as fs from 'fs';

function readFileUnsafe(filePath: string): string {
  // Vulnerable to path traversal attacks
  const contents = fs.readFileSync(filePath, 'utf-8');
  return contents;
}

// Example usage (vulnerable to attack):
const userProvidedPath = "../../../../../../etc/passwd";  // Malicious path
const fileContents = readFileUnsafe(userProvidedPath);  // Reads sensitive file
console.log(fileContents);
