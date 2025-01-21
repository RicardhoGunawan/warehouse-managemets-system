const InventoryReport = require('../models/inventoryReportModel');  
  
// Get all inventory reports  
exports.getAllInventoryReports = async (req, res) => {  
  try {  
    const inventoryReports = await InventoryReport.findAll();  
    res.json(inventoryReports);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching inventory reports', error });  
  }  
};  
  
// Get a specific inventory report by ID  
exports.getInventoryReportById = async (req, res) => {  
  try {  
    const inventoryReport = await InventoryReport.findByPk(req.params.id);  
    if (!inventoryReport) {  
      return res.status(404).json({ message: 'Inventory report not found' });  
    }  
    res.json(inventoryReport);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching inventory report', error });  
  }  
};  
  
// Create a new inventory report  
exports.createInventoryReport = async (req, res) => {  
  try {  
    const { total_products, total_quantity } = req.body;  
    const newInventoryReport = await InventoryReport.create({ total_products, total_quantity });  
    res.status(201).json({ message: 'Inventory report created successfully', inventoryReport: newInventoryReport });  
  } catch (error) {  
    res.status(500).json({ message: 'Error creating inventory report', error });  
  }  
};  
  
// Update an inventory report  
exports.updateInventoryReport = async (req, res) => {  
  try {  
    const inventoryReport = await InventoryReport.findByPk(req.params.id);  
    if (!inventoryReport) {  
      return res.status(404).json({ message: 'Inventory report not found' });  
    }  
  
    const { total_products, total_quantity } = req.body;  
    await inventoryReport.update({ total_products, total_quantity });  
    res.json({ message: 'Inventory report updated successfully', inventoryReport });  
  } catch (error) {  
    res.status(500).json({ message: 'Error updating inventory report', error });  
  }  
};  
  
// Delete an inventory report  
exports.deleteInventoryReport = async (req, res) => {  
  try {  
    const inventoryReport = await InventoryReport.findByPk(req.params.id);  
    if (!inventoryReport) {  
      return res.status(404).json({ message: 'Inventory report not found' });  
    }  
  
    await inventoryReport.destroy();  
    res.json({ message: 'Inventory report deleted successfully' });  
  } catch (error) {  
    res.status(500).json({ message: 'Error deleting inventory report', error });  
  }  
};  
