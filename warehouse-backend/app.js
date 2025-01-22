const express = require('express');  
const cors = require('cors');
const bodyParser = require('body-parser');  
const authRoutes = require('./routes/authRoutes');  
const locationRoutes = require('./routes/locationRoutes');  
const productRoutes = require('./routes/productRoutes');  
const receiptRoutes = require('./routes/receiptRoutes');  
const orderRoutes = require('./routes/orderRoutes');  
const orderDetailRoutes = require('./routes/orderDetailRoutes');  
const shipmentRoutes = require('./routes/shipmentRoutes');  
const returnRoutes = require('./routes/returnRoutes');  
const inventoryReportRoutes = require('./routes/inventoryReportRoutes');  
const activityLogRoutes = require('./routes/activityLogRoutes');  
const categoriesRoutes = require('./routes/categoriesRoutes')
  
const app = express();  

app.use(cors({
    origin: 'http://localhost:5173', // Ganti dengan URL frontend Anda
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // Jika Anda menggunakan cookies atau header otorisasi
}));
  
app.use(bodyParser.json());  
  
app.use('/api/auth', authRoutes);  
app.use('/api/locations', locationRoutes);  
app.use('/api/products', productRoutes);  
app.use('/api/receipts', receiptRoutes);  
app.use('/api/orders', orderRoutes);  
app.use('/api/order-details', orderDetailRoutes);  
app.use('/api/shipments', shipmentRoutes);  
app.use('/api/returns', returnRoutes);  
app.use('/api/inventory-reports', inventoryReportRoutes);  
app.use('/api/activity-logs', activityLogRoutes);
app.use('/api/categories',categoriesRoutes);
  
module.exports = app;  
