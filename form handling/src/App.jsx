import React, { useState } from "react";

const App = () => {
  const [formValues, setFormValues] = useState({});
  const [products, setProducts] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  console.log(products);

  console.log(formValues);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prev) => {
      return prev.map((elem) => {
        return elem.price === formValues.price
          ? { ...elem, ...formValues }
          : elem;
      });
    });
    if (isEdited) {
      setIsEdited(false);
    } else {
      setProducts([...products, formValues]);
    }

    setFormValues({
      product_name: "",
      category: "",
      price: "",
      description: "",
    });
  };

  return (
    <div>
      <h1>App</h1>

      <form onSubmit={handleSubmit} action="">
        <input
          required
          value={formValues.product_name}
          name="product_name"
          onChange={handleChange}
          type="text"
          placeholder="Product name"
        />{" "}
        <br /> <br />
        <input
          required
          value={formValues.category}
          name="category"
          onChange={handleChange}
          type="text"
          placeholder="Category"
        />{" "}
        <br /> <br />
        <input
          required
          value={formValues.price}
          name="price"
          onChange={handleChange}
          type="text"
          placeholder="Price"
        />{" "}
        <br /> <br />
        <input
          required
          value={formValues.description}
          name="description"
          onChange={handleChange}
          type="text"
          placeholder="Description"
        />{" "}
        <br /> <br />
        <button>Create</button>
      </form>

      <div style={{ display: "flex", gap: "10px" }}>
        {products.map((elem) => (
          <div>
            <h3>{elem.product_name}</h3>
            <button
              onClick={() => {
                setFormValues(elem);
                setIsEdited(true);
              }}
            >
              update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;