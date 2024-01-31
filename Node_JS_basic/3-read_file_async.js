const fs = require('fs').promises;

async function countStudents(path) {
  let data;
  try {
    data = await fs.readFile(path, { encoding: 'utf8' });
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const students = lines.filter(line => line).map(line => line.split(','));
  console.log(students);
  const numberOfStudents = students.length;
  console.log(`Number of students: ${numberOfStudents}`);

  const fields = {};
  for (const student of students) {
    const field = student[3];
    console.log(fields[field]);
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(student[0]);
  }

  for (const field in fields) {
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  }
}

module.exports = countStudents;
