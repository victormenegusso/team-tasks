const dbTask = require('../../db/task')

const STATE_PENDING = 'PENDING'
const STATE_PROGRESS = 'PROGRESS'

const listAll = async () => dbTask.list()
const listPending = async () => dbTask.listByStatus(STATE_PENDING)
const listProgress = async () => dbTask.listByStatus(STATE_PROGRESS)
const getByID = async id => dbTask.getByID(id)

const initProgress = async (id) => {
  console.log(`initProgress ${id}`)
}

const conclude = async (id) => {
  console.log(`conclude ${id}`)
}

module.exports = {
  listAll,
  listPending,
  listProgress,
  getByID,
  initProgress,
  conclude,
}
