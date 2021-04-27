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
      res.status(response.status);
      res.json(response.data);
    })
    .catch((error) => {
      console.error('\n/questions/ ax error:\n', error);
      res.end('error in /:product_id');
    });
  })
  .post((req, res, next) => {
    ax.post('/', req.body)
    .then((response) => {
      res.status(response.status);
      res.end();
    })
    .catch((error) => {
      console.error('POST ERROR TO HEROKU: ', error)
      res.status(response.status);
      res.end();
    });
  });

router.route('/:question_id/answers')
  .get((req, res, next) => {
    ax.get(`/${req.params.question_id}/answers/?${req.page}&${req.count}`)
    .then((response) => {
      res.json(response.data.results);
      res.status(response.status);
      res.end();
    })
    .catch((error) => {
      console.error('Answer GET error: ', error);
      res.end();
    });
  })
  .post((req, res, next) => {
    ax.post(`/${req.params.question_id}/answers/`, req.body)
    .then((response) => {
      res.status(response.status);
      res.end();
    })
    .catch((error) => {
      console.error('Answer not created. Error: ', error);
      res.end();
    });
  });

router.route('/:question_id/report')
  .put((req, res, next) => {
    ax.put(`/${req.params.question_id}/report`)
    .then((response) => {
      console.log('We\'ve successfully reported the question ', response.status === 204);
      res.status(response.status);
      res.end();
    })
    .catch((error) => {
      console.error('Issue reporting question: ', error);
      res.end();
    });
  });

router.route('/:question_id/helpful')
  .put((req, res, next) => {
    ax.put(`/${req.params.question_id}/helpful`)
    .then((response) => {
      res.status(response.status);
      res.end();
    })
    .catch((error) => {
      console.error('You weren\'t very helpful, were you: ', error);
      res.end();
    });
  });

router.route('/test')
  .get((req, res) => {
    res.json({message: 'pass!'});
    res.status(200);
    res.end();
  })
  .post((req, res) => {
    res.status(200);
    res.send(req.body);
    res.end();
  });


module.exports = router;