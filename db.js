require('dotenv').config();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: "127.0.0.1",
    port: 3306,
    database: "web_lab_5",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;