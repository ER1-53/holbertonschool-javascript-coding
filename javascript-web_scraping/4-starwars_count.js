#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const films = JSON.parse(body).results;
    let count = 0;

    for (const film of films) {
      for (const character of film.characters) {
        if (character.includes('/18/')) {
          count += 1;
          break;
        }
      }
    }

    console.log(count);
  }
});

/* const request = require('request');

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
}); */
