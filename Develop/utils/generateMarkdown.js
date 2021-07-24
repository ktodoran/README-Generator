const fs = require('fs');
const dir = 'dist';

const generateReadMe = data => {
  return new Promise((resolve, reject) => {
    //make sure the dist directory exists. Create it if not.
    if(!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }
    fs.writeFile('dist/README.md', data, err => {
      //if error send to catch() method
      if(err){
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'README generated!'
      });
    });
  });
};

module.exports = generateReadMe;
