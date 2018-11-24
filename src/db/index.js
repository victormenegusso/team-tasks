
const { Pool } = require('pg')

// conection config
const conectionConf = {
  user: 'postgres',
  host: 'localhost',
  database: 'sup',
  password: 'postgres',
  port: 5432,
}

// create pool conection
const pool = new Pool(conectionConf)

/**
 * execute a query {text} with {params}
 * @param {*} text
 * @param {*} params
 * @returns {Promise} a promise that returns a complete data information
 */
const query = (text, params) => pool.query(text, params)

/**
 * execute a query selec {text} with {params}
 * @param {*} text
 * @param {*} params
 * @returns {Promise} a promise that returns a array
 */
const queryList = (text, params) => {
  return new Promise((resolve, reject) => {
    pool.query(text, params)
      .then(data => resolve(data.rows))
      .catch(e => reject(e))
  })
}


module.exports = {
  query,
  queryList,
}
