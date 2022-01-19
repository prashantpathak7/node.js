// const { CONNREFUSED } = require("dns");
const fs = require("fs");
const { getMaxListeners } = require("process");

const a = "prashant bharat pathak"

// fs.writeFileSync("read.txt", a);
// fs.appendFileSync("read.txt", " " + a);

// const buf_data = fs.readFileSync("read.txt");
// // console.log(buf_data);
// const org_data = buf_data.toString();
// console.log(org_data);
// fs.renameSync('read.txt', 'readwrite.txt')

// fs.mkdirSync("CURD");
// fs.writeFileSync("CURD/bio.txt", a);
// fs.renameSync("CURD", "CRUD");
// fs.appendFileSync("CRUD/bio.txt", "." + " " + "Hello!");
// const buf_data = toString(fs.readFileSync("CRUD/bio.txt"));
// const org_data = buf_data.toString();
// console.log(org_data);
// const c = fs.readFileSync("CRUD/bio.txt", "utf8")
// console.log(fs.readFileSync("CRUD/bio.txt", "utf8"));
// fs.unlinkSync("CRUD/bio.txt");
// fs.rmdirSync("CRUD");
// fs.unlinkSync("name.txt");
// fs.mkdirSync("fsAsync")
// fs.writeFileSync("fsAsync/index.js", "hello");

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