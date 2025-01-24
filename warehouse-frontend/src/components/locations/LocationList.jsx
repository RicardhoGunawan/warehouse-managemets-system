import React, { useState } from 'react';  
import LocationForm from './LocationForm';  
import LocationItem from './LocationItem'; // Asumsikan Anda memiliki komponen ini  
import useLocations from '../../hooks/useLocations'; // Hook untuk mengelola lokasi  
  
const LocationList = () => {  
  const { locations, loading, error, addNewLocation } = useLocations();  
  const [isFormVisible, setFormVisible] = useState(false);  
  
  const handleAddLocation = (newLocation) => {  
    addNewLocation(newLocation);  
    setFormVisible(false);  
  };  
  
  if (loading) return <p>Loading...</p>;  
  if (error) return <p>Error: {error}</p>;  
  
  return (  
    <div className="p-4">  
      <h1 className="text-2xl font-bold mb-4">Location List</h1>  
        
      <button  
        onClick={() => setFormVisible(true)}  
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"  
      >  
        Add New Location  
      </button>  
  
      {/* Modal */}  
      {isFormVisible && (  
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">  
          <div className="bg-white rounded-lg p-6 w-96">  
            <h2 className="text-xl font-bold mb-4">Add New Location</h2>  
            <LocationForm   
              onSubmit={handleAddLocation}   
              onClose={() => setFormVisible(false)}   
            />  
            <button   
              onClick={() => setFormVisible(false)}   
              className="bg-red-500 text-white px-4 py-2 rounded mt-4 w-full"  
            >  
              Close  
            </button>  
          </div>  
        </div>  
      )}  
  
      <table className="w-full border-collapse mt-4">  
        <thead>  
          <tr className="bg-gray-100">  
            <th className="p-2 text-left">Location Name</th>  
            <th className="p-2 text-left">Description</th>  
            <th className="p-2 text-left">Capacity</th>  
            <th className="p-2 text-left">Actions</th>  
          </tr>  
        </thead>  
        <tbody>  
          {locations.map(location => (  
            <LocationItem   
              key={location.id}   
              location={location}   
              // Tambahkan props untuk edit dan delete jika diperlukan  
            />  
          ))}  
        </tbody>  
      </table>  
    </div>  
  );  
};  
  
export default LocationList;  
