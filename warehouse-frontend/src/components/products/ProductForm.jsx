import React, { useState } from 'react';  
  
const ProductForm = ({ onAddProduct, onClose, locations = [], categories = [] }) => {  
  const [productData, setProductData] = useState({  
    product_name: '',  
    description: '',  
    sku: '',  
    quantity: '',  
    category_id: '',  
    location_id: '',  
  });  
  
  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setProductData((prev) => ({ ...prev, [name]: value }));  
  };  
  
  const handleSubmit = (e) => {  
    e.preventDefault();  
    onAddProduct(productData);  
    onClose(); // Tutup modal setelah menambahkan produk  
  };  
  
  return (  
    <form onSubmit={handleSubmit} className="space-y-4">  
      <div>  
        <label className="block mb-2">Product Name</label>  
        <input  
          type="text"  
          name="product_name"  
          value={productData.product_name}  
          onChange={handleChange}  
          className="w-full border p-2 rounded"  
          placeholder="Enter product name"  
          required  
        />  
      </div>  
      <div>  
        <label className="block mb-2">Description</label>  
        <textarea  
          name="description"  
          value={productData.description}  
          onChange={handleChange}  
          className="w-full border p-2 rounded"  
          placeholder="Enter product description"  
          required  
        />  
      </div>  
      <div>  
        <label className="block mb-2">SKU</label>  
        <input  
          type="text"  
          name="sku"  
          value={productData.sku}  
          onChange={handleChange}  
          className="w-full border p-2 rounded"  
          placeholder="Enter SKU"  
          required  
        />  
      </div>  
      <div>  
        <label className="block mb-2">Quantity</label>  
        <input  
          type="number"  
          name="quantity"  
          value={productData.quantity}  
          onChange={handleChange}  
          className="w-full border p-2 rounded"  
          placeholder="Enter quantity"  
          required  
        />  
      </div>  
      <div>  
        <label className="block mb-2">Location</label>  
        <select  
          name="location_id"  
          value={productData.location_id}  
          onChange={handleChange}  
          className="w-full border p-2 rounded"  
          required  
        >  
          <option value="">Select Location</option>  
          {locations.map((location) => (  
            <option key={location.id} value={location.id}>  
              {location.location_name}  
            </option>  
          ))}  
        </select>  
      </div>  
      <div>  
        <label className="block mb-2">Category</label>  
        <select  
          name="category_id"  
          value={productData.category_id}  
          onChange={handleChange}  
          className="w-full border p-2 rounded"  
          required  
        >  
          <option value="">Select Category</option>  
          {categories.map((category) => (  
            <option key={category.id} value={category.id}>  
              {category.category_name}  
            </option>  
          ))}  
        </select>  
      </div>  
      <div className="flex justify-end">  
        <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded mr-2">Cancel</button>  
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Product</button>  
      </div>  
    </form>  
  );  
};  
  
export default ProductForm;  
