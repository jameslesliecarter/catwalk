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
router.use((req, res, next) => {
  req.id = req.query.product_id
  next();
})

// root ENDpoint route
router.route('/')
  .get((req, res) => {
    req.page = req.query.page ? `&page=${req.query.page}` : '';
    req.count = req.query.count ? `&count=${req.query.count}` : '';
    req.sort = req.query.sort || 'helpful';
    ax.get((`${req.page} ${req.count}&sort=${req.sort}&product_id=${req.id}`))
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        console.error('\n/reviews/ ax err:\n');
        res.send('error in /:product_id');
      });
  })
  .post((req, res) => {
    ax.post('/', req.body)
      .then(function (response) {
        console.log('Did we get this response?', response.data)
        // res.send(response.data);
        res.end()
      })
      .catch(function(error) {
        console.log('line 43 ax err', error.isAxiosError)
        res.end();
      });
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

router.param('review_id', (req, res, next) => {
 req.review_id = req.params.review_id;
 next()
})

router.route('/:review_id/helpful')
  .put((req, res) => {
    ax.put(`/${req.review_id}/helpful`)
      .then(function (response) {
        res.status(response.status);
        res.end();
      })
  .catch(function(error) {
    console.error('\n/reviews/:review_id/helpful ax err:\n');
    res.send('error in /reviews/:review_id/helpful');
    });
  });

  router.route('/:review_id/report')
  .put((req, res) => {
    ax.put(`/${req.review_id}/helpful`)
      .then(function (response) {
        res.status(response.status);
        res.end();
      })
  .catch(function(error) {
    console.error('\n/reviews/:review_id/report ax err:\n');
    res.send('error in /reviews/:review_id/report');
    });
  });

module.exports = router;