//some Asynchronous methods of fs module

const fs = require("fs");
const a = "prashant"


//c
// fs.mkdir("practice", (err) => {
//     console.log("folder is created");
// })

// fs.writeFile("practice/test.txt", "welcome to test file", (err) => {
//     console.log("file is created");
// })

// fs.unlink("test.txt", (err) => {
//     console.log("file deleted");
// })

// //R
// fs.readFile("practice/test.txt", "utf8", (err, data) => {
//     console.log(data);
// })

// U
// fs.appendFile("practice/test.txt", " hello User", (err) => {
//     console.log("message added successfuly");
// })
// fs.rename("practice/test.txt", "practice/newText.txt", (err) => {
//     console.log("file name updated");
// })

// d 
// fs.unlink("practice/newText.txt", (err) => {
//     console.log("file unlocked suceesfully");
// })
// fs.rmdir("practice", (err) => {
//     console.log("folder deleted");
// })
const x = "success"
// fs.mkdir("OsModule", (err) => {
//     console.log(x);

// })

// fs.writeFile("OsModule/text.txt", "Welcome to Os Module", (err) => {
//     console.log(x);
// })

// fs.writeFile("OsModule/osmod.js", "//OS Module", (err) => {
//     console.log(x);
// })

// fs.mkdir("PathaModule", (err) => {
//     console.log(x);
// })
// fs.rename("PathaModule", "PathModule", (err) => {
//     console.log(x);
// })

// fs.writeFile("PathModule/patMod.js", "Path Module", (err) => {
//     console.log(x);
// })

// fs.mkdir("importExport", (err) => {
//     console.log(x);
// })

// fs.writeFile("importExport/index.js", "// welcome to immport export module", (err) => {
//     console.log(x);
// })

fs.writeFile("importExport/oper.js", "// welcome to immport export module", (err) => {
    console.log(x);
})