import Table from "../ui/Table";

const ReturnList = ({ returns }) => {
  const headers = ["Return ID", "Reason", "Product", "Date", "Actions"];
  const rows = returns.map((returnItem) => [
    returnItem.id,
    returnItem.reason,
    returnItem.product,
    returnItem.date,
    <button key={returnItem.id} className="text-blue-500">Edit</button>,
  ]);

  return <Table headers={headers} rows={rows} />;
};

export default ReturnList;
