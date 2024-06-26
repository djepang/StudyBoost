const crypto = require('crypto');

const generateSecret = (length) => {
  return crypto.randomBytes(length).toString('hex');
};

const secret = generateSecret(32); // Generieren einer 32-Byte-Zeichenfolge (64 Zeichen in Hex)
console.log(secret);
