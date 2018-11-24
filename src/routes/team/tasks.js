const Router = require('express-promise-router')
const service = require('../../services/teamTaskService')

const router = new Router()

router.get('/all', async (req, res) => {
  const list = await service.listAll()
  res.send(list)
})

router.get('/pending', async (req, res) => {
  const list = await service.listPending()
  res.send(list)
})

router.get('/progress', async (req, res) => {
  const list = await service.listProgress()
  res.send(list)
})

router.get('/search/id/:id', async (req, res) => {
  const { id } = req.params
  const task = await service.getByID(id)
  res.send(task)
})

router.route('/initprogress').post(async (req, res) => {
  console.log(req.body)
  const { id } = req.body
  await service.initProgress(id)
  res.send('OK')
})

router.route('/conclude').post(async (req, res) => {
  console.log(req.body)
  const { id } = req.body
  await service.conclude(id)
  res.send('OK')
})

module.exports = router
