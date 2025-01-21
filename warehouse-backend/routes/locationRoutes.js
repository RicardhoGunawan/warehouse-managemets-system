const express = require('express');  
const router = express.Router();  
const { getAllLocations, getLocationById, createLocation, updateLocation, deleteLocation } = require('../controllers/locationController');  
const authenticateToken = require('../middlewares/authMiddlewares');  
const checkRole = require('../middlewares/checkRole');  
  
router.get('/', authenticateToken, getAllLocations);  
router.get('/:id', authenticateToken, getLocationById);  
router.post('/', authenticateToken, checkRole('admin'), createLocation);  
router.put('/:id', authenticateToken, checkRole('admin'), updateLocation);  
router.delete('/:id', authenticateToken, checkRole('admin'), deleteLocation);  
  
module.exports = router;  
