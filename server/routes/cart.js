// Questions REQs ============================================================ //
const express = require('express');
const router = express.Router();
const axios = require('axios');
let apiKey = require('../.apiKey.js');

// create axios instance
let ax = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart',
  timeout: 1000,
  headers: apiKey
});

// sku should be attached to req (it's in overview/products)

router.route('/')
  .get((req, res, next) => {
    ax.get('/')
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      console.error('\nerror in /cart ax get:\n', error);
      res.send('error in cart ax get');
    });
  })
  .post((req, res, next) => {
    ax.post('/', { 'sku_id': req.body.sku_id })
    .then((response) => {
      res.status(response.status).send(response.statusText);
    })
    .catch((error) => {
      console.error('\nerror in /cart ax post:\n', error);
      res.send('error in cart ax post');
    });
  });


module.exports = router;