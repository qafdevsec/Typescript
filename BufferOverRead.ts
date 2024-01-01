function readBufferContent(buffer: Buffer, offset: number, length: number): string | null {
  try {
    // Attempt to read content from the buffer
    const content = buffer.toString('utf-8', offset, offset + length);
    return content;
  } catch (error) {
    console.error('Error reading buffer:', error.message);
    return null;
  }
}

// Example usage
const sourceString = 'Hello, Buffer Over-read Example!';
const buffer = Buffer.from(sourceString, 'utf-8');

// Attempt to read more characters than available in the buffer
const offset = 10;
const length = 30;

const result = readBufferContent(buffer, offset, length);

if (result !== null) {
  console.log('Buffer content:', result);
}
