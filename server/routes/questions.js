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
  // Ternary operator to use page and count on condition that
  // they are provided. Otherwise use server default.
  req.page = req.query.page ? `&page=${req.query.page}` : '';
  req.count = req.query.count ? `&count=${req.query.count}` : '';
  req.product_id = req.query.product_id || null;
  next();
})


router.route('/')
  .get((req, res, next) => {
    ax.get(`/?product_id=${req.product_id}${req.page}${req.count}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error('\n/questions/ ax error:\n', error);
      res.end('error in /:product_id');
    });
  })
  .post((req, res, next) => {
    ax.post('/', req.body)
    .then((response) => {
      console.log('Question was created: ', response.data === "Created");
    })
    .catch((error) => {
      console.error('POST ERROR TO HEROKU: ', error)
    });
    res.end();
  });

router.route('/:question_id/answers')
  .post((req, res, next) => {
    ax.post(`/${req.body.question_id}/answers`, req.body)
    .then((response) => {
      console.log('We\'ve been created, y\'all: ', response.data === 'Created');
      res.end();
    })
    .catch((error) => {
      console.error('Answer not created. Error: ', error);
      res.end();
    });
  });


module.exports = router;