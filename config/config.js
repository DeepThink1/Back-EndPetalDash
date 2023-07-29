const mysql = require('mysql')
const db = mysql.createConnection({
   /* host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'app_delivery'*/

    host: 'br3qyzmhrrvwrrkubdh8-mysql.services.clever-cloud.com',
    user: 'uu1h02dylut08ae7',
    password: '0YRWsUXq8IJLEGg85D2K',
    database: 'br3qyzmhrrvwrrkubdh8',
    port: 3306
}) 

db.connect(function (err) {
    if (err) throw err
    console.log('database conected')
})

module.exports = db;
