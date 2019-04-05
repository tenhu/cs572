const { from, Observable } = require('rxjs');
const { map } = require('rxjs/operators');
const os = require('os');



// ************ First using Obserable *************

const obs$ = Observable.create(function(observer) {
     console.log('Checking your System ...');
     const osCpu = os.cpus();
     const osMem = os.totalmem();

     if(osCpu.length >= 2 ) {
          if(osMem / (1024 * 1024 * 1024) >= 4 ) {
               observer.next('Sustem is checked successfully');
          }else {
               observer.error('This app needs at least 4GB');
          }
     } else{
          observer.error('Pressor is not supported');
     }
     
});

obs$.subscribe(
     (result) => {console.log(result);},
     (err)=> {console.log(err);}
);


// *********** Second using from  ***********


function checkSystem(data) {

     console.log('Checking your System ...');
     from(data).pipe(
          map(obj => (
               {
                    cpuCheck: (obj.cpu >= 2) ? '1' : 'Pressor is not supported',
                    memCheck: (obj.mem >= 4) ? '1' : 'This app needs at least 4GB'
               }
          ))
     ).subscribe(ans => {
          (ans.memCheck === '1' && ans.cpuCheck === '1') ? console.log('Sustem is checked successfully')
               : console.log(ans.cpuCheck + '\n' + ans.memCheck)
     });
}

// const osCpu = os.cpus();
// const osMem = os.totalmem();

//const data = [{ cpu: osCpu.length, mem: osMem / (1024 * 1024 * 1024) }];
//checkSystem(data);





