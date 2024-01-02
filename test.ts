function unsafeConcatenateStrings(strings: string[]): string {
  // Potentially unsafe: Inaccurate buffer size calculation
  const totalLength = strings.reduce((sum, str) => sum + str.length, 0); // Assumes ASCII characters only
  const resultBuffer = new Buffer(totalLength); // Allocates buffer based on potentially incorrect length

  let offset = 0;
  for (const str of strings) {
    resultBuffer.write(str, offset); // Potentially writes beyond buffer boundaries if non-ASCII characters exist
    offset += str.length;
  }

  return resultBuffer.toString();
}
