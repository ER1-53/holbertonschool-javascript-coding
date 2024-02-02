const fs = require('fs');

function countStudentsAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').slice(1);
      let nbOfLine = 0;
      let csStudent = 0;
      let sweStudent = 0;
      let csString = "";
      let sweString = "";

      for (const line of lines) {
        if (line !== '') {
          nbOfLine += 1;
          const cutLine = line.split(',');
          if (cutLine[3] === 'CS') {
            csStudent += 1;
            if (csString !== "") {
              csString += ', ';
              }
              csString += cutLine[0];
          }
          else if (cutLine[3] === 'SWE') {
            sweStudent += 1;
            if (sweString !== "") {
              sweString += ', ';
              }
              sweString += cutLine[0];
          }
        }
      }

      const result = {
        sentence1: `Number of students: ${nbOfLine}`,
        sentence2: `Number of students in CS: ${csStudent}. List: ${csString}`,
        sentence3: `Number of students in SWE: ${sweStudent}. List: ${sweString}`,
      }
      console.log(result.sentence1);
      console.log(result.sentence2);
      console.log(result.sentence3);
      resolve(result);
    });
  });
}

module.exports = countStudentsAsync;
