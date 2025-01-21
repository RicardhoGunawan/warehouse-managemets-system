const Receipt = require('../models/receiptModel');  
  
// Get all receipts  
exports.getAllReceipts = async (req, res) => {  
  try {  
    const receipts = await Receipt.findAll();  
    res.json(receipts);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching receipts', error });  
  }  
};  
  
// Get a specific receipt by ID  
exports.getReceiptById = async (req, res) => {  
  try {  
    const receipt = await Receipt.findByPk(req.params.id);  
    if (!receipt) {  
      return res.status(404).json({ message: 'Receipt not found' });  
    }  
    res.json(receipt);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching receipt', error });  
  }  
};  
  
// Create a new receipt  
exports.createReceipt = async (req, res) => {  
  try {  
    const { product_id, quantity, supplier } = req.body;  
    const newReceipt = await Receipt.create({ product_id, quantity, supplier });  
    res.status(201).json({ message: 'Receipt created successfully', receipt: newReceipt });  
  } catch (error) {  
    res.status(500).json({ message: 'Error creating receipt', error });  
  }  
};  
  
// Update a receipt  
exports.updateReceipt = async (req, res) => {  
  try {  
    const receipt = await Receipt.findByPk(req.params.id);  
    if (!receipt) {  
      return res.status(404).json({ message: 'Receipt not found' });  
    }  
  
    const { product_id, quantity, supplier } = req.body;  
    await receipt.update({ product_id, quantity, supplier });  
    res.json({ message: 'Receipt updated successfully', receipt });  
  } catch (error) {  
    res.status(500).json({ message: 'Error updating receipt', error });  
  }  
};  
  
// Delete a receipt  
exports.deleteReceipt = async (req, res) => {  
  try {  
    const receipt = await Receipt.findByPk(req.params.id);  
    if (!receipt) {  
      return res.status(404).json({ message: 'Receipt not found' });  
    }  
  
    await receipt.destroy();  
    res.json({ message: 'Receipt deleted successfully' });  
  } catch (error) {  
    res.status(500).json({ message: 'Error deleting receipt', error });  
  }  
};  
