const express = require('express');
const router = express.Router();
const productController = require('../controller/ProductController');

router.get('/products', productController.getAllProducts)
router.post('/products', productController.createProduct)
router.put('/products/:barcode', productController.updateProductByBarcode)
router.delete('/products/:id', productController.deleteProductById)

module.exports = router;