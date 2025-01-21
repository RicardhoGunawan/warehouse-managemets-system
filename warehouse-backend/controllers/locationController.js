const Location = require('../models/locationModel'); // Pastikan jalur ini benar  

  
// Get all locations  
exports.getAllLocations = async (req, res) => {  
  try {  
    const locations = await Location.findAll();  
    res.json(locations);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching locations', error });  
  }  
};  
  
// Get a specific location by ID  
exports.getLocationById = async (req, res) => {  
  try {  
    const location = await Location.findByPk(req.params.id);  
    if (!location) {  
      return res.status(404).json({ message: 'Location not found' });  
    }  
    res.json(location);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching location', error });  
  }  
};  
  
// Create a new location  
exports.createLocation = async (req, res) => {  
  try {  
    const { location_name, description, capacity } = req.body;  
    const newLocation = await Location.create({ location_name, description, capacity });  
    res.status(201).json({ message: 'Location created successfully', location: newLocation });  
  }    catch (error) {    
    console.error(error); // Tambahkan log untuk melihat kesalahan  
    res.status(500).json({ message: 'Error creating location', error: error.message });    
}  
};  
  
// Update a location  
exports.updateLocation = async (req, res) => {  
  try {  
    const location = await Location.findByPk(req.params.id);  
    if (!location) {  
      return res.status(404).json({ message: 'Location not found' });  
    }  
  
    const { location_name, description, capacity } = req.body;  
    await location.update({ location_name, description, capacity });  
    res.json({ message: 'Location updated successfully', location });  
  } catch (error) {  
    res.status(500).json({ message: 'Error updating location', error });  
  }  
};  
  
// Delete a location  
exports.deleteLocation = async (req, res) => {  
  try {  
    const location = await Location.findByPk(req.params.id);  
    if (!location) {  
      return res.status(404).json({ message: 'Location not found' });  
    }  
  
    await location.destroy();  
    res.json({ message: 'Location deleted successfully' });  
  } catch (error) {  
    res.status(500).json({ message: 'Error deleting location', error });  
  }  
};  
