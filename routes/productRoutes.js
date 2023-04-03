const productController = require('../controllers/productController');
const { Router } = require('express');
const router = Router();

router.post('/addProduct', productController.addProduct);
router.get('/allProducts', productController.getAllProducts);
router.get('/published', productController.getPublishedProduct);
router.get('/:id', productController.getOneProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;