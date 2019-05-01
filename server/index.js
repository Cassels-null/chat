const parser = require('body-parser');
const express = require('express');

const scribe = require('./scribe.js');

const app = express();
const port = 1337;

//app.use(express.static(__dirname+'/../client/dist'));

app.listen(port, () => console.log(`listening on port ${port}!`));
app.use(parser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/record', scribe.record);
app.get('/read', scribe.read);

app.get('/', (req, res) => res.send('Hello World!'));


