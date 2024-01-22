#!/usr/bin/node

const fs = require('fs');

const string = process.argv[3];
const path = process.argv[2];

fs.writeFile(path, string, 'utf8', (err) => {
  if (err) {
    console.error(err);
  }
});
