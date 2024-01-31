const readline = require('readline');

const contact = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

contact.question('Welcome to Holberton School, what is your name?\n', (response) => {
  console.log(`Your name is: ${response}`);
  contact.close(console.log('This important software is now closing'));
});
