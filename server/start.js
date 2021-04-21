const app = require('./index.js');
let port = 9000;
app.listen(port, () => { console.log(`server listening on port ${port}`); });