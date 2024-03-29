const exppress = require('express')
const controller = require('../controllers/coleccion.controller')
const router= exppress.Router()
const {validateToken} = require('../middlewares/AuthMiddleware')

router.get('/',validateToken,controller.get)
router.get('/record',validateToken,controller.getRecord)
router.get('/:id',validateToken,controller.getOne)
router.post('/',validateToken,controller.post)
router.post('/record',validateToken,controller.record)
router.delete('/:id',validateToken,controller.delete)
router.put('/:id',validateToken,controller.update)
module.exports = router