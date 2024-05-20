const Router = require('express')
const router = new Router()
const theoryController = require('../controllers/theoryController')

router.post('/', theoryController.create)
router.get('/', theoryController.getAll)
router.get('/:id', theoryController.getOne)

module.exports = router