const express = require('express');
const axios = require('axios');

const app = express();

async function getData(res) {
     try {
          const dataRec = await axios.get('https://randomuser.me/api/?results=10');
          res.set('Cache-Control', 'private, max-age=86400'); 
          res.set("Link", "/movies?page=10");
          res.send(dataRec.data); 
     } catch (err) {
          console.log('failed' + err);
     }
}

app.enable('case sensitive routing');
app.disable('etag');
app.set('x-powered-by', false);
app.set('strict routing',true);


app.get('/', (req, res) => {
     res.send('Hello');
});

app.get('/users', (req, res) => {
     //res.send('Soon it load');
     //getData().then( data =>  console.log(data)).catch(err => console.log(err));
     getData(res);
});

app.listen(3000, () => {
     console.log('Run connrectly ');
});
