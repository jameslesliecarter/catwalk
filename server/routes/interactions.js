// Questions REQs ============================================================ //
const express = require('express');
const router = express.Router();
const axios = require('axios');
let apiKey = require('../.apiKey.js');

// create axios instance
let ax = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/interactions',
  timeout: 1000,
  headers: apiKey
});

router.post((req, res) => {
  ax.post('/', {
    'element': req.body.element,
    'widget': req.body.widget,
    'time': req.body.time
  })
    .then(function (response) {
      res.status(response.status).send(response.statusText);
    })
    .catch(function (error) {
      let errtxt = '\n[ERROR] in /cart ax post [ERROR]\n'
      console.error(errtxt, error, errtxt);
      res.status(response.status).send(response.statusText);
    });
});

module.exports = router;