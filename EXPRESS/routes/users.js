//Módulo express
let express = require('express');

//Método Router
let router = express.Router();

//Controller
let userController = require('../controllers/usersController');

// Rutas
router.get('/', userController.index);
router.post('/userNew', userController.create);
router.post('/create', userController.store);
router.get('/login', userController.require)

//Exportar módulo
module.exports = router; 
