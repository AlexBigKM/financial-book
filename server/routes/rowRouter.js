const Router = require('express')
const router = new Router()
const rowController = require('../controllers/rowController')

router.post('/', rowController.create)
router.get('/', rowController.getAll)

module.exports = router