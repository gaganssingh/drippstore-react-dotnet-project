import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([
    { name: "product1", price: 100.0 },
    { name: "product2", price: 200.0 },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  const addProduct = () =>
    setProducts((prevState) => [
      ...prevState,
      { name: `product${prevState.length + 1}`, price: 300.0 },
    ]);

  return (
    <div>
      <h1>drippstore</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add</button>
    </div>
  );
};

export default App;
