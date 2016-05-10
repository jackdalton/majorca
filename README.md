# Majorca [![Build Status](https://travis-ci.org/jackdalton/majorca.svg?branch=master)](https://travis-ci.org/jackdalton/majorca)

> **This project should not be used for anything important. Use Node.js's built-in [crypto module](https://nodejs.org/api/crypto.html) instead.**

Majorca is a simple utility to encrypt and decrypt strings with a basic symmetric-key algorithm.

Encrypted strings are compressed using a LZ77 based compression algorithm in base62.

Majorca only compresses strings when necessary; if an encrypted string is shorter than its compressed equivalent, it's not compressed.

## Example

To encrypt a string, create a new instance of Majorca:

```javascript
let Majorca = require("majorca");
let key = 13 // a (large) prime number.
let instance = new Majorca(key);
instance.encrypt("test"); // returns "n1508?1313?1495?1508"
instance.decrypt("n1508?1313?1495?1508"); // returns "test"
```
