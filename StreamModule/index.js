const fs = require("fs");
const http = require("http");
const { Stream } = require("stream");

const server = http.createServer();

server.on("request", (req, res) => {
    // var fs = require("fs");
    // fs.readFile("input.txt",function(err,data){
    //     if(err) return console.error(err);
    //     console.log(data.toString());
    // })
    //////////////////////////////////////////////////////////////////////////

    // fs.readFile("StreamModule/input.txt", (err, data) => {
    //     if (err) return console.log(err);
    //     res.end(data.toString());
    // })
    //////////////////////////////////////////////////////////////////////////
    // const rstream = fs.createReadStream("StreamModule/input.txt");

    // rstream.on("data", (chunkdata) => {
    //     res.write(chunkdata);
    // });
    // rstream.on("end", () => {
    //     res.end();
    // })
    /////////////////////////////////////////////////////////////////////////

    const rstream = fs.createReadStream("StreamModule/input.txt");
    rstream.pipe(res);
})

server.listen(8000, "127.0.0.1");