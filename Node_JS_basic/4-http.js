const http = require('http');

const app = http.createServer((req, res) => {
  const sucess = res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log('200');
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
