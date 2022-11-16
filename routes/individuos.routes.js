const exppress = require('express')
const controller = require('../controllers/individuos.controller')
const router= exppress.Router()
const {validateToken} = require('../middlewares/AuthMiddleware')

router.get('/',validateToken,controller.get)
router.get('/record',validateToken,controller.getRecord)
router.get('/:id',validateToken,controller.getOne)
router.get('/byColeccion/:id',validateToken,controller.getbyColeccion)
router.post('/',validateToken,controller.post)
router.post('/record',validateToken,controller.record)
router.delete('/:id',validateToken,controller.delete)
router.put('/:id',validateToken,controller.update)
module.exports = router






