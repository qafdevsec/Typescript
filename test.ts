// CWE-126 (Buffer Over-read) (Potential Example)
function unsafeDataCopy(buffer: ArrayBuffer, offset: number, length: number): ArrayBuffer {
  // Potentially unsafe: Doesn't validate offset and length against buffer boundaries
  const view = new Uint8Array(buffer, offset, length);
  const newBuffer = view.buffer.slice(0, length); // Assumes view is a slice of the original buffer
  return newBuffer;
}

// CWE-330 (Use of Insufficiently Random Values)
function generateInsecureRandomNumber(max: number): number {
  return Math.floor(Math.random() * max); // Not cryptographically secure
}

// Secure alternative using crypto.getRandomValues():
import { randomBytes } from 'crypto';

function generateSecureRandomNumber(length: number): Uint8Array {
  const buffer = randomBytes(length);
  return buffer;
}

// CWE-1321 (Incorrect Calculation of Buffer Size) (Potential Example)
function unsafeConcatenateStrings(strings: string[]): string {
  // Potentially unsafe: Inaccurate buffer size calculation
  const totalLength = strings.reduce((sum, str) => sum + str.length, 0); // Assumes ASCII characters only
  const resultBuffer = Buffer.alloc(totalLength); // Allocates buffer based on potentially incorrect length

  let offset = 0;
  for (const str of strings) {
    resultBuffer.write(str, offset); // Potentially writes beyond buffer boundaries if non-ASCII characters exist
    offset += str.length;
  }

  return resultBuffer.toString();
}

// CWE-1006 (Bad Coding Practices) (Examples)
// ... (See previous responses for examples of bad coding practices)

// CWE-96 (Improper Neutralization of Directives in Dynamically Evaluated Code)
function unsafeEval(code: string): any {
  // Potentially unsafe: Vulnerable to injection attacks if code is not properly sanitized
  return eval(code);  // Evaluates code dynamically
}

// CWE-23 (Relative Path Traversal)
import * as fs from 'fs';

function readFileUnsafe(filePath: string): string {
  // Vulnerable to path traversal attacks
  const contents = fs.readFileSync(filePath, 'utf-8');
  return contents;
}

// CWE-310 (Cryptographic Issues)
// ... (See previous responses for examples of cryptographic issues)
