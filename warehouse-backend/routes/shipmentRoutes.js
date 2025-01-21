const express = require('express');  
const router = express.Router();  
const { getAllShipments, getShipmentById, createShipment, updateShipment, deleteShipment } = require('../controllers/shipmentController');  
const authenticateToken = require('../middlewares/authMiddlewares');  
const checkRole = require('../middlewares/checkRole');  
  
router.get('/', authenticateToken, getAllShipments);  
router.get('/:id', authenticateToken, getShipmentById);  
router.post('/', authenticateToken, checkRole('admin'), createShipment);  
router.put('/:id', authenticateToken, checkRole('admin'), updateShipment);  
router.delete('/:id', authenticateToken, checkRole('admin'), deleteShipment);  
  
module.exports = router;  
