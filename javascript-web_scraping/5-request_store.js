#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const apiUrl = process.argv[2];
const file = process.argv[3];

request.get(apiUrl, (error, reponse, body) => {
  if (reponse && reponse.statusCode === 200) {
    fs.writeFile(file, body, (err) => {
      if (err) {
        console.error(err);
      }
    });
  } else {
    console.error(error.message);
  }
});
