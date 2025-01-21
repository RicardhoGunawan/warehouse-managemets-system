const { DataTypes } = require('sequelize');  
const sequelize = require('../config/db');  
  
const Category = sequelize.define('Category', {  
    category_name: {  
        type: DataTypes.STRING(100),  
        allowNull: false,  
        unique: true,  
    },  
});  
  
module.exports = Category;  
