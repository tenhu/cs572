const mongoClient = require('mongodb').MongoClient;


mongoClient.connect('mongodb+srv://dragon_node:bFntRN97iuFDnyQf@mycluster-4moia.mongodb.net/homework08?retryWrites=true')
     .then(client => {
          doWork(client.db());
          //console.log(client);
     }).catch(err => {
          console.log(err);
     });

function doWork(db) {
     const col = db.collection('restaurants');
     // Q1 select all
     // col.find().each((err, data) => {
     //      console.log(data);
     // });

     //Q2
     // col.find().project({restaurant_id:1, name:1, district:1, cuisine:1 }).each((err, data) => {
     //      console.log(data);
     // });

     //Q3
     // col.find().project({_id:0, restaurant_id:1, name:1, district:1, cuisine:1 }).each((err, data) => {
     //      console.log(data);
     // });

     //Q4
     // col.find().project({restaurant_id:1, name:1, district:1, zipcode:1 }).each((err, data) => {
     //      console.log(data);
     // });


     //Q5
     // col.find({  district: { $eq: 'Bronx' } }).each((err, data) => {
     //      console.log(data);
     // });

     //Q6 
     // col.find({  district: { $eq: 'Bronx' } }).limit(5).toArray((err, data) => {
     //      console.log(data);
     // });

     //7 
     // col.find({  district: { $eq: 'Bronx' } }).skip(5).limit(5).toArray((err, data) => {
     //      console.log(data);
     // });

     //Q8 
     // col.find( {   "address.coord.0" : { $lt: -95.754168 }  } ).each((err, data) => {
     //      console.log(data);
     // });

     //Q9 
     // col.find({ "address.coord.0": { $lt: -65.754168 }, cuisine: { $ne: "American " }, grades: {$elemMatch : { score : { $gt: 70  } }} })
     //      .each((err, data) => {
     //           console.log(data);
     //      });

     //10
     // col.find({ name: { $regex: "^Wil" } })
     //      .project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
     //      .each((err, data) => {
     //           console.log(data);
     //      });


     //11     
     // col.find({ name: { $regex: "ces$" } })
     //      .project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
     //      .each((err, data) => {
     //           console.log(data);
     //      });

     //12     
     // col.find({ name: { $regex: "Reg" } })
     //      .project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
     //      .each((err, data) => {
     //           console.log(data);
     //      });


     //13      
     // col.find({ district: "Bronx", cuisine: { $in: ['American ' , 'Chinese'] }  })
     //      .each((err, data) => {
     //           console.log(data);
     //      });

     //14    
     // col.find({ district: { $in: ["Staten Island","Queens","Bronx","Brooklyn"] } })
     //      .project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
     //      .each((err, data) => {
     //           console.log(data);
     //      });

     //15     
     // col.find({ district: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } })
     //      .project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
     //      .each((err, data) => {
     //           console.log(data);
     //      });

     //16 
     // col.find({ grades: {$elemMatch : { score : { $lt: 10  } }}})
     //      .project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
     //      .each((err, data) => {
     //           console.log(data);
     //      });

     //17 
     // col.find({"address.coord.1" : { $gt: 42, $lte: 52  } })
     //      .project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
     //      .each((err, data) => {
     //           console.log(data);
     //      });

     //18
     // col.find()
     //      .sort({name: 1})
     //      .each((err, data) => {
     //           console.log(data);
     //      });

     //19 
     // col.find()
     //      .sort({ name: -1 })
     //      .each((err, data) => {
     //           console.log(data);
     //      });

     //20
     // col.find()
     // .sort({ cuisine:1 , district: -1 })
     // .each((err, data) => {
     //      console.log(data);
     // });

     //21 
     // col.find({ "address.street" : {$exists : true}})
     // .each((err, data) => {
     //      console.log(data);
     // });

     //22 
     // col.find({ "address.coord.0" : { $type: "double" }, "address.coord.1" : { $type: "double" }  })
     //      .each((err, data) => {
     //           console.log(data);
     //      });

     //23 
     // col.find({ name: { $regex: "^Mad" } })
     // .project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1, "address.coord": 1 })
     //      .each((err, data) => {
     //           console.log(data);
     //      });

     // 23b 
     col.aggregate([
          { $match: { name : { $regex: "^Mad" } } },
          { $project: {  _id:0,   name:1, lat : "$address.coord"  }  }
     ]).each((err, data) => {
          console.log(data);
     });


     // Lab 9  

     //Q1
     // const col1 = db.collection('zips');
     // col.find({state: "WA"})
     //      .each((err, data) => {
     //           console.log(data);
     //      });

     //Q2 
     // const col1 = db.collection('zips');
     // col.find({ pop: { $lt: 5000}  })
     //      .each((err, data) => {
     //           console.log(data);
     //      });

     //Q3
     const col1 = db.collection('zips');

     // col1.aggregate([{
     //      $group: {
     //           _id: { city: "$city", state: "$state" },
     //           num_zip: { $sum: 1 }
     //      }
     // }, {
     //      $match: { num_zip: { $gt: 1 } }
     // }, {
     //      $sort: { state: 1, city: 1 }
     // }
     // ]).each((err, data) => {
     //      console.log(data);
     // });

     //Q4 
     // col1.aggregate([{
     //      $group: {
     //           _id: { city: "$city", state: "$state" },
     //           sum_pop: { $sum: "$pop" }
     //      }
     // }, {
     //      $sort: {  sum_pop: -1 }
     // }, {
     //      $group: {
     //           _id: "$_id.state", 
     //           city : { $last: "$_id.city"  }, 
     //           less_pop: { $last: "$sum_pop"  }  
     //      }
     // }, {
     //      $sort: {  "_id":1 }
     // }
     // ]).each((err, data) => {
     //      console.log(data);
     // });




}



