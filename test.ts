function insecurePassword(): string {
  // BAD: the random suffix is not cryptographically secure
  const suffix: number = Math.random();
  const password: string = "myPassword" + suffix;
  return password;
}

// Example usage
const generatedPassword: string = insecurePassword();
console.log('Generated Password:', generatedPassword);
