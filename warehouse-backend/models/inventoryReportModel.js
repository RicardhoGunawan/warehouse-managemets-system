const { DataTypes } = require('sequelize');  
const sequelize = require('../config/db');  
  
const InventoryReport = sequelize.define('InventoryReport', {  
  report_date: {  
    type: DataTypes.DATE,  
    defaultValue: DataTypes.NOW,  
  },  
  total_products: {  
    type: DataTypes.INTEGER,  
  },  
  total_quantity: {  
    type: DataTypes.INTEGER,  
  },  
});  
  
module.exports = InventoryReport;  
