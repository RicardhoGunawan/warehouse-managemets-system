const express = require('express');  
const router = express.Router();  
const { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController');  
const authenticateToken = require('../middlewares/authMiddlewares');  
const checkRole = require('../middlewares/checkRole');  
  
router.get('/', authenticateToken, getAllOrders);  
router.get('/:id', authenticateToken, getOrderById);  
router.post('/', authenticateToken, checkRole('admin'), createOrder);  
router.put('/:id', authenticateToken, checkRole('admin'), updateOrder);  
router.delete('/:id', authenticateToken, checkRole('admin'), deleteOrder);  
  
module.exports = router;  
