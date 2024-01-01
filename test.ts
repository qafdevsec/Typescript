function insecureKeyGeneration(): Uint8Array {
  // BAD: Math.random() is not suitable for cryptographic key generation
  const keyLength = 16; // 128 bits
  const key = new Uint8Array(keyLength);

  for (let i = 0; i < keyLength; i++) {
    key[i] = Math.floor(Math.random() * 256);
  }

  return key;
}

// Example usage
const insecureKey = insecureKeyGeneration();
console.log('Insecure Key:', insecureKey);
