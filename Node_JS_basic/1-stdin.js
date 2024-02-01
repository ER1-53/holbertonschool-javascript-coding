process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');

new Promise((resolve) => {
  process.stdin.on('data', (input) => {
    resolve(input.toString());
  });
}).then((name) => {
  process.stdout.write(`Your name is: ${name}`);
  process.exit()
});

process.on('exit', (code) => {
  process.stdout.write('This important software is now closing\n');
});

process.on('SIGINT', function() {
  process.exit();
});
