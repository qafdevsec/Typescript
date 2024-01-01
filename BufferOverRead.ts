function readInsecureBufferContent(buffer: Buffer, offset: number, length: number): string {
  // WARNING: This code does not perform proper bounds checking

  // Attempt to read content from the buffer without validating boundaries
  const content = buffer.toString('utf-8', offset, offset + length);
  return content;
}

// Example usage
const sourceString = 'Hello, Insecure Buffer Flow Example!';
const buffer = Buffer.from(sourceString, 'utf-8');

// Attempt to read more characters than available in the buffer
const offset = 10;
const length = 30;

const result = readInsecureBufferContent(buffer, offset, length);

console.log('Buffer content:', result);
