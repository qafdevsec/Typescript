function unsafeDataCopy(buffer: ArrayBuffer, offset: number, length: number): ArrayBuffer {
  // Potentially unsafe: Doesn't validate offset and length against buffer boundaries
  const view = new Uint8Array(buffer, offset, length);
  const newBuffer = view.buffer.slice(0, length); // Assumes view is a slice of the original buffer
  return newBuffer;
}

// Example usage:
const myBuffer = new ArrayBuffer(10);
const copiedBuffer = unsafeDataCopy(myBuffer, 5, 12); // Potentially reads beyond buffer boundaries
