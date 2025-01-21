const express = require('express');    
const router = express.Router();    
const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');    
const authenticateToken = require('../middlewares/authMiddlewares');    
const checkRole = require('../middlewares/checkRole');    
  
// Get all categories  
router.get('/', authenticateToken, getAllCategories);    
  
// Get a specific category by ID  
router.get('/:id', authenticateToken, getCategoryById);    
  
// Create a new category  
router.post('/', authenticateToken, checkRole('admin'), createCategory);    
  
// Update a category  
router.put('/:id', authenticateToken, checkRole('admin'), updateCategory);    
  
// Delete a category  
router.delete('/:id', authenticateToken, checkRole('admin'), deleteCategory);    
  
module.exports = router;    
