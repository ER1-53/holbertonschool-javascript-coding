function welcome() {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');
  process.stdin.on('data', (input) => {
    process.stdout.write(`Your name is: ${input.toString()}`);
    process.stdout.write('This important software is now closing\n');
    process.exit();
  });
}

module.exports = welcome;

welcome();
