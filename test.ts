import { crypto } from 'crypto';

// Generating a secure random token
const secureToken = crypto.randomBytes(16).toString('hex');
