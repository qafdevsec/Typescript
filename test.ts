function comparePasswordsConstantTime(password1: string, password2: string): boolean {
  if (password1.length !== password2.length) {
    return false;
  }

  let result = 0;

  for (let i = 0; i < password1.length; i++) {
    // Use bitwise OR to ensure constant time comparison
    result |= password1.charCodeAt(i) ^ password2.charCodeAt(i);
  }

  return result === 0;
}

function insecureComparePasswords(password1: string, password2: string): boolean {
  // Insecure: Early return may leak information about the first incorrect character
  if (password1.length !== password2.length) {
    return false;
  }

  for (let i = 0; i < password1.length; i++) {
    if (password1.charAt(i) !== password2.charAt(i)) {
      return false; // Insecure: Timing discrepancy reveals information about incorrect characters
    }
  }

  return true;
}

// Simulating a timing attack
function simulateTimingAttack() {
  const secretPassword = 'secret123';
  const attackerPassword = 'attack123';

  // Constant time comparison
  const startTimeConstantTime = Date.now();
  comparePasswordsConstantTime(secretPassword, attackerPassword);
  const endTimeConstantTime = Date.now();
  console.log('Constant time comparison took:', endTimeConstantTime - startTimeConstantTime, 'ms');

  // Insecure comparison
  const startTimeInsecure = Date.now();
  insecureComparePasswords(secretPassword, attackerPassword);
  const endTimeInsecure = Date.now();
  console.log('Insecure comparison took:', endTimeInsecure - startTimeInsecure, 'ms');
}

// Simulate a timing attack
simulateTimingAttack();
