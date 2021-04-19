// Questions REQs ============================================================ //
const express = require('express');
const router = express.Router();
const axios = require('axios');
let apiKey = require('../.apiKey.js');

// create axios instance
let ax = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
  timeout: 1000,
  headers: apiKey
});

// middleware applied to all REQs
router.use((req, res, next) => {
  console.log('got to first use: ', req.query.product_id);
  req.page = req.query.page || '';
  req.count = req.query.count || '';
  req.product_id = req.query.product_id || null;
  next();
})

// root ENDpoint route
router.use('/', (req, res) => {
  console.log('got to line 26 ', req.product_id);
  ax.get('/', {params: {product_id: req.product_id}})
  .then(function (response) {
    res.end(response.data);
  })
  .catch(function (error) {
    console.error('\n/questions/ ax err:\n');
    res.end('error in /:product_id');
  });
});

// middleware applied to all /:product_id URIs
// router.use('/:product_id', (req, res, next) => {
//   req.id = req.params.product_id;
//   next();
// })

// // /:product_id ENDpoint, that's why we use .route()
// // and this is where we deal with res
// router.route('/:product_id')
//   .get((req, res) => {
//     ax.get(`/${req.id}/?page=${req.page}&count=${req.count}`)
//       .then(function (response) {
//         res.send(response.data);
//       })
//       .then(function (response) {
//         res.end();
//       })
//       .catch(function (error) {
//         console.error('\n/qa/questions/:product_id ax err:\n', error);
//         res.end('error in /qa/questions/:product_id');
//       });
//   });

// router.route('/:product_id/styles')
//   .get((req, res) => {
//     ax.get(`/${req.id}/styles/?page=${req.page}&count=${req.count}`)
//       .then(function (response) {
//         res.send(response.data);
//       })
//       .then(function (response) {
//         res.end();
//       })
//       .catch(function(error) {
//         console.error('\n/products/:product_id/styles ax err:\n', error);
//         res.end('error in /products/:product_id/styles');
//       });
//   });

// router.route('/:product_id/related')
//   .get((req, res) => {
//     ax.get(`/${req.id}/related/?page=${req.page}&count=${req.count}`)
//       .then(function (response) {
//         res.send(response.data);
//       })
//       .then(function (response) {
//         res.end();
//       })
//       .catch(function(error) {
//         console.error('\n/products/:product_id/styles ax err:\n', error);
//         res.end('error in /products/:product_id/styles');
//       });
//   });

module.exports = router;