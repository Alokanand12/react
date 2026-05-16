import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const Shop = ({ category }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setData(res.data.products));
  }, []);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-20 p-4">
      <input placeholder="Search..." onChange={(e)=>setSearch(e.target.value)} />

      <div className="grid grid-cols-2 gap-4">
        {filtered.map((item) => (
          <ProductCard key={item.id} product={item} setShow={setShow} setSelected={setSelected}/>
        ))}
      </div>

      {show && <ProductModal product={selected} setShow={setShow}/>}
    </div>
  );
};

export default Shop;