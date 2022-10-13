const exppress = require('express')
const controller = require('../controllers/usuarios.controller')
const {validateToken} = require('../middlewares/AuthMiddleware')
const router= exppress.Router()

router.post('/',controller.post)
router.post('/login',controller.login)
router.get('/verify',validateToken,controller.get)
router.get('/users',validateToken,controller.getUsers)
router.delete('/users/:id',controller.deleteUser)
module.exports = router