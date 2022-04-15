const Router = require('express')
const router = new Router()
const userRoter = require('./userRouter')
const rowRouter = require('./rowRouter')

router.use('/user', userRoter)
router.use('/row', rowRouter)

module.exports = router