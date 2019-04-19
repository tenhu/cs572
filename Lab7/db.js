
// connection String
//mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01
const MongoClient = require('mongodb').MongoClient;

let dbConn;

const mongoConnect = callback => MongoClient.connect('mongodb+srv://CCCCC:XXXXXX@mycluster-4moia.mongodb.net/homework07?retryWrites=true')
     .then(client => {
          //console.log(result);
          dbConn = client.db();
          callback();
     }).catch(err => {
          console.log(err);
     });

const getDb = () => {
     if(dbConn) {
          return dbConn;
     }
}       

module.exports = {mongoConnect, getDb};