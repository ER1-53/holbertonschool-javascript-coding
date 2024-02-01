const http = require('http');

const host = 'localhost';
const port = 1245;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello Holberton School!");
};

const server = http.createServer(requestListener);
server.listen(port, host);
