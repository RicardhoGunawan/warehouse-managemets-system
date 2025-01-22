const Table = ({ headers, rows }) => (
    <table className="table-auto w-full border">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} className="border px-4 py-2">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx}>
            {row.map((cell, index) => (
              <td key={index} className="border px-4 py-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default Table;
  