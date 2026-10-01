function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
    >
      {children}
    </button>
  );
}

export default Button;
