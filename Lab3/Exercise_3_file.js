const myserver = require('http');
const fs = require('fs');

myserver.createServer((req, res) => {

     // File sync
     // let file = fs.readFileSync('/Users/tenhu/Documents/good.mp4');

     let file = fs.readFile('Documents/good.mp4',(err, file)=> {
          console.log("Done !");
          res.writeHead(200, {
               "Content-Disposition": "attachment;filename=good.mp4",
               'Content-Type': 'mimeType',
               'Content-Length': file.length
             });
          res.end(file);
     });
     
}).listen(3000, () => console.log('listening on 3000'));