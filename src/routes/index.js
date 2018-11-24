const teamTask = require('./team/tasks')
const userTask = require('./user/tasks')

module.exports = (app) => {
  app.use('/team/tasks', teamTask)
  app.use('/user/tasks', userTask)
}
