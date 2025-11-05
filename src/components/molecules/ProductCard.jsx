const ProductCard = ({name, price, image, inStock}) => {
  return(
    <div className="border rounded-lg shadow p-4 w-full max-w-xs bg-white">
      <img src={image} alt={name} className="h-40 w-full object-cover rounded mb-3" />
      <h3 className="text-lg font-bold mb-1">{name}</h3>
      <p className="text-gray-700 mb-1">Price: ₹{price}</p>
      <p className={inStock ? "text-green-600" : "text-red-600"}>
        {inStock ? "InStock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;