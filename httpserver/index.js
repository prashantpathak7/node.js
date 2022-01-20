const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("hello from the home sides");
    } else if (req.url == "/about") {
        res.end("Hello from the about sides");
    } else if (req.url == "/contact") {
        res.end("Hello from the contact sides");
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>error 404, Page not found</h1>");
    }
})

server.listen(8080, "127.0.0.1", () => {
    console.log("listen to the port no 8080");
});
