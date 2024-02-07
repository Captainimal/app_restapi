const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// Parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Call Routes
var routes = require('./routes');
routes(app)

var port = 3000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
