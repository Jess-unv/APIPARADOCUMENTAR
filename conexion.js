const mysql = require('mysql2');

const pool = mysql.createPool({
  host: "onlywater.neuroseeq.com",
  user: "u475816193_danny",
  password: "6mFAO*i=Oo",
  database: "u475816193_bdonlywater",
});

pool.getConnection((err, connection) => {
  if (!err) {
    console.log('Conectado a la base de datos MySQL');
    connection.release();
  } else {
    console.log('No está conectado, error:', err);
  }
});

setInterval(() => {
  pool.query('SELECT 1', (error) => {
    if (error) {
      console.error('Error manteniendo la conexión activa:', error);
    }
  });
}, 30000); 

module.exports = pool;
