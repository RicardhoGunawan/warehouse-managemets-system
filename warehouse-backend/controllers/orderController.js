const Order = require('../models/orderModel');  
  
// Get all orders  
exports.getAllOrders = async (req, res) => {  
  try {  
    const orders = await Order.findAll();  
    res.json(orders);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching orders', error });  
  }  
};  
  
// Get a specific order by ID  
exports.getOrderById = async (req, res) => {  
  try {  
    const order = await Order.findByPk(req.params.id);  
    if (!order) {  
      return res.status(404).json({ message: 'Order not found' });  
    }  
    res.json(order);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching order', error });  
  }  
};  
  
// Create a new order  
exports.createOrder = async (req, res) => {  
  try {  
    const { customer_name, status } = req.body;  
    const newOrder = await Order.create({ customer_name, status });  
    res.status(201).json({ message: 'Order created successfully', order: newOrder });  
  } catch (error) {  
    res.status(500).json({ message: 'Error creating order', error });  
  }  
};  
  
// Update an order  
exports.updateOrder = async (req, res) => {  
  try {  
    const order = await Order.findByPk(req.params.id);  
    if (!order) {  
      return res.status(404).json({ message: 'Order not found' });  
    }  
  
    const { customer_name, status } = req.body;  
    await order.update({ customer_name, status });  
    res.json({ message: 'Order updated successfully', order });  
  } catch (error) {  
    res.status(500).json({ message: 'Error updating order', error });  
  }  
};  
  
// Delete an order  
exports.deleteOrder = async (req, res) => {  
  try {  
    const order = await Order.findByPk(req.params.id);  
    if (!order) {  
      return res.status(404).json({ message: 'Order not found' });  
    }  
  
    await order.destroy();  
    res.json({ message: 'Order deleted successfully' });  
  } catch (error) {  
    res.status(500).json({ message: 'Error deleting order', error });  
  }  
};  
