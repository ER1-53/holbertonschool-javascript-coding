#!/usr/bin/node

const request = require('request');

const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request.get(url, (error, reponse, body) => {
  if (reponse && reponse.statusCode === 200) {
    const filmInfos = JSON.parse(body);
    console.log(filmInfos.title);
  } else {
    console.error(error.message);
  }
});
