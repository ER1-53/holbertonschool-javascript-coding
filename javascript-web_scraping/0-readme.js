#!/usr/bin/node

const fs = require('fs');

const arg = process.argv[2];
// Lire le contenu d'un fichier de manière asynchrone
fs.readFile(arg, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
