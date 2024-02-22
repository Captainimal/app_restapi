const bodyParser = require("body-parser");
const express = require("express");

var morgan = require('morgan');
const app = express();

// Parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Enroll menu routes from index
app.use('/auth', require('./middleware'))

// Call Routes
var routes = require('./routes');
routes(app);

var port = 3000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
