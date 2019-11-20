const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  console.log('sdasdasd');
  res.send('Hello World')
})


app.post('/*', function(req, res) {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(3210)