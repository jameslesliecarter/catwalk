// Product REQs ============================================================ //
const express = require('express');
const router = express.Router();
const axios = require('axios');
let apiKey = require('../.apiKey.js');

// create axios instance
let ax = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products',
  timeout: 1000,
  headers: apiKey,
});

router.route('/')
  .get((req, res) => {
    req.page = req.query.page || '1';
    req.count = req.query.count || '5';
    ax.get((`/?page=${req.page}&count=${req.count}`))
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        console.error('\n/products/ ax err:\n', error);
        res.send('error in /:product_id');
      });
  });

router.param('product_id', (req, res, next) => {
  req.id = req.params.product_id;
  next();
})

router.route('/:product_id')
  .get((req, res) => {
    ax.get(`/${req.id}`)
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        console.error('\n/products/:product_id ax err:\n', error);
        res.send('error in /products/:product_id');
      });
})

router.route('/:product_id/styles')
  .get((req, res) => {
    ax.get(`/${req.id}/styles`)
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function(error) {
        console.error('\n/products/:product_id/styles ax err:');
        res.end('error in /products/:product_id/styles');
      });
  });

router.route('/:product_id/related')
  .get((req, res) => {
    ax.get(`/${req.id}/related`)
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function(error) {
        console.error('\n/products/:product_id/styles ax err:\n', error);
        res.send('error in /products/:product_id/styles');
      });
  });

module.exports = router;