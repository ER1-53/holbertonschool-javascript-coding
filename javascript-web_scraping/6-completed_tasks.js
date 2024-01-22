#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, reponse, body) => {
  if (reponse && reponse.statusCode === 200) {
    const list = JSON.parse(body);

    const completedByUser = {};

    list.forEach((userInfo) => {
      const { userId } = userInfo;

      if (!completedByUser[userId]) {
        completedByUser[userId] = 0;
      }
      if (userInfo.completed) {
        completedByUser[userId]++;
      }
    });
    // pour le transposer en Objet
    /* Object.keys(completedByUser).forEach(userId => {
			console.log(`${userId}: ${completedByUser[userId]}`);
		}); */
    console.log(completedByUser);
  } else {
    console.error(error);
  }
});
