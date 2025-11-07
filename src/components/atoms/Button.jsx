const Button = ({ inStock }) => {
  return (
<button
      disabled={!inStock}
      className={`
        font-medium py-2 px-3 rounded-md transition duration-150 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2

        ${inStock 
          ? "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700" 
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }
      `}
    >
      {inStock ? "Add to Cart" : "Out of Stock"}
    </button>
  );
};


export default Button; 