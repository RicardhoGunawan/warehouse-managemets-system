const { DataTypes } = require('sequelize');  
const sequelize = require('../config/db');  
const Order = require('./orderModel');  
  
const Shipment = sequelize.define('Shipment', {  
  shipment_date: {  
    type: DataTypes.DATE,  
    defaultValue: DataTypes.NOW,  
  },  
  carrier: {  
    type: DataTypes.STRING(100),  
  },  
  tracking_number: {  
    type: DataTypes.STRING(100),  
  },  
});  
  
Shipment.belongsTo(Order, { foreignKey: 'order_id' });  
  
module.exports = Shipment;  
