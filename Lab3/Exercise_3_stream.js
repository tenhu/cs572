const myserver = require('http');
const fs = require('fs');

myserver.createServer((req,res)=>{

     const rs = fs.createReadStream('Downloads/file.mp4').pipe(res); 
}).listen(3000, ()=>console.log('listening on 3000'));
