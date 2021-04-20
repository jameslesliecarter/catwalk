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
  req.page = req.query.page || '';
  req.count = req.query.count || '';
  req.product_id = req.query.product_id || null;
  next();
})

// root ENDpoint route
router.use('/', (req, res) => {
  ax.get(`/?page=${req.page}&count=${req.count}&product_id=${req.product_id}`)
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    console.error('\n/questions/ ax err:\n', error);
    console.error('code: ', error.code);
    res.end('error in /:product_id');
  });
});


module.exports = router;