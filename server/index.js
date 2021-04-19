const express = require('express');
//const colors = require('colors'); // for error/warning colors
//const products = require('products.js');


// SETUP =================================================================== //
// setup Expressjs server instance
let app = express();
let port = 9000;
app.listen(port, () => { console.log(`server listening on port ${port}`); });

// EVERY REQ
//app.use(express.static('public'));  // to serve the client app
//no need for bodyParser, it's included in Express now as .json()
app.use(express.json());
app.use((req, res) => {
  console.log(`${req.method} request to ${req.originalUrl}`);
  if (Object.keys(req.body).length) { console.log('  req.body:', req.body); }
});

app.get('/', (req, res) => {});

app.post('/', (req, res) => { /*res.end(`cannot POST to root\n`);*/ });

// Product REQs ============================================================ //
const products = require('./routes/products.js');
app.use('/products', products);

// QnA REQs ================================================================ //