var mysql = require('mysql');

// Make a connection to database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_rest_api'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('mysql connected!');
});

module.exports = conn;