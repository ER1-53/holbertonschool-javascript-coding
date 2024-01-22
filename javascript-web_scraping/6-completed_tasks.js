#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
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
