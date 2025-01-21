const express = require('express');  
const router = express.Router();  
const { getAllInventoryReports, getInventoryReportById, createInventoryReport, updateInventoryReport, deleteInventoryReport } = require('../controllers/inventoryReportController');  
const authenticateToken = require('../middlewares/authMiddlewares');  
const checkRole = require('../middlewares/checkRole');  
  
router.get('/', authenticateToken, getAllInventoryReports);  
router.get('/:id', authenticateToken, getInventoryReportById);  
router.post('/', authenticateToken, checkRole('admin'), createInventoryReport);  
router.put('/:id', authenticateToken, checkRole('admin'), updateInventoryReport);  
router.delete('/:id', authenticateToken, checkRole('admin'), deleteInventoryReport);  
  
module.exports = router;  
