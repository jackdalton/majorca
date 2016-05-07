# Majorca [![Build Status](https://travis-ci.org/jackdalton/majorca.svg?branch=master)](https://travis-ci.org/jackdalton/majorca)

Majorca is a simple utility to encrypt and decrypt strings with a basic symmetric-key algorithm.

Encrypted strings are compressed using a LZ77 based compression algorithm in base62.

## Example

To encrypt a string, create a new instance of Majorca:

```javascript
let Majorca = require("majorca");
let key = 13 // a (large) prime number.
let instance = new Majorca(key);
instance.encrypt("test"); // returns "sJNIQXJL2C2FsMRN2FxPD"
instance.decrypt("sJNIQXJL2C2FsMRN2FxPD"); // returns "test"
```
