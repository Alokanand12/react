const ProductModal = ({ product, setShow }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <div className="bg-gray-800 p-6 w-80">
        <button onClick={() => setShow(false)}>X</button>

        <img src={product.images?.[0]} className="h-40 mx-auto" />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p className="text-green-400">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductModal;