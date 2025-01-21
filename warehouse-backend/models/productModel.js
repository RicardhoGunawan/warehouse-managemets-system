// productsModel.js  
const { DataTypes } = require('sequelize');  
const sequelize = require('../config/db');  
const Location = require('./locationModel');  
const Category = require('./categoryModel'); // Pastikan untuk mengimpor model kategori  
  
const Product = sequelize.define('Product', {  
    product_name: {  
        type: DataTypes.STRING(100),  
        allowNull: false,  
    },  
    sku: {  
        type: DataTypes.STRING(50),  
        unique: true,  
        allowNull: false,  
    },  
    description: {  
        type: DataTypes.TEXT,  
    },  
    quantity: {  
        type: DataTypes.INTEGER,  
        allowNull: false,  
    },  
    created_at: {  
        type: DataTypes.DATE,  
        defaultValue: DataTypes.NOW,  
    },  
    category_id: { // Tambahkan kolom category_id  
        type: DataTypes.INTEGER,  
        references: {  
            model: 'categories',  
            key: 'category_id',  
        },  
    },  
});  
  
// Definisikan relasi  
Product.belongsTo(Location, { foreignKey: 'location_id' });  
Product.belongsTo(Category, { foreignKey: 'category_id' }); // Definisikan relasi dengan kategori  
  
module.exports = Product;  
