const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

exports.insertReversedIP = async function(ip) {
  try {
    await pool.query('INSERT INTO reversed_ips(ip_address) VALUES($1)', [ip]);
    return true;
  } catch (err) {
    console.error('Error saving to database', err);
    throw err;
  }
};
