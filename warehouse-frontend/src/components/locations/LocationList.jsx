import Table from '../ui/Table';

const LocationList = ({ locations, onEdit, onDelete }) => {
  const headers = ['Name', 'Address', 'Actions'];

  const rows = locations.map((location) => [
    location.name,
    location.address,
    <div key={location.id}>
      <button onClick={() => onEdit(location)} className="text-blue-500 mr-2">Edit</button>
      <button onClick={() => onDelete(location.id)} className="text-red-500">Delete</button>
    </div>,
  ]);

  return <Table headers={headers} rows={rows} />;
};

export default LocationList;
