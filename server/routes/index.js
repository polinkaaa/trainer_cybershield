const Router = require('express')
const router = new Router()
const testRouter = require('./testRouter')
const theoryRouter = require('./theoryRouter')
const userRouter = require('./userRouter')
const chatRouter = require('./chatRouter')

router.use('/user', userRouter)
router.use('/task', testRouter)
router.use('/theory', theoryRouter)
router.use('/chat', chatRouter)

module.exports = router