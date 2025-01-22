const Input = ({ type = 'text', value, onChange, placeholder, className, ...props }) => (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border p-2 rounded w-full ${className}`}
      {...props}
    />
  );
  
  export default Input;
  