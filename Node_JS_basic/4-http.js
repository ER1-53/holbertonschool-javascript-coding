const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
}).listen(1245);

module.exports = app;
