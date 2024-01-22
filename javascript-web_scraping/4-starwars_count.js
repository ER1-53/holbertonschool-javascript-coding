#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request.get(apiUrl, (error, response, body) => {
  if (response && response.statusCode === 200) {
    const films = JSON.parse(body).results;
    const moviesWithWedgeAntilles = films.filter((film) => film.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`));
    console.log(moviesWithWedgeAntilles.length);
  } else {
    console.error(error || `Erreur de requête. Statut : ${response ? response.statusCode : 'Inconnu'}`);
  }
});
