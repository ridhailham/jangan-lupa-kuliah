const mysql = require('./node_modules/mysql');

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "cdaaptnia404",
    database: "cuyuniversity"
})

module.exports = db;