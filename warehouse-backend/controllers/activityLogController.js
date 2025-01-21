const ActivityLog = require('../models/activityLogModel');  
  
// Get all activity logs  
exports.getAllActivityLogs = async (req, res) => {  
  try {  
    const activityLogs = await ActivityLog.findAll();  
    res.json(activityLogs);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching activity logs', error });  
  }  
};  
  
// Get a specific activity log by ID  
exports.getActivityLogById = async (req, res) => {  
  try {  
    const activityLog = await ActivityLog.findByPk(req.params.id);  
    if (!activityLog) {  
      return res.status(404).json({ message: 'Activity log not found' });  
    }  
    res.json(activityLog);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching activity log', error });  
  }  
};  
  
// Create a new activity log  
exports.createActivityLog = async (req, res) => {  
  try {  
    const { user_id, action } = req.body;  
    const newActivityLog = await ActivityLog.create({ user_id, action });  
    res.status(201).json({ message: 'Activity log created successfully', activityLog: newActivityLog });  
  } catch (error) {  
    res.status(500).json({ message: 'Error creating activity log', error });  
  }  
};  
  
// Update an activity log  
exports.updateActivityLog = async (req, res) => {  
  try {  
    const activityLog = await ActivityLog.findByPk(req.params.id);  
    if (!activityLog) {  
      return res.status(404).json({ message: 'Activity log not found' });  
    }  
  
    const { user_id, action } = req.body;  
    await activityLog.update({ user_id, action });  
    res.json({ message: 'Activity log updated successfully', activityLog });  
  } catch (error) {  
    res.status(500).json({ message: 'Error updating activity log', error });  
  }  
};  
  
// Delete an activity log  
exports.deleteActivityLog = async (req, res) => {  
  try {  
    const activityLog = await ActivityLog.findByPk(req.params.id);  
    if (!activityLog) {  
      return res.status(404).json({ message: 'Activity log not found' });  
    }  
  
    await activityLog.destroy();  
    res.json({ message: 'Activity log deleted successfully' });  
  } catch (error) {  
    res.status(500).json({ message: 'Error deleting activity log', error });  
  }  
};  
