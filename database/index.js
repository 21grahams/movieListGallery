const Pool = require('pg').Pool

const pool = new Pool({
  host: 'localhost',
  user: 'GrahamKirsh',
  database: 'movies',
  password: 'Password1',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log('Movie Database is running on: ', res.rows)
})

module.exports = pool;