const express = require('express');
const cors = require('cors');

// SETUP =================================================================== //
// setup Expressjs server instance
let app = express();
let port = 9000;
app.listen(port, () => { console.log(`server listening on port ${port}`); });

// EVERY REQ
app.use(express.static('./public'));
app.use(cors());
app.use(express.json());
// logger hits first in chain (on all REQs)
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.originalUrl}`);
  if (Object.keys(req.body).length) { console.log('  req.body:', req.body); }
  next();
});

  // EVERY REQ METHODs
app.get('/', (req, res) => {
  res.end('cannot GET to root');
});

app.post('/', (req, res) => {
  res.end('cannot POST to root');
});

app.put('/', (req, res) => {
  res.end('cannot PUT to root');
});

// Product REQs ============================================================ //
const products = require('./routes/products.js');
app.use('/products', products);

// Reviews REQs ================================================================ //
const reviews = require('./routes/reviews.js');
app.use('/reviews', reviews);

// QnA REQs ================================================================ //
const questions = require('./routes/questions.js');
app.use('/qa/questions', questions);