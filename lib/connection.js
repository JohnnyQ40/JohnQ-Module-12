const mysql = require('mysql2');
require('dotenv').config();

const dbPool = mysql.createPool({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
  });
  
  module.exports = dbPool;