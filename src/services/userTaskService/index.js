const dbTask = require('../../db/task')

const create = async taskData => dbTask.create(taskData)

module.exports = {
  create,
}
