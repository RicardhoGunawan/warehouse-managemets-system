const { DataTypes } = require('sequelize');  
const sequelize = require('../config/db');  
const Product = require('./productModel');  
  
const Receipt = sequelize.define('Receipt', {  
  quantity: {  
    type: DataTypes.INTEGER,  
    allowNull: false,  
  },  
  received_at: {  
    type: DataTypes.DATE,  
    defaultValue: DataTypes.NOW,  
  },  
  supplier: {  
    type: DataTypes.STRING(100),  
  },  
});  
  
Receipt.belongsTo(Product, { foreignKey: 'product_id' });  
  
module.exports = Receipt;  
