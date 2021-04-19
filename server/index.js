const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const apiKey = require('./.apiKey.js');
//const colors = require('colors'); // for error/warning colors
//const products = require('products.js');


// SETUP =================================================================== //
// setup Expressjs server instance
let app = express();
let port = 9000;
app.listen(port, function() {
  console.log(`server listening on port ${port}`);
});

// EVERY REQ
//app.use(express.static('public'));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  console.log(`${req.method} request to ${req.originalUrl}`);
  if (Object.keys(req.body).length) { console.log('req.body:', req.body); }
  next();
});

app.get('/', (req, res, next) => {
  next();
});

app.post('/', (req, res, next) => {
  next();
  //res.end(`cannot POST to root\n`);
});

// setup Axios instance
const ax = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe',
  timeout: 1000,
  headers: apiKey,
});

// Product REQs ============================================================ //
const products = require('./products.js');
app.use('/products', products);
//app.use('/products', products);


// QnA REQs ================================================================ //

