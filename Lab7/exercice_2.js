const MongoClient = require('mongodb').MongoClient;


module.exports.Secret = (req, res) => {

     MongoClient.connect('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01')
          .then(client => {
               //console.log(client);

               doWork(client.db());
          }).catch(err => {
               console.log(err);
          });

     function doWork(db) {
          db.collection('data').find().project({ '_id': 0 }).limit(1).toArray().then(result => {
               console.log(result);

               const key = result[0].key;
               const message = result[0].message;
               const crypto = require('simple-encryptor')(key);
               const decrypted = crypto.decrypt(message).toString();

               console.log(decrypted);
               res.send(decrypted); 

          }).catch(err => {
               console.log(err);
          });

          // db.collection('data').findOne({}, {_id: 0, key:0}).then(result => {
          //      console.log(result);
          // }).catch(err => {
          //      console.log(err);
          // });
     }
}