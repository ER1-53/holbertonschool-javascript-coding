const fs = require('fs');

async function countStudents(path) {
try {
  const data = await fs.promises.readFile(path, 'utf8');
    const lines = data.split('\n');
    const count = lines.length - 1;
    let countCS = 0;
    let countSWE = 0;
    let CSstudient = [];
    let SWEstudient = [];
    const CS = 'CS';
    const SWE = 'SWE'
    for (let i = 1; i < lines.length; i++) {
      let colonnes = lines[i].split(',');
      if (colonnes[3] === 'CS') {
      countCS++;
      CSstudient.push(' ' + colonnes[0]);
      } else if (colonnes[3] === 'SWE') {
        countSWE++;
        SWEstudient.push(' ' + colonnes[0]);
      }
    }
      console.log(`Number of students: ${count}`);
      console.log(`Number of students in ${CS}: ${countCS}. List:${CSstudient}`);
      console.log(`Number of students in ${SWE}: ${countSWE}. List:${SWEstudient}`);
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;