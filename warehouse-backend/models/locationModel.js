const { DataTypes } = require('sequelize');  
const sequelize = require('../config/db');  
  
const Location = sequelize.define('Location', {  
  location_name: {  
    type: DataTypes.STRING(100),  
    allowNull: false,  
  },  
  description: {  
    type: DataTypes.TEXT,  
  },  
  capacity: {  
    type: DataTypes.INTEGER,  
    allowNull: false,  
  },  
});  
  
module.exports = Location;  
