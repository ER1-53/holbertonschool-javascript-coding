const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${path}`, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      let csArray = [];
      let sweArray = [];
      for (const line of lines) {
        const cutLine = line.split(',');
          if (cutLine[3] === 'CS') {
            csArray.push(cutLine[0])
          }
          if (cutLine[3] === 'SWE') {
            sweArray.push(cutLine[0])
          }
        }

      const result = {
        CS: csArray,
        SWE: sweArray,
      };

      resolve(result);
    })
  });
   
}

module.exports = readDatabase;


