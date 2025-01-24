import React, { useState } from 'react';  
import Swal from 'sweetalert2';  
  
const ProductItem = ({   
  product,   
  onEdit,   
  onDelete,   
  locations = [],   
  categories = []   
}) => {  
  const [isEditing, setIsEditing] = useState(false);  
  const [editedProductData, setEditedProductData] = useState({  
    product_name: product.product_name,  
    description: product.description,  
    sku: product.sku,  
    quantity: product.quantity,  
    location_id: product.location_id,  
    category_id: product.category_id,  
  });  
  
  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setEditedProductData((prev) => ({ ...prev, [name]: value }));  
  };  
  
  const handleEdit = () => {  
    if (isEditing) {  
      onEdit(editedProductData);  
      setIsEditing(false);  
    } else {  
      setIsEditing(true);  
    }  
  };  
  
  const handleDelete = () => {  
    Swal.fire({  
      title: 'Are you sure?',  
      text: "You won't be able to revert this!",  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonColor: '#d33',  
      cancelButtonColor: '#3085d6',  
      confirmButtonText: 'Yes, delete it!'  
    }).then((result) => {  
      if (result.isConfirmed) {  
        onDelete(product.id);  
        Swal.fire(  
          'Deleted!',  
          'Your product has been deleted.',  
          'success'  
        );  
      }  
    });  
  };  
  
  return (  
    <tr className="border-b">  
      <td className="p-2">  
        {isEditing ? (  
          <input  
            type="text"  
            name="product_name"  
            value={editedProductData.product_name}  
            onChange={handleChange}  
            className="border p-2 w-full"  
          />  
        ) : (  
          product.product_name  
        )}  
      </td>  
      <td className="p-2">  
        {isEditing ? (  
          <textarea  
            name="description"  
            value={editedProductData.description}  
            onChange={handleChange}  
            className="border p-2 w-full"  
          />  
        ) : (  
          product.description  
        )}  
      </td>  
      <td className="p-2">  
        {isEditing ? (  
          <input  
            type="text"  
            name="sku"  
            value={editedProductData.sku}  
            onChange={handleChange}  
            className="border p-2 w-full"  
          />  
        ) : (  
          product.sku  
        )}  
      </td>  
      <td className="p-2">  
        {isEditing ? (  
          <input  
            type="number"  
            name="quantity"  
            value={editedProductData.quantity}  
            onChange={handleChange}  
            className="border p-2 w-full"  
          />  
        ) : (  
          product.quantity  
        )}  
      </td>  
      <td className="p-2">  
        {isEditing ? (  
          <select  
            name="location_id"  
            value={editedProductData.location_id}  
            onChange={handleChange}  
            className="border p-2 w-full"  
          >  
            <option value="">Select Location</option>  
            {locations.map((location) => (  
              <option   
                key={location.id}   
                value={location.id}  
              >  
                {location.location_name}  
              </option>  
            ))}  
          </select>  
        ) : (  
          locations.find(loc => loc.id === product.location_id)?.location_name || 'N/A'  
        )}  
      </td>  
      <td className="p-2">  
        {isEditing ? (  
          <select  
            name="category_id"  
            value={editedProductData.category_id}  
            onChange={handleChange}  
            className="border p-2 w-full"  
          >  
            <option value="">Select Category</option>  
            {categories.map((category) => (  
              <option   
                key={category.id}   
                value={category.id}  
              >  
                {category.category_name}  
              </option>  
            ))}  
          </select>  
        ) : (  
          categories.find(cat => cat.id === product.category_id)?.category_name || 'N/A'  
        )}  
      </td>  
      <td className="p-2">  
        {isEditing ? (  
          <>  
            <button  
              onClick={handleEdit}  
              className="bg-green-500 text-white px-2 py-1 rounded mr-2"  
            >  
              Save  
            </button>  
            <button  
              onClick={() => setIsEditing(false)}  
              className="bg-red-500 text-white px-2 py-1 rounded"  
            >  
              Cancel  
            </button>  
          </>  
        ) : (  
          <>  
            <button  
              onClick={() => setIsEditing(true)}  
              className="text-blue-500 mr-2"  
            >  
              Edit  
            </button>  
            <button onClick={handleDelete} className="text-red-500">  
              Delete  
            </button>  
          </>  
        )}  
      </td>  
    </tr>  
  );  
};  
  
export default ProductItem;  
