const http = require('http');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];

const app = http.createServer((req, res) => {
  const { url } = req;
  res.writeHead(200, { 'Content-type': 'text/plain' });
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(path)
      .then((result) => {
        res.write(`${result.total}\n`);
        res.write(`${result.CS}\n`);
        res.write(`${result.SWE}`);
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  }
}).listen(1245);
module.exports = app;
