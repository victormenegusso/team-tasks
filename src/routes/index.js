const teamTask = require('./team/tasks')

module.exports = (app) => {
  app.use('/team/tasks', teamTask)
}
