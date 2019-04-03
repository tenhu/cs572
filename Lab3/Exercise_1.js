const dns = require('dns');
const { promisify } = require('util');

// dns.lookup('mum.edu', (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family);
// });

console.log("Start ...");

//Question 1 


dns.resolve4('mum.edu', (err, address) => {
     console.log("[DNS Resolve]: " + address);
});

//Question 2 

const dnsResp = promisify(dns.resolve4);
dnsResp('mum.edu').then(address => { console.log("[Promisify]: " + address); }).catch(err => { console.log(err); });

//Question 3 

const dnsResp1 = promisify(dns.resolve4);

async function callDns() {
     try {
          const result = await dnsResp1('mum.edu');
          console.log ("[Async/Await]: " + result);
     } catch (err) {
          console.log(err);
     }
}

callDns();

console.log("Done!");

