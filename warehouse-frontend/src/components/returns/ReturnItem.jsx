const ReturnItem = ({ returnItem }) => {
    return (
      <div className="p-4 border rounded shadow">
        <h3 className="font-bold">Return ID: {returnItem.id}</h3>
        <p>Reason: {returnItem.reason}</p>
        <p>Product: {returnItem.product}</p>
        <p>Date: {returnItem.date}</p>
      </div>
    );
  };
  
  export default ReturnItem;
  