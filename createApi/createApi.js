const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/api") {
        fs.readFile("createApi/userApi.json", "utf8", (err, data) => {
            //console.log(data);
            //want to show specific
            const a = JSON.parse(data);
            // console.log(a);
            res.end(a[0].ip_address);

        })
    }
})

server.listen(8080, "127.0.0.1", () => {
    console.log("listen to the port no 8080");
});
