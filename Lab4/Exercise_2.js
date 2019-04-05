const http = require('http');
const url = require('url');
const { fork } = require('child_process');

const { Subject } = require('rxjs');
const subject = new Subject();


function call(reqres) {
     const query = url.parse(reqres.req.url, true).query;
     const path = JSON.stringify(query);
     const val = JSON.parse(path)['url'];

     if (val === undefined) {
          reqres.res.end("no file");
     } else {
          const childpro = fork('readfile.js');
          childpro.send(val);
          childpro.on('message', fileData => { 
               reqres.res.writeHead(200, { 'content-type': 'text/plain' });
               reqres.res.end(fileData);
          });
     }
}


subject.subscribe(call);

http.createServer((req, res) => {
     subject.next({ req, res });
}).listen(3000, () => {
     console.log('run');
});

