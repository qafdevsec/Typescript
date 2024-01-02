import * as crypto from 'crypto';

class Encryptor {
  secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  encryptMessageWeak(message: string): string {
    // BAD: Using weak encryption (DES)
    const cipher = crypto.createCipheriv('des', Buffer.from(this.secretKey), Buffer.alloc(8));
    const encrypted = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');
    return encrypted;
  }

  encryptMessageStrong(message: string): string {
    // GOOD: Using strong encryption (AES-128)
    const cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from(this.secretKey), Buffer.alloc(16));
    const encrypted = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');
    return encrypted;
  }
}

// Example usage
const encryptor = new Encryptor('mySecretKey');
const weakEncryptedMessage = encryptor.encryptMessageWeak('Hello, World!');
const strongEncryptedMessage = encryptor.encryptMessageStrong('Hello, World!');

console.log('Weak Encrypted Message:', weakEncryptedMessage);
console.log('Strong Encrypted Message:', strongEncryptedMessage);
