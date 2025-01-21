const express = require('express');  
const router = express.Router();  
const { getAllReceipts, getReceiptById, createReceipt, updateReceipt, deleteReceipt } = require('../controllers/receiptController');  
const authenticateToken = require('../middlewares/authMiddlewares');  
const checkRole = require('../middlewares/checkRole');  
  
router.get('/', authenticateToken, getAllReceipts);  
router.get('/:id', authenticateToken, getReceiptById);  
router.post('/', authenticateToken, checkRole('admin'), createReceipt);  
router.put('/:id', authenticateToken, checkRole('admin'), updateReceipt);  
router.delete('/:id', authenticateToken, checkRole('admin'), deleteReceipt);  
  
module.exports = router;  
