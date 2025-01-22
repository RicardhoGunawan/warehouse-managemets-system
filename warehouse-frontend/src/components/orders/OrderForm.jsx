import Input from "../ui/Input";
import Button from "../ui/Button";

const OrderForm = ({ onSubmit, initialData = {} }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(initialData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <Input
        label="Order ID"
        type="text"
        value={initialData.id || ""}
        onChange={(e) => (initialData.id = e.target.value)}
      />
      <Input
        label="Customer Name"
        type="text"
        value={initialData.customer || ""}
        onChange={(e) => (initialData.customer = e.target.value)}
      />
      <Input
        label="Shipping Address"
        type="text"
        value={initialData.address || ""}
        onChange={(e) => (initialData.address = e.target.value)}
      />
      <Button type="submit">Save Order</Button>
    </form>
  );
};

export default OrderForm;
