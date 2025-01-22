const ProductItem = ({ product }) => {
    return (
      <div className="p-4 border rounded shadow">
        <h3 className="font-bold">Product ID: {product.id}</h3>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Stock: {product.stock}</p>
      </div>
    );
  };
  
  export default ProductItem;
  