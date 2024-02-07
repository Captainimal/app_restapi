var mysql = require('mysql');

// Make a connection to database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_rest_api'
});

const port = 3000;
let son = '"';

conn.connect((err) => {
    if (err) throw err;
    console.log('mysql connected:');
    console.log('\x1b[33mHost: \x1b[0m"' + conn.config.host + '"');
    console.log('\x1b[33mUser: \x1b[0m"' + conn.config.user + '"');
    console.log('\x1b[33mDatabase: \x1b[0m"' + conn.config.database + '"');
    console.log('\x1b[38;5;211m"http://localhost:' + port + '"' + '\x1b[0m');
});

module.exports = conn;