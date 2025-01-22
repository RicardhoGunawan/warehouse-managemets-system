const LocationItem = ({ location, onEdit, onDelete }) => {
    return (
      <tr>
        <td>{location.name}</td>
        <td>{location.address}</td>
        <td>
          <button
            onClick={() => onEdit(location)}
            className="text-blue-500 hover:underline mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(location.id)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };
  
  export default LocationItem;
  