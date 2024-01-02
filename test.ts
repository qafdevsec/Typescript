function unsafeEval(code: string): any {
  // Potentially unsafe: Vulnerable to injection attacks if code is not properly sanitized
  return eval(code);  // Evaluates code dynamically
}

// Example usage (vulnerable to injection):
const userInput = "alert('Malicious code executed!');";
const result = unsafeEval(userInput); // Executes injected code
