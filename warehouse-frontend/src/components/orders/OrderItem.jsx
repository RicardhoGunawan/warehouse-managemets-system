const OrderItem = ({ order }) => {
    return (
      <div className="p-4 border rounded shadow">
        <h3 className="font-bold">Order ID: {order.id}</h3>
        <p>Customer: {order.customer}</p>
        <p>Address: {order.address}</p>
        <p>Status: {order.status}</p>
      </div>
    );
  };
  
  export default OrderItem;
  