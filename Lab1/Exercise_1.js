const { Observable } = require('rxjs');



//Using ES6 
String.prototype.filterWords = function (arr) {
     //console.log(arr);
     const a = this.split(/\s/).map(word => (arr.includes(word)) ? '***' : word).join(" ");
     return a;
}


console.log("[ES6]: " + "This house is nice !".filterWords(['house', 'nice']));


// Using Promises

String.prototype.filterWordsProm = function (arr) {
     const value = String(this);
     return new Promise(function (resolve, reject) {
          if (arr) {
               resolve(value.split(/\s/).map(word => (arr.includes(word)) ? '***' : word).join(" "));
          }
          else {
               reject("Please enter Text");
          }
     })
}


"This house is nice !".filterWordsProm(['house', 'nice']).then(data => console.log("[Promise]: " + data));
//console.log("Done");

// Async Await


String.prototype.filterWordsPromAsync = async function (arr) {
     try {
          const result = await this.split(/\s/).map(word => (arr.includes(word)) ? '***' : word).join(" ");

          console.log("[Async/Await]: " + result);

     } catch (error) {
          console.log(error);
     }
}


"This house is nice !".filterWordsPromAsync(['house', 'nice']);

// Using Observable
String.prototype.filterWords$ = function (arr) {
     const value = this;
     const obs$ = Observable.create(
          function (observer) {
               observer.next(value.split(/\s/).map(word => (arr.includes(word)) ? '***' : word).join(" "));
               setTimeout(() => { observer.complete(); }, 0);
          }
     );
     const subscription = obs$.subscribe(

          function (x) { console.log(`[Observalbe]: Value: ${x}`); },
          function (err) { console.error(err) },
          //function () { console.log("Done"); }
     );
}


"This house is nice !".filterWords$(['house', 'nice']);

