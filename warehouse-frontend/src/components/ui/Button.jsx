const Button = ({ children, onClick, className, ...props }) => (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
  
  export default Button;
  