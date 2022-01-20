const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from the others sides")
})

server.listen(8000, "127.0.0.1", () => {
    console.log("listen to the post no 8000");
});