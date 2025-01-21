const { DataTypes } = require('sequelize');  
const sequelize = require('../config/db');  
const Order = require('./orderModel');  
const Product = require('./productModel');  
  
const OrderDetail = sequelize.define('OrderDetail', {  
  quantity: {  
    type: DataTypes.INTEGER,  
    allowNull: false,  
  },  
});  
  
OrderDetail.belongsTo(Order, { foreignKey: 'order_id' });  
OrderDetail.belongsTo(Product, { foreignKey: 'product_id' });  
  
module.exports = OrderDetail;  
