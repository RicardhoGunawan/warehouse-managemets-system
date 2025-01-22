import Input from "../ui/Input";
import Button from "../ui/Button";

const ProductForm = ({ onSubmit, initialData = {} }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(initialData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <Input
        label="Product ID"
        type="text"
        value={initialData.id || ""}
        onChange={(e) => (initialData.id = e.target.value)}
      />
      <Input
        label="Product Name"
        type="text"
        value={initialData.name || ""}
        onChange={(e) => (initialData.name = e.target.value)}
      />
      <Input
        label="Price"
        type="number"
        value={initialData.price || ""}
        onChange={(e) => (initialData.price = e.target.value)}
      />
      <Button type="submit">Save Product</Button>
    </form>
  );
};

export default ProductForm;
