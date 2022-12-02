const http = require("http");
var port = 8080;

const server = http.createServer(function(req, res) {
    res.writeHead(200, {"content.type":"text/plain"});
    res.end("Hola mundo");
});

server.listen(port);

console.log("Servidor ejecutandose en el puerto 8000");