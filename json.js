//create json file and fetch data

const fs = require("fs");

const a = {
    firstName: "Prashant",
    height: 180,
    weight: 70
}

console.log(a);

//convert object into JSON
const b = JSON.stringify(a);

//create new file new.json and add data into it
fs.writeFile("new.json", b, (err) => {
    console.log("JSON created");
})

//Read JSON and print in object
fs.readFile("new.json", "utf8", (err, data) => {
    const d = JSON.parse(data);
    console.log(d);
})