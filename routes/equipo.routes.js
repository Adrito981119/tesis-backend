const exppress = require('express')
const controller = require('../controllers/equipo.controller')
const router= exppress.Router()

router.get('/',controller.get)
router.get('/:id',controller.getOne)
router.get('/miembros/:id',controller.getMembers)
router.post('/',controller.post)
router.post('/miembros/:id',controller.addMember)
router.delete('/miembros/:id:ci',controller.deleteMember)
router.delete('/:id',controller.delete)
router.put('/:id',controller.update)
module.exports = router