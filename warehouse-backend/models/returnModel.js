const { DataTypes } = require('sequelize');  
const sequelize = require('../config/db');  
const Order = require('./orderModel');  
const Product = require('./productModel');  
  
const Return = sequelize.define('Return', {  
  quantity: {  
    type: DataTypes.INTEGER,  
    allowNull: false,  
  },  
  return_reason: {  
    type: DataTypes.TEXT,  
  },  
  return_date: {  
    type: DataTypes.DATE,  
    defaultValue: DataTypes.NOW,  
  },  
});  
  
Return.belongsTo(Order, { foreignKey: 'order_id' });  
Return.belongsTo(Product, { foreignKey: 'product_id' });  
  
module.exports = Return;  
