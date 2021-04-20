// Answers REQs ============================================================ //
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

router.route('/:answer_id/helpful')
  .put((req, res, next) => {
    ax.put(`/${req.params.answer_id}/helpful`)
    .then((response) => {
      res.end();
    })
    .catch((error) => {
      console.error('Helpful answer PUT error: ', error);
      res.end();
    });
  });

router.route('/:answer_id/report')
  .put((req, res, next) => {
    ax.put(`/${req.params.answer_id}/report`)
    .then((response) => {
      res.end();
    })
    .catch((error) => {
      console.error('Answer report error: ', error);
      res.end();
    });
  });

module.exports = router;