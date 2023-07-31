const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const dbConnect = require('./dbConnect')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'))

const routes = require('./routes')
routes(app)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/auth', require('./middleware'))

app.listen(3000, () => {
  console.log("listening")
})