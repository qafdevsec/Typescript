import * as crypto from 'crypto';

function insecureHashPassword(password: string): string {
  // WARNING: MD5 is considered insecure for password hashing
  const hash = crypto.createHash('md5');
  hash.update(password);
  return hash.digest('hex');
}

// Example usage
const plaintextPassword = 'mySecurePassword';
const insecureHashedPassword = insecureHashPassword(plaintextPassword);

console.log('Original Password:', plaintextPassword);
console.log('Insecure Hashed Password:', insecureHashedPassword);
