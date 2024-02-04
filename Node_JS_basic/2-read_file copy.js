const fs = require('fs');

function countStudents(path) {
  try {
    const doc = fs.readFileSync(path, 'utf8');
    const lines = doc.split('\n');
    let countCS = 0;
    let countSWE = 0;
    csArray = [];
    sweArray = [];
    const count = lines.length - 1;
    for (const line of lines) {
      const cutLine = line.split(',');
      if (cutLine[3] === 'CS') {
        csArray.push(cutLine[0]);
        countCS++;
      } else if (cutLine[3] === 'SWE') {
        sweArray.push(cutLine[0]);
        countSWE++;
      }
    }
    console.log(`Number of students: ${count}`);
    console.log(`Number of students in CS: ${countCS}. List:${csArray.join(', ')}`);
    console.log(`Number of students in SWE: ${countSWE}. List:${sweArray.join(', ')}`);
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
