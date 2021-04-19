// Product REQs ============================================================ //
const express = require('express');
const router = express.Router();
const axios = require('axios');
let apiKey = require('../.apiKey.js');

// create axios instance
let ax = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe',
  timeout: 1000,
  headers: apiKey,
});

// router magick
router
  .route('/')
    .get((req, res) => {
      if (req.query.page || req.query.count) {
        req.page = req.query.page;
        req.count = req.query.count;
        res.send(`page: ${req.query.page}\ncount: ${req.query.count}\n`);
      }
      //res.end();
    });

router
  .route('/:product_id')
    .get((req, res) => {
      res.send(``)
      res.end();
    });
  // apply req.query to all...
  // const queryParams =
//  if (req.query.page) {
//    // default 1
//    res.locals.page = req.query.page;
//    console.log('page', res.locals.page);
//  }
//  if (req.query.count) {
//    // default 5
//    res.locals.page = req.query.page;
//    console.log('count', res.locals.page);
//  }
//  next();
//  //ax.get('/products'
//});
//
//router.get('/:product_id', function(req, res) {
//  // apply product_id to all...
//  const product_id = req.params.product_id;
//  console.log(`${ax.defaults.baseURL}/products/${product_id}?${res.locals.page}`);
//  //ax.get(`/products/${product_id}`)
//  //  .then(function (response) {
//  //    console.log(response.data);
//  //  })
//  //  .catch(function (error) {
//  //    console.error(error);
//  //  });
//});
//
//router.get('/:product_id/styles', function(req, res) {
//  const product_id = req.params.product_id;
//  ax.get(`/products/${product_id}/styles`)
//    .then(function (response) {
//      console.log(response);
//    })
//    .catch(function (error) {
//      console.error(error);
//    });
//});
//
//router.get('/:product_id/related', function(req, res) {
//  const product_id = req.params.product_id;
//  ax.get(`/products/${product_id}/related`)
//    .then(function (response) {
//      console.log(response);
//    })
//    .catch(function (error) {
//      console.error(error);
//    });
//});

module.exports = router;
