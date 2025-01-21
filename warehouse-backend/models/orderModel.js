const { DataTypes } = require('sequelize');  
const sequelize = require('../config/db');  
  
const Order = sequelize.define('Order', {  
  customer_name: {  
    type: DataTypes.STRING(100),  
    allowNull: false,  
  },  
  order_date: {  
    type: DataTypes.DATE,  
    defaultValue: DataTypes.NOW,  
  },  
  status: {  
    type: DataTypes.STRING(20),  
    allowNull: false,  
  },  
});  
  
module.exports = Order;  
