const express = require('express');
const cors = require('cors');

// SETUP =================================================================== //
// setup Expressjs server instance
let app = express();
// webpack conf
//const webpack = require('webpack');
//const wpconf = require('../webpack.config.js');
//const compiler = webpack(wpconf);
//app.use(require('webpack-dev-middleware')(compiler, {
//  publicPath: wpconf.output.publicPath
//}));

// root middleware ========================================================= //
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

// REQ methods to root
app.get('/', (req, res) => { res.end('cannot GET to root'); });
app.post('/', (req, res) => { res.end('cannot POST to root'); });
app.put('/', (req, res) => { res.end('cannot PUT to root'); });

// routes =================================================================== //
app.use('/interactions', require('./routes/interactions.js'));
app.use('/products', require('./routes/products.js'));
app.use('/reviews', require('./routes/reviews.js'));
app.use('/qa/questions', require('./routes/questions.js'));
app.use('/qa/answers', require('./routes/answers.js'));
app.use('/cart', require('./routes/cart.js'));

module.exports = app;
