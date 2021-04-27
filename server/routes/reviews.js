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

// error callback func
const errorCB = (err) => {
  console.error('   ^ERROR!', err.response.status, err.response.statusText);
}

// middleware applied to ALL /reviews URIs ================================== //
router.use((req, res, next) => {
  if (req.query.product_id === 'undefined') {
    console.error('  ^ERR: no product_id query param provided');
    res.end('ERR: must provide a product_id query param');
  } else {
    req.id = `product_id=${req.query.product_id}`;
    next();
  }
})

// / PATHs ================================================================== //
router.route('/')
  .get((req, res) => {
    req.page = req.query.page ? `page=${req.query.page}` : '';
    req.count = req.query.count ? `count=${req.query.count}` : '';
    req.sort = req.query.sort ? `sort=${req.query.sort}` : 'sort=helpful';
    ax.get((`/?${req.id}&${req.sort}&${req.page}&${req.count}`))
      .then(function (response) {
        res.status(response.status);
        res.send(response.data);
      })
      .catch(function (error) { errorCB(error); res.end('ERR'); });
  })
  .post((req, res) => {
    ax.post('/', req.body)
      .then(function (response) {
        res.status(response.status).end();
      })
      .catch(function (error) { errorCB(error); res.end('ERR'); });
  });

// /meta PATHs ============================================================== //
router.use('/meta', (req, res, next) => {
  ax.get(`/meta/?${req.id}`)
    .then((response) => {
      req.metadata = response.data;
      next();
    })
    .catch(function (error) { errorCB(error); res.end('ERR'); });
})

router.route('/meta')
  .get((req, res) => {
    res.json(req.metadata);
    res.end();
  })

router.route('/meta/avg')
  .get((req, res) => {
    const {ratings} = req.metadata;
    let totStars = 0;
    let totRevws = 0;
    for (let star in ratings) {
      totStars += (Number(star) * Number(ratings[star]));
      totRevws += Number(ratings[star]);
    }
    let posStars = (totRevws * 5);
    let avgStars = ((totStars / posStars) * 5);
    // to 1/4 star: req.avg = ((Math.round(avgStars*4))/4).toFixed(2);
    // to 1/2 star:
    req.avg = ((Math.round(avgStars*2))/2).toFixed(1);
    res.send(req.avg);
  });

// /:review_id PATHs ======================================================== //
router.param('review_id', (req, res, next) => {
 req.review_id = req.params.review_id;
 next();
});

router.route('/:review_id/helpful')
  .put((req, res) => {
    ax.put(`/${req.review_id}/helpful`)
      .then(function (response) {
        res.status(response.status);
        res.end();
      })
  .catch(function (error) { errorCB(error); res.end('ERR'); });
  });

router.route('/:review_id/report')
  .put((req, res) => {
    ax.put(`/${req.review_id}/helpful`)
      .then(function (response) {
        res.status(response.status);
        res.end();
      })
      .catch(function (error) { errorCB(error); res.end('ERR'); });
    });

module.exports = router;