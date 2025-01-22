import Table from "../ui/Table";

const ProductList = ({ products }) => {
  const headers = ["Product ID", "Name", "Price", "Stock", "Actions"];
  const rows = products.map((product) => [
    product.id,
    product.name,
    product.price,
    product.stock,
    <button key={product.id} className="text-blue-500">Edit</button>,
  ]);

  return <Table headers={headers} rows={rows} />;
};

export default ProductList;
