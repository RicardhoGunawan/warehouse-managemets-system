import React, { useState } from 'react';
import Swal from 'sweetalert2';

const LocationItem = ({ location, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(location.location_name);
  const [editedDescription, setEditedDescription] = useState(location.description);
  const [editedCapacity, setEditedCapacity] = useState(location.capacity);

  const handleEdit = () => {
    if (isEditing) {
      onEdit({
        location_name: editedName,
        description: editedDescription,
        capacity: editedCapacity,
      });
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(location.location_name);
    setEditedDescription(location.description);
    setEditedCapacity(location.capacity);
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
        onDelete(location.id);
        Swal.fire(
          'Deleted!',
          'Your location has been deleted.',
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
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="border p-1 w-full"
            required
          />
        ) : (
          location.location_name
        )}
      </td>
      <td className="p-2">
        {isEditing ? (
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="border p-1 w-full"
            required
          />
        ) : (
          location.description
        )}
      </td>
      <td className="p-2">
        {isEditing ? (
          <input
            type="number"
            value={editedCapacity}
            onChange={(e) => setEditedCapacity(e.target.value)}
            className="border p-1 w-full"
            required
          />
        ) : (
          location.capacity
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
              onClick={handleCancel}
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

export default LocationItem;