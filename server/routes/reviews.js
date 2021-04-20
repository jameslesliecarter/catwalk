// Reviews REQs ============================================================ //
const express = require('express');
const router = express.Router();
const axios = require('axios');
let apiKey = require('../.apiKey.js');

// create axios instance
let ax = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
  timeout: 1000,
  headers: apiKey,
});

// middleware applied to all /:product_id URIs
router.get((req, res, next) => {
  if (!req.query.product_id) { res.end('product_id must be included'); }
  req.id = req.query.product_id;
  next();
})

// root ENDpoint route
router.route('/')
  .get((req, res) => {
    req.page = req.query.page || 1;
    req.count = req.query.count || 5;
    req.sort = req.query.sort || 'helpful';
    ax.get((`/?page=${req.page}&count=${req.count}&sort=${req.sort}&product_id=${req.id}`))
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        console.error('\n/reviews/ ax err:\n', error);
        res.send('error in /:product_id');
      });
  })
  .post((req, res) => {
    const {product_id, rating, summary, body, recommend, name, email, photos, characteristics} = req.body;
    if (!product_id || !characteristics || !rating || !recommend || !body) {
      res.end('need more info');
    }
    ax.post('/', req.body)
      .then((response) => {
        console.log(response)
      }, (error) => {
        console.log('this is the err');
        res.end()
      })
  })


// /:product_id ENDpoint, that's why we use .route()
// and this is where we deal with res
router.route('/meta')
  .get((req, res) => {
    ax.get(`/meta/?product_id=${req.id}`)
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        console.error('\n/reviews/meta/?product_id ax err:\n', error);
        res.send('error in /reviews/?product_id');
      });
})

router.route('/:product_id/styles')
  .get((req, res) => {
    ax.get(`/${req.id}/styles`)
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function(error) {
        console.error('\n/reviews/:product_id/styles ax err:\n', error);
        res.send('error in /reviews/:product_id/styles');
      });
  });

router.route('/:product_id/related')
  .get((req, res) => {
    ax.get(`/${req.id}/related`)
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function(error) {
        console.error('\n/reviews/:product_id/styles ax err:\n', error);
        res.send('error in /reviews/:product_id/styles');
      });
  });

module.exports = router;