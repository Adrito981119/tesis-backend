const express = require('express')
const controller = require('../controllers/tarea.controller')
const {validateToken} = require('../middlewares/AuthMiddleware')
const router= express.Router()

router.get('/',validateToken,controller.get)
router.get('/pendientes',validateToken,controller.getPendientes)
router.get('/cumplidas',validateToken,controller.getCumplidas)
router.post('/',validateToken,controller.post)
router.delete('/:id',validateToken,controller.delete)
router.put('/cumplir/:idTarea',validateToken,controller.cumplir)
module.exports = router