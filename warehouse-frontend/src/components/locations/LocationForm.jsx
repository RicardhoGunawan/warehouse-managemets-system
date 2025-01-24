import React, { useState } from 'react';  
  
const LocationForm = ({ onSubmit, onClose, initialData = {} }) => {  
  const [form, setForm] = useState({ location_name: '', description: '', capacity: '', ...initialData });  
  
  const handleChange = (e) => {  
    setForm({ ...form, [e.target.name]: e.target.value });  
  };  
  
  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (form.location_name.trim() && form.capacity.trim()) {  
      onSubmit(form);  
      setForm({ location_name: '', description: '', capacity: '' }); // Reset form  
      onClose();  
    }  
  };  
  
  return (  
    <form onSubmit={handleSubmit} className="space-y-4">  
      <div>  
        <label className="block mb-2">Location Name</label>  
        <input  
          type="text"  
          name="location_name"  
          value={form.location_name}  
          onChange={handleChange}  
          className="w-full border p-2 rounded"  
          placeholder="Enter location name"  
          required  
        />  
      </div>  
      <div>  
        <label className="block mb-2">Description</label>  
        <textarea  
          name="description"  
          value={form.description}  
          onChange={handleChange}  
          className="w-full border p-2 rounded"  
          placeholder="Enter location description"  
        />  
      </div>  
      <div>  
        <label className="block mb-2">Capacity</label>  
        <input  
          type="number"  
          name="capacity"  
          value={form.capacity}  
          onChange={handleChange}  
          className="w-full border p-2 rounded"  
          placeholder="Enter capacity"  
          required  
        />  
      </div>  
      <button   
        type="submit"   
        className="bg-green-500 text-white px-4 py-2 rounded w-full"  
      >  
        Add Location  
      </button>  
    </form>  
  );  
};  
  
export default LocationForm;  
