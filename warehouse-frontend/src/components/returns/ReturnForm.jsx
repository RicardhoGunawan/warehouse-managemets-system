import Input from "../ui/Input";
import Button from "../ui/Button";

const ReturnForm = ({ onSubmit, initialData = {} }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(initialData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <Input
        label="Return ID"
        type="text"
        value={initialData.id || ""}
        onChange={(e) => (initialData.id = e.target.value)}
      />
      <Input
        label="Reason"
        type="text"
        value={initialData.reason || ""}
        onChange={(e) => (initialData.reason = e.target.value)}
      />
      <Input
        label="Product"
        type="text"
        value={initialData.product || ""}
        onChange={(e) => (initialData.product = e.target.value)}
      />
      <Button type="submit">Save Return</Button>
    </form>
  );
};

export default ReturnForm;
