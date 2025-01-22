import Table from "../ui/Table";

const OrderList = ({ orders }) => {
  const headers = ["Order ID", "Customer", "Address", "Status", "Actions"];
  const rows = orders.map((order) => [
    order.id,
    order.customer,
    order.address,
    order.status,
    <button key={order.id} className="text-blue-500">Edit</button>,
  ]);

  return <Table headers={headers} rows={rows} />;
};

export default OrderList;
