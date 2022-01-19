//OS Module

const os = require("os");

console.log(os.arch());

const freeMemory = os.freemem();
console.log(freeMemory);

const totMem = os.totalmem();
console.log(totMem);

console.log(os.hostname());

console.log(os.platform());

console.log(os.tmpdir());

console.log(os.type());