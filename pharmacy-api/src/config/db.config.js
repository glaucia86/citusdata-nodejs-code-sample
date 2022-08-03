/**
 * file: src/config/db.config.js
 * description: file responsible for database configuration
 * data: 08/03/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const { Pool } = require('pg');

const dotenv = require('dotenv');

dotenv.config();

// ==> Database connection
const pool = new Pool({
  connectionString: process.env.CITUS_DATABASE_URL,
});

pool.on('connect', () => {
  console.log('Database connected with success!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
