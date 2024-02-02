const express = require('express');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const outp = 'This is the list of our students';
  countStudents(path)
    .then((result) => {
      const rep = `${outp}\n${result.total}\n${result.CS}\n${result.SWE}`;
      res.type('text/plain').send(rep);
    })
    .catch((err) => {
      const rep = `${outp}\n${err.message}`;
      res.type('text/plain').send(rep);
    });
});

app.listen(port);

module.exports = app;
