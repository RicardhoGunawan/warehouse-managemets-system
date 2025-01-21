const express = require('express');  
const router = express.Router();  
const { getAllActivityLogs, getActivityLogById, createActivityLog, updateActivityLog, deleteActivityLog } = require('../controllers/activityLogController');  
const authenticateToken = require('../middlewares/authMiddlewares');  
const checkRole = require('../middlewares/checkRole');  
  
router.get('/', authenticateToken, getAllActivityLogs);  
router.get('/:id', authenticateToken, getActivityLogById);  
router.post('/', authenticateToken, checkRole('admin'), createActivityLog);  
router.put('/:id', authenticateToken, checkRole('admin'), updateActivityLog);  
router.delete('/:id', authenticateToken, checkRole('admin'), deleteActivityLog);  
  
module.exports = router;  
