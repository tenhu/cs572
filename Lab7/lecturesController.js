const Lecture = require('./lecturesModel'); 


module.exports.addLecture = (req,res,next) =>{

     const course = req.body.course;
     const lectureValue = req.body.lecture; 

     const lecture = new Lecture(course, lectureValue);
     lecture.insertLec().then(result => {
          console.log('[Controller] created')
     }).catch(err => {
          console.log('[controller-err]' + err );
     });
     res.json({succes: "true" });
}; 

module.exports.showLecture = (req, res, next) => {
     Lecture.getAll().then(lectures => {
          res.json(lectures);
     }).catch(err => {
          console.log('err' + err);
          
     });
};

module.exports.deleteLecture = (req, res, next) => {

     const id = req.body.id;
     Lecture.deleteLec(id).then(result => {
          res.json({ success : "true"});
     }).catch(err => {
          console.log('err' + err);
          
     });
};

module.exports.updateLecture = (req,res,next) =>{

     const course = req.body.course;
     const lectureValue = req.body.lecture; 
     const id = req.body.id; 

     const lecture = new Lecture(course, lectureValue);
     lecture.updateLec(id).then(result => {
          console.log('[Controller] updated')
     }).catch(err => {
          console.log('[controller-err]' + err );
     });
     res.json({succes: "true" });
}; 

module.exports.selectLecture = (req, res, next) => {

     const id = req.params.id; 

     Lecture.getOne(id).then(lecture => {
          res.json(lecture);
     }).catch(err => {
          console.log('err' + err);
          
     });
};

module.exports.queryLecture = (req, res, next) => {

     const query = req.params.q;
     Lecture.getQuery(query).then(lectures => {
          res.json(lectures);
     }).catch(err => {
          console.log('err' + err);
          
     });
};