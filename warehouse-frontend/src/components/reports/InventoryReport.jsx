const InventoryReport = ({ inventoryData }) => {
    return (
      <div className="p-4 bg-white shadow rounded">
        <h2 className="text-lg font-bold mb-4">Inventory Report</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.productName}</td>
                <td className="border px-4 py-2">{item.category}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">
                  {item.quantity > 0 ? "In Stock" : "Out of Stock"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default InventoryReport;
  