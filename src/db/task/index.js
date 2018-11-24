const db = require('../../db')

const TABLE_NAME = 'public.tasks'

/**
 * list all tasks
 * @returns {Promise} promise
 */
const list = () => db.queryList(`select * from ${TABLE_NAME}`)

/**
 * list tasks in status passed as a parameter
 * @param {*} status -> status of tasks
 * @returns {Promise} promise
 */
const listByStatus = status => db.queryList(`select * from ${TABLE_NAME} where status = $1`, [status])

/**
 * get a task by id
 * @param {*} id from task
 * @returns {Promise} promise
 */
const getByID = id => db.query(`select * from ${TABLE_NAME} where id = $1`, [id])

module.exports = {
  list,
  listByStatus,
  getByID,
}
