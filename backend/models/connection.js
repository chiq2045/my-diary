require('dotenv').config();
const mysql = require('mysql');
const { DB_NAME, DB_PASS, DB_USER, DB_HOST } = process.env;

module.exports = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
});
