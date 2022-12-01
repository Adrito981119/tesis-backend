const express = require('express')
const controller = require('../controllers/usuarios.controller')
const {validateToken} = require('../middlewares/AuthMiddleware')
const router= express.Router()

router.post('/',validateToken,controller.post)
router.post('/login',controller.login)
router.get('/verify',validateToken,controller.get)
router.get('/users',validateToken,controller.getUsers)
router.put('/users/resetpassword/:id',validateToken,controller.resetPassword)
router.put('/users/changepassword/:id',validateToken,controller.changePassword)
router.delete('/users/:id',validateToken,controller.deleteUser)
module.exports = router