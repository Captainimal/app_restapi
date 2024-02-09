'use strict';

let response = require('./res');
let connection = require('./connection');

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

// Adding mahasiswa data
exports.addingMahasiswa = function (req, res) {
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('INSERT INTO `mahasiswa` (nim,nama,jurusan) VALUES (?,?,?)',
        [nim, nama, jurusan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Added!", res);
            }
        });
};

// Change data by ID
exports.changeMahasiswa = function (req, res) {
    let id = req.body.id_mahasiswa;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('UPDATE `mahasiswa` SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Edited Succesfully!", res)
            }
        }); 
}