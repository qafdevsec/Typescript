// Insecure random number generation
function generateInsecureRandomNumber(max: number): number {
  return Math.floor(Math.random() * max); // Not cryptographically secure
}

// Example usage (vulnerable to prediction):
const sessionToken = generateInsecureRandomNumber(10000); // Predictable token
