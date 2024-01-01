import * as fs from 'fs';

function insecureStoreSensitiveInformation(data: string, filename: string): void {
  try {
    // WARNING: This code stores sensitive information in clear text!
    fs.writeFileSync(filename, data, 'utf-8');
    console.log('Sensitive information stored in plain text.');
  } catch (error) {
    console.error('Error storing sensitive information:', error.message);
  }
}

// Example usage
const sensitiveData = 'my_secret_password';
const fileName = 'insecure_sensitive_data.txt';

insecureStoreSensitiveInformation(sensitiveData, fileName);
