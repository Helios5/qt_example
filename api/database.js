const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Myownsql123',
  database: 'qt_example'
});
module.exports = connection;