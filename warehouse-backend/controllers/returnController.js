const Return = require('../models/returnModel');  
  
exports.getAllReturns = async (req, res) => {  
  try {  
    const returns = await Return.findAll();  
    res.json(returns);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching returns', error });  
  }  
};  
  
exports.getReturnById = async (req, res) => {  
  try {  
    const returnItem = await Return.findByPk(req.params.id);  
    if (!returnItem) return res.status(404).json({ message: 'Return not found' });  
    res.json(returnItem);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching return', error });  
  }  
};  
  
exports.createReturn = async (req, res) => {  
  try {  
    const returnItem = await Return.create(req.body);  
    res.status(201).json(returnItem);  
  } catch (error) {  
    res.status(500).json({ message: 'Error creating return', error });  
  }  
};  
  
exports.updateReturn = async (req, res) => {  
  try {  
    const returnItem = await Return.findByPk(req.params.id);  
    if (!returnItem) return res.status(404).json({ message: 'Return not found' });  
    await returnItem.update(req.body);  
    res.json(returnItem);  
  } catch (error) {  
    res.status(500).json({ message: 'Error updating return', error });  
  }  
};  
  
exports.deleteReturn = async (req, res) => {  
  try {  
    const returnItem = await Return.findByPk(req.params.id);  
    if (!returnItem) return res.status(404).json({ message: 'Return not found' });  
    await returnItem.destroy();  
    res.json({ message: 'Return deleted successfully' });  
  } catch (error) {  
    res.status(500).json({ message: 'Error deleting return', error });  
  }  
};  
