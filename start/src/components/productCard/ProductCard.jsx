import "./ProductCard.css";

function ProductCard({ data }) {
  return (
    <div className="card">
      <img src={data.image} alt="product" />

      <h2>{data.name}</h2>

      <p className="category">{data.category}</p>

      <h3>{data.price}</h3>

      <button>Add To Cart</button>
    </div>
  );
}

export default ProductCard;