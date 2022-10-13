const exppress = require('express')
const controller = require('../controllers/personal.controller')
const {validateToken} = require('../middlewares/AuthMiddleware')
const router= exppress.Router()

router.get('/',validateToken,controller.get)
router.get('/users',controller.getUsers)
router.get('/:ci',validateToken,controller.getOne)
router.post('/',validateToken,controller.post)
router.delete('/:ci',validateToken,controller.delete)
router.put('/:ci',controller.update)

module.exports = router