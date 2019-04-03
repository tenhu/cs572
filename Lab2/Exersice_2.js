
// (() => new Promise((resolve) => resolve('promise')))()
// .then((p) => console.log(p));
// setTimeout(()=> console.log('timeout'),10);    // If time out value is higher than 25 or 30 it is go below setimmediate 
// setImmediate( ()=> console.log('immediate'));
// queueMicrotask(()=>  console.log('microtask'));
// process.nextTick(()=>console.log('nexttick '));

 

Array.prototype.even = function () {
     setTimeout(() => {
          console.log(this.filter(value => value%2 === 0) );
     }, 0);
}

Array.prototype.odd = function () {
     setTimeout(() => {
          console.log(this.filter(value => value%2 === 1) );
     }, 0);
}

console.log('Start');

[1, 2, 3, 4, 5, 6, 7, 8].even();
[1, 2, 3, 4, 5, 6, 7, 8].odd();

console.log('End');