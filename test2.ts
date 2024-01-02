function processUserInput(userData) {
  // Assume userData is an object provided by user input
  merge({}, userData); // Merge user input into an empty object
}

function merge(target, source) {
  for (const attr in source) {
    if (typeof target[attr] === 'object' && typeof source[attr] === 'object') {
      // Recursive merge for nested objects
      merge(target[attr], source[attr]);
    } else {
      target[attr] = source[attr];
    }
  }
}

// Attacker-controlled data with prototype pollution
const maliciousInput = {
  __proto__: {
    pollute: 'polluted'
  },
  key: 'value'
};

processUserInput(maliciousInput);

// The prototype of the Object has been polluted
console.log({}.pollute); // Outputs 'polluted'
