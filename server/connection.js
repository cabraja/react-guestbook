const mysql = require('mysql2');

const db = mysql.createPool({
    host: '34.154.179.159',
    user: 'root',
    password: '',
    database: 'messages',
  });

module.exports = db;