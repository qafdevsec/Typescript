function readData(buffer: Buffer, length: number): string {
  // Attempting to read 'length' bytes from the buffer
  return buffer.toString('utf-8', 0, length);
}

let dataBuffer: Buffer = Buffer.from('Hello, World!');
let result: string = readData(dataBuffer, 15); // Attempting to read 15 bytes

console.log(result);
