#!/usr/bin/node

const request = require('request');

const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request.get(url, (error, reponse, body) => {
  if (reponse.message == 200) {
    connect = true;
  }
  if (connect == True) {
    const filmInfos = JSON.parse(body);
    console.log(filmInfos.title);
  } else {
    console.error(error.message);
  }
});
