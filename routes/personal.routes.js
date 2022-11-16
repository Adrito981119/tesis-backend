const exppress = require('express')
const controller = require('../controllers/personal.controller')
const {validateToken} = require('../middlewares/AuthMiddleware')
const router= exppress.Router()

router.get('/',validateToken,controller.get)
router.get('/users',validateToken,controller.getUsers)
router.get('/record',validateToken,controller.getRecord)
router.get('/:ci',validateToken,controller.getOne)
router.post('/',validateToken,controller.post)
router.post('/record',validateToken,controller.record)
router.delete('/:ci',validateToken,controller.delete)
router.put('/:ci',validateToken,controller.update)

module.exports = router