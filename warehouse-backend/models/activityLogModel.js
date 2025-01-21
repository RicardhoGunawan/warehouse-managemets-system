const { DataTypes } = require('sequelize');  
const sequelize = require('../config/db');  
const User = require('./userModel');  
  
const ActivityLog = sequelize.define('ActivityLog', {  
  action: {  
    type: DataTypes.STRING(255),  
    allowNull: false,  
  },  
  action_date: {  
    type: DataTypes.DATE,  
    defaultValue: DataTypes.NOW,  
  },  
});  
  
ActivityLog.belongsTo(User, { foreignKey: 'user_id' });  
  
module.exports = ActivityLog;  
