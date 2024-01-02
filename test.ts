// Bad practice: Unclear meaning
const result = calculateSomething(value * 1.5);  // What does 1.5 represent?

// Better practice: Use named constants
const CONVERSION_FACTOR = 1.5;
const result = calculateSomething(value * CONVERSION_FACTOR);
