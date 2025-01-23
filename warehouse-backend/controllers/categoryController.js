const Category = require('../models/categoryModel');    

// Get all categories    
exports.getAllCategories = async (req, res) => {    
  try {    
    const categories = await Category.findAll();    
    res.json(categories);    
  } catch (error) {    
    res.status(500).json({ message: 'Error fetching categories', error: error.message });    
  }    
};    

// Get a specific category by ID    
exports.getCategoryById = async (req, res) => {    
  try {    
    const category = await Category.findByPk(req.params.id);    
    if (!category) {    
      return res.status(404).json({ message: 'Category not found' });    
    }    
    res.json(category);    
  } catch (error) {    
    res.status(500).json({ message: 'Error fetching category', error: error.message });    
  }    
};    

// Create a new category    
exports.createCategory = async (req, res) => {    
  try {    
    const { category_name, description } = req.body;    
    const newCategory = await Category.create({ category_name, description });    
    res.status(201).json({ message: 'Category created successfully', category: newCategory });    
  } catch (error) {    
    res.status(500).json({ message: 'Error creating category', error: error.message });    
  }    
};    

// Update a category    
exports.updateCategory = async (req, res) => {    
  try {    
    const category = await Category.findByPk(req.params.id);    
    if (!category) {    
      return res.status(404).json({ message: 'Category not found' });    
    }    
    const { category_name, description } = req.body;    
    await category.update({ category_name, description });    
    res.json({ message: 'Category updated successfully', category });    
  } catch (error) {    
    res.status(500).json({ message: 'Error updating category', error: error.message });    
  }    
};    

// Delete a category    
exports.deleteCategory = async (req, res) => {    
  try {    
    const category = await Category.findByPk(req.params.id);    
    if (!category) {    
      return res.status(404).json({ message: 'Category not found' });    
    }    
    await category.destroy();    
    res.json({ message: 'Category deleted successfully' });    
  } catch (error) {    
    res.status(500).json({ message: 'Error deleting category', error: error.message });    
  }    
};