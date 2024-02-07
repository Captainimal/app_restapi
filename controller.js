'use strict';

var response = require('./res');
var connection = require('./connection');

let port = 3000;
exports.index = function(req, res){
    response.ok("REST App is running on Port: " + port, res)
};