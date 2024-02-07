'use strict';

var response = require('./res');
var connection = require('./connection');

let port = 3000;
exports.index = function (req, res) {
    response.ok("REST App is running on Port: " + port, res)
};

// Showing all Mahasiswa data
exports.showingAllMahasiswa = function (req, res) {
    connection.query('SELECT * FROM `mahasiswa`', function (error, rows, fields) {
        if(error){
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};