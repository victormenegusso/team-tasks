const Router = require('express-promise-router')
const service = require('../../services/userTaskService')

const router = new Router()

router.post('/create', async (req, res) => {
  const data = req.body
  service.create(data)
  res.send('OK')
})

module.exports = router
