import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CategoryItem = ({ category, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(category.category_name);
  const [editedDescription, setEditedDescription] = useState(category.description);

  const handleEdit = () => {
    if (isEditing) {
      onEdit({
        category_name: editedName,
        description: editedDescription,
      });
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(category.category_name);
    setEditedDescription(category.description);
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You won't be able to revert this!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(category.id);
        Swal.fire('Deleted!', 'The category has been deleted.', 'success');
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
          category.category_name
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
          category.description
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

export default CategoryItem;
