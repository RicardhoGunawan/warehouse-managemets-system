const Select = ({ options, value, onChange, className, ...props }) => (
    <select
      value={value}
      onChange={onChange}
      className={`border p-2 rounded w-full ${className}`}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  
  export default Select;
  