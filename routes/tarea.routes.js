const exppress = require('express')
const controller = require('../controllers/tarea.controller')
const router= exppress.Router()

router.get('/',controller.get)
router.get('/pendientes',controller.getPendientes)
router.get('/cumplidas',controller.getCumplidas)
router.get('/:id',controller.getOne)
router.post('/',controller.post)
router.delete('/:id',controller.delete)
router.put('/cumplir/:id',controller.cumplir)
router.put('/:id',controller.update)
module.exports = router