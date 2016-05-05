# Majorca

Majorca is a simple utility to encrypt and decrypt strings with a symmetric-key algorithm.

## Example

To encrypt a string, create a new instance of Majorca:

```javascript
let Majorca = require("majorca");
let key = 13 // a (large) prime number.
let instance = new Majorca(key);
instance.encrypt("test"); // returns "1508?1313?1495?1508"
instance.decrypt("1508?1313?1495?1508"); // returns "test"
```
