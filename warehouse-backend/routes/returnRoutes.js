const express = require('express');  
const router = express.Router();  
const { getAllReturns, getReturnById, createReturn, updateReturn, deleteReturn } = require('../controllers/returnController');  
const authenticateToken = require('../middlewares/authMiddlewares');  
const checkRole = require('../middlewares/checkRole');  
  
router.get('/', authenticateToken, getAllReturns);  
router.get('/:id', authenticateToken, getReturnById);  
router.post('/', authenticateToken, checkRole('admin'), createReturn);  
router.put('/:id', authenticateToken, checkRole('admin'), updateReturn);  
router.delete('/:id', authenticateToken, checkRole('admin'), deleteReturn);  
  
module.exports = router;  
