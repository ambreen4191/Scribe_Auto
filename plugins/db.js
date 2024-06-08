const mysql = require('mysql2/promise');

let pool;

module.exports = async (config) => {
//   const { host, user, password, database } = config.env.db;
  const host = "fundo-db.staging.fundo.com.au";
  const user = "root";
  const password = "N7)85gzU!CQB)SvLNmmJWbj7c9*<";
  const database = "fundo_core";

  pool = mysql.createPool({
    host,
    user,
    password,
    database,
  });

  // Handle connection errors (optional)
  pool.on('error', (err) => {
    console.error('MySQL connection error:', err);
  });
};