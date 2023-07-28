const mysql = require('mysql2')
const db = mysql.createConnection({
   /* host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'app_delivery'*/

    host: 'containers-us-west-172.railway.app',
    user: 'root',
    password: '3HtsEKTcZfBxDNgA0rAp',
    database: 'railway',
    port: process.env.PORT || 5731
})

db.connect(function (err) {
    if (err) throw err
    console.log('database conected')
})

module.exports = db;
