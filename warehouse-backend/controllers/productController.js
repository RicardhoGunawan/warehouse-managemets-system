const Product = require('../models/productModel');    
const Category = require('../models/categoryModel'); // Pastikan untuk mengimpor model kategori    
const Location = require('../models/locationModel'); // Pastikan untuk mengimpor model lokasi  
  
// Get all products    
exports.getAllProducts = async (req, res) => {    
  try {    
    const products = await Product.findAll({    
      include: [{ model: Category, as: 'Category' }, { model: Location, as: 'Location' }] // Sertakan kategori dan lokasi  
    });    
    res.json(products);    
  } catch (error) {    
    res.status(500).json({ message: 'Error fetching products', error: error.message });    
  }    
};    
    
// Get a specific product by ID    
exports.getProductById = async (req, res) => {    
  try {    
    const product = await Product.findByPk(req.params.id, {    
      include: [{ model: Category, as: 'Category' }, { model: Location, as: 'Location' }] // Sertakan kategori dan lokasi  
    });    
    if (!product) {    
      return res.status(404).json({ message: 'Product not found' });    
    }    
    res.json(product);    
  } catch (error) {    
    res.status(500).json({ message: 'Error fetching product', error: error.message });    
  }    
};    
    
// Create a new product    
exports.createProduct = async (req, res) => {    
  try {    
    const { product_name, sku, description, quantity, location_id, category_id } = req.body; // Ambil category_id dari body  
    const newProduct = await Product.create({ product_name, sku, description, quantity, location_id, category_id });    
    res.status(201).json({ message: 'Product created successfully', product: newProduct });    
  } catch (error) {    
    res.status(500).json({ message: 'Error creating product', error: error.message });    
  }    
};    
    
// Update a product    
exports.updateProduct = async (req, res) => {    
  try {    
    const product = await Product.findByPk(req.params.id);    
    if (!product) {    
      return res.status(404).json({ message: 'Product not found' });    
    }    
    
    const { product_name, sku, description, quantity, location_id, category_id } = req.body; // Ambil category_id dari body  
    await product.update({ product_name, sku, description, quantity, location_id, category_id });    
    res.json({ message: 'Product updated successfully', product });    
  } catch (error) {    
    res.status(500).json({ message: 'Error updating product', error: error.message });    
  }    
};    
    
// Delete a product    
exports.deleteProduct = async (req, res) => {    
  try {    
    const product = await Product.findByPk(req.params.id);    
    if (!product) {    
      return res.status(404).json({ message: 'Product not found' });    
    }    
    
    await product.destroy();    
    res.json({ message: 'Product deleted successfully' });    
  } catch (error) {    
    res.status(500).json({ message: 'Error deleting product', error: error.message });    
  }    
};    
