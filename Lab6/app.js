const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const grades = [
     {id: 1, name: 'Ochtulga', course: 'CS572', grage: 100},
     {id: 2, name: 'Tulga', course: 'CS572', grage: 97}
];
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
app.use(morgan('combined', { stream: accessLogStream }))

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
     res.status(200).send('Hello this lab6 main page\n Please visit /grades ');
});

app.get('/grades', (req, res) => {
     res.json(grades);
});

app.get('/grades/:id', (req, res) => {
     const value = grades.find(item => {
          return item.id == req.params.id;
       });
     res.status(200).json(value);
});

app.post('/grades' , (req, res) => {
     //res.send(req.body);
     grades.push(req.body);
     res.status(201).json(grades);
});

app.delete('/grades/:id', (req, res) => {

     //  delete grades[grades.indexOf( grades.find(item => {
     //      return item.id == req.params.id;
     //   }))];

     grades.splice( grades.indexOf( grades.find(item => {
          return item.id == req.params.id;
       })),1);
     
     res.status(202).json(grades);
});

app.use(function (error, req, res, next) {
     if (error instanceof SyntaxError) {
       res.status(501).json({ "error-code": 501, "description": "Request is not valid JSON" });
     } else {
       next();
     }
   });

app.listen(3000, () => {
     console.log('Run correctly ');
});
