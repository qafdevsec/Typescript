import fs from 'fs';

// Function to save API key to a configuration file (unsafe)
function saveApiKey(apiKey: string): void {
  const config = `API_KEY=${apiKey}`;

  // Writing configuration to a file (unsafe)
  fs.writeFileSync('config.txt', config, 'utf-8');
}

// Example usage
const sensitiveApiKey = 'my_sensitive_api_key';
saveApiKey(sensitiveApiKey);
