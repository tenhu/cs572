const router = require('express').Router();
const lectures = require('./lecturesController')

const secret1 = require('./exercice_2');


router.get('/secret', secret1.Secret );


router.get('/:id', lectures.selectLecture);
router.post('/', lectures.addLecture);
router.delete('/', lectures.deleteLecture);
router.put('/', lectures.updateLecture);
router.post('/search/:q', lectures.queryLecture); 

router.get('/', lectures.showLecture);

module.exports = router;