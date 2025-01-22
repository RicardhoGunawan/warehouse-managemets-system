const ShipmentItem = ({ shipment }) => {
    return (
      <div className="p-4 border rounded shadow">
        <h3 className="font-bold">Shipment ID: {shipment.id}</h3>
        <p>Tracking Number: {shipment.trackingNumber}</p>
        <p>Address: {shipment.address}</p>
        <p>Status: {shipment.status}</p>
      </div>
    );
  };
  
  export default ShipmentItem;
  