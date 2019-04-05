const fs = require('fs');

const readfile = (val) => {
     console.log('[Child]' + val);
     let file = fs.readFileSync(val);
     return file.toString();
};

process.on('message', (file) => {
     const fileData = readfile(file);
     console.log('inside process: ' + fileData);
     process.send(fileData); 
});

