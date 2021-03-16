const path = require('path');
var pathObj = path.parse(__filename);
//console.log(pathObj);

const OS = require('os');
// console.log(OS.freemem());
// console.log(OS.totalmem());

/// Template string
// ES6 / ES2015 : ECMAScript 6


console.log(`Total memory: ${OS.totalmem()}`);
console.log(`Free memory: ${OS.freemem()}`);
