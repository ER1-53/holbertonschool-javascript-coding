const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      const lines = data.split('\n');
      const count = lines.length - 1;
      let countCS = 0;
      let countSWE = 0;
      const CSstudient = [];
      const SWEstudient = [];
      const CS = 'CS';
      const SWE = 'SWE';
      for (let i = 1; i < lines.length; i++) {
        const colonnes = lines[i].split(',');
        if (colonnes[3] === 'CS') {
          countCS++;
          CSstudient.push(` ${colonnes[0]}`);
        } else if (colonnes[3] === 'SWE') {
          countSWE++;
          SWEstudient.push(` ${colonnes[0]}`);
        }
      }
      const result = {
        total: `Number of students: ${count}`,
        cs: `Number of students in ${CS}: ${countCS}. List:${CSstudient}`,
        swe: `Number of students in ${SWE}: ${countSWE}. List:${SWEstudient}`,
      };
      console.log(result.total);
      console.log(result.cs);
      console.log(result.swe);
      resolve(result);

      if (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
