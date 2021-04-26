const express = require('express');
const cors = require('cors');

// SETUP =================================================================== //
// setup Expressjs server instance
let app = express();

// root middleware ========================================================= //
// EVERY REQ
//app.use(express.static('./public'));
app.use(cors());
app.use(express.json());

// REQ methods to root (not already handled by static serving of /public)
app.all('/', (req, res) => { res.end(`cannot ${req.method} to root`) });

// logger hits first in chain (on all REQs)
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.originalUrl}`);
  if (Object.keys(req.body).length) { console.log('  req.body:', req.body); }
  next();
});

// routes =================================================================== //
// prepend /api/ ???
app.use('/api/interactions', require('./routes/interactions.js'));
app.use('/api/products', require('./routes/products.js'));
app.use('/api/reviews', require('./routes/reviews.js'));
app.use('/api/qa/questions', require('./routes/questions.js'));
app.use('/api/qa/answers', require('./routes/answers.js'));
app.use('/api/cart', require('./routes/cart.js'));

module.exports = app;