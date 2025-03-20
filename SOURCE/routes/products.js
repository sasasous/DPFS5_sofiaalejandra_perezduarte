//Módulo express
let express = require('express');


//Método Router
let router = express.Router();


//Controller
let productsController = require('../controllers/productsController');


//Rutas
router.get('/products', productsController.index);

//Listado de productos
router.get('/products', productsController.list);

//Creación de productos
router.get('/productNew', productsController.create);
router.post('/products/create', productsController.store);

//Detalle de un producto
router.get('/products/:id', productsController.show);

//Edición de un producto
router.get('/productEdit', productsController.edit);
router.post('/products', productsController.list);
router.put('/products/:id', productsController.update);

//Eliminar un producto
router.delete('/products/:id', productsController.delete);


//Exportar módulo
module.exports = router;