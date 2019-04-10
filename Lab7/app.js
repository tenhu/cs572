const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');


const app = express();
const dbConnect = require('./db').mongoConnect;


app.use(bodyParser.json())
app.use('/lectures', router);

app.get('/', (req, res) => {
     res.send('good work');
});

dbConnect(() => {
     app.listen(3000, () => {
          console.log('started ... ');
     })});





