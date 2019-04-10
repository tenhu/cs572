const mongoDb = require('mongodb');
const getDb = require('./db').getDb;

class Lecture {
     constructor(course, lecture) {
          this.course = course;
          this.lecture = lecture;
     }

     insertLec() {
          const db = getDb();
          let dbOp = db.collection('lectures').insert(this);
          return dbOp.then(result => {
               console.log(result)
          }).catch(err => {
               console.log(err)
          });
     }

     static getAll() {
          const db = getDb();

          return db.collection('lectures').find()
               .toArray()
               .then(lectures => {
                    return lectures;
               }).catch(err => {
                    console.log('[model-err]' + err);
               });
     }

     static getOne(lecId) {
          const db = getDb();

          return db.collection('lectures').find({ _id: new mongoDb.ObjectId(lecId) })
               .next()
               .then(lectures => {
                    return lectures;
               }).catch(err => {
                    console.log('[model-err]' + err);
               });
     }

     static deleteLec(lectureId) {
          const db = getDb();
          return db.collection('lectures').deleteOne({ _id: new mongoDb.ObjectId(lectureId) })
               .then(result => {
                    console.log(result);
               }).catch(err => {
                    console.log('[model-err]' + err);
               });
     }

     updateLec(lecId) {
          const db = getDb();
          return db.collection('lectures').updateOne({_id: new mongoDb.ObjectId(lecId)}, {$set: this } )
               .then(result => {
                    console.log(result)
               }).catch(err => {
                    console.log(err)
               });
     }

     static getQuery(query) {

          const db = getDb();
          return db.collection('lectures').find({ lecture: { $regex: query } })
               .toArray()
               .then(lectures => {
                    return lectures;
               }).catch(err => {
                    console.log('[model-err]' + err);
               });
     }  
}

module.exports = Lecture;