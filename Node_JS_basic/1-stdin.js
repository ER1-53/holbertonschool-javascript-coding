process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  const reponse = input.toString().trim();
  process.stdout.write(`Your name is: ${reponse}\n`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
