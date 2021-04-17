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
app.use(express.static('../public'));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  console.log(`${req.method} request to ${req.originalUrl}`);
  next();
});

// setup Axios instance
const ax = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe',
  timeout: 1000,
  headers: apiKey,
});

// Product REQs ============================================================ //
// GETs
app.get('/products', function(req, res) {
  // apply req.query to all...
  // const queryParams = 
  if (req.query.page) {
    // default 1
  }
  if (req.query.count) {
    // default 5
  }
  //ax.get('/products'
});

app.get('/products/:product_id', function(req, res) {
  // apply product_id to all...
  const product_id = req.params.product_id;
  ax.get(`/products/${product_id}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get('/products/:product_id/styles', function(req, res) {
  const product_id = req.params.product_id;
  ax.get(`/products/${product_id}/styles`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get('/products/:product_id/related', function(req, res) {
  const product_id = req.params.product_id;
  ax.get(`/products/${product_id}/related`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
});

// QnA REQs ================================================================ //

