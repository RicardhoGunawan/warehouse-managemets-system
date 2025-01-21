const express = require('express');  
const router = express.Router();  
const { getAllOrderDetails, getOrderDetailById, createOrderDetail, updateOrderDetail, deleteOrderDetail } = require('../controllers/orderDetailController');  
const authenticateToken = require('../middlewares/authMiddlewares');  
const checkRole = require('../middlewares/checkRole');  
  
router.get('/', authenticateToken, getAllOrderDetails);  
router.get('/:id', authenticateToken, getOrderDetailById);  
router.post('/', authenticateToken, checkRole('admin'), createOrderDetail);  
router.put('/:id', authenticateToken, checkRole('admin'), updateOrderDetail);  
router.delete('/:id', authenticateToken, checkRole('admin'), deleteOrderDetail);  
  
module.exports = router;  
