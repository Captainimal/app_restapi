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
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// Showing all mahasiswa data by ID
exports.showingAllMahasiswaByID = function (req, res) {
    let id = req.params.id;

    connection.query('SELECT * FROM `mahasiswa` WHERE id_mahasiswa = ?', [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            response.ok(rows, res);
        }
    });
};