import Table from "../ui/Table";

const ShipmentList = ({ shipments }) => {
  const headers = ["Shipment ID", "Tracking Number", "Address", "Status", "Actions"];
  const rows = shipments.map((shipment) => [
    shipment.id,
    shipment.trackingNumber,
    shipment.address,
    shipment.status,
    <button key={shipment.id} className="text-blue-500">Edit</button>,
  ]);

  return <Table headers={headers} rows={rows} />;
};

export default ShipmentList;
