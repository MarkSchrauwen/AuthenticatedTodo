const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'Programming4um!',
  port: 5432,
  database: 'authtodolist'
});

module.exports = pool;
