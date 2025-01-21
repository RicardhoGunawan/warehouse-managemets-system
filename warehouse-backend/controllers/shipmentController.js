const Shipment = require('../models/shipmentModel');  
  
// Get all shipments  
exports.getAllShipments = async (req, res) => {  
  try {  
    const shipments = await Shipment.findAll();  
    res.json(shipments);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching shipments', error });  
  }  
};  
  
// Get a specific shipment by ID  
exports.getShipmentById = async (req, res) => {  
  try {  
    const shipment = await Shipment.findByPk(req.params.id);  
    if (!shipment) {  
      return res.status(404).json({ message: 'Shipment not found' });  
    }  
    res.json(shipment);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching shipment', error });  
  }  
};  
  
// Create a new shipment  
exports.createShipment = async (req, res) => {  
  try {  
    const { order_id, carrier, tracking_number } = req.body;  
    const newShipment = await Shipment.create({ order_id, carrier, tracking_number });  
    res.status(201).json({ message: 'Shipment created successfully', shipment: newShipment });  
  } catch (error) {  
    res.status(500).json({ message: 'Error creating shipment', error });  
  }  
};  
  
// Update a shipment  
exports.updateShipment = async (req, res) => {  
  try {  
    const shipment = await Shipment.findByPk(req.params.id);  
    if (!shipment) {  
      return res.status(404).json({ message: 'Shipment not found' });  
    }  
  
    const { order_id, carrier, tracking_number } = req.body;  
    await shipment.update({ order_id, carrier, tracking_number });  
    res.json({ message: 'Shipment updated successfully', shipment });  
  } catch (error) {  
    res.status(500).json({ message: 'Error updating shipment', error });  
  }  
};  
  
// Delete a shipment  
exports.deleteShipment = async (req, res) => {  
  try {  
    const shipment = await Shipment.findByPk(req.params.id);  
    if (!shipment) {  
      return res.status(404).json({ message: 'Shipment not found' });  
    }  
  
    await shipment.destroy();  
    res.json({ message: 'Shipment deleted successfully' });  
  } catch (error) {  
    res.status(500).json({ message: 'Error deleting shipment', error });  
  }  
};  
