import fs from 'fs';

function saveCredentials(username: string, password: string): void {
  const credentials = `${username}:${password}`;

  // Writing credentials to a file (unsafe)
  fs.writeFileSync('credentials.txt', credentials, 'utf-8');
}

// Example usage
saveCredentials('user123', 'secretpassword');
