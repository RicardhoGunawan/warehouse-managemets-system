const express = require('express');  
const router = express.Router();  
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');  
const authenticateToken = require('../middlewares/authMiddlewares');  
const checkRole = require('../middlewares/checkRole');  
  
router.get('/', authenticateToken, getAllProducts);  
router.get('/:id', authenticateToken, getProductById);  
router.post('/', authenticateToken, checkRole('admin'), createProduct);  
router.put('/:id', authenticateToken, checkRole('admin'), updateProduct);  
router.delete('/:id', authenticateToken, checkRole('admin'), deleteProduct);  
  
module.exports = router;  
