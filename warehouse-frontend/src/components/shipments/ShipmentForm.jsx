import Input from "../ui/Input";
import Button from "../ui/Button";

const ShipmentForm = ({ onSubmit, initialData = {} }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(initialData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <Input
        label="Shipment ID"
        type="text"
        value={initialData.id || ""}
        onChange={(e) => (initialData.id = e.target.value)}
      />
      <Input
        label="Shipping Address"
        type="text"
        value={initialData.address || ""}
        onChange={(e) => (initialData.address = e.target.value)}
      />
      <Input
        label="Tracking Number"
        type="text"
        value={initialData.trackingNumber || ""}
        onChange={(e) => (initialData.trackingNumber = e.target.value)}
      />
      <Button type="submit">Save Shipment</Button>
    </form>
  );
};

export default ShipmentForm;
