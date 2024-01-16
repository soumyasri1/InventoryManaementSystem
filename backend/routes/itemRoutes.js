const express = require('express');
const router = express.Router();
const productController = require('../controller/itemController');

// Route to fetch and store data from the external API
router.get('/api/fetch-and-store-external-products', productController.fetchAndStoreExternalProducts);

// CRUD routes for products
router.post('/api/products', productController.createProduct);
router.get('/api/products', productController.getProducts);
router.get('/api/products/:id', productController.getProductById);
router.put('/api/products/:id', productController.updateProduct);
router.delete('/api/products/:id', productController.deleteProduct);
router.get('/api/categories', productController.getCategories);
router.get('/api/products-by-category/:category', productController.getProductsByCategory);




module.exports = router;