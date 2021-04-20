const express = require('express');
const router = express.Router();
const axios = require('axios');
let apiKey = require('../.apiKey.js');

// create axios instance
let ax = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/',
  timeout: 1000,
  headers: apiKey,
});

// middleware applied to all REQs
router.use((req, res, next) => {
  req.page = req.query.page || '';
  req.count = req.query.count || '';
  req.sort = req.query.sort || '';
  req.product_id = req.query.product_id || null;
  next();
})

// root ENDpoint route
router.use('/', (req, res) => {
  ax.get((`/?page=${req.page}&count=${req.count}&sort=${req.sort}&product_id=${req.product_id}`))
    .then(function (response) {
      res.send(response.data);
    })
    .then(function (response) {
      res.end();
    })
    .catch(function (error) {
      console.error('\n/reviews/ ax err:\n', error);
      res.end('error in /:product_id');
    });
  });

// middleware applied to all /:product_id URIs
router.use('/:product_id', (req, res, next) => {
  req.id = req.params.product_id;
  next();
})

// /:product_id ENDpoint, that's why we use .route()
// and this is where we deal with res
router.route('/:product_id')
  .get((req, res) => {
    ax.get(`/${req.id}/?page=${req.page}&count=${req.count}`)
      .then(function (response) {
        res.send(response.data);
      })
      .then(function (response) {
        res.end();
      })
      .catch(function (error) {
        console.error('\n/products/:product_id ax err:\n', error);
        res.end('error in /products/:product_id');
      });
  });

router.route('/:product_id/styles')
  .get((req, res) => {
    ax.get(`/${req.id}/styles/?page=${req.page}&count=${req.count}`)
      .then(function (response) {
        res.send(response.data);
      })
      .then(function (response) {
        res.end();
      })
      .catch(function(error) {
        console.error('\n/products/:product_id/styles ax err:\n', error);
        res.end('error in /products/:product_id/styles');
      });
  });

router.route('/:product_id/related')
  .get((req, res) => {
    ax.get(`/${req.id}/related/?page=${req.page}&count=${req.count}`)
      .then(function (response) {
        res.send(response.data);
      })
      .then(function (response) {
        res.end();
      })
      .catch(function(error) {
        console.error('\n/products/:product_id/styles ax err:\n', error);
        res.end('error in /products/:product_id/styles');
      });
  });

module.exports = router;

// PUT requests
// query params not in URI
// in req.body
