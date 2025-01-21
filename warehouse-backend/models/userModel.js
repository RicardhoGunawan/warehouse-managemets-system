const { DataTypes } = require('sequelize');  
const sequelize = require('../config/db');  
  
const User = sequelize.define('User', {  
  username: {  
    type: DataTypes.STRING(50),  
    unique: true,  
    allowNull: false,  
  },  
  password: {  
    type: DataTypes.STRING(255),  
    allowNull: false,  
  },  
  role: {  
    type: DataTypes.STRING(20),  
    allowNull: false,  
  },  
});  
  
module.exports = User;  
