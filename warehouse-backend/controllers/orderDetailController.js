const OrderDetail = require('../models/orderDetailModel');  
  
// Get all order details  
exports.getAllOrderDetails = async (req, res) => {  
  try {  
    const orderDetails = await OrderDetail.findAll();  
    res.json(orderDetails);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching order details', error });  
  }  
};  
  
// Get a specific order detail by ID  
exports.getOrderDetailById = async (req, res) => {  
  try {  
    const orderDetail = await OrderDetail.findByPk(req.params.id);  
    if (!orderDetail) {  
      return res.status(404).json({ message: 'Order detail not found' });  
    }  
    res.json(orderDetail);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching order detail', error });  
  }  
};  
  
// Create a new order detail  
exports.createOrderDetail = async (req, res) => {  
  try {  
    const { order_id, product_id, quantity } = req.body;  
    const newOrderDetail = await OrderDetail.create({ order_id, product_id, quantity });  
    res.status(201).json({ message: 'Order detail created successfully', orderDetail: newOrderDetail });  
  } catch (error) {  
    res.status(500).json({ message: 'Error creating order detail', error });  
  }  
};  
  
// Update an order detail  
exports.updateOrderDetail = async (req, res) => {  
  try {  
    const orderDetail = await OrderDetail.findByPk(req.params.id);  
    if (!orderDetail) {  
      return res.status(404).json({ message: 'Order detail not found' });  
    }  
  
    const { order_id, product_id, quantity } = req.body;  
    await orderDetail.update({ order_id, product_id, quantity });  
    res.json({ message: 'Order detail updated successfully', orderDetail });  
  } catch (error) {  
    res.status(500).json({ message: 'Error updating order detail', error });  
  }  
};  
  
// Delete an order detail  
exports.deleteOrderDetail = async (req, res) => {  
  try {  
    const orderDetail = await OrderDetail.findByPk(req.params.id);  
    if (!orderDetail) {  
      return res.status(404).json({ message: 'Order detail not found' });  
    }  
  
    await orderDetail.destroy();  
    res.json({ message: 'Order detail deleted successfully' });  
  } catch (error) {  
    res.status(500).json({ message: 'Error deleting order detail', error });  
  }  
};  
