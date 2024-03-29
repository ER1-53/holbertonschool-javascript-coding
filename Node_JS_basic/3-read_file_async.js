const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${path}`, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      let nbOfLines = 0;
      let csStudents = 0;
      let sweStudents = 0;
      let csStr = '';
      let sweStr = '';
      for (const line of lines) {
        if (line !== '') {
          nbOfLines += 1;
          const cuttedLine = line.split(',');
          if (cuttedLine[3] === 'CS') {
            if (csStr !== '') {
              csStr += ', ';
            }
            csStr += cuttedLine[0];
            csStudents += 1;
          }
          if (cuttedLine[3] === 'SWE') {
            if (sweStr !== '') {
              sweStr += ', ';
            }
            sweStr += cuttedLine[0];
            sweStudents += 1;
          }
        }
      }
      const result = {
        total: `Number of students: ${nbOfLines - 1}`,
        CS: `Number of students in CS: ${csStudents}. List: ${csStr}`,
        SWE: `Number of students in SWE: ${sweStudents}. List: ${sweStr}`,
      };

      console.log(result.total);
      console.log(result.CS);
      console.log(result.SWE);
      resolve(result);
    });
  });
}

module.exports = countStudents;
