function generateReceiptURL(baseUrl: string): string {
  const ranGen = new RandomGenerator();
  ranGen.setSeed(new Date().getTime());
  return baseUrl + ranGen.nextInt(400000000) + ".html";
}

class RandomGenerator {
  private seed: number;

  constructor() {
    this.seed = 0;
  }

  setSeed(seed: number): void {
    this.seed = seed;
  }

  nextInt(max: number): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return Math.floor(this.seed / 233280 * max);
  }
}

// Example usage
const baseUrl = 'https://example.com/';
const receiptURL = generateReceiptURL(baseUrl);
console.log('Generated Receipt URL:', receiptURL);
