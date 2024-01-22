#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (error, reponse, body) => {

  if (error) {
    console.log(error);
  }
  if (reponse && reponse.statusCode === 200) {
    const todos = JSON.parse(body);
    const tasksCompleted = {};

    for (const task of todos) {
      if (task.completed) {
        if (tasksCompleted[task.userId]) {
          tasksCompleted[task.userId] += 1;
        } else {
          tasksCompleted[task.userId] = 1;
        }
      }
    }
    console.log(tasksCompleted);
  }
});
