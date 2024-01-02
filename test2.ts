function generateInsecureToken(): string {
  // This is an insecure way to generate tokens, as Math.random is not suitable for security purposes
  let token = Math.random().toString(36).substr(2, 10);
  return token;
}

let insecureToken = generateInsecureToken();
console.log("Insecure Token:", insecureToken);
