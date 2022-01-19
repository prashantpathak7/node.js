//Path Module
const path = require('path');

console.log(path.dirname("F:/Prashant_Project/node.js/PathModule/patMod.js"));
console.log(path.extname("F:/Prashant_Project/node.js/PathModule/patMod.js"));
console.log(path.basename("F:/Prashant_Project/node.js/PathModule/patMod.js"));

const myPath = path.parse("F:/Prashant_Project/node.js/PathModule/patMod.js");
console.log(myPath.name);