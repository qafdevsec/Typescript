// Clear-text HTTP server
import * as http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('This is a clear-text HTTP response.\n');
});

const PORT = 3000;
server.listen(PORT, () => {import fs from 'fs';

function saveApiKey(apiKey: string): void {
  // Writing API key to a file (unsafe)
  fs.writeFileSync('api_key.txt', apiKey, 'utf-8');
}

function readApiKey(): string | null {
  try {
    // Reading API key from a file (unsafe)
    const apiKey = fs.readFileSync('api_key.txt', 'utf-8');
    return apiKey.trim(); // Remove leading/trailing whitespaces
  } catch (error) {
    console.error('Error reading API key:', error.message);
    return null;
  }
}

// Example usage
const apiKeyToStore = 'your_sensitive_api_key';
saveApiKey(apiKeyToStore);

const retrievedApiKey = readApiKey();
if (retrievedApiKey) {
  console.log('Retrieved API Key:', retrievedApiKey);
} else {
  console.error('Unable to retrieve API key.');
}

  console.log(`Server running on http://localhost:${PORT}`);
});
